"use client"
import CircleImage from "@/components/circle -image";
import TransitionPage from "@/components/transition-page";
import {Swiper, SwiperSlide} from "swiper/react"
import Image from "next/image"
import {Pagination} from "swiper/modules"
import { dataTestimonials } from "@/data";

const TestimonialsPage = () => {
    return ( 
        <>
            <TransitionPage/>
            <div className="flex flex-col justify-center min-h-[70vh] px-4 md:px-0 pt-36 md:pt-40 pb-28 md:pb-10">
            <CircleImage/>
            <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5 mb-3">
                Algunos comentarios 
                <span className="text-secondary font-bold block"> de nuestros clientes</span>
            </h1>
            <div className="flex items-center justify-center">
                <div className="w-full max-w-[640px]">
                    <Swiper 
                    breakpoints={{
                        320:{
                            slidesPerView:1,
                            spaceBetween:15
                        }
                    }} freeMode={true}
                    pagination={{
                        clickable:true
                    }}
                    modules={[Pagination]}
                    className="w-full">
                        {dataTestimonials.map(({id, name, description, imageUrl})=>(
                            <SwiperSlide key={id}>
                                <div className="px-2 md:px-8 py-8">
                                  <Image src={imageUrl} alt={name} width={100} height={100} className="mx-auto rounded-full"/>
                                  <h4 className="mt-3 text-center text-base md:text-lg font-semibold">{name}</h4>
                                  <p className="mt-3 text-center text-sm md:text-base leading-relaxed md:leading-7">{description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            </div>
        </>
    );
}
 
export default TestimonialsPage;