
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import Avatar from "@/components/avatar";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";

const PageAboutMe = () => {
    return ( 
        <>
            <TransitionPage/>
            <ContainerPage>
                <Avatar/>
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Lo último
                    <span className="font-bold text-secondary"> en mi trayectoria profesional</span>
                </h1>
                <CounterServices/>
                <TimeLine/>
            </ContainerPage>
        </>
    );
}

export default PageAboutMe;