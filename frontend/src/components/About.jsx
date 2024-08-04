import React from "react";
import about from "../assets/about.jpg"
import {ABOUT} from "../constants/constant.jsx"
import about2 from "../assets/about2.jpg"

const About = () => {
    return (
        <section className="container mx-auto mb-8" id="about">
            <h2 className="mb-8 text-white text-center text-3xl tracking-tighter lg:text-4xl">About Us</h2>
            <div className="flex flex-wrap">
                <div className="w-full p-4 lg:w-1/2">
                    <img src={about} alt="about" className="rounded-2xl"/>
                </div>
                <div className="w-full p-2 lg:w-1/2">
                    <h2 className="text-4xl font-bold tracking-tighter lg:text-6xl">{ABOUT.header}</h2>
                    <p className="m-8 text-white text-justify text-2xl leading-relaxed tracking-tight lg:max-w-xl">{ABOUT.content}</p>
                    <img src={about2} alt="about" className="rounded-full"/>
                </div>
            </div>
        </section>
    )
}
export default About;