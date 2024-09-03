import AOS from 'aos';
import 'aos/dist/aos.css';

function Me()
{
    AOS.init();
    return(
        <>
            <div data-aos="fade-right" data-aos-duration="1000" className="flex items-center justify-center flex-col-reverse sm:flex-row pt-20 p-5 md:p-10 lg:p-20 lg:pb-10">
                <div className="w-full sm:w-[70vw] md:w-[60vw] lg:basis-[70%] sm:mx-3 lg:mx-5 flex items-center justify-center flex-col">
                    <p className="text-center text-base lg:text-lg">I'm a adept web developer with expertise in UI/UX design. I simplify complex challenges into elegant, user-friendly designs, weaving artistic expression into your message.</p>
                    <p className="mt-5 lg:mt-10 bg-gradient-to-r from-[#AC52F2] to-[#D11C9F] bg-clip-text text-transparent w-max font-extrabold">~~ Hima Varsha ~~</p>
                    <a href="mailto:varshahima46@gmail.com" className="font-semibold">varshahima46@gmail.com</a>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className="w-[50vw] sm:w-[30vw] lg:basis-[30%] mb-10 sm:mb-0 sm:mx-3 lg:mx-5">
                    <img src={'https://danger-3003.github.io/VarshaPortfolio/src/assets/profile.svg'} alt="Profile photo" className="w-full"/>
                </div>
            </div>
        </>
    )
}

export default Me;