import React, { useState } from 'react';
import { BiRefresh } from 'react-icons/bi';
import './componentcss/Captcha.css';
import GenerateCaptcha from '../helpers/GenerateCaptcha';

function Captcha({ onCaptchaValidChange }) {
  const [captchaText, setCaptchaText] = useState(GenerateCaptcha());
  const [userInput, setUserInput] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleRefresh = () => {
    setCaptchaText(GenerateCaptcha());
    setUserInput('');
    setIsCaptchaValid(false);
    // Notify the parent component about captcha validation
    onCaptchaValidChange(false);
  };

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setUserInput(userInput);
    setIsCaptchaValid(userInput === captchaText);
    // Notify the parent component about captcha validation
    onCaptchaValidChange(userInput === captchaText);
  };

  return (
    <div className='captcha-container'>
      <input
        className='user-captcha signup-username'
        type='text'
        placeholder='Enter CAPTCHA'
        value={userInput}
        onChange={handleInputChange}
      />
      <div className='captcha-img-container'>
        <p className='captcha-text'>
          {captchaText.split('').map((char, index) => (
            <span key={index} className={`captcha-char char${index}`}>{char}</span>
          ))}
        </p>
        <button className='refresh-button' onClick={handleRefresh}>
          <BiRefresh />
        </button>
      </div>
    </div>
  );
}

export default Captcha;
