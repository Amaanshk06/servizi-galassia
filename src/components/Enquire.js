// EnquireNowPopup.js
import React from 'react';
import { usePopup } from './PopupContext';

const EnquireNowPopup = () => {
  const { visible, closePopup, submitPopup } = usePopup();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitPopup();
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
          <button className="close-btn" onClick={closePopup} aria-label="Close popup">
            &times;
          </button>
        </div>
        <form className='enquire-form' onSubmit={handleSubmit}>
          <input className="enquire-input" type="text" placeholder="Company Name" required />
          <input className="enquire-input" type="email" placeholder="Email Address" required />
          <input className="enquire-input" type="tel" placeholder="Phone number" required />
          <input className="enquire-input" type="text" placeholder="Messages" />
          <button className="chat enquire-btn" type="submit">SUBMIT NOW</button>
        </form>
      </div>
    </>
  );
};

export default EnquireNowPopup;