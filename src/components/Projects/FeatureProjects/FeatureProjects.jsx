import FPCard from "./FPCard";
import RIH from "../../../assets/projects/rih.svg";
import Eltoro from "../../../assets/projects/eltoro.svg";

function FeatureProjects()
{
    return(
        <>
            <div className="">
                <div className="text-center">
                    <p className="uppercase text-3xl font-bold">Feature <span className="bg-gradient-to-r from-[#8000E2] to-[#305CDE] w-max bg-clip-text text-transparent">Projects</span> </p>
                </div>
                <div className="flex items-center justify-center flex-wrap">
                    <FPCard 
                        image={RIH}
                        heading="Result Insight Hub"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae fugiat quidem inventore? Maxime, perferendis."
                        link=""
                        headingColor="text-white"
                        bgColor="bg-[#5F89F5]"
                        button="bg-[#080061] text-white"
                    />
                    <FPCard 
                        image={Eltoro}
                        heading="Eltoro"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae fugiat quidem inventore? Maxime, perferendis."
                        link=""
                        headingColor="text-amber-800"
                        bgColor="bg-[#FFF27C]"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={RIH}
                        heading="Result Insight Hub"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae fugiat quidem inventore? Maxime, perferendis."
                        link=""
                        headingColor="text-white"
                        bgColor="bg-[#5F89F5]"
                        button="bg-[#080061] text-white"
                    />
                    <FPCard 
                        image={Eltoro}
                        heading="Eltoro"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae fugiat quidem inventore? Maxime, perferendis."
                        link=""
                        headingColor="text-amber-800"
                        bgColor="bg-[#FFF27C]"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={RIH}
                        heading="Result Insight Hub"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae fugiat quidem inventore? Maxime, perferendis."
                        link=""
                        headingColor="text-white"
                        bgColor="bg-[#5F89F5]"
                        button="bg-[#080061] text-white"
                    />
                </div>
            </div>
        </>
    );
}

export default FeatureProjects;