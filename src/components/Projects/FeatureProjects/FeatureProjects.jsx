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
                        link="https://www.figma.com/design/jSz4a9Ocr8h44waoxVfd6c/Restaurant-menu-Task3-CODSOFT?m=auto&t=ISB2QivGjQJ98csv-6"
                        duration="1000"
                        headingColor="text-amber-800"
                        bgColor="bg-[#FFF27C]"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/projects/rih.svg'}
                        heading="Result Insight Hub"
                        content="Crafted an interface in Figma, providing a clear and concise visual representation of student performance data."
                        link="https://www.figma.com/design/jKLF6cjB6ahV75WL76SP5T/Result-Insight-Hub-Web-app-design?m=auto&t=wDuINtGd7aIu6tO9-6"
                        duration="2000"
                        headingColor="text-white"
                        bgColor="bg-[#5F89F5]"
                        button="bg-[#080061] text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/designs/emailTemplate.svg'}
                        heading="Email Template"
                        content="Crafted a clean and modern email template for a coffee shop app using Figma, featuring a simple and visually appealing design."
                        link="https://www.figma.com/design/akJQXieRZnpMydzNaGtDvd/Email-Template-Task-2?m=auto&t=ISB2QivGjQJ98csv-6"
                        duration="1000"
                        headingColor="text-amber-800"
                        bgColor="bg-[#FFF27C]"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/designs/libriHub.svg'}
                        heading="Libri Hub"
                        content="Created a systematic and user-friendly design for Libri Hub using Figma, providing a simple and intuitive experience."
                        link="https://www.figma.com/design/zDvmSHp5ihYCT2UMbNWzok/LIBRI-HUB?m=auto&t=ISB2QivGjQJ98csv-6"
                        duration="2000"
                        headingColor="text-indigo-900"
                        bgColor="bg-gradient-to-br from-orange-300 to-pink-300"
                        button="bg-indigo-900 text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/designs/coffeeApp.svg'}
                        heading="Coffee App Design"
                        content="Designed user-friendly login and signup pages for a mobile coffee app, providing a seamless and intuitive experience for customers."
                        link="https://www.figma.com/design/jQThejmc8WEHAWjTQhT3QD/Cofee-mobile-app-signup-Task-1-CODSOFT?m=auto&t=ISB2QivGjQJ98csv-6"
                        duration="1000"
                        headingColor="text-amber-800"
                        bgColor="bg-[#FFF27C]"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/designs/shopify.svg'}
                        heading="Shopify"
                        content="Designed a visually appealing Shopify e-commerce website using Figma, featuring high-quality images and a simple, user-friendly layout"
                        link="https://www.figma.com/design/cgol2QrSHt6MJHWQv7tg2w/Ecommerce-Shopify-Website?m=auto&t=ISB2QivGjQJ98csv-6"
                        duration="2000"
                        headingColor="text-amber-800"
                        bgColor="bg-gradient-to-bl from-orange-300 to-pink-300"
                        button="bg-[#571A00] text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/designs/sumanthPortfolio.svg'}
                        heading="Friend's Portfolio Design"
                        content="Designed a professional and interactive portfolio for my friend, highlighting his projects with detailed descriptions, vibrant visuals."
                        link="https://www.figma.com/design/LMnpPgu8Y76xy3rvoh6PtW/Sumanth's-Portfolio?m=auto&t=wDuINtGd7aIu6tO9-6"
                        duration="1000"
                        headingColor="text-slate-900"
                        bgColor="bg-slate-300"
                        button="bg-black text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/projects/portfolio.svg'}
                        heading="My portfolio"
                        content="Designed a professional portfolio, providing in-depth insights into my projects through user-friendly layouts and detailed descriptions."
                        link="https://www.figma.com/design/XNrlC8y27P4TosbBof3aXs/updated-portfolio?m=auto&t=eBHTOix3tJVN0lal-6"
                        duration="2000"
                        headingColor="text-slate-900"
                        bgColor="bg-slate-300"
                        button="bg-black text-white"
                    />
                    <FPCard 
                        image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/projects/genaitools.svg'}
                        heading="GenAITools"
                        content="Designed visually stunning interface in Figma, leveraging a deliberate selection of colors and typography to create a seamless experience"
                        link="https://www.figma.com/design/qNrE2FtKEnAJP80zIkBlSI/Gen-AI-Tools?m=auto&t=wDuINtGd7aIu6tO9-6"
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