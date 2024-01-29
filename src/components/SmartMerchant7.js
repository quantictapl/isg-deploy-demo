import React, { useEffect, useRef, useState } from "react";
import { Entity, Scene } from "aframe-react";
import "aframe-extras";
import { resetUserSession } from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import HideVRButton from "./HideVRButton";
// import smartmerchant from "../SmartMerchant.jpg";
import "./componentcss/SmartMerchant.css";
import 'aframe-event-set-component';
import CustomLoadingScreen from './CustomLoadingScreen';
import tvImg from "../SmartMerchantAssets/tvBorder.png"
import "./componentcss/demovideo.css";
import {  FaPause, FaPlay } from "react-icons/fa";
import { BsFillSkipForwardFill } from "react-icons/bs";
import { BsFillSkipBackwardFill } from "react-icons/bs";
// import merchantTv from "../SmartMerchantAssets/videos/MerchantTv.mp4"
// import benifits from "../SmartMerchantAssets/videos/benifits.mp4"
// import esy from "../SmartMerchantAssets/Esy.glb"
// import smartIntro from "../SmartMerchantAssets/videos/Dialogs/smartintro.webm";
// import smartIntroAudio from "../SmartMerchantAssets/videos/Dialogs/smartintroAudio.mp4";
// import supermarketVideo from "../SmartMerchantAssets/videos/Dialogs/supermarket.webm";
// import supermarketAudio from "../SmartMerchantAssets/videos/Dialogs/supermarketAudio.mp4";
// import benfitsDialogVideo from "../SmartMerchantAssets/videos/Dialogs/benfitsDialog.webm";
// import benifitsDialogAudio from "../SmartMerchantAssets/videos/Dialogs/benifitsDialogAudio.mp4";
import Popup from "reactjs-popup";
import * as AFRAME from "aframe"
import "./CameraIntitalRotation";
import "./CameraMovement";
import "./IsyControlledAnimation"
import "./Customloading"
import isySpeech from "../SmartMerchantAssets/videos/isy_speech1.webm"
import esyDummy from "../SmartMerchantAssets/esy_dummy.glb"
// const esy="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Esy.glb"
const smartIntro= "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/videos/dialogs/smartintro.webm";
const smartIntroAudio= "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/videos/dialogs/smartintroAudio.mp4";
const supermarketVideo= "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/videos/dialogs/supermarket.webm";
const supermarketAudio= "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/videos/dialogs/supermarketAudio.mp4";
const benfitsDialogVideo= "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/videos/dialogs/benfitsDialog.webm";
const benifitsDialogAudio= "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/videos/dialogs/benifitsDialogAudio.mp4";
// const merchantTv="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/videos/MerchantTv1.mp4";
// const  benifits="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/videos/benifits.mp4";

const intervals = [
  { start: 2, end: 7 }, // First interval from 5s to 10s
  { start: 11, end: 16 },
  { start: 20, end: 24 },
  { start: 30, end: 35 },
  { start: 40, end: 43 },
  { start: 50, end: 53 },
  { start: 61, end: 67 },
  { start: 70, end: 76 },
  // Add more intervals as needed
];
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
let entityLoaded=false;
AFRAME.registerComponent('entity-loaded', {
  init: function () {
    // Reference to the entity
    const entity = this.el;

    // Add an event listener for the 'loaded' event
    entity.addEventListener("model-loaded",()=>{
    
      entityLoaded=true;
    });
  }
});


