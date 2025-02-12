import React from 'react';
import hero from '../assets/Sprinkle.svg'
import picture from '../assets/meem..jpg'
import avatar from '../assets/avatar.jpeg'
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Typewriter } from "react-simple-typewriter";
import 'animate.css';


const HeroSection = () => {
    return (
        <div id='home' className='w-full  pt-10 flex flex-col md:flex-row gap-8 items-center justify-between '>
            <div className='text-left space-y-3 '>
                <h1 className='text-amber-50 text-2xl font-bold animate__headShake'>Hi There!</h1>
                <h1 className='lg:text-6xl text-3xl text-amber-200 font-bold uppercase'>
                    I AM <br /> Noosrat Jahan</h1>
                {/* <h1 className='text-teal-300 text-8xl font-bold'>Frontend <br /> Developer</h1> */}

                <h1 className='text-amber-400 lg:text-7xl text-4xl font-bold'>

                    <Typewriter
                        words={[
                            "Full Stack ",
                            "Developer ",

                        ]}
                        loop={Infinity}
                        cursor
                        cursorStyle=""
                        typeSpeed={200}
                        deleteSpeed={50}
                        delaySpeed={500}
                        className='text-black text-2xl font-semibold'
                    /> <br />
                </h1>

                <div className="pt-10">
                    <Link target='blank' to="https://drive.google.com/file/d/1UZRkSRatBdSdIDMiRzr6EoQdxotsc1pL/view?usp=sharing" className=" border border-amber-200 rounded-md shadow-md shadow-orange-100 px-4 py-4 text-amber-100 font-bold">Download Resume</Link>
                </div>

            </div>

            <div className='lg:w-1/4 w-2/3'>
                <img src={picture} alt="" className='w-full pt-2 rounded-full' />
            </div>

            <div className=' flex md:flex-col flex-row gap-6 items-center text-amber-200 justify-center text-4xl mt-5 lg:border-r-2 lg:border-b-0 border-b-2  border-amber-300 pr-10 pb-2'>

                <a target='blank' href="https://www.linkedin.com/in/noosrat-meem-b269b1156/"><FaLinkedinIn /></a>
                <a target='blank' href="https://github.com/noosrat-jahan?tab=repositories"><FaGithub /></a>
                <a target='blank' href="https://x.com/NoosratM53246?t=EXWLWcCDxTJ7n--Md3XxeA&s=08"><FaTwitter /></a>
                <a target='blank' href="https://www.facebook.com/noosrat.jahan.10?mibextid=ZbWKwL"><FaFacebook /></a>
            </div>

        </div>
    );
};

export default HeroSection;