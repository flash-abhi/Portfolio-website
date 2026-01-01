import React, { useEffect, useMemo, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const socials = [
 { Icon: FaLinkedin,label:"linkedIn",href:"https://www.linkedin.com/in/abhishek-chauhan-2745b0246/"},
 { Icon: FaGithub,label:"GitHub",href:"https://github.com/flash-abhi"},
];
const glowVariants = {
  initial: {scale: 1,y:0,filter: "drop-shadow(0 0 0 rgba(0,0,0,0))"},
  hover: {scale:1.2,y:-3 , filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 20px rgba(16,185,129,0.8",transition: {type:"spring",stiffness:300,damping:15}},
  tap: {scale:0.95,y:0,transition: {duration: 0.08} }
}
const Home = () => {
  const roles = useMemo(
    () => [
      "Web Developer",
      "Software Developer",
      "MERN Stack Developer",
      "Frontend Developer",
      "React Developer",
      "Backend Developer",
    ],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
        else if (!deleting && subIndex === current.length)
          setTimeout(() => setDeleting(true), 1200);
        else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
        else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      },
      deleting ? 40 : 60
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);
  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackground />
      <div className="absolute inset-0">
        <div
          className="absolute -top-32 -left-32 
          w-[70vw] sm:w-[z-500vw] md:w-[40vw]
          h-[70vh] sm:h-[50vh] md:h-[40vh]
          max-w-125 max-h-125
          rounded-full
          bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse
           "
        ></div>
      </div>
      <div className="absolute inset-0">
        <div
          className="absolute bottom-0 right-0
          w-[70vw] sm:w-[z-500vw] md:w-[40vw]
          h-[70vh] sm:h-[50vh] md:h-[40vh]
          max-w-125 max-h-125
          rounded-full
          bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse delay-500
           "
        ></div>
      </div>
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white tracking-wide min-h-[1.6em] font-semibold "
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-0.5 ml-1 bg-white animate-pulse align-middle"
                style={{ height: "1em" }}
              ></span>
            </motion.div>
            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1, // 1 second
              }}
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-2xl"
            >
              Hello, I'm <br />
              <span className="text-white  font-bold text-4xl sm:text-4xl md:text-5xl lg:text-7xl lg:whitespace-nowrap">
                Abhishek Chauhan
              </span>
            </motion.h1>
            <motion.p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
            initial={{
              opacity:0,y:20
            }}
            animate={{
              opacity:1,y:0
            }}
            transition={{
              duration:0.8, delay: 0.4
            }}
            >
              I turn complex ideas into seamless, high-impact web-experiences - building modern, scalable, and lightning fast applications that make a difference.
            </motion.p>
            <motion.div 
            initial={{
              opacity:0
            }}
            animate={{
              opacity:1
            }}
            transition={{
              delay:0.8,duration:0.8
            }}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <a href="#projects" className="px-6 py-3 rounded-full font-medium text-lg text-white bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all">View My Work</a>
              <a download className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105" href="/resume.pdf">My Resume</a>
            </motion.div>
            <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
              {socials.map(({Icon,label,href})=> (
                <motion.a 
                aria-label={label}
                target="_blank"
                key={label}
                href={href}
                rel="noopener noreferrer"
                variants={glowVariants}
                initial="initial"
                whileHover={"hover"}
                whileTap={"tap"}
                className="text-gray-300"
                >
                  <Icon/>
                </motion.a>
              ) )}
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <motion.img 
          style={{
            right: "-30px",width: "min(45vw,780px)",maxHeight:"90vh"
          }}
          initial={{
            opacity:0,y:40,scale:0.98
          }}
          animate={{
            opacity:1,y:0,scale:1
          }}
          transition={{
            delay:0.2,duration:0.8
          }}

          className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
          src="avator.png" alt="Abhishek Chauhan" />
        </div>
      </div>
    </section>
  );
};

export default Home;
