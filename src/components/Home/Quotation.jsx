import lg_image from "../../assets/QuotationSection.svg";
import md_image from "../../assets/QuotationSection.jpg";
// import AOS from "aos";
// import 'aos/dist/aos.css';

function Quotation()
{
    // AOS.init();
    return(
        <>
            <div>
                <img src={(window.innerWidth<=640)?md_image:lg_image} alt="QuotationImage" className="w-[200%]"/>
            </div>
        </>
    );
}

export default Quotation;