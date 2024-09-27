import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const About = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        
        {/* Left side: Picture */}
        <motion.div
          className='mb-8 lg:mb-0'
          initial={{ opacity: 0, x: -50 }}  // Image fades in from the left
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/IMG-20240502-WA0051__01.jpg" 
            alt="Image of me"
            width={922}
            height={1229}
            className="rounded-full"
            sizes='25vw'
          />
        </motion.div>

        {/* Right side: Text and button */}
        <motion.div
          className='p-10'
          initial={{ opacity: 0, x: 50 }}  // Text fades in from the right
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold">About Me</h1>
          
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            I am a recent graduate with a Master’s degree in Artificial Intelligence. With a solid theoretical foundation, my experience spans from working on data science projects to collaborating on conversational agents and recommender systems, to teaching.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            I have a deep interest in mental health, psychology, and nutrition, and throughout my studies, including my exchange in Berlin, I took psychology and neuroscience courses that broadened my understanding of the mind and behaviour. I enjoy exploring how technology, especially AI, can intersect with mental health, well-being and can aid in creativity.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            I love working on creative and impactful projects, always looking to apply my skills to meaningful challenges. I am a quick learner and love the process of learning and growing.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            In my free time, I enjoy organizing storytelling events, bouldering, and working on personal creative projects like sewing, painting, and experimenting with fashion and creative makeup.
          </p>

          <Link href="/resume" className="mt-6 btn btn-primary btn-outline">
            View Resume
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
