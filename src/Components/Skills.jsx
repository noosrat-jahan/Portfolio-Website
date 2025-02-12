import React from "react";

import react from "../assets/react.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import python from "../assets/python.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import firebase from "../assets/firebase.png";
import tailwind from "../assets/tailwind.png";
import npm from "../assets/npm.png";
import figma from "../assets/figma.png";

import { motion } from "motion/react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full px-5 !mt-0 mx-auto border-t border-amber-50"
    >
      <h1 className="bg-gradient-to-r pt-10 from-[#e6bc47] via-[#e99554] to-amber-400 inline-block text-transparent bg-clip-text text-6xl font-bold mb-16">
        Skills
      </h1>

      <div className="grid grid-cols-2  md:grid-cols-4 gap-y-5">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="border border-gray-200 bg-purple-400 bg-opacity-40 flex flex-col justify-center items-center w-24 h-28 lg:w-52 lg:h-56  rounded-lg p-3"
        >
          <img src={react} alt="" className="w-32" />
          <h2>React</h2>
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="border border-gray-200 bg-purple-400 bg-opacity-40 flex flex-col justify-center items-center w-24 h-28 lg:w-52 lg:h-56  rounded-lg p-3"
        >
          <img src={js} alt="" className="w-32" />
          <h2>Javascript</h2>
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="border border-gray-200 bg-purple-400 bg-opacity-40 flex flex-col justify-center items-center w-24 h-28 lg:w-52 lg:h-56  rounded-lg p-3"
        >
          <img src={python} alt="" className="w-32" />
          <h2>Python</h2>
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="border border-gray-200 bg-purple-400 bg-opacity-40 flex flex-col justify-center items-center w-24 h-28 lg:w-52 lg:h-56  rounded-lg p-3"
        >
          <img src={html} alt="" className="w-28" />
          <h2>HTML</h2>
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="border border-gray-200 bg-purple-400 bg-opacity-40 flex flex-col justify-center items-center w-24 h-28 lg:w-52 lg:h-56  rounded-lg p-3"
        >
          <img src={css} alt="" className="w-28" />
          <h2>CSS</h2>
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="border border-gray-200 bg-purple-400 bg-opacity-40 flex flex-col justify-center items-center w-24 h-28 lg:w-52 lg:h-56  rounded-lg p-3"
        >
          <img src={tailwind} alt="" className="w-28" />
          <h2>Tailwind CSS</h2>
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="border border-gray-200 bg-purple-400 bg-opacity-40 flex flex-col justify-center items-center w-24 h-28 lg:w-52 lg:h-56  rounded-lg p-3"
        >
          <img src={firebase} alt="" className="w-28" />
          <h2>Firebase</h2>
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="border border-gray-200 bg-purple-400 bg-opacity-40 flex flex-col justify-center items-center w-24 h-28 lg:w-52 lg:h-56  rounded-lg p-3"
        >
          <img src={mongodb} alt="" className="w-28" />
          <h2>MongoDB</h2>
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="border border-gray-200 bg-purple-400 bg-opacity-40 flex flex-col justify-center items-center w-24 h-28 lg:w-52 lg:h-56  rounded-lg p-3"
        >
          <img src={git} alt="" className="w-28" />
          <h2>Git</h2>
        </motion.div>
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="border border-gray-200 bg-purple-400 bg-opacity-40 flex flex-col justify-center items-center w-24 h-28 lg:w-52 lg:h-56  rounded-lg p-3"
        >
          <img src={npm} alt="" className="w-28" />
          <h2>NPM</h2>
        </motion.div>
      </div>

      <h1 className="bg-gradient-to-r border-t border-amber-50 w-full mt-10 pt-10 pb-10 from-[#e6bc47] via-[#e99554] to-amber-400 inline-block text-transparent bg-clip-text lg:text-6xl text-5xl font-bold ">
        Education
      </h1>
      <div className="border border-gray-200 bg-purple-500 bg-opacity-40 flex flex-col justify-center space-y-3 items-center w-11/12 md:w-6/12 lg:h-56 mx-auto rounded-lg p-3">
        <p className="font-bold text-xl text-amber-100">Shahjalal University of Science and Technology</p>
        <p className="font-semibold text-sm text-amber-200">B.Sc in Electrical & Electronic Engineering</p>
        <p className="text-sm text-amber-300">2017-2022</p>
      </div>
    </div>
  );
};

export default Skills;
