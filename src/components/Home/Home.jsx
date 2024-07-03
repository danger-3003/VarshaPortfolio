import { Cursor,useTypewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Link,useLocation} from "react-router-dom";
import {useRef,  useEffect} from "react";
import About from "../About/About";
import Resume from "../../assets/Hima Varsha - Resume.pdf";
import Quotation from "./Quotation";

function Home()
{
    const location=useLocation();
    const HomeSection=useRef(null);
    useEffect(()=>{
        if(location.hash==="#home" && HomeSection.current)
        {
            HomeSection.current.scrollIntoView({behavior:"smooth"});
        }
    },[location])
    const [text] = useTypewriter(
    {
        words:['Web Developer','UI/UX Designer'],
        loop:{},
        typeSpeed:120,
        cursor:"True"
    })
    return(
        <>
            <div ref={HomeSection} className="h-max flex items-center justify-center flex-col py-20 pt-32 md:py-44 md:pt-48 px-5">
                <div className="text-center">
                    <p className="uppercase text-xl sm:text-2xl md:text-3xl font-semibold">hi there!</p>
                    <p className="text-[1.7rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-10 md:leading-[4rem] font-bold">I'm <span className="bg-gradient-to-r from-[#AC52F2] to-[#D11C9F] bg-clip-text text-transparent w-max font-extrabold">Hima&nbsp;Varsha</span></p>
                    <p className="text-[1rem] sm:text-2xl">{text}<Cursor>|</Cursor></p>
                </div> 
                <div className="mt-5">
                    <FontAwesomeIcon className="text-xl md:text-2xl mx-3 my-2" icon={faGithub} />
                    <FontAwesomeIcon className="text-xl md:text-2xl mx-3 my-2" icon={faLinkedin} />
                    <FontAwesomeIcon className="text-xl md:text-2xl mx-3 my-2" icon={faEnvelope} />
                </div>
                <div>
                    <Link to="/projects" className="mx-1 sm:mx-2">
                        <div className="relative items-center justify-start inline-block px-5 py-1 overflow-hidden font-bold rounded-full group">
                            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-gradient-to-br from-[#7ecff1] to-[#4a69da] opacity-[3%]"></span>
                            <span className="absolute top-0 left-0  md:w-48 md:h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-gradient-to-b from-[#7ecff1] to-[#4a69da] opacity-100 group-hover:-translate-x-8"></span>
                            <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white text-sm sm:text-base">Projects</span>
                            <span className="absolute inset-0 border-2 border-cyan-500 group-hover:border-cyan-300 rounded-full"></span>
                        </div>
                    </Link>
                    <a href={Resume} className="mx-1 sm:mx-2 relative items-center justify-start inline-block px-5 py-1 overflow-hidden font-bold rounded-full group">
                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-gradient-to-br from-[#7ecff1] to-[#4a69da] opacity-[3%]"></span>
                        <span className="absolute top-0 left-0  md:w-48 md:h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-gradient-to-b from-[#7ecff1] to-[#4a69da] opacity-100 group-hover:-translate-x-8"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white text-sm sm:text-base">Resume</span>
                        <span className="absolute inset-0 border-2 border-cyan-500 group-hover:border-cyan-300 rounded-full"></span>
                    </a>
                </div>
            </div>
            <Quotation />
            <About />
        </>
    );
}

export default Home;