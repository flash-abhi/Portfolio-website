import React, { useRef, useState } from "react";
import { DiNodejsSmall } from "react-icons/di";
import { FaJava, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
const Skills = () => {
  const skills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
  ];
  const repeated = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-75 h-75 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-75 h-75 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-2xl animate-pulse delay-500"></div>
      </div>

      <motion.h2
        initial={{
          opacity: 0,
          y: -30,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
      >
        My Skills
      </motion.h2>
      <motion.p
        initial={{
          opacity: 0,
          y: -10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
      >
        Modern Applications | Modern Technologies
      </motion.p>
      <div className="relative w-full overflow-hidden space-y-8">
        <motion.div
          className="flex gap-10 text-6xl text-[#1cd8d2] w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 18,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {repeated.map((s, i) => (
            <div
              key={`row2-${i}`}
              className="flex flex-col items-center gap-2 min-w-[120px]"
            >
              <span className="hover:scale-125 transition-transform duration-300">
                {s.icon}
              </span>
              <p className="text-sm">{s.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
