import React, { useState } from 'react';

const Education = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State for selected card

  const educationData = [
    {
      title: "Bachelor of Science in Artificial Intelligence",
      university: "Utrecht University, the Netherlands",
      period: "2016 - 2019",
      description: `Track: Reasoning & Language
                    Minor: Computer Science
                    Thesis: "The Perfect in Swedish Dialogue"`,
    },
    {
      title: "Master of Science in Artificial Intelligence",
      university: "Radboud University, the Netherlands",
      period: "2019 - 2023",
      description: `Specialization: Intelligent Technology
                    Thesis: "Enhancing a Conversational Agent with Social Cues"`,
    },
    {
      title: "Semester Abroad - Freie Universität, Berlin",
      university: "Freie Universität, Berlin, Germany",
      period: "2021 - 2022",
      description: `Courses: Social and Affective Neuroscience, Health Psychology, Statistics`,
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
                {/* Period text now has the text-primary class */}
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
            <h3 className="font-bold text-lg text-primary">{educationData[selectedCard].title}</h3>
            <p className="py-4">{educationData[selectedCard].university}</p>
            <p className="py-4 text-primary">{educationData[selectedCard].period}</p>
            <p>{educationData[selectedCard].description}</p>
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
