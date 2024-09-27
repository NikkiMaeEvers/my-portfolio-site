import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="hero h-screen">
      <div className="hero-content text-left">
        <motion.div
          className="max-w-md"
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
          animate={{ opacity: 1, y: 0 }}  // Fade in and slide up
          transition={{ duration: 1.2, ease: "easeOut" }}  // Smooth and slow transition
        >
          <motion.p 
            className="py-6"
            initial={{ opacity: 0, x: -50 }}  // Fade in and slide from the left
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1 
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}  // Start hidden and above
            animate={{ opacity: 1, y: 0 }}  // Fade in and move down to position
            transition={{ delay: 0.4, duration: 1 }}
          >
            Nikki Mae Evers
          </motion.h1>
          
          <motion.p 
            className="py-6"
            initial={{ opacity: 0, y: 50 }}  // Slide in from the bottom
            animate={{ opacity: 1, y: 0 }}  // Move to the original position
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            A recent Master's graduate in AI with a passion to work on AI and data science projects with a positive impact. I'm especially interested in the intersections of technology with psychology and art, and am always eager to learn new things!
          </motion.p>
          
          <motion.button
            className="btn btn-accent btn-outline"
            whileHover={{ scale: 1.1 }}  // Slightly grow on hover
            whileTap={{ scale: 0.95 }}  // Shrink slightly on click
            initial={{ opacity: 0, y: 50 }}  // Start hidden below
            animate={{ opacity: 1, y: 0 }}  // Move to the original position
            transition={{ delay: 0.8, duration: 1 }}  // Delay so it animates last
            >
            Get in touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
