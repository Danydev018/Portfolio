import { socialNetworks } from "@/data";
import MotionTransition from "./transition-components";
import Link from 'next/link';

const Header = () => {
    return ( 
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full md:top-10 top-0 px-4 md:px-20">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex ">
                    <Link href="/">
                        <h1 className="my-3 text-3xl md:text-4xl font-bold text-center md:text-left">
                            Tairon
                            <span className="text-secondary">
                                Rojas
                            </span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-4 md:gap-7">
                        {socialNetworks.map(({logo, src, id})=>{
                            return(
                                <Link
                                    key={id}
                                    href={src}
                                    target="_blank"
                                    className="transition-all duration-300 hover:text-secondary"
                                >
                                    {logo}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </header>
        </MotionTransition>
     );
}
 
export default Header;