import React, { useRef } from 'react'
import intro from "../videos/Intro.mp4"
import "../pages/Opening.css"
import { useNavigate } from 'react-router-dom';

function Intro() {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/isglobby");
  };
  const videoRef = useRef(null);
  const handleSkip = () => {
    videoRef.current.pause();
    navigate("/isglobby");
  };
  localStorage.setItem('lastVisitedPage', window.location.href);
  return (
    <div> 
        <video controls={false} muted autoPlay={true} preload="auto"  className="videos" onEnded={handleVideoEnd}  ref={videoRef}>
        <source src={intro} type="video/mp4" />
      </video>
      <button className="skip-btn" onClick={handleSkip}>Skip</button>
      
    </div>
  )
}

export default Intro
