type Bucket = {
  tokens: number;
  lastRefill: number;
};

// Simple token bucket per key (e.g., IP)
export function createRateLimiter({ capacity, refillRatePerSec }: { capacity: number; refillRatePerSec: number }) {
  const buckets = new Map<string, Bucket>();

  function take(key: string, tokens = 1) {
    const now = Date.now();
    let bucket = buckets.get(key);
    if (!bucket) {
      bucket = { tokens: capacity, lastRefill: now };
      buckets.set(key, bucket);
    }

    // Refill
    const elapsedSec = (now - bucket.lastRefill) / 1000;
    const refill = Math.floor(elapsedSec * refillRatePerSec);
    if (refill > 0) {
      bucket.tokens = Math.min(capacity, bucket.tokens + refill);
      bucket.lastRefill = now;
    }

    if (bucket.tokens >= tokens) {
      bucket.tokens -= tokens;
      return true;
    }
    return false;
  }

  return { take };
}

// Global limiter instance: 5 requests / 10 minutes per IP (refill ~ 1 token cada 2 minutos)
export const contactLimiter = createRateLimiter({ capacity: 5, refillRatePerSec: 1 / 120 });

export function getClientIp(req: Request) {
  // Next.js App Router Request has headers()
  const xfwd = req.headers.get("x-forwarded-for");
  if (xfwd) {
    const ip = xfwd.split(",")[0]?.trim();
    if (ip) return ip;
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}
