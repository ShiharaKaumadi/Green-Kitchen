import React, {useState} from "react";
import logo from "../assets/logo.png"
import {LINKS} from "../constants/constant.jsx"
import {FaBars, FaTimes} from "react-icons/fa";
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = ()=> {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    const handleScroll = (event,targetId) =>{
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (!targetElement){
            const offsetTop = targetElement.offsetTop-80;
            window.scrollTo({
                top:offsetTop,
                behavior:"smooth"
            })
        }
        setMobileDrawerOpen(false);
    }
    return (
        <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
            <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
                <img src={logo} alt="logo" width={20} h={20}/>
                <div className="hidden space-x-6 lg:flex">
                    {LINKS.map((link, index)=>(
                        <a key={index}
                        href={`#${link.targetId}`}
                        className={`text-white ${index !== 0 ? "border-l-2 border-neutral-800/50  pl-3 pr-3":" "} hover:opacity-50`}
                        onClick={(e)=>handleScroll(e,link.targetId)}>
                            {link.text}
                        </a>
                        ))}
                </div>
                <div className="lg:hidden  md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen  ? <FaTimes/> : <FaBars/>}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="w-full backdrop-blur-lg lg:hidden">
                {LINKS.map((link,index)=>(
                    <a key={index} href={`#${link.targetId}`} className="text-white block p-4 uppercase tracking-tighter" onClick={(e)=>handleScroll(e, link.targetId)}>
                        {link.text}</a>
                ))}
            </div>
            )}
        </nav>
    )
}
export default Navbar;