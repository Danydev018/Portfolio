import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover px-4 md:px-0 pb-28 md:pb-10 pt-24 md:pt-32">
        <CoverParticles/>
        <Introduction/>
        
      </div>
    </main>    
    
  );
}
