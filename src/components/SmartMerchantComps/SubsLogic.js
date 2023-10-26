import React, { useEffect, useState, useRef } from "react";
import "../componentcss/demovideo.css";
import demoAudio from "../../SmartMerchantAssets/videos/demoSpeech1.webm";
import demoTransparent from "../../SmartMerchantAssets/videos/dialog2.webm";
import benifits from "../../SmartMerchantAssets/videos/benifits.webm";
import { FaBullseye, FaPause, FaPlay } from "react-icons/fa";
import { BsFillSkipForwardFill } from "react-icons/bs";
import { BsFillSkipBackwardFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import demoAudio1 from "../../SmartMerchantAssets/videos/videoplayback.mp4";
import smartIntro from "../../SmartMerchantAssets/videos/Dialogs/smartintro.webm";
import smartIntroAudio from "../../SmartMerchantAssets/videos/Dialogs/smartintroAudio.mp4";
import supermarketVideo from "../../SmartMerchantAssets/videos/Dialogs/supermarket.webm";
import supermarketAudio from "../../SmartMerchantAssets/videos/Dialogs/supermarketAudio.mp4";
import benfitsDialogVideo from "../../SmartMerchantAssets/videos/Dialogs/benfitsDialog.webm";
import benifitsDialogAudio from "../../SmartMerchantAssets/videos/Dialogs/benifitsDialogAudio.mp4";
const subtitleVideos = [
  {
    audioSrc: smartIntroAudio,
    videoSrc: smartIntro,
  },
  {
    audioSrc: supermarketAudio,
    videoSrc: supermarketVideo,
  },
  {
    audioSrc: benifitsDialogAudio,
    videoSrc: benfitsDialogVideo,
  },
];

function SubsLogic({
  onPlayPauseClick,
  onSkipClick,
  isPlaying,
  onNextVideoClick,
  videoEnded,
  cameraRotationEnded,
  isTVVideoEnded,
  onTVvideoShouldPlay,
}) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const audioRef = useRef(null);
  const transparentVideoRef = useRef(null);
  const [ispreviousBtnDisabled, setIspreviousBtnDisabled] = useState(false);
  const dropDownTriggerRef=useRef(null);
  const dropDownOptionsRef=useRef(null);
  const marketRef=useRef(null);
  const benifitseRef=useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true)

  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // onTVVideoPlay();
  const handleDropdownClick = () => {
    
    setIsDropdownOpen((prevState) => !prevState);
    if (isDropdownOpen) {
      dropDownOptionsRef.current.classList.add("active");
      
    } else {
      dropDownOptionsRef.current.classList.remove("active");
    }
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !dropDownTriggerRef.current.contains(event.target) &&
        !dropDownOptionsRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(true);
        dropDownOptionsRef.current.classList.remove("active");
      }
    };
  
    document.addEventListener("click", handleClickOutside);
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {

    const marketOption = marketRef.current;
    const benifitsOption = benifitseRef.current;

  
    // Remove existing classNames
    marketOption.classList.remove('dropdown-current');
    benifitsOption.classList.remove('dropdown-current');

  
    // Check the currentDivisionIndex and add classNames accordingly
    if (currentVideoIndex===1) {
      marketOption.classList.add('dropdown-current');
    } else if (currentVideoIndex===2) {
      benifitsOption.classList.add('dropdown-current');
    }
  }, [currentVideoIndex]);
  const navigate = useNavigate();
  const handleSkipClick = () => {
    onSkipClick(); // Call the skip callback function from the parent
    setVideoVisible(false);
    setShowPlayButton(false);
    const nextVideoIndex = currentVideoIndex + 1;
    if (nextVideoIndex < subtitleVideos.length ) {
      setCurrentVideoIndex(nextVideoIndex);
      if(nextVideoIndex===2){
        onNextVideoClick(1);
      }
      else{
        onNextVideoClick(nextVideoIndex);
      }
       // Call the callback function with the next video index
    } else {
      navigate("/smartmerchant/appdemo");
      // All videos have been played, handle the end state here
      // You may want to navigate somewhere or show a message, etc.
    }
  };
  const handlePreviousClick = () => {
    onSkipClick(); // Call the skip callback function from the parent
    
    const previousVideoIndex = currentVideoIndex - 1;
    // setIspreviousBtnDisabled(false)
    if (previousVideoIndex>=1) {
      setVideoVisible(false);
      setShowPlayButton(false);
      setCurrentVideoIndex(previousVideoIndex);
      if(previousVideoIndex===1){
        onNextVideoClick(0);
      }
      else if(previousVideoIndex===2)
        onNextVideoClick(1);
      // setIspreviousBtnDisabled(false)
      
      console.log(previousVideoIndex)
     // Call the callback function with the next video index
    } else{
      setIspreviousBtnDisabled(true)
      // All videos have been played, handle the end state here
      // You may want to navigate somewhere or show a message, etc.
    }
  };
  useEffect(()=>{
    const handleNextSet = () => {
      onSkipClick(); // Call the skip callback function from the parent
      setVideoVisible(false);
      setShowPlayButton(false);
      const nextVideoIndex = currentVideoIndex + 1;
      if (nextVideoIndex < subtitleVideos.length ) {// changed
        setCurrentVideoIndex(nextVideoIndex);
        if(nextVideoIndex===2){
          onNextVideoClick(1)
        }
        else{
          onNextVideoClick(nextVideoIndex); // Call the callback function with the next video index
        }
    
      } else {
        navigate("/smartmerchant/appdemo");
        // All videos have been played, handle the end state here
        // You may want to navigate somewhere or show a message, etc.
      }
    };
    if(isTVVideoEnded){
       handleNextSet();
    }
    // else{
    //   onTVVideoPlay();
    // }
  },[currentVideoIndex, isTVVideoEnded, navigate, onNextVideoClick, onSkipClick])
  // const handleSmartDropDown = (event) => {
  //   const selectedValue = event.target.value;
  //   switch (selectedValue) {
  //     case "market":
  //       onSkipClick(); // Call the skip callback function from the parent
  //       setVideoVisible(false);
  //       setShowPlayButton(false);
  //       setCurrentVideoIndex(1);
  //       onNextVideoClick(0); // Call the callback function with the next video index
  //       break;
  //     case "benifits":
  //       onSkipClick(); // Call the skip callback function from the parent
  //       setVideoVisible(false);
  //       setShowPlayButton(false);
  //       setCurrentVideoIndex(2); //next Subs video
  //       onNextVideoClick(1);// next Tv Video
  //       break;
  //     case "appdemo":
  //       navigate("/smartmerchant/appdemo")
  //       break;
  //     default:
  //       // Handle default case or do nothing
  //       break;
  //   }
  // };
  const handleSmartDropDown = (event) => {
    const selectedValue = event.target.getAttribute("data-value");
    switch (selectedValue) {
      case "market":
        onSkipClick(); // Call the skip callback function from the parent
        setVideoVisible(false);
        setShowPlayButton(false);
        setCurrentVideoIndex(1);
        onNextVideoClick(0); // Call the callback function with the next video index
        break;
      case "benifits":
        onSkipClick(); // Call the skip callback function from the parent
        setVideoVisible(false);
        setShowPlayButton(false);
        setCurrentVideoIndex(2); //next Subs video
        onNextVideoClick(1);// next Tv Video
        break;
      case "appdemo":
        navigate("/smartmerchant/appdemo")
        break;
      default:
        // Handle default case or do nothing
        break;
    }
  };
