import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const ResumeTimeline = () => {
  // Define a common animation variant for timeline items
  const timelineVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-accent">
      {/* Research Assistant at BLISS */}
      <motion.li
        initial="hidden"
        whileInView="visible"
        variants={timelineVariant}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        viewport={{ once: true }}
      >
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">February 2023 - April 2023</time>
          <div className="text-lg font-black">Research Assistant - Conversational Agent ‘BLISS’</div>
          <p>
            Collaborated on a conversational agent that encourages people to open up to the chatbot about difficult topics. 
            Tasks included making orthographic transcriptions, manual annotations, and running experiments.
          </p>
          <p>Radboud University, Nijmegen, the Netherlands</p>
        </div>
        <hr />
      </motion.li>

      {/* Data Science Intern */}
      <motion.li
        initial="hidden"
        whileInView="visible"
        variants={timelineVariant}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        viewport={{ once: true }}
      >
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">March 2021 - August 2021</time>
          <div className="text-lg font-black">Data Science Intern</div>
          <p>
            Worked on a generic recommender model for chat services of telecom companies in the departments of Engineering and Research and Development.
          </p>
          <p>Deepdesk, Amersfoort, the Netherlands</p>
        </div>
        <hr />
      </motion.li>

      {/* Junior Software Engineer */}
      <motion.li
        initial="hidden"
        whileInView="visible"
        variants={timelineVariant}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        viewport={{ once: true }}
      >
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">June 2020 - April 2021</time>
          <div className="text-lg font-black">Junior Software Engineer</div>
          <p>
            Worked on programming outputs for letters, emails, and overviews of policies and testing for an insurance and pension technology company.
          </p>
          <p>Keylane, Utrecht, the Netherlands</p>
        </div>
        <hr />
      </motion.li>

      {/* Teaching Assistant */}
      <motion.li
        initial="hidden"
        whileInView="visible"
        variants={timelineVariant}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        viewport={{ once: true }}
      >
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">Sept 2018 - Feb 2019</time>
          <div className="text-lg font-black">Teaching Assistant - (Advanced) Logic</div>
          <p>
            Conducted seminars, graded assignments, and provided support for the courses Introduction to Logic and Advanced Logics for Artificial Intelligence.
          </p>
          <p>Utrecht University, Utrecht, the Netherlands</p>
        </div>
        <hr />
      </motion.li>

      {/* Bootcamp Instructor */}
      <motion.li
        initial="hidden"
        whileInView="visible"
        variants={timelineVariant}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        viewport={{ once: true }}
      >
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">February 2023 - April 2023</time>
          <div className="text-lg font-black">Bootcamp Instructor - Fullstack Webdev</div>
          <p>
            Led practical sessions and created exercises for teaching women+ how to code in a 9-month Fullstack Web Development Accelerator.
          </p>
          <p>Startsteps, Berlin, Germany</p>
        </div>
      </motion.li>
    </ul>
  );
};

export default ResumeTimeline;
