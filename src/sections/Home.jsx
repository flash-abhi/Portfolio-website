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
  className="relative w-full min-h-[100dvh] bg-black"
>
  <ParticlesBackground />

  {/* Top glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div
      className="
        absolute -top-32 -left-32
        w-[70vw] md:w-[40vw]
        h-[60vh] md:h-[40vh]
        rounded-full
        bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-20
        blur-[120px]
        animate-pulse
      "
    />
  </div>

  {/* Bottom glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div
      className="
        absolute bottom-0 right-0
        w-[70vw] md:w-[40vw]
        h-[60vh] md:h-[40vh]
        rounded-full
        bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-20
        blur-[120px]
        animate-pulse
      "
    />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh]">
    {/* LEFT */}
    <div className="flex flex-col justify-center text-center lg:text-left">
      <motion.div
        className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold min-h-[1.6em]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {roles[index].substring(0, subIndex)}
        <span className="inline-block w-0.5 h-[1em] ml-1 bg-white animate-pulse align-middle" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
      >
        Hello, I'm <br />
        <span className="block text-white text-4xl md:text-5xl lg:text-7xl">
          Abhishek Chauhan
        </span>
      </motion.h1>

      <motion.p
        className="mt-6 text-base md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        I turn complex ideas into seamless, high-impact web experiences —
        building modern, scalable, lightning-fast applications.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-full text-white text-lg font-medium bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] hover:scale-105 transition"
        >
          View My Work
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 rounded-full bg-white text-black text-lg font-medium hover:bg-gray-200 transition"
        >
          My Resume
        </a>
      </motion.div>

      <div className="mt-10 flex gap-5 justify-center lg:justify-start text-2xl">
        {socials.map(({ Icon, label, href }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-300 hover:text-white transition"
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </div>

    {/* RIGHT */}
    <div className="relative hidden lg:flex items-center justify-center">
      <motion.img
        src="/avator.png"
        alt="Abhishek Chauhan"
        className="max-h-[85vh] w-auto object-contain select-none"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        draggable={false}
      />
    </div>
  </div>
</section>

  );
};

export default Home;
