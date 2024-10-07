import AOS from 'aos';
import 'aos/dist/aos.css';

function WhatIdoCard(props)
{
    AOS.init();
    return(
        <>
            <div data-aos="fade-up" data-aos-duration="800" className={`relative ${props.Height} w-max m-5 hover:scale-110 transition-all duration-500 hover:shadow-[#0000003f]`}>
                <img src={props.Image} width={250} alt="my work" className="h-full" />
                <div className={`absolute top-0 h-full w-full flex items-center justify-center flex-col text-white py-5 px-3 rounded-[1.2rem] ${props.bgcolor}`}>
                    <p className="font-bold text-lg sm:text-xl md:text-2xl">{props.Heading}</p>
                    <p className="text-center pt-1 text-sm sm:text-base">{props.Content}</p>
                </div>
            </div>
        </>
    );
}

export default WhatIdoCard;