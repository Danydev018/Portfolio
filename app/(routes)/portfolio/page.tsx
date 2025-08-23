"use client"
import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle -image";
import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
    return ( 
        <ContainerPage>
            <TransitionPage/>

            <AvatarPortfolio/>
            <CircleImage/>

            <div className="flex flex-col justify-center h-full px-4 md:px-0 pb-28 md:pb-10">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5 mb-3">
                    Mis ultimos
                    <span className="text-secondary font-bold"> trabajos realizados</span> 
                </h1>
                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-start">
                    {dataPortfolio.map((data)=>(
                        <PortfolioBox key={data.id} data={data}/>
                    ))}
                    
                </div>
            </div>
        </ContainerPage>
    );
}
export default PortfolioPage;