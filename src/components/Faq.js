import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'What types of products do you offer at A&T Services Inc.?',
    answer:
      'We offer high-quality refurbished laptops, desktops, and IT equipment, available at affordable prices. All of our products undergo rigorous testing to ensure optimal performance and reliability.',
  },
  {
    question: 'Are your refurbished laptops and desktops covered by a warranty?',
    answer:
      'Yes, all of our refurbished computers and laptops come with a warranty. We ensure that our products meet international quality standards, and you’ll receive the peace of mind that comes with our warranty coverage.',
  },
  {
    question: 'What is the process for receiving technical support?',
    answer:
      'Our support team is available 24/7 to assist with any technical issues you may encounter. Simply reach out to us via phone, email, or remote support, and our skilled technicians will guide you through the troubleshooting process or provide necessary repairs.',
  },
  {
    question: 'What does the Annual Maintenance Contract (AMC) cover?',
    answer:
      'Our AMC service ensures that your computers and IT systems receive regular maintenance to avoid breakdowns and extend their lifespan. It includes system checks, hardware repairs, software updates, and troubleshooting.',
  },
  {
    question: 'How can I purchase a refurbished laptop or desktop?',
    answer:
      'You can purchase our refurbished systems directly from us, either by contacting our sales team or through our online platform. We offer a range of laptops and desktops for different business needs at competitive prices.',
  },
  {
    question: 'Do you provide emergency IT support?',
    answer:
      'Yes, we offer emergency IT support with on-site service for any critical hardware or software issues. We are committed to resolving IT breakdowns promptly to minimize downtime for your business.',
  },
  {
    question: 'How can I get a quote for your services or products?',
    answer:
      'Getting a quote is easy! Simply reach out to our sales team with your requirements, and we’ll provide you with a customized quote for your needs, whether it’s for purchasing equipment, renting, or technical support services.',
  },
  {
    question: 'How do I contact A&T Services Inc. for support or inquiries?',
    answer:
      'You can reach us by phone, email, or through our website’s contact form. Our customer support team is always available to assist you with any inquiries or technical issues.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container" id='faq'>
      <h1 className="faq-title">FAQ'S</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="question"
            role="button"
            tabIndex={0}
            aria-expanded={activeIndex === index}
            onClick={() => toggleAnswer(index)}
            onKeyDown={(e) =>
              (e.key === 'Enter' || e.key === ' ') && toggleAnswer(index)
            }
          >
            <div className="question-text">
              <span className="q-icon">Q</span>
              <span>{item.question}</span>
            </div>
            {activeIndex === index ? (
              <FaMinus className="icon" />
            ) : (
              <FaPlus className="icon" />
            )}
          </div>

          {/* Smooth transition wrapper */}
          <div className={`answer-wrapper ${activeIndex === index ? 'open' : ''}`}>
            <p className="answer">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;