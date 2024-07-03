import lg_image from "../../assets/QuotationSection.svg";
import md_image from "../../assets/QuotationSection.jpg";

function Quotation()
{
    return(
        <>
            <div className="">
                <img src={(window.innerWidth<=640)?md_image:lg_image} alt="QuotationImage" className="w-[200%]"/>
            </div>
        </>
    );
}

export default Quotation;