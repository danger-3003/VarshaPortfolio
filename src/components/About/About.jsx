import {useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import Me from "./Me";
import Skills from "./Skills";
import WhatIdoCard from "./WhatIdoCard";
import Designing from "../../assets/designingCard.svg";
import Research from "../../assets/researchCard.svg";
import Testing from "../../assets/testingCard.svg";

function About()
{
    const location = useLocation();
    const AboutSection = useRef(null);
    useEffect(()=>{
        if(location.hash=="#about" && AboutSection.current)
        {
            AboutSection.current.scrollIntoView({behavior:'smooth'});
        }
    },[location]);

    return(
        <>
            <div ref={AboutSection} className="h-max">
                <Me />
                <Skills />
                <div className="flex items-center justify-center flex-col h-max px-5 py-10 w-full bg-[#F5E8FC] rounded-t-[7rem] sm:rounded-t-[15rem] ">
                    <p className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-10">What I <span className="bg-gradient-to-r from-[#AC52F2] to-[#D11C9F] bg-clip-text text-transparent">do</span> ?</p>
                    <div className="flex items-center justify-center flex-wrap">
                        <WhatIdoCard Image={Designing} Heading="Designing" Height="h-[10rem] sm:h-[11rem] md:h-[12rem] lg:h-48" bgcolor="bg-gradient-to-br from-[#f008f4c5] to-[#760effbb]" Content="lorem kja;dljvbsga sajhll asdhcdvkg sacsnfala asdchnl d" />
                        <WhatIdoCard Image={Research} Heading="Research" Height="h-[10rem] sm:h-[11rem] md:h-[12rem] lg:h-56" bgcolor="bg-gradient-to-br from-[#f008f4c5] to-[#760effbb]" Content="lorem kja;dljvbsga sajhll asdhcdvkg sacsnfala asdchnl d" />
                        <WhatIdoCard Image={Testing} Heading="Testing" Height="h-[10rem] sm:h-[11rem] md:h-[12rem] lg:h-48" bgcolor="bg-gradient-to-br from-[#f008f4c5] to-[#760effbb]" Content="lorem kja;dljvbsga sajhll asdhcdvkg sacsnfala asdchnl d" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;