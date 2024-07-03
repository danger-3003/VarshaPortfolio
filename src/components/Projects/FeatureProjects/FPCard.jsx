function FPCard(props)
{
    return(
        <>
            <div className="flex items-center justify-center flex-col w-72 border-[0.12rem] border-black rounded-xl hover:scale-105 hover:shadow-xl shadow-sm shadow-black transition-all duration-300 m-5">
                <div className="w-[80%] relative">
                    <img src={props.image} alt="cards image" />
                </div>
                <div className={`text-center ${props.bgColor} rounded-b-[0.77rem] pb-5 px-3 pt-12 -mt-12`}>
                    <h1 className={`${props.headingColor} font-bold uppercase`}>{props.heading}</h1>
                    <p className="text-sm my-2">{props.content}</p>
                    <div className="hover:scale-110 transition-all duration-300 ">
                        <a href={props.link} target="_blank" className={`${props.button} text-sm px-5 py-1 rounded-full`}>visit site</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FPCard;