useEffect(()=>{
   if(currentVideoIndex<=1){//changed
    setIspreviousBtnDisabled(true)
   }
   else{
    setIspreviousBtnDisabled(false)
   }
},[currentVideoIndex])


  useEffect(() => {
    const transparentVideoElement = transparentVideoRef.current;
  
    const playVideo = () => {
      transparentVideoElement.style.opacity = 1;
      transparentVideoElement.style.transform = "translateY(0)";
      transparentVideoElement.play();
    };
  
    const handleVideoEnd = () => {// changed to add the smartmerchant intro before the upermarketvideo
      if(currentVideoIndex<1){
        setCurrentVideoIndex(1)
        setVideoVisible(false);
        console.log("less than 1")
      }
      else if(currentVideoIndex>=1){
        setVideoVisible(false); // Hide the transparent video after it ends
        setShowPlayButton(true);
        onTVvideoShouldPlay();  //tvVideo should play right after the subsVideo(transparentVideo) ends
        //  videoEnded();
        console.log("more than 1");
      }
    };
  
    transparentVideoElement.addEventListener("ended", handleVideoEnd);
  
    if (cameraRotationEnded) {
      setVideoVisible(true);
      playVideo();
    }
  
    // Wait for cameraRotationEnded to become true
    let checkInterval = setInterval(() => {
      if (cameraRotationEnded) {
        clearInterval(checkInterval);
        setVideoVisible(true);
        playVideo();
      }
    }, 100);
  
    return () => {
      clearInterval(checkInterval);
      transparentVideoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, [currentVideoIndex, cameraRotationEnded]);
  useEffect(() => {
    if (videoEnded) {
      setShowPlayButton(false);
      
    }
  }, [videoEnded]);

  useEffect(() => {
    const audioElement = audioRef.current;
    const transparentVideoElement = transparentVideoRef.current;

    if (videoVisible) {
      audioElement.play();
    } else {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
    // if (typeof document.hidden !== "undefined") {
    //   // Add a visibility change event listener
    //   document.addEventListener("visibilitychange", handleVisibilityChange);
    // }
    
    // // Function to handle visibility change
    // function handleVisibilityChange() {
    //   if (document.hidden) {
    //     // The page is now hidden (user switched to a different tab or window)
    //     pauseExecution();
    //   } else {
    //     // The page is now visible again    
    //     resumeExecution();
    //   }
    // }
    
    // // Function to pause your code execution
    // function pauseExecution() {
    //   transparentVideoElement.pause();
    //   audioElement.pause();
    // }
    
    // // Function to resume your code execution
    // function resumeExecution() {
    //   transparentVideoElement.play();
    //   audioElement.play();
    // }

    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, [videoVisible]);
  console.log(showPlayButton);
  const handleNextVideo = () => {
   
    if (currentVideoIndex < subtitleVideos.length - 1  || isTVVideoEnded) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      onNextVideoClick(currentVideoIndex + 1);
   
      console.log(showPlayButton); // Call the callback function with the next video index
    }else if(currentVideoIndex===subtitleVideos.length-1){
    navigate("/smartmerchant/appdemo")

    } else {
      // All videos have been played, handle the end state here
      
    }
    
  };
  // console.log(videoEnded);
  console.log("tvVideo ended is",isTVVideoEnded);
 
  return (
    <>
      {/* <select
        defaultValue=""
        className="smart-dropdown"
        id="smart-app-dropdown"
        onChange={handleSmartDropDown}
      >
        <option value="none" disabled>
          Select Demo
        </option>
        <option value="market">Merchant Payments</option>
        <option value="benifits">ISG Benefits</option>
        <option value="appdemo">App Demonstration</option>
        
      </select> */}
      <div class="smart-dropdown">
          <div
            id="dropdown-trigger"
            ref={dropDownTriggerRef}
            class="smart-dropdown"
            onClick={handleDropdownClick}
          >
            <span className="smart-dropdown-title">Select Demo</span>
          </div>
          <div
            id="dropdown-options"
            ref={dropDownOptionsRef}
            class="dropdown-options"
            
          >
            <div
              id="market"
              ref={marketRef}
              class="dropdown-option option-odd"
              data-value="market"
              onClick={handleSmartDropDown}
            >
              Merchant Payment
            </div>
            <div
              id="benifits"
              ref={benifitseRef}
              class="dropdown-option option-even"
              data-value="benifits"
              onClick={handleSmartDropDown}
            >
              ISG Benefits
            </div>
            <div
              id="smartmerchant"
              class="dropdown-option option-odd"
              data-value="appdemo"
              onClick={handleSmartDropDown}
            >
              App Demonstration
            </div>
          </div>
        </div>
      <div className="demo-subs-container">
        {/* <button onClick={handlePreviousClick} className="next-video-btn" disabled={ispreviousBtnDisabled}>Next</button> */}
        <div className="demo-subs-main-container-smart-intro">
          <video
            id="subsVideo"
            ref={transparentVideoRef}
            src={subtitleVideos[currentVideoIndex].videoSrc}
            type="video/webm"
            muted
            controls={false}
            preload="auto"
            className="demo-subs"
            style={{
              visibility: videoVisible ? "visible" : "hidden",
              opacity: 0,
              transform: "translateY(100%)",
              transition: "opacity 0.5s, transform 0.5s",
            }}
          />
          <div className="next-button-container">
            {showPlayButton && (
              <div>
                <button className="subs-button" onClick={onPlayPauseClick}>
                  {isPlaying ? (
                    <>
                      <FaPause className="smart-icon" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <FaPlay className="smart-icon" />
                      <span>Play</span>
                    </>
                  )}
                </button>
                <button
                  onClick={handlePreviousClick}
                  className="subs-button skip"
                  disabled={ispreviousBtnDisabled}
                  style={{ display: ispreviousBtnDisabled ? "none" : "flex" }}
                >
                  <div className="button-interior">
                    <>
                      <BsFillSkipBackwardFill className="smart-icon previous-icon" />
                      <span>Prev</span>
                    </>
                  </div>
                </button>
                <button className="subs-button skip" onClick={handleSkipClick}>
                  <div className="button-interior">
                    <>
                      <BsFillSkipForwardFill className="smart-icon skip-icon" />
                      <span>Skip</span>
                    </>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>

        <video
          ref={audioRef}
          src={subtitleVideos[currentVideoIndex].audioSrc}
          type="video/webm"
          controls={false}
          preload="auto"
          className="demo-subs subs-audio"
        />
      </div>
    </>
  );
}

export default SubsLogic;
export function controlAnimation(model) {
  const subsVideo = document.getElementById('subsVideo');

  function startAnimation() {
    model.setAttribute('animation-mixer','clip:; loop: repeat; repetitions: Infinity;');
  }

  function stopAnimation() {
    model.removeAttribute('animation-mixer');
  }

  subsVideo.addEventListener('play', startAnimation);
  subsVideo.addEventListener('pause', stopAnimation);
  subsVideo.addEventListener('ended', stopAnimation);
}

// import React, { useEffect, useState, useRef } from 'react';
// import demoAudio from '../../SmartMerchantAssets/videos/demoSpeech1.webm';
// import demoTransparent from '../../SmartMerchantAssets/videos/dialog1.webm';
// import '../componentcss/demovideo.css';

// function SubsLogic({ onPlayPauseClick, onSkipClick, isPlaying }) {
//   const [showPlayButton, setShowPlayButton] = useState(false);
//   const [videoVisible, setVideoVisible] = useState(false);
//   const audioRef = useRef(null);
//   const transparentVideoRef = useRef(null);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const handleSkipClick = () => {
//     onSkipClick(); // Call the skip callback function from the parent
//     setVideoVisible(false);
//     setShowPlayButton(false);
//   };

//   useEffect(() => {
//     const transparentVideoElement = transparentVideoRef.current;

//     const playVideo = () => {
//       transparentVideoElement.style.opacity = 1;
//       transparentVideoElement.style.transform = 'translateY(0)';
//       transparentVideoElement.play();
//     };

//     const handleVideoEnd = () => {
//       setVideoVisible(false); // Hide the transparent video after it ends
//       setShowPlayButton(true);
//     };

//     transparentVideoElement.addEventListener('ended', handleVideoEnd);

//     // Delay playback by 5 seconds
//     const delayPlayback = setTimeout(() => {
//       setVideoVisible(true);
//       playVideo();
//     }, 5000);

//     return () => {
//       clearTimeout(delayPlayback);
//       transparentVideoElement.removeEventListener('ended', handleVideoEnd);
//     };
//   }, []);

//   useEffect(() => {
//     const audioElement = audioRef.current;
//     const transparentVideoElement = transparentVideoRef.current;

//     if (videoVisible) {
//       audioElement.play();
//     } else {
//       audioElement.pause();
//       audioElement.currentTime = 0;
//     }

//     return () => {
//       audioElement.pause();
//       audioElement.currentTime = 0;
//     };
//   }, [videoVisible]);

//   return (
//     <div className="demo-subs-container">
//       <div className="next-button-container">
//       {showPlayButton && (
//         <>

//             <button className="subs-button" onClick={onPlayPauseClick}>
//             {isPlaying ? 'Pause' : 'Play'}
//             </button>
//           <button className="subs-button skip" onClick={onSkipClick}>
//             Skip
//           </button>
//         </>
//       )}
//       </div>
//       <video
//         ref={audioRef}
//         src={demoAudio}
//         type="video/webm"
//         controls={false}
//         preload="auto"
//         className="demo-subs subs-audio"
//       />
//       <video
//         ref={transparentVideoRef}
//         src={demoTransparent}
//         type="video/webm"
//         muted
//         controls={false}
//         preload="auto"
//         className="demo-subs"
//         style={{
//           visibility: videoVisible ? 'visible' : 'hidden',
//           opacity: 0,
//           transform: 'translateY(100%)',
//           transition: 'opacity 0.5s, transform 0.5s',
//         }}
//       />
//     </div>
//   );
// }

// export default SubsLogic;
