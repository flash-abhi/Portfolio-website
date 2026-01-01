import React from 'react'
import {motion} from "framer-motion";
const About = () => {
  const stats = [
    {label: "Experience",value: "3+ months"},
    {label: "Speciality",value: "Mern Stack"},
    {label: "Focus",value: "Developing Scalable web-apps"},
  ]
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]"
  ]
  return (
    <section id='about' className='min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden'>
      <div className='absolute inset-0 pointer-events-none'>
        {glows.map((c,i)=> (
          <div key={i} className={`absolute rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}/>
        ))}
      </div>
      <div className='relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12'>
        <motion.div 
        initial={{
          opacity: 0,y:24
        }}
        whileInView={{
          opacity: 1,
          y:0
        }}
        transition={{
          duration:0.6
        }}
        viewport={{
          once:true,amount:0.4
        }}
        className='flex flex-col md:flex-row items-center md:items-stretch gap-8'>
          <motion.div 
          whileHover={{scale:1.02}}
          transition={{type:"spring",stiffness:200,damping:18}}
          className='relative  w-40 h-40 md:w-50 md:h-50 rounded-2xl overflow-hidden shadow-2xl border-3 border-[#1cd8d2]/25 bg-linear-to-br from-[#1cd8d2]/20 to-[#302b63]/20'
          >
            <img src="boy.jpg" alt="profile" className='absolute inset-0' />
          </motion.div>
          <div className='flex-1 flex flex-col justify-center text-center md:text-left  '>
          <h2 className='text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] '>
            Abhishek Chauhan
          </h2>
          <p className='mt-2 text-lg sm:text-xl text-white/90 font-semibold'>
            Mern stack Developer
          </p>
          <p className='mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl'>
            I build scalable, modern applications with a strong focus on clean architecture, delightful UX, and performance. My toolkit spans Java, React, Nodejs, Mongodb, MySQL, Tailwind CSS and RestfulAPI- bringing ideas to life from concept to production with roboust APIs and smooth interfaces.
          </p>
          <div className='mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl'>
            {stats.map((item,i)=> (
              <motion.div key={i}
              initial={{
                opacity:0,y:10
              }} 
              whileInView={{
                opacity:1,y:0
              }}
              transition={{
                delay: 0.05*i,duration:0.4
              }}
              viewport={{once:true,amount:0.3}}
              className='rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center'>
                <div className='text-sm text-gray-400'>{item.label}</div>
                <div className='text-base font-semibold'>{item.value}</div>
              </motion.div>
            ))}
          </div>
          <div className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start'>
            <a href="#projects" className='inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hove:bg-gray-200 transition'>View Projects</a>
            <a href="#contact" className='inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition'>Get in Touch</a>
          </div>
        </div>
        </motion.div>
        <motion.div 
        initial={{
          opacity:0,x:30
        }}
        whileInView={{
          opacity:1,x:0
        }}
        transition={{
          duration: 0.6
        }}
        viewport={{
          once:true,amount:0.4
        }}
        className='text-center md:text-left'>
          <h3 className='text-2xl sm:text-3xl font-bold mb-3'>About Me</h3>
          <p className='text-gray-300 leading-relaxed text-base sm:text-lg'>As MERN Stack developers, I'm passionate about crafting fast, resilient, and scalable applications. </p>
          <p className='mt-4 text-gray-400 text-base sm:text-lg'>I combine clean code, modern tools, and thoughtful design to build solutions that last.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default About