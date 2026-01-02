import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-r from-emerald-900/40 via-blue-900/40 to-purple-900/40 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white">
        {/* Name */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
          Abhishek Chauhan
        </h2>

        {/* Gradient underline */}
        <div className="mx-auto mt-4 h-0.75 w-24 bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-500 rounded-full" />

        {/* Social icons */}
        <div className="flex justify-center gap-6 mt-8 text-white/70">
          <a
            target="_blank"
            href="https://github.com/flash-abhi"
            className="hover:text-white transition"
            aria-label="X"
          >
            <FaGithub/>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abhishek-chauhan-2745b0246/"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin/>
          </a>
        </div>

        {/* Quote */}
        <p className="mt-8 text-white/60 italic text-sm">
          “Success is when preparation meets opportunity.”
        </p>

        {/* Copyright */}
        <p className="mt-4 text-white/40 text-xs">
          © {new Date().getFullYear()} Abhishek Chauhan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
