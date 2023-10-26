import React, { useEffect } from 'react';

const HideVRButton = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .a-enter-vr-button {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default HideVRButton;
