import FPCard from "./FPCard";

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
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/designs/menuCard.svg'}
                        heading="Menu Card"
                        content="Created an interactive menu design for a coffee shop app using Figma, with easy-to-navigate layout that enhances the user experience."
                        link=""
                        duration="1000"
                        headingColor="text-amber-800"
                        bgColor="bg-[#FFF27C]"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/projects/rih.svg'}
                        heading="Result Insight Hub"
                        content="Crafted an interface in Figma, providing a clear and concise visual representation of student performance data."
                        link=""
                        duration="2000"
                        headingColor="text-white"
                        bgColor="bg-[#5F89F5]"
                        button="bg-[#080061] text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/designs/emailTemplate.svg'}
                        heading="Email Template"
                        content="Crafted a clean and modern email template for a coffee shop app using Figma, featuring a simple and visually appealing design."
                        link=""
                        duration="1000"
                        headingColor="text-amber-800"
                        bgColor="bg-[#FFF27C]"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/designs/libriHub.svg'}
                        heading="Libri Hub"
                        content="Created a systematic and user-friendly design for Libri Hub using Figma, providing a simple and intuitive experience."
                        link=""
                        duration="2000"
                        headingColor="text-indigo-900"
                        bgColor="bg-gradient-to-br from-orange-300 to-pink-300"
                        button="bg-indigo-900 text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/designs/coffeeApp.svg'}
                        heading="Coffee App Design"
                        content="Designed user-friendly login and signup pages for a mobile coffee app, providing a seamless and intuitive experience for customers."
                        link=""
                        duration="1000"
                        headingColor="text-amber-800"
                        bgColor="bg-[#FFF27C]"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/designs/shopify.svg'}
                        heading="Shopify"
                        content="Designed a visually appealing Shopify e-commerce website using Figma, featuring high-quality images and a simple, user-friendly layout"
                        link=""
                        duration="2000"
                        headingColor="text-amber-800"
                        bgColor="bg-gradient-to-bl from-orange-300 to-pink-300"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/designs/sumanthPortfolio.svg'}
                        heading="Friend's Portfolio Design"
                        content="Designed a professional and interactive portfolio for my friend, highlighting his projects with detailed descriptions, vibrant visuals."
                        link=""
                        duration="1000"
                        headingColor="text-slate-900"
                        bgColor="bg-slate-300"
                        button="bg-black text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/projects/portfolio.svg'}
                        heading="My portfolio"
                        content="Designed a professional portfolio, providing in-depth insights into my projects through user-friendly layouts and detailed descriptions."
                        link=""
                        duration="2000"
                        headingColor="text-slate-900"
                        bgColor="bg-slate-300"
                        button="bg-black text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/projects/genaitools.svg'}
                        heading="GenAITools"
                        content="Designed visually stunning interface in Figma, leveraging a deliberate selection of colors and typography to create a seamless experience"
                        link=""
                        duration="1000"
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