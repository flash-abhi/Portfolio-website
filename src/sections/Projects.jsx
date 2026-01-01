import { motion } from "framer-motion";

const projects = [
  {
    title: "Talent IQ",
    description: "Collaborative coding platform with real-time editor, video chat, and multi-language support.",
    image: "talent-iq-desktop.png",
    live: "https://talent-iq-beta.vercel.app/",
    github: "https://github.com/flash-abhi/Talent-IQ",
  },
  {
    title: "Virtual courses",
    description: "Smart learning platform with AI-powered recommendations and progress tracking.",
    image: "virtual-courses.png",
    live: "https://lms-website-1-fxb0.onrender.com/",
    github: "https://github.com/flash-abhi/LMS-Website",
  },
  {
    title: "Chatify",
    description: "Scalable MERN chatting website with secure connection and secure chat.",
    image: "chatify.png",
    live: "https://chatify-frontend-new.onrender.com/",
    github: "https://github.com/flash-abhi/Chatify",
  },
  {
    title: "Ecommerce",
    description: "Scalable MERN ecommerce website with secure payment gateway.",
    image: "ecommerce.png",
    live: "https://ecommerce-frontend-qz0p.onrender.com",
    live2: "https://ecommerce-admin-0ugr.onrender.com",
    github: "https://github.com/flash-abhi/Ecommerce-Website",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full py-20 bg-black text-white overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500">
          Projects
        </h2>
        <p className="mt-3 text-white/70">
          Some things I’ve built recently
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative rounded-2xl bg-white/5 backdrop-blur border border-white/10 overflow-hidden hover:border-teal-400/40 transition"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-400">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-5 flex gap-4">
                <a
                  href={project.live}
                  className="px-4 py-2 rounded-lg bg-teal-500 text-black font-medium hover:bg-teal-400 transition"
                >
                  Live
                </a>
               { project?.live2 && <a
                  href={project.live2}
                  className="px-4 py-2 rounded-lg bg-teal-500 text-black font-medium hover:bg-teal-400 transition"
                >
                  Admin
                </a>}
                <a
                  href={project.github}
                  className="px-4 py-2 rounded-lg border border-white/20 hover:border-teal-400 hover:text-teal-400 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
