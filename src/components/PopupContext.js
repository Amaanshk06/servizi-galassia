// PopupContext.js
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [manualTriggered, setManualTriggered] = useState(false);
  const timeoutRef = useRef(null);

  // Auto show after 5s unless manually triggered
  useEffect(() => {
    if (!manualTriggered) {
      timeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, 5000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [manualTriggered]);

  const openPopup = () => {
    setManualTriggered(true);
    setVisible(true);
    clearTimeout(timeoutRef.current);
  };

  const closePopup = () => {
    setVisible(false);
    clearTimeout(timeoutRef.current);
    if (!submitted) {
      timeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, 20000);
    }
  };

  const submitPopup = () => {
    setSubmitted(true);
    setVisible(false);
    clearTimeout(timeoutRef.current);
  };

  return (
    <PopupContext.Provider value={{ visible, openPopup, closePopup, submitPopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);