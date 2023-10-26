import React, { useEffect, useRef, useState } from "react";
import { Entity, Scene } from "aframe-react";
import "aframe-extras";
import { resetUserSession } from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import HideVRButton from "./HideVRButton";
import smartmerchant from "../SmartMerchant.jpg";
import cards from "../SmartMerchantAssets/CardNewNew.glb";
import "./componentcss/SmartMerchant.css";
import 'aframe-event-set-component';
import zoozoo from "../SmartMerchantAssets/zoozoo.glb"
import isyintro from "../SmartMerchantAssets/audio/isyspeech.mp3"
import optimus from "../SmartMerchantAssets/Optimus.glb"
import stat from "../SmartMerchantAssets/stat.glb"
import gpay from "../SmartMerchantAssets/gpay.glb"
import eva from "../SmartMerchantAssets/eva.glb"
import penpaper from "../SmartMerchantAssets/penpaper.glb"
import sandclock from "../SmartMerchantAssets/sandclock.glb"
import merchantTv from "../SmartMerchantAssets/videos/MerchantTv.mp4"
import benifitsAudio from "../SmartMerchantAssets/videos/benifitsAudio.mp4"
import benifits from "../SmartMerchantAssets/videos/benifits.mp4"
import demo from "../SmartMerchantAssets/videos/demoSpeech2.webm"
import SubsLogic, { controlAnimation } from "./SmartMerchantComps/SubsLogic";
import videoContainer from "../SmartMerchantAssets/videocontainer.glb"
import esy from "../SmartMerchantAssets/Esy.glb"
import tvImg from "../SmartMerchantAssets/tvBorder.png"
import * as THREE from "three";
import * as AFRAME from "aframe"
import "./CameraIntitalRotation";
import "./CameraMovement";
import "./IsyControlledAnimation"
const videoSources = [
  merchantTv,
  benifits,
  // Add more video sources as needed
];
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
let entityLoaded=false;
AFRAME.registerComponent('entity-loaded', {
  init: function () {
    // Reference to the entity
    const entity = this.el;

    // Add an event listener for the 'loaded' event
    entity.addEventListener('loaded', function () {
      console.log('Entity loaded',entityLoaded);
      entityLoaded=true;

    });
  }
});
function SmartMerchant({ store }) {
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
  const audioRef = useRef(null);
  const benifitsRef = useRef(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isTVVideoEnded, setIsTVVideoEnded] = useState(false);
  const [benfitsEnded,setBenfitsEnded]=useState(false);
  localStorage.setItem('lastVisitedPage', "/smartmerchant");
  const handleVideoEnd = () => {
    setVideoEnded(true);
     if (videoRef.current && videoRef.current.currentTime >=94) {
      // If the current video source is the second one (benifits video), navigate to the desired route
      navigate("/smartmerchant/appdemo");
    }
    console.log(videoRef.current.src)
  };
  useEffect(() => {
    if (videoEnded) {
      settvVideoVisible(false);
    }
  }, [videoEnded]);
 

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
    var video = document.getElementById("tvvideo");
  
    if (isPlaying && !skipState) {
      // Play the video when playState is true
      video.play();
      console.log("Video is playing");
      // setPlayState(true);
      // setIsPaused(true);
    }  else{
      // Pause the video when playState is false or isPlaying is false
      video.pause();
      console.log("Video is paused");
      // setPlayState(false);
      //  setIsPaused(false);
    }
    console.log(video.src)
  }, [isPlaying, skipState,]);
  console.log(isPaused)
  useEffect(() => {
    const audioElement = audioRef.current;
    const esy = document.getElementById('esy');
    var video = document.getElementById("tvvideo");
    const videoSrc=video.getAttribute("src")
    sessionStorage.setItem("tvVideo",videoSrc)
    console.log(videoSrc)
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
      if(inInterval && video.src.includes("benifits")){
        esy.setAttribute('animation-mixer', 'clip:; loop: repeat; repetitions: Infinity;');
      }
      else{
        esy.removeAttribute("animation-mixer")
      }
      
      
    }
    function startAnimation() {
        setIsTVVideoEnded(false)
      if(video.src.includes("MerchantTv")){
        
        esy.removeAttribute('animation-mixer');
        console.log("yowai mo")
      }
      
      

      else{
          esy.setAttribute('animation-mixer', 'clip:; loop: repeat; repetitions: Infinity;'); 
      }
  
    }
    if(cameraRotationEnded){
        controlAnimation(esy)
    }
    // Function to stop the animation
    if(!video.ended){
      setIsTVVideoEnded(false)
    }

     else if(video.src===videoSources[1] && video.ended){
      // video.removeAttribute("src") // responsible for removing video src after benifits video ends
      navigate("/smartmerchant/appdemo");
      // alert("video ended")
       setIsTVVideoEnded(true);
      // console.log("src:benifits:videoEnded");
      // setSkipState(true)
      
    }
    else {
      setIsTVVideoEnded(true)
    }
    function videoPaused(){
        esy.removeAttribute('animation-mixer');
    }
    function stopAnimation() {
      esy.removeAttribute('animation-mixer');
      setIsTVVideoEnded(true)
      if(video.src.includes("benifts") && video.ended){
        navigate("/smartmerchant/appdemo")
       }
       console.log(isTVVideoEnded)
    }
    function benfitsEnded(){
       if(sessionStorage.getItem("tvVideo").includes("benifits") && isTVVideoEnded){
        navigate("/smartmerchant/appdemo")
       }
    }
    video.addEventListener('play', startAnimation);
    video.addEventListener('pause', videoPaused);
    video.addEventListener('ended', stopAnimation);
    video.addEventListener('ended', benfitsEnded);
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
    video.removeEventListener('ended', benfitsEnded);
    video.removeEventListener('timeupdate',timeupdate );
      
    };
  }, [tvVideoVisible, isPlaying, isPaused, videoEnded, navigate, cameraRotationEnded, isTVVideoEnded]);//new dependecy included isTVVideoEnded Oct 05 2023
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Content Loaded along with esy: ");
    const esy = document.querySelector("#esy");
    esy.addEventListener("loaded",function(){
      console.log("DOM Content Loaded along with esy: ");
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
  console.log(cameraRotationEnded)

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
    navigate("/panorama");
    console.log("panorama button clicked"); // Replace "/your-route" with the desired path
  };
  const handleNextVideo = (nextVideoIndex) => {    //tvvideo changes but subsvideo not changing might have to use the code of skipclick as wellin a evenListner for video
    // Update the video source based on the next video index
    const videoSource = videoSources[nextVideoIndex];
    const tvvideo = document.getElementById("tvvideo");
    tvvideo.src = videoSource;
  };
  

  return (
    <div className="scene-container">
      {/* <button className="demo-play-btn" onClick={handlePlayBtnClick}>Play</button> */}
      <HideVRButton />
      <SubsLogic  isPlaying={isPlaying} tvVideoVisible={tvVideoVisible} onPlayPauseClick={handlePlayPauseClick}
        onSkipClick={handleSkipClick} onNextVideoClick={handleNextVideo} videoEnded={videoEnded} cameraRotationEnded={cameraRotationEnded}  onTVVideoEnd={handleTVVideoEnd}
        onTVVideoPlay={handleTVVideoPlay} onTVvideoShouldPlay={handleTvVideoShouldPlay}
        isTVVideoEnded={isTVVideoEnded}
         />
         <video ref={audioRef} className="benifits-audio" src={benifitsAudio}/>
      
      <Scene 
      inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe@d52af46565230a33c0fa23e045fb74e877df7dc9/dist/aframe-master.min.js"
        cursor="rayOrigin: mouse"
        // raycaster="objects: [data-clickable]; far: 100"
        onWheel={handleZoom}
        wasd-controls="false"
        className="scene"
        id="scene"
        ref={sceneRef}
        vr-mode-ui={{ enabled: true }}
        onEnterVR={handleEnterVR}
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
          <a-asset-item id="store" src={store} />
          <a-asset-item id="cards" src={cards} />
          <a-asset-item id="stat" src={stat} />
          <video 
            ref={videoRef}
            id="tvvideo"    width="1920" height="1080"   
            src={videoSources[0]}
            onEnded={handleVideoEnd}
          >

          </video>
          <img id="tv-border" src={tvImg} alt=""/>
          
          {/* <audio id="isyintro" src={isyintro} preload="auto"></audio> */}
          <img id="smartm" src={smartmerchant} alt=""/>
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
        <Entity primitive="a-sky" src={smartmerchant} rotation="0 -90 0" />
        <a-sky color="#ECECEC" scale="3 3 3"></a-sky>
        <Entity primitive="a-sky" color="#ECECEC" scale="3 3 3" />
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
        
        {/* <a-entity
          gltf-model={eva}
          position="4 2.9 25"
          scale="0.05 0.05 0.05"
          rotation="0 0 0"
          shadow="cast:true;"
          animation-mixer="clip:Take 001;loop:repeat;repetitions:Infinity;"
        /> */}
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
        <button className="logout" onClick={logoutHandler}>
          Logout
        </button>
      </Scene>
    </div>
  );
}

export default SmartMerchant;
