import SliderCard from "./SliderCard";
import FeatureProjects from "./FeatureProjects/FeatureProjects";
import "./Swiper.css";
import "../Loader/loader.css";
// import Loader from "../../assets/loader.svg";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//import images for project swiper
import GenAiTools from '../../assets/projects/genaitools.svg';
import Eltoro from '../../assets/projects/eltoro.svg';
import RIH from '../../assets/projects/rih.svg';
import Portfolio from '../../assets/projects/portfolio.svg';

function Projects() {
    const [loader,setLoader] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoader(false);
        }, 1500);
    })
    return (
        <>
            <div className="pt-14 w-full h-full shadow-[#00000048] shadow-md">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#your-desired-color",
                        "--swiper-navigation-hover-color": "#your-desired-hover-color",
                    }}
                    className="w-full h-max"
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    <SwiperSlide className="flex items-center justify-center">
                        <SliderCard 
                            heading="Gen AI Tools"
                            content="GenAI Tools offers a range of AI-powered tools through a user-friendly website, making cutting-edge technology accessible to all. Our goal is to simplify complex tasks and enhance user experience with intuitive and effective solutions."
                            link="https://genaitools.vercel.app/"
                            image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/projects/genaitools.svg'}
                            bgColor="from-[#8000ffa0] via-[#8000ffa0]"
                            buttonColor="bg-[#5D1480] text-white"
                            textColor="text-black"
                            headingColor="text-[#420e5a]"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <SliderCard 
                            heading="Eltoro"
                            content="This restaurant website design prioritizes user-friendliness and easy navigation. Visitors can seamlessly browse menus, make reservations, and explore offerings with a smooth and enjoyable experience."
                            link="https://el-toro.vercel.app/"
                            image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/projects/eltoro.svg'}
                            bgColor="from-[#ffec40c0] via-[#ffec40c0]"
                            buttonColor="bg-amber-900 text-white"
                            textColor="text-ember-950"
                            headingColor="text-amber-900"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <SliderCard 
                            heading="Result Insight Hub"
                            content="This project provides a comprehensive visual analysis of student marks through interactive graphs, offering detailed insights into performance across separate semester."
                            link="https://rih.vercel.app/"
                            image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/projects/rih.svg'}
                            bgColor="from-[#6a79ffce] via-[#6a79ffce]"
                            buttonColor="bg-[#111b7c] text-white"
                            textColor="text-black"
                            headingColor="text-[#000a5f]"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <SliderCard 
                            heading="Portfolio"
                            content="A simple and easy-to-navigate portfolio highlighting my projects, skills, and experiences, providing a comprehensive overview of my work and accomplishments."
                            link="https://hima-varsha.vercel.app/"
                            image={'https://danger-3003.github.io/VarshaPortfolio/src/assets/projects/portfolio.svg'}
                            bgColor="from-slate-300 via-slate-300"
                            buttonColor="bg-black text-white"
                            textColor="text-slate-900"
                            headingColor="text-slate-900"
                            className="bg-slate-700"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="h-max w-full py-10">
                <FeatureProjects />
            </div>
            {   
                loader && 
                <div className="fixed z-[20] top-0 flex items-center justify-center h-screen w-full bg-white">
                    <div className="loader"></div>
                </div>
            }
        </>
    );
}

export default Projects;
