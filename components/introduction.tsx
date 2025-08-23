"use client"
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return ( 
        <div className="z-20 w-full bg-darkBg/60 ">
            <div className="z-20 grid items-center h-full p-4 md:p-6 py-16 md:py-8 md:grid-cols-2 gap-6">
                <Image src="/home-4.png" priority width={600} height={600} alt="profile-picture"
                    className="order-2 md:order-1 w-56 h-56 md:w-[480px] md:h-[480px] mx-auto object-contain"/> 

                <div className="order-1 md:order-2 flex flex-col justify-center max-w-md mx-auto md:mx-0 px-1">
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
                    Experiencia en desarrollo
                    Backend y Fullstack. He trabajado en proyectos propios de IA generativa, bots inteligentes y plataformas web
                    que integran autenticación, análisis de datos y servicios en la nube. 
                    </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link 
                        href="/portfolio" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer 
                        text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </Link>
                        <Link 
                        href="/contact" 
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