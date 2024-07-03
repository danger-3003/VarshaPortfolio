var width="";

function SliderCard(props)
{
    (window.innerWidth<= 370)?width="p-5":width="p-10";   
    return(
        <>
            <div className={`h-max w-full ${width} sm:p-20 flex items-center justify-center flex-col-reverse sm:flex-row bg-gradient-to-br ${props.bgColor} from-0% via-50% to-[#FDFDFD] to-50%`}>
                <div className='sm:basis-[70%] md:basis-[75%] lg:basis-[50%]'>
                    <p className={`${props.headingColor} font-extrabold text-2xl sm:text-2xl md:text-4xl my-2`}>{props.heading}</p>
                    <p className={`text-base md:text-xl my-2 ${props.textColor}`}>{props.content}</p>
                    <div className='hover:scale-110 my-4 w-max transition-all duration-300'>
                        <a href={props.link} className={`${props.buttonColor} px-5 py-1 rounded-full`}>Visit Site</a>
                    </div>
                </div>
                <div className="">
                    <img src={props.image} alt="" className="h-60 md:h-80 lg:h-96"/>
                </div>
            </div>
        </>
    )
}

export default SliderCard;