function SmartMerchant({ esy,videos,smartmerchantBg}) {
 
  const merchantTv=videos.Video2;
  const benifits=videos.Video3;
  const videoSources = [
    merchantTv,
    benifits,
    // Add more video sources as needed
  ];
  const cameraRef = useRef(null);
  const cameraRotationRef = useRef(null);
  const sceneRef = useRef(null);
  const [zoom, setZoom] = useState(1.5);
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [playState,setPlayState]=useState(false);
  const [skipState,setSkipState]=useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tvVideoVisible, settvVideoVisible] = useState(false);
  const [cameraRotationEnded,setCameraRotationEnded]=useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentTvVideoIndex, setCurrentTvVideoIndex] = useState(0);
  const audioRef = useRef(null);
  const benifitsRef = useRef(null);
  const [mute,setMute]=useState(false);
  const [audioMute,setAudioMute]=useState(true);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isTVVideoEnded, setIsTVVideoEnded] = useState(false);
  const [benifitsEnded,setBenifitsEnded]=useState(false);
  const [currentSubsVideoIndex, setCurrentSubsVideoIndex] = useState(0);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const subsAudioRef = useRef(null);
  const transparentVideoRef = useRef(null);
  const [ispreviousBtnDisabled, setIspreviousBtnDisabled] = useState(false);
  const dropDownTriggerRef=useRef(null);
  const dropDownOptionsRef=useRef(null);
  const marketRef=useRef(null);
  const benifitseRef=useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const isySpeechVideoRef=useRef(null);
  const [isSceneLoaded,setIsSceneLoaded]=useState(false);
  const [isPopupOpenSound, setIsPopupOpenSound] = useState(false);
 
  localStorage.setItem('lastVisitedPage', "/smartmerchant");

  const openPopupSound = () => {
    setIsPopupOpenSound(true);
  };
  const closePopupSound = () => {
    setIsPopupOpenSound(false);
    setAudioMute(false);
  };
  useEffect(() => {
    if(cameraRotationEnded && isSceneLoaded){
        openPopupSound();
    }
  }, [cameraRotationEnded,isSceneLoaded]);
  
  const handleVideoEnd = () => {
    setVideoEnded(true);
    const tvvideo = document.getElementById("tvvideo");
     if (tvvideo.src.includes("benifits")) {
      // If the current video source is the second one (benifits video), navigate to the desired route
      navigate("/smartmerchant/appdemo");
    }

  };
  useEffect(() => {
    if (videoEnded) {
      settvVideoVisible(false);
    }
  }, [videoEnded]);
  useEffect(()=>{
    const scene=document.getElementById("scene");
    const sceneLoaded=()=> {
        setIsSceneLoaded(true);
    }
    scene.addEventListener("loaded",sceneLoaded)
  },[])
  
 

  const handleTVVideoPlay = () => {
    setIsTVVideoEnded(false);
  };
  
  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.muted = true;
  //   }
  // }, []);
  const handlePlayPauseClick = () => {
    setIsPlaying(prevState => {
      if (!prevState) {
        settvVideoVisible(true); // Set tvVideoVisible to true on first play button click
      }
      return !prevState;
    });
    setSkipState(false)

    setAudioPlaying(!audioPlaying);
  };
  const handleTvVideoShouldPlay=()=>{
    setIsPlaying(true);
    settvVideoVisible(true);
    setIsTVVideoEnded(false);
    setSkipState(false)
    // setVideoEnded(false);
  }
  const handleSkipClick=()=>{
    setSkipState(true);
    setPlayState(false);
    setIsPlaying(false);
  }
  useEffect(() => {
    const videos = document.getElementsByTagName("video");
    const dummyIsyVideo=isySpeechVideoRef.current;
    dummyIsyVideo.muted=true;

    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      // Do something with each div element
      if (!mute) {
        video.play();
      }
    }

  }, [ mute]);
  useEffect(() => {
    var video = document.getElementById("tvvideo");
  
    if (isPlaying && !skipState) {
      // Play the video when playState is true
      video.play();
      

      // setPlayState(true);
      // setIsPaused(true);
    }  else{
      // Pause the video when playState is false or isPlaying is false
      video.pause();

    }

  }, [isPlaying, skipState,]);

  const tvVideo1=videoSources[1];
  useEffect(() => {
    const audioElement = audioRef.current;
    const esy = document.getElementById('esy');
    const dummyEsyVideo=isySpeechVideoRef.current;
    var video = document.getElementById("tvvideo");
    const videoSrc=video.getAttribute("src")
    sessionStorage.setItem("tvVideo",videoSrc)

    
    function timeupdate() {
      const currentTime = video.currentTime;
      
      // Check if the current time is within any of the specified intervals
      let inInterval = false;
      for (const interval of intervals) {
        if (currentTime >= interval.start && currentTime <= interval.end) {
          inInterval = true;
          break;
        }
      }
      if(inInterval && video.src===tvVideo1 && !audioMute){//video.src===videoSources[1]
        esy.setAttribute('animation-mixer', 'clip:; loop: repeat; repetitions: Infinity;');
        if(cameraRotationEnded && !audioMute){
          dummyEsyVideo.play();
        }
        
      }
      else{
        esy.removeAttribute("animation-mixer");
        dummyEsyVideo.pause();
        dummyEsyVideo.currentTime=0.00;

      }
      
      
    }
    function startAnimation() {
        setIsTVVideoEnded(false)
      if(video.src.includes("MerchantTv")|| audioMute){
        
        esy.removeAttribute('animation-mixer');
        dummyEsyVideo.pause();
        dummyEsyVideo.currentTime=0.00;
      }
      
      

      else if(!audioMute){
          esy.setAttribute('animation-mixer', 'clip:; loop: repeat; repetitions: Infinity;'); 
          dummyEsyVideo.play();
      }
  
    }
    if(cameraRotationEnded && !audioMute){
        controlAnimation(esy)
    }
    // Function to stop the animation
    if(!video.ended){
      setIsTVVideoEnded(false)
    }

     else if(video.src===tvVideo1 && video.ended){
      // video.removeAttribute("src") // responsible for removing video src after benifits video ends
      navigate("/smartmerchant/appdemo");
       setIsTVVideoEnded(true);
 
      // setSkipState(true)
      
    }
    else {
      setIsTVVideoEnded(true)
    }
    function videoPaused(){
        esy.removeAttribute('animation-mixer');
        dummyEsyVideo.pause();
        dummyEsyVideo.currentTime=0.00;
    }
    function stopAnimation() {
      esy.removeAttribute('animation-mixer');
      dummyEsyVideo.pause();
      dummyEsyVideo.currentTime=0.00;
      setIsTVVideoEnded(true)
      if(video.src.includes("benifts") && video.ended){
        navigate("/smartmerchant/appdemo");
       }
      //  console.log(isTVVideoEnded)
    }
    // function benfitsEnded(){
    //    if(sessionStorage.getItem("tvVideo").includes("benifits") && isTVVideoEnded){
    //     navigate("/smartmerchant/appdemo")
    //     setBenifitsEnded(true);
    //     console.log("ho gaya",benifitsEnded)
    //    }
    // }
    video.addEventListener('play', startAnimation);
    video.addEventListener('pause', videoPaused);
    video.addEventListener('ended', stopAnimation);
    // video.addEventListener('ended', benfitsEnded);
    video.addEventListener('timeupdate',timeupdate );
    


    // if ( video.src.includes("benifits") && isPlaying && video.ended===false) {
    //    audioElement.play();
      
    //   console.log("audioplayed true")
    //   console.log("for audio check","isPlaying",isPlaying,"!videoEnded",!videoEnded)
    // } else{
    //    audioElement.pause();
    //    audioElement.currentTime=video.currentTime;
    //   console.log("audioplayed false")
    //   console.log("for audio check","isPlaying",isPlaying,"!videoEnded",!videoEnded) 
    // }
   

    return () => {
    //   audioElement.pause();
      video.removeEventListener('play', startAnimation);
    video.removeEventListener('pause', videoPaused);
    video.removeEventListener('ended', stopAnimation);
    // video.removeEventListener('ended', benfitsEnded);
    video.removeEventListener('timeupdate',timeupdate );
      
    };
  }, [tvVideoVisible, isPlaying, isPaused, videoEnded, navigate, cameraRotationEnded, audioMute]);//new dependecy included isTVVideoEnded Oct 05 2023
  document.addEventListener("DOMContentLoaded", function () {
    
    const esy = document.querySelector("#esy");
    esy.addEventListener("loaded",function(){
      
    })
    
  });
  const handleTVVideoEnd = () => {
    setIsTVVideoEnded(true);
  };

  const handleZoom = (event) => {
    const newZoom = zoom + event.deltaY * -0.01;
    if (newZoom >= 1 && newZoom <= 5) {
      setZoom(newZoom);
    }
  };

  const logoutHandler = () => {
    resetUserSession();
    navigate("/login");
  };
  useEffect(() => {
    window.addEventListener("wheel", handleZoom);
    return () => window.removeEventListener("wheel", handleZoom);
  });
  
  useEffect(() => {
    const handleCameraRotationEnd = () => {
      // When the custom event "cameraRotationEnd" is triggered, set the state to true
      setCameraRotationEnded(true);
    };

    // Add the event listener
    document.addEventListener('cameraRotationEnd', handleCameraRotationEnd);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('cameraRotationEnd', handleCameraRotationEnd);
    };
  }, []);


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
  const handleNextVideo =(nextVideoIndex) => {    //tvvideo changes but subsvideo not changing might have to use the code of skipclick as wellin a evenListner for video
    // Update the video source based on the next video index
    const videoSource = videoSources[nextVideoIndex];
    const tvvideo = document.getElementById("tvvideo");
    tvvideo.src = videoSource;
  };
  const onNextVideoClick=handleNextVideo;
  const onSkipClick=handleSkipClick;
  const handleSubsSkipClick = () => {
    onSkipClick(); // Call the skip callback function from the parent
    setVideoVisible(false);
    setShowPlayButton(false);
    const nextSubsVideoIndex = currentSubsVideoIndex + 1;
    if (nextSubsVideoIndex < subtitleVideos.length ) {
      setCurrentSubsVideoIndex(nextSubsVideoIndex);
      if(nextSubsVideoIndex===2){
        onNextVideoClick(1);
      }
      else{
        onNextVideoClick(nextSubsVideoIndex);
      }
       // Call the callback function with the next video index
    } else{
      navigate("/smartmerchant/appdemo");
      // All videos have been played, handle the end state here
      // You may want to navigate somewhere or show a message, etc.
    }
  };
  const handlePreviousSubsClick = () => {
    onSkipClick(); // Call the skip callback function from the parent
    
    const previousSubsVideoIndex = currentSubsVideoIndex - 1;
    // setIspreviousBtnDisabled(false)
    if (previousSubsVideoIndex>=1) {
      setVideoVisible(false);
      setShowPlayButton(false);
      setCurrentSubsVideoIndex(previousSubsVideoIndex);
      if(previousSubsVideoIndex===1){
        onNextVideoClick(0);
      }
      else if(previousSubsVideoIndex===2)
      onNextVideoClick(1);
      // setIspreviousBtnDisabled(false)
      
      
     // Call the callback function with the next video index
    } else{
      setIspreviousBtnDisabled(true)
      // All videos have been played, handle the end state here
      // You may want to navigate somewhere or show a message, etc.
    }
  };
  useEffect(()=>{
    var video = document.getElementById("tvvideo");
    const handleNextSet = () => {
      onSkipClick(); // Call the skip callback function from the parent
      setVideoVisible(false);
      setShowPlayButton(false);
      const nextSubsVideoIndex = currentSubsVideoIndex + 1;
      if (nextSubsVideoIndex < subtitleVideos.length) {// changed
        setCurrentSubsVideoIndex(nextSubsVideoIndex);
        if(nextSubsVideoIndex===2){
            onNextVideoClick(1)
        }
        else{
            onNextVideoClick(nextSubsVideoIndex); // Call the callback function with the next video index
        }
    
      } 
    };
    if(isTVVideoEnded){
       handleNextSet();
    }
    // else{
    //   onTVVideoPlay();
    // }
  },[currentSubsVideoIndex, isTVVideoEnded, navigate, onSkipClick, onNextVideoClick])
  const handleSmartDropDown = (event) => {
    const selectedValue = event.target.getAttribute("data-value");
    switch (selectedValue) {
      case "market":
        onSkipClick(); // Call the skip callback function from the parent
        setVideoVisible(false);
        setShowPlayButton(false);
        setCurrentSubsVideoIndex(1);
        onNextVideoClick(0); // Call the callback function with the next video index
        break;
      case "benifits":
        onSkipClick(); // Call the skip callback function from the parent
        setVideoVisible(false);
        setShowPlayButton(false);
        setCurrentSubsVideoIndex(2); //next Subs video
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
   if(currentSubsVideoIndex<=1){//changed
    setIspreviousBtnDisabled(true)
   }
   else{
    setIspreviousBtnDisabled(false)
   }
},[currentSubsVideoIndex])


  useEffect(() => {
    const transparentVideoElement = transparentVideoRef.current;
  
    const playVideo = () => {
      transparentVideoElement.style.opacity = 1;
      transparentVideoElement.style.transform = "translateY(0)";
      transparentVideoElement.play();
      transparentVideoElement.currentTime=0.00;
      
    };
  
    const handleVideoEnd = () => {// changed to add the smartmerchant intro before the upermarketvideo
      if(currentSubsVideoIndex<1){
        setCurrentSubsVideoIndex(1)
        setVideoVisible(false);
        
      }
      else if(currentSubsVideoIndex>=1){
        setVideoVisible(false); // Hide the transparent video after it ends
        setShowPlayButton(true);
        handleTvVideoShouldPlay();  //tvVideo should play right after the subsVideo(transparentVideo) ends
        //  videoEnded();
        
      }
    };
  
    transparentVideoElement.addEventListener("ended", handleVideoEnd);
  
    if (cameraRotationEnded && !audioMute ) {
      setVideoVisible(true);
      playVideo();
    }
  
    // Wait for cameraRotationEnded to become true
    let checkInterval = setInterval(() => {
      if (cameraRotationEnded && !audioMute) {
        clearInterval(checkInterval);
        setVideoVisible(true);
        playVideo();
      }
    }, 100);
  
    return () => {
      clearInterval(checkInterval);
      transparentVideoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, [currentSubsVideoIndex, cameraRotationEnded,audioMute]);
  useEffect(() => {
    if (videoEnded) {
      setShowPlayButton(false);
      
    }
  }, [videoEnded]);

  useEffect(() => {
    const audioElement = subsAudioRef.current;
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
 
 

  const handleEnterVR = () => {
    if (sceneRef.current) {
      const sceneEl = sceneRef.current.sceneEl;
      if (sceneEl.is("vr-mode")) {
        // In VR mode, add the button as a child of the canvas
        const canvas = document.querySelector("a-scene").canvas;
        canvas.appendChild(createButton());
      }
    }
  };
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const normalizedX = (clientX / innerWidth) * 2 - 1;
      const normalizedY = (clientY / innerHeight) * -2 + 1;
      const cursor = document.getElementById("cursor-btn");
      cursor.setAttribute("position", `${normalizedX} ${normalizedY} -1`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const createButton = () => {
    const button = document.createElement("button");
    button.innerText = "Click me!";
    button.style.position = "fixed";
    button.style.top = "20px";
    button.style.left = "20px";
    button.addEventListener("click", () => console.log("Button clicked!"));
    return button;
  };
  const handleLobbyClick = (event) => {
    event.stopPropagation();
    if(cameraRotationEnded){
      navigate("/isglobby");
    }
  };
  // useEffect(() => {
  //   const esyPlaceholderEntity = document.getElementById("model-placeholder");
  //   const actualModelEntity = document.getElementById("esy");
  //   const checkModelLoaded=()=>{
  //     esyPlaceholderEntity.setAttribute("visible", false);
  //     actualModelEntity.setAttribute("visible", true);
  //   }
  //   if(cameraRotationEnded){
  //     actualModelEntity.addEventListener("model-loaded", checkModelLoaded);
  //   }
  //   return () => {

  //   }
     
  // }, [cameraRotationEnded]);
  useEffect(() => {
    const dummyEsyVideo=isySpeechVideoRef.current;
    const esyPlaceholderEntity = document.getElementById("model-placeholder");
    const esy = document.getElementById("esy");
    const checkModelLoaded=()=>{
      esyPlaceholderEntity.setAttribute("visible", false);
        
        esy.setAttribute("visible", true);

      dummyEsyVideo.removeAttribute("src");

    }
    if(cameraRotationEnded){
            esy.addEventListener("model-loaded", checkModelLoaded);
          //  esy.setAttribute("animation-mixer","clip:; loop: repeat; repetitions: Infinity;")
         }
    
    return () => {
      if(cameraRotationEnded){
       esy.removeEventListener("model-loaded", checkModelLoaded);
    } 
  }
  }, [cameraRotationEnded,audioMute]);
  useEffect(()=>{

    const esy = document.getElementById("esy");
    if(!audioMute && cameraRotationEnded){
        esy.setAttribute('animation-mixer', 'clip:; loop: repeat; repetitions: Infinity;')
    }
  },[audioMute,cameraRotationEnded])
  

  return (
    <div className="scene-container" onClick={() => {
        // setAudioMute(false);
      }}>
         <Popup
        className="appdemo-popup sound-popup"
        open={isPopupOpenSound}
        onClose={closePopupSound}
        position="right center"
      >
        <div className="appdemo-popup-container sound-popup-container">
          <div className="appdemo-popup-text sound-popup-text">
            Click Ok to continue
          </div>
          <div className="popup-btn-container sound-popup-btn-container">
            <button className="appdemo-popup-btn" onClick={closePopupSound}>
              OK
            </button>
          </div>
        </div>
      </Popup>
      {/* <button className="demo-play-btn" onClick={handlePlayBtnClick}>Play</button> */}
      <HideVRButton />
      {/* <SubsLogic  isPlaying={isPlaying} tvVideoVisible={tvVideoVisible} onPlayPauseClick={handlePlayPauseClick}
        onSkipClick={handleSkipClick} onNextVideoClick={handleNextVideo} videoEnded={videoEnded} cameraRotationEnded={cameraRotationEnded}  onTVVideoEnd={handleTVVideoEnd}
        onTVVideoPlay={handleTVVideoPlay} onTVvideoShouldPlay={handleTvVideoShouldPlay}
        isTVVideoEnded={isTVVideoEnded}
         /> */}
         <div class="smart-dropdown" ref={dropDownTriggerRef} onClick={handleDropdownClick} style={{display: isSceneLoaded && cameraRotationEnded? "flex": "none"}}>
          <div
            id="dropdown-trigger"
            
            // class="smart-dropdown"
             
          >
            <span className="smart-dropdown-title smartm-dropdown-title">Select Demo</span>
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
            src={subtitleVideos[currentSubsVideoIndex].videoSrc}
            type="video/webm"
            muted
            controls={false}
            preload="auto"
            className="demo-subs demo-subs-sm"
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
                <button className="subs-button" onClick={handlePlayPauseClick}>
                  <div className="button-interior">
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
                  </div>
                </button>
                <button
                  onClick={handlePreviousSubsClick}
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
                <button className="subs-button skip" onClick={handleSubsSkipClick}>
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
          ref={subsAudioRef}
          src={subtitleVideos[currentSubsVideoIndex].audioSrc}
          type="video/webm"
          controls={false}
          preload="auto"
          className="demo-subs subs-audio"
        />
      </div>
         {/* <video ref={audioRef} className="benifits-audio" src={benifitsAudio}/> */}
         {!isSceneLoaded && <CustomLoadingScreen />}
      <Scene
        // inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe@d52af46565230a33c0fa23e045fb74e877df7dc9/dist/aframe-master.min.js"
        cursor="rayOrigin: mouse"
        // raycaster="objects: [data-clickable]; far: 100"
        onWheel={handleZoom}
        wasd-controls="false"
        className="scene"
        id="scene"
        custom-loading
        ref={sceneRef}
        vr-mode-ui={{ enabled: true }}
        onEnterVR={handleEnterVR}
        loading-screen="enabled:false;" 
        renderer={
          "antialias: true; physicallyCorrectLights: true; "
        }
        embedded={true}
      >
      <a-entity id="camera-rig" position="0 0 0" ref={cameraRotationRef}>
      <a-entity
      //for a-entity
          camera={`userHeight:1.6; active:true; zoom:${zoom};`}
          id="camera"
          wasd-controls-enabled="false"
          ref={cameraRef}
          position="0 0 0"
          rotation="0 -20 0"
          zoom={zoom}
          near="0.05"
          far="10000"
          camera-initial-rotation
          // camera-movement="initialRotation: 0 -40 0; reverseRotation: true"
          // look-controls="reverseMouseDrag:true"
    
//For Entity
          // id="camera"
          //    // camera={`active: ${isRotated ? 'true' : 'false'}`}
          //    wasd-controls-enabled="false"
          //    primitive="a-camera"
          //    ref={cameraRef}
          //    position="0 0 0"
          //    zoom={zoom}
          //    near="0.5"
          //    far="10000"
          //    camera="active:true"
          //    look-controls="reverseMouseDrag:true"

        >
          <a-entity
            cursor="fuse: false;"
            id="cursor-btn"
            // position={`${cursorPosition.x} ${cursorPosition.y} -1 `}
            // position=" 0 0 -1"
            geometry="primitive: ring; radiusInner: 0.0001; radiusOuter: 0.0002"
            // animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"
            // animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1"
            // animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
            material="color: black; shader: flat"
            raycaster="objects: [gui-interactable]; near:1 far:20;"
            // onClick={handleMerchantClick}
          ></a-entity>
        </a-entity>
      </a-entity>
        
        <a-assets>
          {/* <a-asset-item id="esy" response-type="arraybuffer" src={esy} /> */}
          <video 
            ref={videoRef}
            id="tvvideo"    width="1920" height="1080"   
            src={videoSources[0]}
            onEnded={handleVideoEnd}
            crossorigin="anonymous"
          >

          </video>
          <img crossorigin="anonymous" id="tv-border" src={tvImg} alt=""/>
          
          {/* <audio id="isyintro" src={isyintro} preload="auto"></audio> */}
          <img crossorigin="anonymous" id="smartm" src={smartmerchantBg} alt=""/>
          <video
            ref={isySpeechVideoRef}
            className="videos"
            id="isy-speech"
            preload="metadata"
            src={isySpeech}
            width="1920"
            height="1080"
            // autoplay="true"
            loop="true"
            crossOrigin="anonymous"
            playsInline=""
            webkit-playsinline=""
          ></video>
        </a-assets>
        {!skipState && tvVideoVisible && (
    // <a-entity
    //   material="shader: flat; side: double;  opacity: 1; transparent: true;"
    //   geometry="primitive:plane; width: 4; height: 2.5;"
    //   position="0 0 -10"
    //   rotation="0 -38 0"
    //   scale="1.3 1.3 1.3"
    // ></a-entity>
    <a-entity id="tv-video" material="shader: flat;  src:#tvvideo;  transparent: true" geometry="primitive: plane; width: 5.45; height: 2.96" position="-0.156 0.091 -15.521" rotation="0 -1.449 0" scale="2.6 2.6 2.6"></a-entity>
  )}
  <a-entity id="tv-border" material="shader: flat;  alphaTest:0.5;  src:#tv-border; transparent: true;" geometry="primitive: plane; width: 4; height: 2.05" position="-0.036 0.100 -13.814" rotation="3.500 -1.362 0.000" scale="7.5 7.5 7.5"></a-entity>
        
        {/* <a-entity sound="src:#isyintro" autoplay="true" volume="2"></a-entity> */}
        {/* <a-sound src={isyintro} autoplay="true"></a-sound> */}
        {/* <a-entity id="river" geometry="primitive: plane" material="color: blue"
          position="-10 0 0" sound="src: url(river.mp3); autoplay: true"></a-entity> */}
        {/* <a-entity
          gltf-model={sandclock}
          position="1.8 0 -2"
          scale="0.5 0.5 0.5"
          rotation="10.325 -34.608 -10.958."
          shadow="cast:true;"
          animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
        /> */}
        <Entity primitive="a-sky" src="#smartm" rotation="0 -90 0" />
        <a-sky color="#ECECEC" scale="3 3 3"></a-sky>
        {/* <Entity primitive="a-sky" color="#ECECEC" scale="3 3 3" /> */}
        {/* <a-entity id="ambient" light="type: ambient; intensity:0.2;"></a-entity> */}
        <a-entity
          id="directional"
          light="type: directional; castShadow:true; intensity:1;  position:0 20 0; color:#FFFFFF"
        ></a-entity>
       <a-entity id="spot1" light="type: spot; castShadow: true; intensity: 0.8; distance: 200; color: white; penumbra: 1; angle: 50" position="33.933 -8.73 2.177" rotation="6.428000000000001 68.011 -62.419" scale="0.2 0.2 0.2"></a-entity>
        
        <a-entity id="spot2" light="type: spot; castShadow: true; intensity: 0.5; distance: 200; color: white; penumbra: 1; angle: 50" position="-16.72171 -0.32872 7.37116" rotation="-9.325461073549278 -40.8799657247891 7.023889610508762" scale="0.2 0.2 0.2"></a-entity>
        
        <a-entity id="spot3" light="type: spot; castShadow: true; intensity: 0.8; distance: 200; color: white; penumbra: 1; angle: 50" position="-21.02744 -0.52743 -39.79053" rotation="-1.5515697092142693 -135.06276808839382 43.00220139795368" scale="0.2 0.2 0.2"></a-entity>
        <a-entity id="spot4" light="type: spot; castShadow: true; intensity: 0.8; distance: 200; color: #30499c; penumbra: 1; angle: 50; groundColor: #ffffff" position="20.43057 0 -24.38125" rotation="2.7845748843358007 115.23556358789169 44.978332833359886" scale="0.2 0.2 0.2"></a-entity>
       {/* <a-entity
          gltf-model={optimus}
          position="0.3 -0.25 -1"
          scale="0.05 0.05 0.05"
          rotation="0 -27.943 0"
          shadow="cast:true;"
          animation-mixer="clip:transform_to_main_hero;loop:repeat;repetitions:Infinity;"
        /> */}
        
        {/* {cameraRotationEnded && (<a-entity
          gltf-model={eva}
          position="-10.334 -3.002 -13.552" entity-loaded
          id="model-placeholder"
          scale="2 2 2"
          rotation="0 38.743  0"
          shadow="cast:true;"
          animation-mixer="clip:Take 001;loop:repeat;repetitions:Infinity;"
          />)} */}
          {/* {cameraRotationEnded && (<a-entity
          gltf-model={esyDummy}
          position="-8.504 -6.002 -12.702" entity-loaded
          id="model-placeholder"
          scale="0.18 0.18 0.18"
          rotation="0 31.419  0"
          shadow="cast:true;"
          animation-mixer="clip:Take 001;loop:repeat;repetitions:Infinity;"
          />)} */}
          {cameraRotationEnded && (<a-entity
          id="model-placeholder"
          material="shader: flat;  src:#isy-speech;  transparent: true"
          geometry="primitive: plane; width: 0.25; height: 2.96"
          entity-loaded
          // position="1.959 -2.500 -15.915"
          // rotation="0 -50.586  0"
          // scale="2.747 3.077 2.600"
          position="-13.241 -3.802 -18.629"
          rotation="0 -8.586  0"
          scale="36.297 4.4 3.495"
          />)}
         {/* <a-entity id="model-placeholder" geometry="primitive: box; width: 1; height: 1; depth: 1; color: gray" position="-8.504 -6.002 -12.702" entity-loaded>
    <a-animation attribute="rotation" to="0 360 0" dur="1000" easing="linear" repeat="indefinite"></a-animation>
  </a-entity> */}
        {cameraRotationEnded && (<a-entity
          gltf-model={esy}
          id="esy"
          position="-8.504 -6.002 -12.702"
          scale="0.18 0.18 0.18"
          rotation="0 31.419  0"
          shadow="cast:true; receive:false;"
          entity-loaded
          // animation-mixer="clip:;loop:repeat;repetitions:Infinity;"
        />)}
      {/* <a-entity
          gltf-model={esy}
          id="esy"
          position="-8.504 -6.002 -12.702"
          scale="0.18 0.18 0.18"
          rotation="0 31.419  0"
          shadow="cast:true; receive:false;"
          // animation-mixer="clip:;loop:repeat;repetitions:Infinity;"
        /> */}
      
        
        
          
        {/* <a-entity gltf-model={zoozoo} position="10.07136 -2.0308 10.43587" scale="0.02487 0.02487 0.02487" rotation="" shadow="" animation-mixer="clip: mixamo.com"></a-entity> */}
        <a-entity
        //SmartMerchantDoor
          id="#smartgate"
          material="shader: flat; color:#86d6e2; side: double; transparent: true; opacity: 0.5;"
          geometry="primitive: cylinder; radius: 40; height: 23.9; open-ended: true; theta-start: 142.5; theta-length: 40"
          position="-2.075 -23.217 198.62669" rotation="0 -169.57430792030385 0" scale="3.148 2.948 2.948"
          onClick={handleLobbyClick}
          event-set__mouseenter="_event: mouseenter; material.opacity: 0.5"
          event-set__mouseleave="_event: mouseleave; material.opacity: 0"
        ></a-entity>

        <a-light light="type: ambient"></a-light>
        <button className="logout-btn-smart-intro" onClick={logoutHandler} style={{display: isSceneLoaded || cameraRotationEnded ? "flex": "none",}}>
          Logout
        </button>
      </Scene>
    </div>
  );
}

export default SmartMerchant;
export function controlAnimation(model) {
    const subsVideo = document.getElementById('subsVideo');
    const dummyEsyVideo=document.getElementById("isy-speech");
  
    function startAnimation() {
      model.setAttribute('animation-mixer','clip:; loop: repeat; repetitions: Infinity;');
      dummyEsyVideo.play();
    }
  
    function stopAnimation() {
      model.removeAttribute('animation-mixer');
      dummyEsyVideo.pause();
      dummyEsyVideo.currentTime=0.00;
    }
  
    subsVideo.addEventListener('play', startAnimation);
    subsVideo.addEventListener('pause', stopAnimation);
    subsVideo.addEventListener('ended', stopAnimation);
  }
