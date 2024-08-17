import FPCard from "./FPCard";
import RIH from "../../../assets/projects/rih.svg";
import Eltoro from "../../../assets/projects/eltoro.svg";
import Portfolio from "../../../assets/projects/portfolio.svg";
import Genaitools from "../../../assets/projects/genaitools.svg";
import CoffeeApp from "../../../assets/designs/coffeeApp.svg";
import EmailTemplate from "../../../assets/designs/emailTemplate.svg";
import LibriHub from "../../../assets/designs/libriHub.svg";
import MenuCard from "../../../assets/designs/menuCard.svg";
import Shopify from "../../../assets/designs/shopify.svg";
import SumanthPort from "../../../assets/designs/sumanthPortfolio.svg";

function FeatureProjects()
{
    return(
        <>
            <div className="">
                <div className="text-center">
                    <p className="uppercase text-3xl font-bold">Feature <span className="bg-gradient-to-r from-[#8000E2] to-[#305CDE] w-max bg-clip-text text-transparent">Designs</span> </p>
                </div>
                <div className="flex items-center justify-center flex-wrap">
                    <FPCard 
                        image={MenuCard}
                        heading="Menu Card"
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
                        image={EmailTemplate}
                        heading="Email Template"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae fugiat quidem inventore? Maxime, perferendis."
                        link=""
                        headingColor="text-amber-800"
                        bgColor="bg-[#FFF27C]"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={LibriHub}
                        heading="Libri Hub"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae fugiat quidem inventore? Maxime, perferendis."
                        link=""
                        headingColor="text-indigo-900"
                        bgColor="bg-gradient-to-br from-orange-300 to-pink-300"
                        button="bg-indigo-900 text-white"
                    />
                    <FPCard 
                        image={CoffeeApp}
                        heading="Coffee App Design"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae fugiat quidem inventore? Maxime, perferendis."
                        link=""
                        headingColor="text-amber-800"
                        bgColor="bg-[#FFF27C]"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={Shopify}
                        heading="Shopify"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae fugiat quidem inventore? Maxime, perferendis."
                        link=""
                        headingColor="text-amber-800"
                        bgColor="bg-gradient-to-bl from-orange-300 to-pink-300"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={SumanthPort}
                        heading="Friend's Portfolio Design"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae fugiat quidem inventore? Maxime, perferendis."
                        link=""
                        headingColor="text-slate-900"
                        bgColor="bg-slate-300"
                        button="bg-black text-white"
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
                        image={Portfolio}
                        heading="My portfolio"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae fugiat quidem inventore? Maxime, perferendis."
                        link=""
                        headingColor="text-slate-900"
                        bgColor="bg-slate-300"
                        button="bg-black text-white"
                    />
                    <FPCard 
                        image={Genaitools}
                        heading="GenAITools"
                        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae fugiat quidem inventore? Maxime, perferendis."
                        link=""
                        headingColor="text-[#420e5a]"
                        bgColor="bg-[#8000ff80]"
                        button="bg-[#5D1480] text-white"
                        className=""
                    />
                </div>
            </div>
        </>
    );
}

export default FeatureProjects;