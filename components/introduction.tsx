"use client"
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return ( 
        <div className="z-20v w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-8 md:grid-cols-2">
                <Image src="/home-4.png" priority width="600" height="600" alt="profile-picture"/> 

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left
                    md:text-4xl md:mb-10
                    ">
                    Si puedes pensarlo,
                    <TypeAnimation
                        sequence={[
                            " lo podemos hacer.",1000,
                            " lo podemos construir.",1000,
                            " lo podemos mejorar.",1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="block font-bold text-secondary"/>
                    </h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                        Como desarrollador Frontend y diseñador de UI/UX, me dedico a crear experiencias
                        digitales atractivas y funcionales cuyo objetivo es complacer tus necesidades. 
                    </p>
                    <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link 
                        href="/projects" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer 
                        text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </Link>
                        <Link 
                        href="/about-me" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer 
                        text-md text-secondary border-secondary w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Contacta conmigo
                        </Link>
                    </div>
                </div>

            </div>
            
        </div>
    );
}
 
export default Introduction;