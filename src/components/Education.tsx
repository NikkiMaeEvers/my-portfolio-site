import React, { useState } from 'react';

const Education = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State for selected card

  const TAGS = {
    AI: "AI",
    CS: "Minor CS",
    TRACK: "Track"
  };

  const educationData = [
    {
      title: "Bachelor of Science in Artificial Intelligence",
      university: "Utrecht University, the Netherlands",
      period: "2016 - 2019",
      
      
      
      description: {
      track: "Reasoning & Language",
      minor: "Computer Science",
      thesis: "The Perfect in Swedish Dialogue",
      thesisGrade: "8.0"
      },
      courses: [
        // Basispakket KI
        { name: "Introduction to Logic", tags: [TAGS.AI] },
        { name: "Logic for AI", tags: [TAGS.AI] },
        { name: "Introduction to Cognitive Science", tags: [TAGS.AI] },
        { name: "Modeling and Programming", tags: [TAGS.AI] },
        { name: "Mathematics for AI", tags: [TAGS.AI] },
        { name: "Linguistics for AI", tags: [TAGS.AI] },
        { name: "Computational Linguistics", tags: [TAGS.AI] },
        { name: "Introduction to Adaptive Systems", tags: [TAGS.AI] },
        { name: "Data Structures and Algorithms for AI", tags: [TAGS.AI] },
        { name: "Experimental Methods & Statistics", tags:[TAGS.AI] },
        { name: "Philosophy of Mind", tags: [TAGS.AI] },

        // Track
        { name: "Logical Complexity", tags: [TAGS.TRACK] },
        { name: "Semantics", tags: [TAGS.TRACK]  },
        { name: "Logical Grammars", tags: [TAGS.TRACK]  },
        { name: "Epistemology and Philosphy of Science for AI", tags: [TAGS.TRACK]  },

        // Declarative Programming
        { name: "Intelligent Systems", tags: ["Declarative Programming"] },

        // Cognition
        { name: "Applied Cognitive Psychology", tags: ["Cognition"] },

        // Electives
        { name: "Machine Learning", tags: ["Elective"] },
        { name: "Academic Speaking", tags: ["Elective"] },

        // Minor Informatica
        { name: "Modeling and System Development", tags: [TAGS.CS]},
        { name: "Languages and Compilers", tags: [TAGS.CS] },
        { name: "Web Technologies", tags: [TAGS.CS] },
        { name: "Computational Intelligence", tags: [TAGS.CS] },
      ]
    },
    {
      title: "Master of Science in Artificial Intelligence",
      university: "Radboud University, the Netherlands",
      period: "2019 - 2024",
      description: {
        Specialization: "Intelligent Technology",
        Thesis: "Enhancing a Conversational Agent with Social Cues: An Investigation into the Impact of Shared Identity and Goal Setting on ‘BLISS’",
        ThesisGrade: "8.5",
      },
      courses: [
        { name: "Text and Multimedia Mining", tags: [TAGS.CS]},
        { name: "Intro to Language and Speech Technology", tags: [TAGS.CS]},
        { name: "Machine Learning in Practice", tags: [TAGS.CS]},
        { name: "Intelligent Systems in Medical Imaging", tags: [TAGS.CS]},
        { name: "Neural Information Processing Systems", tags: [TAGS.CS]},
        { name: "Advanced Academic & Professional Skills", tags: [TAGS.CS]},
        { name: "Ethics for AI", tags: [TAGS.CS]},
        { name: "Cognitive Robotics", tags: [TAGS.CS]},
        { name: "Computer Graphics & Computer Vision", tags: [TAGS.CS]},
        { name: "Neuromorphic Computing ", tags: [TAGS.CS]},
      ],
      publication: {
        title: "Enhancing a Conversational Agent with Social Cues: An Investigation into the Impact of Shared Identity and Goal‑Setting",
        authors: "Nikki Mae Evers, Iris Hendrickx",
        link: "https://ceur-ws.org/Vol-3957/SOCIALIZE-paper04.pdf"
      }
    },
    {
      title: "Semester Abroad - Freie Universität, Berlin",
      university: "Freie Universität, Berlin, Germany",
      period: "2021 - 2022",
      description: {
      focusAreas: "Neuroscience, Psychology, German"
      },
      courses: [
      {name: "Affective and Social Neuroscience I", tags: ["Neuroscience"]},
      {name: "Information Processing and Consciousness", tags: ["Neuroscience"]},
      {name: "Multivariate Data Analysis: Computational Methods", tags: ["Psychology"]},
      {name: "Health Psychology: Social Relationships and Health", tags: ["Psychology"]},
      {name: "Language course German as a foreign language (level B1.2)", tags: ["German"]},
      {name: "Language course German as a foreign language (level B2.1)", tags: ["German"]}
      ]
    },
  ];

  const openModal = (index) => {
    setSelectedCard(index); // Set the card index for the modal
  };

  const closeModal = () => {
    setSelectedCard(null); // Close the modal
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-base-200">
      <h2 className="text-4xl font-bold mb-6">Education</h2>

      {/* Add padding using container class */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="card w-full bg-base-100 shadow-lg hover:shadow-2xl cursor-pointer transform hover:-translate-y-2 transition-transform"
              onClick={() => openModal(index)} // Trigger modal on click
            >
              <div className="card-body">
                <h3 className="card-title text-accent">{education.title}</h3>
                <p>{education.university}</p>
                <p className="text-primary">{education.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard !== null && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-accent">
              {educationData[selectedCard].title}
            </h3>
            <p className="py-4">
              {educationData[selectedCard].university}
            </p>
            <p className="py-4 text-primary">
              {educationData[selectedCard].period}
            </p>


            {/* Description Section */}
            <div className="mb-6 space-y-2">
              {/* dict is geen iterable in JS, dus gebruiken we helperfunctie Object.keys(obj) om een array van [key, value] te verkijgen */}
              {Object.entries(educationData[selectedCard].description).map(([key, value]) => (
                <p key={key} className="text-base leading-relaxed">
                  <span className="font-semibold capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}:
                  </span> {value}
                </p>
              ))}
            </div>

            {/* Publication Section */}
            {educationData[selectedCard].publication && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary mb-2">Publication</h4>
                <p className="text-sm mb-2">
                  <span className="font-semibold">Title:</span> {educationData[selectedCard].publication.title}
                </p>
                <p className="text-sm mb-2">
                  <span className="font-semibold">Authors:</span> {educationData[selectedCard].publication.authors}
                </p>
                <a
                  href={educationData[selectedCard].publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn  btn-ghost btn-outline btn-sm"
                >
                  📄 Read the paper
                </a>

                // TODO: Create a separate page for the publication
                // TODO: Embed the PDF of the paper using iframe on that page
                // TODO: Add above-text inspired by LinkedIn post
                // TODO: Make a button in the modal that links to this publication page

              </div>
            )}

            {/* Courses Section */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-primary mb-2">Courses</h4>
              <ul className="list-none space-y-2 text-sm">
                {educationData[selectedCard].courses.map((course, i) => (
                  <li key={i} className="flex flex-wrap items-center gap-2">
                    <span>{course.name}</span>
                    {course.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>

            

            <div className="modal-action">
              <button className="btn btn-primary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
