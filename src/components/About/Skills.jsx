import Marquee from "react-fast-marquee";
import SkillsCard from "./SkillsCard";
import Canva from "../../assets/Carousel/canva.svg";
import CSS from "../../assets/Carousel/css.svg";
import Figma from "../../assets/Carousel/figma.svg";
import Firebase from "../../assets/Carousel/firebase.svg";
import Git from "../../assets/Carousel/git.svg";
import HTML from "../../assets/Carousel/html.svg";
import Tailwind from "../../assets/Carousel/tailwindcss.svg";
import Wordpress from "../../assets/Carousel/wordpress.svg";

function Skills()
{
    return(
        <>
            <div className="flex justify-center items-center flex-col my-14 sm:my-10">
                <div className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw]">
                    <Marquee autoFill gradient gradientColor="white" gradientWidth={100} className="h-20 md:my-2">
                        <SkillsCard Name="Canva" Image={Canva} text="" bgcolor=""/>
                        <SkillsCard Name="CSS3" Image={CSS} text="" bgcolor="bg-[#8AA4FF]"/>
                        <SkillsCard Name="Figma" Image={Figma} text="text-white" bgcolor="bg-[#000000]"/>
                        <SkillsCard Name="Firebase" Image={Firebase} text="text-white" bgcolor="bg-[#305CDE]"/>
                        <SkillsCard Name="Git" Image={Git} text="text-white" bgcolor="bg-[#000000]"/>
                        <SkillsCard Name="HTML5" Image={HTML} text="" bgcolor="bg-[#FFC093]"/>
                        <SkillsCard Name="Tailwind CSS" Image={Tailwind} text="text-white" bgcolor="bg-[#003769]"/>
                        <SkillsCard Name="Wordpress" Image={Wordpress} text="" bgcolor=""/>
                    </Marquee>
                    <Marquee autoFill direction="right" gradient gradientColor="white" gradientWidth={100} className="h-20 md:my-2">
                        <SkillsCard Name="Git" Image={Git} text="text-white" bgcolor="bg-[#000000]"/>
                        <SkillsCard Name="HTML5" Image={HTML} text="" bgcolor="bg-[#FFC093]"/>
                        <SkillsCard Name="Tailwind CSS" Image={Tailwind} text="text-white" bgcolor="bg-[#003769]"/>
                        <SkillsCard Name="Wordpress" Image={Wordpress} text="" bgcolor=""/>
                        <SkillsCard Name="Canva" Image={Canva} text="" bgcolor=""/>
                        <SkillsCard Name="CSS3" Image={CSS} text="" bgcolor="bg-[#8AA4FF]"/>
                        <SkillsCard Name="Figma" Image={Figma} text="text-white" bgcolor="bg-[#000000]"/>
                        <SkillsCard Name="Firebase" Image={Firebase} text="text-white" bgcolor="bg-[#305CDE]"/>
                    </Marquee>
                </div>
            </div>
        </>
    );
}

export default Skills;