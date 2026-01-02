import ParticlesBackground from '../components/ParticlesBackground'
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const Contact = () => {
 const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send message. Try again!");
          console.error(error);
        }
      );
  };

  return (
    <section id='contact' className='w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10'>
      <ParticlesBackground/>
      <div className=' absolute top-0 left-[30%] md:left-[40%] lg:left-[45%]  text-center text-4xl font-bold'>Contact</div>
      <div className="w-full flex flex-wrap mt-30 gap-12">
        <motion.div className='w-full hidden lg:w-1/2 lg:flex justify-center'
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}}
        >
          <motion.img src="Astra.png" alt="contact" className='w-72 md:w-140 rounded-2xl shadow-lg object-cover'
          animate={{
            y:[0,-10,0]
          }}
          transition={{duration:2, repeat:Infinity,ease:"easeInOut"}}
          />
       </motion.div>
       <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 w-full lg:w-1/3 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6"
        >
          <div>
            <h2 className='text-2xl mb-6'>Let's work Together</h2>
            <label className="block text-sm mb-2">Your Name <span className='text-red-500 text-lg align-middle'>*</span></label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-[#1cd8d2]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email Address<span className='text-red-500 text-lg align-middle'>*</span></label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-[#1cd8d2]"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message<span className='text-red-500 text-lg align-middle'>*</span></label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-[#1cd8d2]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] font-semibold hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
        </div>
    </section>
  )
}

export default Contact