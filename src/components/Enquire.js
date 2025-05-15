import React, { useEffect, useRef, useState } from 'react';

const EnquireNowPopup = () => {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef(null);

  // Show popup 5 seconds after page load
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const startReopenTimer = () => {
    if (!submitted) {
      timeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, 20000);
    }
  };

  const handleClose = () => {
    setVisible(false);
    clearTimeout(timeoutRef.current);
    startReopenTimer();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVisible(false);
    setSubmitted(true); // Prevent further popups
    clearTimeout(timeoutRef.current);
  };

  return (
    <>
      <div className={`overlayE ${visible ? 'show' : ''}`} />
      <div
        className={`popup ${visible ? 'show' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquire-now-title"
      >
        <div className="popup-header">
          <h2 id="enquire-now-title">ENQUIRE NOW</h2>
          <button className="close-btn" onClick={handleClose} aria-label="Close popup">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Company Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone number" />
          <input type="text" placeholder="Messages" />
          <button className="chat enquire-btn" type="submit">SUBMIT NOW</button>
        </form>
      </div>
    </>
  );
};

export default EnquireNowPopup;