import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Skill Encoder pvt. Limited",
    year: "2025",
    description:
      "Built robust and scalable applications using modern technologies and best practices.",
  },
  
];

const Experience = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Horizontal line growth
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-black text-white"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <h2 className="text-center text-4xl font-bold mb-40">Experience</h2>

        {/* Timeline */}
        <div className="relative w-[80%] mt-40 mx-auto">
          {/* Base line */}
          <div className="h-0.5 bg-white/20 w-full relative" />

          {/* Animated line */}
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-0 left-0 h-0.5 bg-white"
          />

          {/* Experience Cards */}
          {experiences.map((exp, index) => {
            const start = index / experiences.length;
            const end = (index + 1) / experiences.length;

            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0, 1]
            );

            const y = index % 2 === 0 ? -120 : 120;

            return (
              <motion.div
                key={index}
                style={{ opacity }}
                className={`absolute ${
                  index % 2 === 0 ? "-top-42.5" : "top-5 left-100"
                }`}
              >
                <motion.div
                  initial={{ y, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-65 bg-[#0f172a] border border-white/10 rounded-xl p-4 shadow-lg"
                  style={{
                    left: `${start * 100}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <p className="text-sm text-white/70">
                    {exp.company} • {exp.year}
                  </p>
                  <p className="text-sm mt-2 text-white/80">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
