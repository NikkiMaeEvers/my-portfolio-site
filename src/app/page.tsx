import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">Nikki Mae Evers</h1>
        <p className="text-xl text-gray-600 mb-8">
          MSC Artificial Intelligence
        </p>
      </section>

      {/* About Me Section */}
      <section className="max-w-3xl text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          I am a recent graduate with a Master’s degree in Artificial Intelligence. With a solid theoretical foundation, my experience spans from working on data science projects to collaborating on 
          conversational agents and recommender systems, to teaching.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          I have a deep interest in mental health, psychology, and nutrition, and throughout my studies, including my exchange in Berlin, I 
          took psychology and neuroscience courses that broadened my understanding of the mind and behaviour. 
          I enjoy exploring how technology, especially AI, can intersect with mental health, well-being and can aid in creativity.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          I love working on creative and impactful projects, always looking to apply my skills to meaningful challenges. I am a quick learner and love the process of learning and growing.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          In my free time, I enjoy organizing storytelling events, bouldering, and working on personal creative 
          projects like sewing, painting, and experimenting with fashion and creative makeup.
        </p>

        <div className="mt-6 space-x-4">
          <Link href="/resume" className="btn btn-primary ">
            View Resume
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">Key Skills</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
            Artificial Intelligence
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
            Machine Learning
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
            JavaScript / TypeScript
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
            React.js
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
            Python
          </span>
        </div>
      </section>

      {/* Interests Section */}
    </div>
  );
}
