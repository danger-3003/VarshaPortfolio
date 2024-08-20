import FPCard from "./FPCard";
import RIH from "../../../assets/projects/rih.svg";
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
                        content="Created an interactive menu design for a coffee shop app using Figma, with easy-to-navigate layout that enhances the user experience."
                        link=""
                        headingColor="text-amber-800"
                        bgColor="bg-[#FFF27C]"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={RIH}
                        heading="Result Insight Hub"
                        content="Crafted an interface in Figma, providing a clear and concise visual representation of student performance data."
                        link=""
                        headingColor="text-white"
                        bgColor="bg-[#5F89F5]"
                        button="bg-[#080061] text-white"
                    />
                    <FPCard 
                        image={EmailTemplate}
                        heading="Email Template"
                        content="Crafted a clean and modern email template for a coffee shop app using Figma, featuring a simple and visually appealing design."
                        link=""
                        headingColor="text-amber-800"
                        bgColor="bg-[#FFF27C]"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={LibriHub}
                        heading="Libri Hub"
                        content="Created a systematic and user-friendly design for Libri Hub using Figma, providing a simple and intuitive experience."
                        link=""
                        headingColor="text-indigo-900"
                        bgColor="bg-gradient-to-br from-orange-300 to-pink-300"
                        button="bg-indigo-900 text-white"
                    />
                    <FPCard 
                        image={CoffeeApp}
                        heading="Coffee App Design"
                        content="Designed user-friendly login and signup pages for a mobile coffee app, providing a seamless and intuitive experience for customers."
                        link=""
                        headingColor="text-amber-800"
                        bgColor="bg-[#FFF27C]"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={Shopify}
                        heading="Shopify"
                        content="Designed a visually appealing Shopify e-commerce website using Figma, featuring high-quality images and a simple, user-friendly layout"
                        link=""
                        headingColor="text-amber-800"
                        bgColor="bg-gradient-to-bl from-orange-300 to-pink-300"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={SumanthPort}
                        heading="Friend's Portfolio Design"
                        content="Designed a professional and interactive portfolio for my friend, highlighting his projects with detailed descriptions, vibrant visuals."
                        link=""
                        headingColor="text-slate-900"
                        bgColor="bg-slate-300"
                        button="bg-black text-white"
                    />
                    <FPCard 
                        image={Portfolio}
                        heading="My portfolio"
                        content="Designed a professional portfolio, providing in-depth insights into my projects through user-friendly layouts and detailed descriptions."
                        link=""
                        headingColor="text-slate-900"
                        bgColor="bg-slate-300"
                        button="bg-black text-white"
                    />
                    <FPCard 
                        image={Genaitools}
                        heading="GenAITools"
                        content="Designed visually stunning interface in Figma, leveraging a deliberate selection of colors and typography to create a seamless experience"
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