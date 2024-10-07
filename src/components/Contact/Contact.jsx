import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../Loader/loader.css";
import at  from "../../assets/contact/at.svg";
import message from "../../assets/contact/comment-dots.svg";
import designCard from "../../assets/contact/designingCard.svg";
import question from "../../assets/contact/question.svg";
import star from "../../assets/contact/star.svg";
import pencil from "../../assets/contact/pencil-alt.svg";
import mail from "../../assets/contact/envelope.svg";
import linkedIn from "../../assets/contact/linkedin.svg";
import phone from "../../assets/contact/phone-alt.svg";
import AOS from 'aos';
import "aos/dist/aos.css";
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';

function Contact()
{
    AOS.init();
    const location = useLocation();
    const contactSection = useRef(null);
    const [loader,setLoader] = useState(true);
    const [formData,setFormData] =useState({name:"",email:"",message:""});
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        setFormData({...formData,name:"",email:"",message:""});
        emailjs.send("service_varsha","template_338b1dk",formData,"PQ1t7Tsmpe6lFP3YR")
        .then((res)=>{console.log(res);})
        .catch((err)=>{console.log(err);});
        swal("Your response has been sent","Thankyou for contacting Hima Varsha","success");
    }

    useEffect(()=>{
        if(location.hash=="#contact" && contactSection.current)
        {
            contactSection.current.scrollIntoView({behavior:"smooth"});
        }
    },[location])

    useEffect(()=>{
        setTimeout(() => {
            setLoader(false);
        }, 1500);
    })

    return(
        <>
            <div ref={contactSection}>
                <div className="bg-gradient-to-br from-[#bd94ff] from-0% via-[#bf35ff] via-50% to-[#fff] to-50% h-max sm:h-56 md:h-64 w-full">
                    <div data-aos="fade-right" data-aos-duration="800" className="w-max h-full flex items-start justify-center flex-col py-10 sm:py-0 mx-5 sm:mx-7 md:mx-14">
                        <p className="text-purple-950 font-bold text-[7vw] sm:text-4xl lg:text-5xl">Curious About My Work ?</p>
                        <p className="text-slate-900 font-bold text-lg sm:text-xl lg:text-2xl sm:mt-1 md:mt-2">Get in touch with me!</p>
                    </div>
                </div>
                <div className="relative -top-16">
                    <img src={at} className="absolute w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 top-14 left-[76%] sm:left-[25%] -rotate-45" alt="at"/>
                    <img src={designCard} className="absolute w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 -top-3 left-[85%] sm:left-[32%] rotate-45" alt="message"/>
                    <img src={message} className="absolute w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 top-10 left-[90%] sm:left-[35%]" alt="designCard"/>
                </div>
                <div className="relative -top-10 hidden sm:block">
                    <img src={question} className="absolute w-6 h-6 z-[1] sm:w-7 sm:h-7 md:w-8 md:h-8 -top-2 right-[5%]" alt="pencil"/>
                    <img src={pencil} className="absolute w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 -top-24 right-[9%]" alt="star"/>
                    <img src={star} className="absolute w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 -top-14 right-[17%]" alt="question"/>
                </div>
                <div className="relative top-10">
                    <img src={at} className="absolute w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 top-20 left-[5%] -rotate-12" alt="at"/>
                    <img src={message} className="absolute w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 -top-2 left-[10%] rotate-90" alt="message"/>
                    <img src={designCard} className="absolute w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 top-14 left-[20%]" alt="designCard"/>
                </div>
                <div className="relative flex items-center justify-center flex-col sm:flex-row w-full mb-10 z-[3]">
                    <form data-aos="fade-up" data-aos-duration="800" className="w-[80%] sm:w-[40%] md:w-[35%] mx-5" onSubmit={handleSubmit}>
                        <div>
                            <input type="text" required name="name" value={formData.name} placeholder="Name" className="shadow-md mt-4 w-full outline-none px-3 py-1 rounded-md border-b-purple-700 border-2 text-slate-500 text-base md:text-lg shadow-slate-300" onInput={(text)=>{setFormData({...formData,name:text.target.value})}}/>
                        </div>
                        <div>
                            <input type="email" required name="emial" value={formData.email} placeholder="Email" className="shadow-md mt-4 w-full outline-none px-3 py-1 rounded-md border-b-purple-700 border-2 text-slate-500 text-base md:text-lg shadow-slate-300" onInput={(text)=>{setFormData({...formData,email:text.target.value})}}/>
                        </div>
                        <div>
                            <textarea name="message" required value={formData.message} placeholder="Your Message" className="shadow-md mt-4 w-full outline-none px-3 py-1 rounded-md border-b-purple-700 border-2 text-slate-500 text-base md:text-lg shadow-slate-300" onInput={(text)=>{setFormData({...formData,message:text.target.value})}}/>
                        </div>
                        <button type="submit" className="bg-gradient-to-r from-[#7F34F9] to-[#AD00FF] w-full mt-8 rounded-sm text-white py-1">Submit</button>
                    </form>
                    <div data-aos="fade-up" data-aos-duration="800" className="w-max mx-3 md:mx-5 mt-10 sm:mt-0">
                        <div>
                            <div className="flex flex-row items-center">
                                <div className="bg-[#345FF9] m-2 p-1.5 md:p-2.5 rounded-full w-max"><img src={linkedIn} className="w-4 md:w-5" alt="linkedIn"/></div>
                                <a href="https://www.linkedin.com/in/hima-varsha-barla" className="text-sm sm:text-base" target="_blank">Hima Varsha Barla | LinkedIn</a>
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="bg-[#F93434] m-2 p-1.5 md:p-2.5 rounded-full w-max"><img src={mail} className="w-4 md:w-5" alt="mail"/></div>
                                <a href="mailto:varshahima46@gmail.com" className="text-sm sm:text-base" target="_blank">varshahima46@gmail.com</a>
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="bg-[#00D315] m-2 p-1.5 md:p-2.5 rounded-full w-max"><img src={phone} className="w-4 md:w-5" alt="phone"/></div>
                                <a href="tel:7801078243" className="text-sm sm:text-base">+91 7801078243</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative -top-10">
                    <img src={pencil} className="absolute w-6 h-6 z-[1] sm:w-7 sm:h-7 md:w-8 md:h-8 bottom-16 right-[25%]" alt="pencil"/>
                    <img src={star} className="absolute w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bottom-1 right-[29%]" alt="star"/>
                    <img src={question} className="absolute w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bottom-8 right-[37%]" alt="question"/>
                </div>
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

export default Contact;