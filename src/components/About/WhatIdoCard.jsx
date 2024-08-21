import AOS from 'aos';
import 'aos/dist/aos.css';

function WhatIdoCard(props)
{
    AOS.init();
    return(
        <>
            <div data-aos="fade-up" data-aos-duration="800" className={`relative ${props.Height} w-max m-5 hover:scale-110 transition-all duration-500 hover:shadow-[#0000003f]`}>
                <img src={props.Image} alt="my work" className="h-full" />
                <div className={`absolute top-0 h-full w-full flex items-center justify-center flex-col text-white p-5 rounded-3xl ${props.bgcolor}`}>
                    <p className="font-bold text-lg sm:text-xl md:text-2xl">{props.Heading}</p>
                    <p className="text-center text-sm sm:text-base">{props.Content}</p>
                </div>
            </div>
        </>
    );
}

export default WhatIdoCard;