import SliderCard from "./SliderCard";
import FeatureProjects from "./FeatureProjects/FeatureProjects";
import "./Swiper.css";
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

function Projects() {
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
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam commodi inventore vero, consequatur mollitia."
                            link=""
                            image={GenAiTools}
                            bgColor="from-[#8000ffa0] via-[#8000ffa0]"
                            buttonColor="bg-[#5D1480] text-white"
                            textColor="text-black"
                            headingColor="text-[#5D1480]"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                    <SliderCard 
                            heading="Eltoro"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam commodi inventore vero, consequatur mollitia."
                            link=""
                            image={Eltoro}
                            bgColor="from-[#ffec40c0] via-[#ffec40c0]"
                            buttonColor="bg-[#CD7B00] text-white"
                            textColor="text-ember-950"
                            headingColor="text-amber-900"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                    <SliderCard 
                            heading="Result Insight Hub"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam commodi inventore vero, consequatur mollitia."
                            link=""
                            image={RIH}
                            bgColor="from-[#6a79ffce] via-[#6a79ffce]"
                            buttonColor="bg-[#111b7c] text-white"
                            textColor="text-black"
                            headingColor="text-[#000a5f]"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                    <SliderCard 
                            heading="Gen AI Tools"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam commodi inventore vero, consequatur mollitia."
                            link=""
                            image={GenAiTools}
                            bgColor="from-[#8000ffa0] via-[#8000ffa0]"
                            buttonColor="bg-[#5D1480] text-white"
                            textColor="text-black"
                            headingColor="text-[#5D1480]"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                    <SliderCard 
                            heading="Result Insight Hub"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veniam commodi inventore vero, consequatur mollitia."
                            link=""
                            image={RIH}
                            bgColor="from-[#6a79ffce] via-[#6a79ffce]"
                            buttonColor="bg-[#111b7c] text-white"
                            textColor="text-black"
                            headingColor="text-[#000a5f]"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="h-max w-full py-10">
                <FeatureProjects />
            </div>
        </>
    );
}

export default Projects;
