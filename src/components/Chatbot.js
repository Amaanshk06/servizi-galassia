import React, { useState } from "react";

function Chatbot({ onClose }) {
 const qaOptions = {
  warranty: {
    label: "Warranty",
    questions: [
      {
        question: "How to claim warranty?",
        answer: "Email us at support@sgexample.com with your order ID and issue.",
      },
      {
        question: "What's included in the warranty?",
        answer: "It covers hardware issues for 1 year. No physical/water damage.",
      },
      {
        question: "How to check warranty status?",
        answer: "Contact support with your order ID. We’ll verify it for you.",
      },
      {
        question: "Does warranty cover battery issues?",
        answer: "Yes, battery issues within 1 year are covered under warranty.",
      },
      {
        question: "Can I extend my warranty?",
        answer: "Currently, we do not offer extended warranties beyond 1 year.",
      },
    ],
  },
  delivery: {
    label: "Delivery",
    questions: [
      {
        question: "How long does delivery take?",
        answer: "Delivery takes 3–7 working days based on your location.",
      },
      {
        question: "How can I track my order?",
        answer: "You’ll get tracking info by SMS/email after dispatch.",
      },
      {
        question: "Can I change my delivery address?",
        answer: "Yes, before it ships. Contact support ASAP to update it.",
      },
      {
        question: "Do you deliver on weekends?",
        answer: "Deliveries are usually made on weekdays only.",
      },
      {
        question: "Is contactless delivery available?",
        answer: "Yes, you can opt for contactless delivery during checkout.",
      },
    ],
  },
  payment: {
    label: "Payment",
    questions: [
      {
        question: "Can I get a GST invoice?",
        answer: "Yes. Email your GSTIN and order ID to receive the invoice.",
      },
      {
        question: "Payment failed. What should I do?",
        answer: "Wait 24 hours or contact support if the amount was deducted.",
      },
      {
        question: "EMI not showing?",
        answer: "Make sure you’re using an eligible credit card at checkout.",
      },
      {
        question: "Do you accept UPI payments?",
        answer: "Yes, UPI payments are accepted via our payment gateway.",
      },
      {
        question: "Is my payment information secure?",
        answer: "We use SSL encryption to keep your payment data safe.",
      },
    ],
  },
  support: {
    label: "Support",
    questions: [
      {
        question: "How do I contact support?",
        answer: "You can chat here or email support@sgexample.com anytime.",
      },
      {
        question: "How to report a product issue?",
        answer: "Email support with order ID and problem details (pics help too).",
      },
      {
        question: "Can I cancel my order?",
        answer: "If it hasn't shipped, yes. Contact us immediately with your order ID.",
      },
      {
        question: "What are your support hours?",
        answer: "Support is available Monday to Saturday, 9 AM to 7 PM.",
      },
      {
        question: "Do you offer live phone support?",
        answer: "Currently, support is via chat and email only.",
      },
    ],
  },
};


  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today? Choose a topic:" },
  ]);
  const [stage, setStage] = useState("category");
  const [currentCategory, setCurrentCategory] = useState(null);
  const [showPostAnswerOptions, setShowPostAnswerOptions] = useState(false);

  const handleCategoryClick = (categoryKey) => {
    const category = qaOptions[categoryKey];
    setMessages((prev) => [
      ...prev,
      { from: "user", text: category.label },
      { from: "bot", text: `What would you like to know about ${category.label}?` },
    ]);
    setCurrentCategory(categoryKey);
    setStage("questions");
    setShowPostAnswerOptions(false);
  };

  const handleQuestionClick = (question, answer) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: question },
      { from: "bot", text: answer },
    ]);
    setStage("postAnswer");
    setShowPostAnswerOptions(true);
  };

  const handleAnotherQuestion = () => {
    setMessages((prev) => [
      ...prev,
      { from: "bot", text: "Sure! Please choose a topic:" },
    ]);
    setStage("category");
    setCurrentCategory(null);
    setShowPostAnswerOptions(false);
  };

  const handleNoThanks = () => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: "No thanks" },
      { from: "bot", text: "Alright! If you need anything else, feel free to chat again. 👋" },
    ]);
    setTimeout(onClose, 1500); // close chatbot after 1.5s
  };

  const renderOptions = () => {
    if (stage === "category") {
      return Object.entries(qaOptions).map(([key, val]) => (
        <button key={key} className="chatbot-btn" onClick={() => handleCategoryClick(key)}>
          {val.label}
        </button>
      ));
    } else if (stage === "questions" && currentCategory) {
      return qaOptions[currentCategory].questions.map((item, idx) => (
        <button
          key={idx}
          className="chatbot-btn"
          onClick={() => handleQuestionClick(item.question, item.answer)}
        >
          {item.question}
        </button>
      ));
    } else if (stage === "postAnswer" && showPostAnswerOptions) {
      return (
        <>
          <button className="chatbot-btn" onClick={handleAnotherQuestion}>
            Ask another question
          </button>
          <button className="chatbot-btn" onClick={handleNoThanks}>
            No thanks
          </button>
        </>
      );
    }
    return null;
  };

  return (
    <div className="chatbot-overlay">
      <div className="chatbot-box">
        <button className="bot-close-btn" onClick={onClose}>
          ✖
        </button>
        <h3>Chat With Ust</h3>
        <div className="chat-scroll">
          {messages.map((msg, idx) => (
            <p
              key={idx}
              className={msg.from === "bot" ? "chat-answer" : "chat-question"}
              style={{ textAlign: msg.from === "bot" ? "left" : "right" }}
            >
              {msg.from === "bot" ? `Bot: ${msg.text}` : `You: ${msg.text}`}
            </p>
          ))}
          <div className="chat-options">{renderOptions()}</div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
