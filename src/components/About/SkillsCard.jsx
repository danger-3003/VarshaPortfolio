function SkillsCard(props)
{
    const Shadow={
        boxShadow:"0px 3px 10px #999999"
    }
    return(
        <>
            <div style={Shadow} className={`flex items-center justify-center ${props.bgcolor} h-max w-max px-5 py-[0.2rem] md:py-1 mx-3 rounded-md`}>
                <img src={props.Image} alt="skills Image" className={`h-10 md:h-12 py-1 pr-3`} />
                <p className={`${props.text} font-semibold`}>{props.Name}</p>
            </div>
        </>
    );
}

export default SkillsCard;