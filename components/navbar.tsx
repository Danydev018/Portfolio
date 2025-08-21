"use client";
import { itemsNavbar } from "@/data";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import MotionTransition from "./transition-components";

const Navbar = () => {
    const router = usePathname()
    return ( 
        <MotionTransition position="right" className="fixed z-40 flex 
        flex-col items-center justify-center w-full mt-auto h-max bottom-6 md:bottom-10 pb-[env(safe-area-inset-bottom)]">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 backdrop-blur-sm">
                    {itemsNavbar.map((item)=>{
                        return (
                            <div key={item.id}
                            className={`px-3 py-2 transition duration-158 rounded-full 
                            cursor-pointer hover:bg-secondary ${router === item.link && 'bg-secondary'}`}>
                                <Link href={item.link}>{item.icon}</Link>
                            </div>
                        );
                    })}
                </div>
            </nav>
        </MotionTransition>
     );
}
 
export default Navbar;