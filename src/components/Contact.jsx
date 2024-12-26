import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaInstagram,FaGithub  } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <section id="contact" className="h-[40vh] bg-gradient-to-b from-[#020202] to-[#101010] p-10 flex flex-col justify-center items-center">
       <Helmet>
    <title>Malavika M | Software Developer</title>
    <meta name="description" content="Portfolio of Malavika M, a skilled Software Developer." />
    <meta name="keywords" content="Malavika m, Software Developer, Web Developer" />
    
  </Helmet>
      <h1 className="text-2xl font-light text-orange-400 mb-2">Get in Touch</h1>
      <h1 className="lg:text-6xl text-xl poppins-bold  text-white mb-10">Contact Me</h1>
      
      <motion.div
        className="flex gap-8 bg-slate-800 px-9 py-2 rounded-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* LinkedIn */}
        <motion.a
          href="http://linkedin.com/in/malavika-m-2360b430a"
          className="text-white text-4xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaLinkedin className="hover:text-blue-400 transition-colors duration-300" />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href=""
          className="text-white text-4xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaInstagram className="hover:text-pink-400 transition-colors duration-300" />
        </motion.a>
        <motion.a
          href="http://github.com/malavikam01"
          className="text-white text-4xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaGithub className="hover:text-yellow-400 transition-colors duration-300" />
        </motion.a>

        {/* Email */}
        <motion.a
          href="malavikaa0107@gmail.com"
          className="text-white text-4xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaEnvelope className="hover:text-yellow-400 transition-colors duration-300" />
        </motion.a>
      </motion.div>
      <p className='text-gray-400 py-5'>Portfolio last update on 2024</p>
    </section>
  );
};

export default Contact;
