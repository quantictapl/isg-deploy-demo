import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, resetUserSession } from "../service/AuthService";
import "../pages/Opening.css";
import opening from "../videos/DroneShot.mp4";

function Opening() {
  const user = getUser();
  const name = user !== "undefined" && user ? user.name : "";
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    navigate("/intro");
  };

  const handleSkip = () => {
    videoRef.current.pause();
    navigate("/intro");
  };

  const logoutHandler = () => {
    resetUserSession();
    navigate("/");
  };
  localStorage.setItem('lastVisitedPage', window.location.href);
  return (
    <div className="opening-container">
      <video
        ref={videoRef}
        controls={false}
        muted
        autoPlay
        preload="auto"
        className="videos"
        onEnded={handleVideoEnd}
      >
        <source src={opening} type="video/mp4" />
      </video>
      <button className="skip-btn" onClick={handleSkip}>Skip</button>
    </div>
  );
}

export default Opening;
