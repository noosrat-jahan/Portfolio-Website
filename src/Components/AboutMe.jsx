import React from 'react';

import Lottie from "lottie-react";
import coding from '../assets/coding.json'


const AboutMe = () => {
    return (
        <div id='about' className='w-full px-5 mx-auto   border-t border-amber-50'>
            <h1 className="bg-gradient-to-r from-[#e6bc47] pt-10 via-[#e99554] to-amber-400 inline-block text-transparent bg-clip-text text-6xl font-bold ">About Me</h1>
            <div  className='grid lg:grid-cols-2 grid-cols-1 gap-3 items-center'>
                <Lottie animationData={coding} loop={true} className='lg:h-[420px] ' />
                <p className='text-lg text-left font-semibold text-amber-300 opacity-80 pb-2'>
                    Hi, I’m Noosrat Jahan, a passionate frontend developer with expertise in React, JavaScript, Tailwind CSS, Firebase, and MongoDB. With a constant drive for improvement, I aim to create efficient and impactful solutions. <br /> <br />

                    Beyond coding, I find joy in photography, exploring new places, and engaging in both indoor and outdoor games. These interests fuel my creativity and provide fresh perspectives, motivating me to embrace new challenges with enthusiasm. <br /> <br />

                    Let’s connect and build something amazing together!
                </p>
            </div>
        </div>
    );
};

export default AboutMe;