import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function Navbar()
{
    const nameFont={
        fontFamily: "Mrs Sheppards"
    }
    const navFont={
        fontFamily: "Salsa"
    }
    const [status,setStatus] = useState("-top-[10rem]");
    const clicked=()=>{
        if(status==="-top-[10rem]")
        {
            setStatus("top-14");
        }
        else
        {
            setStatus("-top-[10rem]");
        }
    }
    const button_clicked=()=>{
        setStatus("-top-[10rem]");
    }
    return(
        <>
            <div className="bg-white w-full h-14 px-5 py-1.5 sm:py-2 shadow-md shadow-[#2e2e2e18] fixed z-10 flex items-center justify-center sm:justify-between">
                <FontAwesomeIcon className="text-xl fixed top-[1.2rem] right-7 block sm:hidden" icon={faBars} onClick={clicked}/>                
                <div>
                    <p style={nameFont} className="bg-gradient-to-r from-[#AC52F2] to-[#D11C9F] bg-clip-text text-transparent w-36 fixed z-20 top-3 left-5 text-2xl ">Hima Varsha</p>
                </div>
                <ul style={navFont} className={`absolute ${status} sm:top-4 bg-white w-full flex items-center justify-center flex-col sm:flex-row sm:mr-10 shadow-md sm:shadow-none shadow-[#2e2e2e18] transition-all duration-500`}>
                    <li className="my-2 sm:my-0 mx-3"><Link to="/#home" onClick={button_clicked}>Home</Link></li>
                    <li className="my-2 sm:my-0 mx-3"><Link to="/#about" onClick={button_clicked}>About</Link></li>
                    <li className="my-2 sm:my-0 mx-3"><Link to="/projects" onClick={button_clicked}>Projects</Link></li>
                    <li className="my-2 sm:my-0 mx-3"><Link to="/contact" onClick={button_clicked}>Contact</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;