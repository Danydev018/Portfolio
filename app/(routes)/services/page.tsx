import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle -image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return ( 
        <>
            <TransitionPage/>
            <CircleImage/>
            <AvatarServices/>
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Mis
                        <span className="font-bold text-secondary"> servicios</span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Nihil quod ducimus doloremque 
                        dicta aspernatur natus, debitis enim sed consequuntur,
                        magnam doloribus officiis ipsum unde consequatur cumque
                        deleniti nesciunt! Maiores, vero.
                    </p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>
            {/* SLIDER */}
                <div>
                    <SliderServices/>
                </div>
            </div>
        </>
        
    );
}
 
export default ServicesPage;