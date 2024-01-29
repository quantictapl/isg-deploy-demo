//purpose: all functionality depending on subsVideo itself and no need for audio
import React, { useEffect, useRef, useState } from "react";
import { Entity, Scene } from "aframe-react";
import "aframe-extras";
import * as THREE from "three";
// import {GLTFLoader}  from "three";
import { resetUserSession } from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import HideVRButton from "./HideVRButton";
// import smartmerchant from "../WithTable.jpg";
import Popup from "reactjs-popup";
// import "./componentcss/SmartMerchant.css";
import "aframe-event-set-component";
import { assetJson } from "./demoJsonTesting2";
import esyDummy from "../SmartMerchantAssets/esy_dummy.glb";
import isySpeech from "../SmartMerchantAssets/videos/isy_speech1.webm";
import isyHandraise from "../SmartMerchantAssets/videos/isy_handraise.webm";
import qrcode from "../SmartMerchantAssets/apploading/appimages/Qrcode.PNG";
import CustomLoadingScreen from "./CustomLoadingScreen";
import "./Customloading";
// import appimg2 from "../SmartMerchantAssets/apploading/appimages/appLoadingImg2.png";
// import appimg3 from "../SmartMerchantAssets/apploading/appimages/appLoadingImg3.png";

// import appintro1 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg1.png";
// import appintro2 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg2.png";
// import appintro3 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg3.png";
// import appintro4 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg4.png";
// import appintro5 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg5.png";

// import userregimg1 from "../SmartMerchantAssets/userreg/UserRegImages/userregImg1.png";
// import userregimg2 from "../SmartMerchantAssets/userreg/UserRegImages/userregImg2.png";
// import userregimg3 from "../SmartMerchantAssets/userreg/UserRegImages/userregImg3.png";

// import paymentmethodimg1 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg1.png";
// import paymentmethodimg2 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg2.png";
// import paymentmethodimg3 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg3.png";
// import paymentmethodimg4 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg4.png";
// import paymentmethodimg5 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg5.png";
// import paymentmethodimg6 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg6.png";
// import paymentmethodimg7 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg7.png";

// import rtpimg1 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg1.png";
// import rtpimg2 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg2.png";
// import rtpimg3 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg3.png";
// import rtpimg4 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg4.png";

// import recpayvideo1 from "../SmartMerchantAssets/recordpayment/recpayVid1.webm";
// import recpayvideo2 from "../SmartMerchantAssets/recordpayment/recpayVid2.webm";
// import recpayvideo3 from "../SmartMerchantAssets/recordpayment/recpayVid3.webm";

// import refundimg1 from "../SmartMerchantAssets/refundprocess/refundImg1.png";
// import refundimg2 from "../SmartMerchantAssets/refundprocess/refundImg2.png";
// import refundimg3 from "../SmartMerchantAssets/refundprocess/refundImg3.png";
import * as AFRAME from "aframe";
import "./CameraRotationLimit";
// import esy from "../SmartMerchantAssets/Esy.glb";
// import esyHand from "../SmartMerchantAssets/isy_hand.glb";
import tvImg from "../SmartMerchantAssets/tvBorder.png";
// import paymentMethod from "../SmartMerchantAssets/paymentmethod/PaymentMethod.glb";
import buttonvideo from "../videos/circle1.mp4";
import "./componentcss/AppDemonstration.css";
import rtpmobile from "../SmartMerchantAssets/rtp/rtpmobile.glb";
import arrow from "../SmartMerchantAssets/videos/arrow.webm";
// import appHandSingle from "../SmartMerchantAssets/apploading/app_hand_single.glb";
// import appHandPanSingle from "../SmartMerchantAssets/apploading/app_hand_pan_single.glb";
// import appHandCardSingle from "../SmartMerchantAssets/paymentmethod/app_hand_card_single.glb";
// import qrcode from "../SmartMerchantAssets/apploading/appimages/Qrcode.PNG";
// const esy="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Esy.glb";
// const esyHand="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/isy_hand.glb";
// import esy from "../SmartMerchantAssets/Esy.glb";
// import esyHand from "../SmartMerchantAssets/isy_hand.glb";
// import { esy,esyHand } from "./demoJsonTesting1";
// const qrcode="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/appimages/Qrcode.PNG"
// const appHandSingle="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/handassets/app_hand_single.glb"
// const appHandPanSingle="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/handassets/app_hand_pan_single.glb"
// const appHandCardSingle="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/handassets/app_hand_card_single.glb"
let entityLoaded = false;

AFRAME.registerComponent("entity-loaded-appdemo", {
  init: function () {
    // Reference to the entity
    const entity = this.el;

    // Add an event listener for the 'loaded' event
    entity.addEventListener("model-loaded", () => {
      
      entityLoaded = true;
    });
  },
});

function AppDemonstration({
  esy,
  esyHand,
  smartmerchant,
  appHandSingle,
  appHandPanSingle,
  appHandCardSingle,
}) {
  
  const cameraRef = useRef(null);
  const cameraRotationRef = useRef(null);
  const sceneRef = useRef(null);
  const subsVideoRef = useRef(null);
  const skipBtnRef = useRef(null);
  const [zoom, setZoom] = useState(1.5);
  const navigate = useNavigate();
  const [skipState, setSkipState] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const subsAudioRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [pageLoaded, setPageLoaded] = useState(false);
  const [mute, setMute] = useState(true);
  const [animationClicked, setAnimationClicked] = useState(false);
  const [currentPhoneAssetIndex, setCurrentPhoneAssetIndex] = useState(0);
  const [currentPhoneImageIndex, setCurrentPhoneImageIndex] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [currentDivision, setCurrentDivision] = useState("apploading");
  const [assetsVisible, setAssetsVisible] = useState(true);
  const [extrasVisible, setExtrasVisible] = useState(false);
  const [lastSkipTime, setLastSkipTime] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpenSound, setIsPopupOpenSound] = useState(false);
  const [playNextAssets, setPlayNextAssests] = useState(false);
  const [isyHandRaise, setIsyHandRaised] = useState(false);
  const dropDownTriggerRef = useRef(null);
  const dropDownOptionsRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const buttonVideoRef = useRef(null);
  const arrowRef = useRef(null);
  const onboardingRef = useRef(null);
  const paymentAcceptanceRef = useRef(null);
  const dashboardRef = useRef(null);
  const refundRef = useRef(null);
  const esyRef = useRef(null);
  const animationButtonRef = useRef(null);
  const phoneAssetRef = useRef(null);
  const [esyAnimation, setEsyAnimation] = useState("");
  const recPayVid1Ref = useRef(null);
  const recPayVid2Ref = useRef(null);
  const recPayVid3Ref = useRef(null);
  const previousBtnRef = useRef(null);
  const esyhandRef = useRef(null);
  const videoInSrcRef = useRef(null);
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [displayBg, setDisplayBg] = useState(true);
  const [timeout, settimeout] = useState(2500);
  const [isSceneLoaded, setIsSceneLoaded] = useState(false);
  const isySpeechVideoRef = useRef(null);
  const isyHandVideoRef = useRef(null);
  const [esyHandLoaded, setEsyHandLoaded] = useState(false);
  // localStorage.setItem('lastVisitedPage', "/smartmerchant/appdemo");
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
  //   video.pause();
  //   audio.pause();
  //   // let videoCurrentTime=video.currentTime;
  //   // let audioCurrentTime=audio.currentTime;
  // }

  // // Function to resume your code execution
  // function resumeExecution() {
  //   video.play();
  //   audio.play();
  // }
  
  useEffect(() => {
    // Simulating page load after 3 seconds
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const videos = document.getElementsByTagName("video");
    const button = buttonVideoRef.current;
    const phoneScreenVideo = videoInSrcRef.current;
    // const recpayVid1=recPayVid1Ref.current;
    // const recpayVid2=recPayVid2Ref.current;
    // const recpayVid3=recPayVid3Ref.current;
    // const button = document.getElementById("buttonvideo");
    const arrowVideo = arrowRef.current;
    // const arrowVideo = document.getElementById("arrow");
    arrowVideo.muted = true;
    button.muted = true;
    phoneScreenVideo.muted = true;
    // recpayVid1.muted=true;
    // recpayVid2.muted=true;
    // recpayVid3.muted=true;
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      // Do something with each div element
      if (!mute) {
        video.play();
      }
    }
    button.play();
    if (
      currentDivision === "recpay" ||
      phoneScreenVideo.muted === true ||
      phoneScreenVideo.src.includes("mp4")
    ) {
      if (currentPhoneAssetIndex >= 0 && currentPhoneAssetIndex <= 3)
        phoneScreenVideo.play();
      phoneScreenVideo.loop = true;
    } else {
      phoneScreenVideo.pause();
    }
  }, [currentDivision, mute, currentPhoneAssetIndex]);
  useEffect(() => {
    const handleClick = (event) => {
      setMute(false);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  useEffect(() => {
    const scene = document.getElementById("scene");
    const sceneLoaded = () => {
      setIsSceneLoaded(true);
    };
    scene.addEventListener("loaded", sceneLoaded);
  }, []);
  // useEffect(()=>{
  //   const phoneScreenVideo=document.getElementById("video-in-src")
  //   phoneScreenVideo.muted=true;
  //   if(currentDivision==="recpay" && !mute){
  //     phoneScreenVideo.play();
  //   }

  // },[currentDivision,mute])
  // const video=subsVideoRef.current
  // console.log(video.duration)
  const currentPhoneAsset =
    assetJson[currentDivision].phoneAssets[currentPhoneAssetIndex];
  const currentPhoneImage =
    assetJson[currentDivision].phoneImages[currentPhoneImageIndex];

  
  useEffect(() => {
    const video = subsVideoRef.current;
    const dummyEsyVideo = isySpeechVideoRef.current;
    const dummyEsyHandVideo = isyHandVideoRef.current;
    const esy = esyRef.current;
    const esyHand = esyhandRef.current;
    // const esy = document.getElementById("esy");
    if (!mute) {
      video.muted = false;
    }
    if (mute) {
      video.muted = true;
    }
    if (video.paused) {
      esy.removeAttribute("animation-mixer");
      dummyEsyVideo.pause();
      dummyEsyVideo.currentTime = 0.0;
    }
    const handleVideoPlay = () => {
      if (currentDivision === "nullAssets" && currentPhoneAssetIndex === 1) {
        esyHand.setAttribute(
          "animation-mixer",
          // "clip:Animation;loop:once;repetitions:1;"
          "clip:Animation;loop:once;repetitions:1;"
        );
        dummyEsyHandVideo.play();
      }
      if (currentDivision === "nullAssets1" && currentPhoneAssetIndex === 1) {
        esyHand.setAttribute(
          "animation-mixer",
          // "clip:Animation;loop:once;repetitions:1;"
          "clip:Animation;loop:once;repetitions:1;"
        );
        dummyEsyHandVideo.play();
      } else if (
        (currentDivision !== "nullAssets" && currentPhoneAssetIndex !== 1) ||
        (currentDivision !== "nullAssets1" && currentPhoneAssetIndex !== 1)
      ) {
        esy.setAttribute(
          "animation-mixer",
          "clip:;loop:repeat;repetitions:Infinity;"
        );
        dummyEsyVideo.play();
        dummyEsyHandVideo.pause();
        dummyEsyHandVideo.currentTime = 0.0;
      }
      setIsPlaying(true);
    };

    if (currentDivision === "nullAssets" && currentPhoneAssetIndex === 1) {
      esyHand.setAttribute(
        "animation-mixer",
        // "clip:Animation;loop:once;repetitions:1;"
        "clip:Animation;loop:once;repetitions:1;"
      );
      dummyEsyHandVideo.play();
    }
    if (currentDivision === "nullAssets1" && currentPhoneAssetIndex === 1) {
      esyHand.setAttribute(
        "animation-mixer",
        // "clip:Animation;loop:once;repetitions:1;"
        "clip:Animation;loop:once;repetitions:1;"
      );
      dummyEsyHandVideo.play();
    } else if (
      (currentDivision !== "nullAssets" && currentPhoneAssetIndex !== 1) ||
      (currentDivision !== "nullAssets1" && currentPhoneAssetIndex !== 1)
    ) {
      esy.setAttribute(
        "animation-mixer",
        "clip:;loop:repeat;repetitions:Infinity;"
      );
      dummyEsyVideo.play();
      dummyEsyHandVideo.pause();
      dummyEsyHandVideo.currentTime = 0.0;

      if (!mute) {
        video.play();
        video.muted = false;
      }
    }

    const handleVideoPause = () => {
      setIsPlaying(false);
      if (!video.paused) {
        video.pause();
      }
      dummyEsyVideo.pause();
      dummyEsyVideo.currentTime = 0.0;
      dummyEsyHandVideo.pause();
      dummyEsyHandVideo.currentTime = 0.0;
      esy.removeAttribute("animation-mixer");
      esyHand.removeAttribute("animation-mixer");
    };

    const handleAudioLoadedMetadata = () => {
      // Handle loaded metadata for the subsAudio element
      if (!mute) {
        video.play();
      }
      const duration = video.duration;
      
    };
    const handleVideoEnded = () => {
      setIsPlaying(false);
      video.pause();
      dummyEsyVideo.pause();
      dummyEsyVideo.currentTime = 0.0;
      dummyEsyHandVideo.pause();
      dummyEsyHandVideo.currentTime = 0.0;
      esy.removeAttribute("animation-mixer");
      esyHand.removeAttribute("animation-mixer");
    };

    video.addEventListener("play", handleVideoPlay);
    video.addEventListener("pause", handleVideoPause);
    video.addEventListener("loadedmetadata", handleAudioLoadedMetadata); // Added event listener to subsVideoRef as well
    video.addEventListener("ended", handleVideoEnded);
    return () => {
      video.removeEventListener("play", handleVideoPlay);
      video.removeEventListener("pause", handleVideoPause);
      video.removeEventListener("loadedmetadata", handleAudioLoadedMetadata);
      video.removeEventListener("ended", handleVideoEnded);
    };
  }, [
    subsVideoRef,
    subsAudioRef,
    mute,
    currentDivision,
    currentPhoneAssetIndex,
  ]); // added new dependecies currentDivison and currentPhoneAssetIndex 13Sep2023

  const video = subsVideoRef.current;
  const handleDropdownClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
    if (isDropdownOpen) {
      dropDownOptionsRef.current.classList.toggle("active");
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
    
  }, []);

  useEffect(() => {
    const divisions = Object.keys(assetJson);
    const currentDivisionIndex = divisions.indexOf(currentDivision);
    const onboarding = onboardingRef.current;
    const paymentAcceptance = paymentAcceptanceRef.current;
    const dashboard = dashboardRef.current;
    const refund = refundRef.current;

    // Remove existing classNames
    onboarding.classList.remove("dropdown-current");
    paymentAcceptance.classList.remove("dropdown-current");
    dashboard.classList.remove("dropdown-current");
    refund.classList.remove("dropdown-current");

    // Check the currentDivisionIndex and add classNames accordingly
    if (currentDivisionIndex >= 2 && currentDivisionIndex <= 3) {
      onboarding.classList.add("dropdown-current");
    } else if (currentDivisionIndex >= 5 && currentDivisionIndex <= 6) {
      paymentAcceptance.classList.add("dropdown-current");
    } else if (currentDivisionIndex === 7) {
      dashboard.classList.add("dropdown-current");
    } else if (currentDivisionIndex === 8) {
      refund.classList.add("dropdown-current");
    }
  }, [currentDivision]);
  useEffect(
    () => {
      const esy = esyRef.current;
      const esyHand = esyhandRef.current;
      const dummyEsyVideo = isySpeechVideoRef.current;
      // const esy=document.getElementById("esy");
      const onboarding = onboardingRef.current;
      // const onboarding=document.getElementById("onboarding");
      const paymentAcceptance = paymentAcceptanceRef.current;
      // const paymentAcceptance=document.getElementById("payment-acceptance");
      const dashboard = dashboardRef.current;
      // const dashboard=document.getElementById("dashboard");
      const refund = refundRef.current;
      // const refund=document.getElementById("refund");
      if (currentDivision === "nullAssets" && currentPhoneAssetIndex === 1) {
        setIsDropdownOpen(true);
        setIsyHandRaised(true);
        setEsyAnimation("clip:;loop:once;repetitions:1; timeScale: 0.5;");
        esyHand.setAttribute(
          "animation-mixer",
          "clip:Animation;loop:once;repetitions:1; timeScale: 0.5;"
        );
        setTimeout(() => {
          dropDownOptionsRef.current.classList.add("active");
          //  esy.setAttribute("animation-mixer","clip:;loop:repeat;repetitions:Infinity; timeScale: 0.5;");
          onboarding.classList.add("blink-button");
        }, 5500); //earlier 2500 changes on 05-09-2023
      }
      if (currentPhoneAssetIndex === 1 && currentDivision === "nullAssets1") {
        setIsDropdownOpen(true);
        setIsyHandRaised(true);
        esyHand.setAttribute(
          "animation-mixer",
          "clip:Animation;loop:once;repetitions:1; timeScale: 0.5;"
        );
        setTimeout(() => {
          dropDownOptionsRef.current.classList.add("active");
          //  esy.setAttribute("animation-mixer","clip:;loop:false;repetitions:1; timeScale: 0.5;");
          paymentAcceptance.classList.add("blink-button");
        }, 3500);
      } else {
        if (
          (currentDivision === "appintro" && currentPhoneAssetIndex === 1) ||
          (currentDivision === "appintro" && currentPhoneAssetIndex === 2) ||
          (currentDivision === "appintro" && currentPhoneAssetIndex === 3)
        ) {
          dummyEsyVideo.pause();
          dummyEsyVideo.currentTime = 0.0;
          esy.removeAttribute("animation-mixer");
        } else {
          esy.setAttribute(
            "animation-mixer",
            "clip:;loop:repeat;repetitions:Infinity;"
          );
          dummyEsyVideo.play();
          setIsDropdownOpen(false);
          setIsyHandRaised(false);
          onboarding.classList.remove("blink-button");
          paymentAcceptance.classList.remove("blink-button");
          
        }
      }
      
    },
    //[currentDivision,currentPhoneAssetIndex]
    //latest dependency array drop down dint open while using it
    [currentDivision, currentPhoneAssetIndex] //console.log() requires unecessary dependencies
  );

  //Instead of giving empty src to videos try giving video with nothing in it
  // Helper function to handle transition between assets

  const openPopup = () => {
    setIsPopupOpen(true);
    setPlayNextAssests(false);
    return;
  };
  const openPopupSound = () => {
    setIsPopupOpenSound(true);
  };
  const closePopupSound = () => {
    setIsPopupOpenSound(false);
    setMute(false);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    setPlayNextAssests(true);
    // console.log(playNextAssets);
    setCurrentDivision("apploading"); //11Sep2023
  };
  useEffect(() => {
    if(isSceneLoaded){
      openPopupSound();
    }
    
  }, [isSceneLoaded]);
  

  useEffect(() => {
    const skipBtn = skipBtnRef.current;
    const buttonEntity = animationButtonRef.current;
    const video = subsVideoRef.current;
    const handleTransition = (currentAssets) => {
      setCurrentPhoneAssetIndex(0);
      setCurrentPhoneImageIndex(0);
      setAnimationClicked(false);
      setExtrasVisible(false);
      // document.querySelector('#phone-img').components.material.material.map.dispose();//05-09-2023
      // document.querySelector('#phone-video').components.material.material.map.dispose();//05-09-2023
      // document.querySelector('#phone-asset').components.material.material.map.dispose();//06-09-2023

      if (
        currentDivision === "rtpmethod" ||
        currentDivision === "refundprocess"
      ) {
        setExtrasVisible(true);
      } else {
        setExtrasVisible(false);
      }
      buttonEntity.setAttribute("visible", "false");
    };
    const delayBindingTimeout = setTimeout(() => {
      skipBtn.style.pointerEvents = "auto"; // Enable click events after a delay
      skipBtn.addEventListener("click", handleSkipClick);
    }, 2500);
    const onCanPlay = () => {
      // Once the video can play, remove the placeholder source.
      video.removeEventListener("canplay", onCanPlay);
      video.src.remove();

      // Play the video.
      if (entityLoaded) {
        video.play();
      }
    };
    const loadNextAssets = (currentAssets, cacheBuster) => {
      const videoSrc = currentAssets.phoneAssets[0].video;
      buttonEntity.setAttribute("visible", "false"); //20-09/2023
      // document.querySelector('#phone-img').components.material.material.map.dispose();//05-09-2023
      //   document.querySelector('#phone-video').components.material.material.map.dispose();//05-09-2023
      video.src = videoSrc + "?cache=" + cacheBuster;

      video.addEventListener("canplay", onCanPlay);
    };
    const handleSkipClick = async () => {
      buttonEntity.setAttribute("visible", "false");
      skipBtn.style.pointerEvents = "none";
      const divisions = Object.keys(assetJson);
      const currentDivisionIndex = divisions.indexOf(currentDivision);
      const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
      const currentAssets = assetJson[divisions[nextDivisionIndex]];
      const cacheBuster = new Date().getTime();

      // Check if the last division is loaded
      if (
        nextDivisionIndex === 0 &&
        currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
      ) {
        // Last division and last asset loaded, prevent skip
        return;
      }

      // Check if enough time has passed since the last skip
      if (Date.now() - lastSkipTime < 2500) {
        // Less than 5 seconds since the last skip, prevent skip
        return;
      }

      // Set the last skip time to the current time
      setLastSkipTime(Date.now());

      buttonEntity.setAttribute("visible", "false"); // Hide the skip button

      setTimeout(() => {
        // Show the skip button after 5 seconds
        if (!isPlaying) {
          buttonEntity.setAttribute("visible", "true");
        }

        // Check if the skip button is clickable (exceeds division length)
        if (
          nextDivisionIndex === 0 &&
          currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
        ) {
          // Last division and last asset loaded, prevent skip
          buttonEntity.setAttribute("visible", "false");
        }
      }, timeout);

      setCurrentDivision(divisions[nextDivisionIndex]);
      setCurrentPhoneAssetIndex(0); // Reset the asset index
      setCurrentPhoneImageIndex(0); // Reset the image index

      loadNextAssets(currentAssets, cacheBuster);
      setTimeout(() => {
        handleTransition(currentAssets);
        setTimeout(() => {
          // Set visibility after the transition
          if (!isPlaying) {
            buttonEntity.setAttribute("visible", "true");
          }
        }, video.duration * 1000); // earlier it was 2500 today changed to video.duration 1Sep2023
      }, timeout);
    };
    skipBtn.removeEventListener("click", handleSkipClick);
    skipBtn.addEventListener("click", handleSkipClick);
    const delay = async (milliseconds) => {
      //usded to delay nextDivision Loading for appintro
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };
    return () => {
      clearTimeout(delayBindingTimeout);
      skipBtn.removeEventListener("click", handleSkipClick);
     
      video.removeEventListener("canplay", onCanPlay);
    };
  }, [
    currentDivision,
    currentPhoneAssetIndex,
    lastSkipTime,
    video,
    isPlaying,
    timeout,
  ]);
  useEffect(() => {
    const previousBtn = previousBtnRef.current;
    const buttonEntity = animationButtonRef.current;
    const video = subsVideoRef.current;
    const handleTransition = (currentAssets) => {
      setCurrentPhoneAssetIndex(0);
      setCurrentPhoneImageIndex(0);
      setAnimationClicked(false);
      setExtrasVisible(false);
      // document.querySelector('#phone-img').components.material.material.map.dispose();//05-09-2023
      // document.querySelector('#phone-video').components.material.material.map.dispose();//05-09-2023
      // document.querySelector('#phone-asset').components.material.material.map.dispose();//06-09-2023
      buttonEntity.setAttribute("visible", "false");
    };
    const delayBindingTimeout = setTimeout(() => {
      previousBtn.style.pointerEvents = "auto"; // Enable click events after a delay
      previousBtn.addEventListener("click", handlePreviousClick);
    }, 2500);
    const onCanPlay = () => {
      // Once the video can play, remove the placeholder source.
      video.removeEventListener("canplay", onCanPlay);
      video.src.remove();

      // Play the video.
      if (entityLoaded) {
        video.play();
      }
    };
    const loadPreviousAssets = (currentAssets, cacheBuster) => {
      const videoSrc = currentAssets.phoneAssets[0].video;
      // document.querySelector('#phone-img').components.material.material.map.dispose();//05-09-2023
      //   document.querySelector('#phone-video').components.material.material.map.dispose();//05-09-2023
      video.src = videoSrc + "?cache=" + cacheBuster;

      video.addEventListener("canplay", onCanPlay);
    };
    const handlePreviousClick = async () => {
      buttonEntity.setAttribute("visible", "false");
      previousBtn.style.pointerEvents = "none";
      const divisions = Object.keys(assetJson);
      const currentDivisionIndex = divisions.indexOf(currentDivision);
      let nextDivisionIndex;
      const currentAssets = assetJson[divisions[nextDivisionIndex]];
      const cacheBuster = new Date().getTime();

      if (
        currentDivision === "paymentmethod" ||
        currentDivision === "appintro"
      ) {
        nextDivisionIndex = (currentDivisionIndex - 2) % divisions.length;
      } else {
        nextDivisionIndex = (currentDivisionIndex - 1) % divisions.length;
      }

      if (Date.now() - lastSkipTime < 2500) {
        // Less than 5 seconds since the last skip, prevent skip
        return;
      }

      // Set the last skip time to the current time
      setLastSkipTime(Date.now());

      buttonEntity.setAttribute("visible", "false"); // Hide the skip button

      setCurrentDivision(divisions[nextDivisionIndex]);
      setCurrentPhoneAssetIndex(0); // Reset the asset index
      setCurrentPhoneImageIndex(0); // Reset the image index

      loadPreviousAssets(currentAssets, cacheBuster);
      setTimeout(() => {
        handleTransition(currentAssets);
        setTimeout(() => {
          // Set visibility after the transition
          if (!isPlaying) {
            buttonEntity.setAttribute("visible", "true");
          }
        }, video.duration * 1000); // earlier it was 2500 today changed to video.duration 1Sep2023
      }, timeout);
    };
    previousBtn.removeEventListener("click", handlePreviousClick);
    previousBtn.addEventListener("click", handlePreviousClick);
    const delay = async (milliseconds) => {
      //usded to delay nextDivision Loading for appintro
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };
    return () => {
      clearTimeout(delayBindingTimeout);
      video.removeEventListener("canplay", onCanPlay);
      previousBtn.removeEventListener("click", handlePreviousClick);
      
    };
  }, [
    currentDivision,
    currentPhoneAssetIndex,
    lastSkipTime,
    video,
    isPlaying,
    timeout,
  ]);

  useEffect(() => {
    const buttonEntity = animationButtonRef.current;
    const onboarding = onboardingRef.current;
    // const onboarding=document.getElementById("onboarding");
    const paymentAcceptance = paymentAcceptanceRef.current;
    // const paymentAcceptance=document.getElementById("payment-acceptance");
    const dashboard = dashboardRef.current;
    // const dashboard=document.getElementById("dashboard");
    const refund = refundRef.current;
    // const refund=document.getElementById("refund");
    const video = subsVideoRef.current;
    const handleTransition = (currentAssets) => {
      setCurrentPhoneAssetIndex(0);
      setCurrentPhoneImageIndex(0);
      setAnimationClicked(false);
      buttonEntity.setAttribute("visible", "false");

      // document.querySelector('#phone-img').components.material.material.map.dispose();//05-09-2023
      //   document.querySelector('#phone-video').components.material.material.map.dispose();//05-09-2023
      //   document.querySelector('#phone-asset').components.material.material.map.dispose();//06-09-2023
      // setExtrasVisible(false);

      // if (
      //   currentDivision === "rtpmethod" ||
      //   currentDivision === "refundprocess"
      // ) {
      //   setExtrasVisible(true);
      // }
    };
    const onCanPlay = () => {
      // Once the video can play, remove the placeholder source.
      video.removeEventListener("canplay", onCanPlay);
      video.src.remove();

      // Play the video.
      if (entityLoaded) {
        video.play();
      }
    };
    const loadNextAssets = (currentAssets) => {
      //earlier it was (currentAssets,cacheBuster)
      const videoSrc = currentAssets.phoneAssets[0].video;
      // document.querySelector('#phone-img').components.material.material.map.dispose();//05-09-2023
      //   document.querySelector('#phone-video').components.material.material.map.dispose();//05-09-2023
      // video.src = videoSrc + "?cache=" + cacheBuster;
      video.src = videoSrc;
      video.addEventListener("canplay", onCanPlay);
    };
    const handleDivisionButtonClick = async (event) => {
      buttonEntity.setAttribute("visible", "false");
      const divisions = Object.keys(assetJson);
      const currentDivisionIndex = divisions.indexOf(currentDivision);
      const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
      const currentAssets = assetJson[divisions[nextDivisionIndex]];
      const cacheBuster = new Date().getTime();

      // Check if the last division is loaded
      if (
        nextDivisionIndex === 0 &&
        currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
      ) {
        // Last division and last asset loaded, prevent skip
        return;
      }

      // Check if enough time has passed since the last skip
      if (Date.now() - lastSkipTime < 2500) {
        // Less than 5 seconds since the last skip, prevent skip
        return;
      }

      // Set the last skip time to the current time
      setLastSkipTime(Date.now());

      buttonEntity.setAttribute("visible", "false"); // Hide the skip button
      // if(currentDivision==="appintro"){
      //   if(currentPhoneAssetIndex===1 || currentPhoneAssetIndex===2 || currentPhoneAssetIndex===3){
      //     buttonEntity.setAttribute("visible", "true");
      //     console.log("done dana donw")
      //   }
      //   else{
      //     buttonEntity.setAttribute("visible", "false");
      //   }
      // }

      setTimeout(() => {
        // Show the skip button after 5 seconds
        if (!isPlaying) {
          buttonEntity.setAttribute("visible", "true");
        }

        // Check if the skip button is clickable (exceeds division length)
        if (
          nextDivisionIndex === 0 &&
          currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
        ) {
          // Last division and last asset loaded, prevent skip
          buttonEntity.setAttribute("visible", "false");
        }
      }, timeout);
      setCurrentDivision(event.target.getAttribute("data-value"));
      setIsDropdownOpen(false);
      setCurrentPhoneAssetIndex(0); // Reset the asset index
      setCurrentPhoneImageIndex(0); // Reset the image index

      loadNextAssets(currentAssets, cacheBuster);

      setTimeout(() => {
        handleTransition(currentAssets);
        buttonEntity.setAttribute("visible", "false"); //09-5-2023
        setTimeout(() => {
          // Set visibility after the transition
          buttonEntity.setAttribute("visible", "true");
        }, video.duration * 1000); //2500
      }, timeout);
    };
    onboarding.addEventListener("click", handleDivisionButtonClick);
    paymentAcceptance.addEventListener("click", handleDivisionButtonClick);
    dashboard.addEventListener("click", handleDivisionButtonClick);
    refund.addEventListener("click", handleDivisionButtonClick);
    return () => {
      onboarding.removeEventListener("click", handleDivisionButtonClick);
      paymentAcceptance.removeEventListener("click", handleDivisionButtonClick);
      dashboard.removeEventListener("click", handleDivisionButtonClick);
      refund.removeEventListener("click", handleDivisionButtonClick);
      video.removeEventListener("canplay", onCanPlay);
      
    };
  }, [
    currentDivision,
    currentPhoneAssetIndex,
    lastSkipTime,
    video,
    isPlaying,
    timeout,
  ]);
  useEffect(() => {
    if (currentDivision === "paymentmethod" && currentPhoneAssetIndex === 0) {
      settimeout(4500);
    } else {
      settimeout(2500);
    }
  }, [currentDivision, currentPhoneAssetIndex]);
  useEffect(() => {
    const video = subsVideoRef.current;
    const buttonEntity = animationButtonRef.current;

    video.addEventListener("loadedmetadata", () => {
      setVideoDuration(video.duration);
    });

    const handleVideoEnded = () => {
      buttonEntity.setAttribute("visible", "true");
    };

    const handleVideoPlay = () => {
      buttonEntity.setAttribute("visible", "false");
      // if(currentDivision==="appintro"){
      //   if(currentPhoneAssetIndex===1 || currentPhoneAssetIndex===2 || currentPhoneAssetIndex===3){
      //     buttonEntity.setAttribute("visible", "true");
      //     console.log("done dana donw")
      //   }
      //   else{
      //     buttonEntity.setAttribute("visible", "false");
      //   }
      // }
    };

    // const handleVideoPause = () => {
    //   if (!video.paused && !audio.paused) {
    //     audio.pause();
    //   }

    // };
    video.addEventListener("play", handleVideoPlay);
    // video.addEventListener("pause", handleVideoPause);
    video.addEventListener("ended", handleVideoEnded);
    const onCanPlay = () => {
      // Once the video can play, remove the placeholder source.
      video.removeEventListener("canplay", onCanPlay);
      video.src.remove();

      // Play the video.
      if (entityLoaded) {
        video.play();
      }
    };

    const handleClick = async () => {
      buttonEntity.setAttribute("visible", "false");
      buttonEntity.removeEventListener("click", handleClick);
      if (pageLoaded) {
        // const phoneAsset=phoneAssetRef.current;
        const phoneAsset = document.querySelector("#phone-asset");
        if (phoneAsset) {
          
          setAnimationClicked(true);
        } else {
          setAnimationClicked(false);
        }
      } else {
        setAnimationClicked(false);
      }

      const divisions = Object.keys(assetJson);
      const currentDivisionIndex = divisions.indexOf(currentDivision);
      const currentAssets = assetJson[currentDivision];
      const currentPhoneAssetsLength = currentAssets.phoneAssets.length;
      const currentPhoneImagesLength = currentAssets.phoneImages.length;
      let nextPhoneAssetIndex =
        (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
      let nextPhoneImageIndex =
        (currentPhoneImageIndex + 1) % currentPhoneImagesLength;
      const cacheBuster = new Date().getTime();

      const loadNextAssets = () => {
        const nextVideoIndex =
          (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
        // const videoSrc = currentAssets.phoneAssets[nextVideoIndex].video;
        // document.querySelector('#phone-img').components.material.material.map.dispose();//05-09-2023
        // document.querySelector('#phone-video').components.material.material.map.dispose();//05-09-2023
        const videoSrc = currentAssets.phoneAssets[nextVideoIndex].video;
        // const nextSubs=currentAssets.phoneAssets[nextVideoIndex].subsVideo.subtitles
        // console.log(nextSubs)
        video.src = videoSrc;
        // video.src = videoSrc + "?cache=" + cacheBuster;
        video.addEventListener("canplay", onCanPlay);
      };

      // Load the new source (this will trigger the 'canplay' event).

      const handleTransition = () => {
        setCurrentPhoneAssetIndex(nextPhoneAssetIndex);
        setCurrentPhoneImageIndex(nextPhoneImageIndex);
        setAnimationClicked(false);
        setExtrasVisible(false);
        buttonEntity.addEventListener("click", handleClick);
        
        buttonEntity.removeEventListener("click", handleClick);
        
        buttonEntity.setAttribute("visible", "false");
      };

      // Check if all assets in the current division are loaded
      if (nextPhoneAssetIndex !== 0) {
        loadNextAssets();
        if (
          currentDivision === "rtpmethod" ||
          currentDivision === "refundprocess"
        ) {
          setExtrasVisible(true);
          // arrowEntity.setAttribute("visible",true);
          if (currentPhoneAssetIndex === 0) {
            // arrowEntity.setAttribute("visible",true);
            setExtrasVisible(true);
          } else {
            setExtrasVisible(false);
          }
        }
      } else {
        const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
        const nextDivision = divisions[nextDivisionIndex];

        if (nextDivisionIndex === divisions.length - 1) {
          //nextDivisionIndex === 0 && nextPhoneAssetIndex === 0
          // JSON iteration completed

          setTimeout(() => {
            openPopup();
          }, 2500);

          
        }
        setTimeout(() => {
          setCurrentDivision(nextDivision);
          setCurrentPhoneAssetIndex(0); // Reset the asset index
          setCurrentPhoneImageIndex(0); // Reset the image index
          loadNextAssets();
        }, timeout);
      }

      setTimeout(handleTransition, timeout);
    };

    buttonEntity.removeEventListener("click", handleClick);
    
    buttonEntity.addEventListener("click", handleClick);
    
    if (
      (currentDivision === "nullAssets" && currentPhoneAssetIndex === 1) ||
      (currentPhoneAssetIndex === 1 && currentDivision === "nullAssets1")
    ) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
    return () => {
      video.removeEventListener("loadedmetadata", () => {
        setVideoDuration(video.duration);
      });
      video.removeEventListener("ended", handleVideoEnded);
      video.removeEventListener("play", handleVideoPlay);
      video.removeEventListener("canplay", onCanPlay);
      buttonEntity.removeEventListener("click", handleClick);
      
    };
  }, [
    pageLoaded,
    currentPhoneAssetIndex,
    currentDivision,
    currentPhoneImageIndex,
    assetsVisible,
    lastSkipTime,
    playNextAssets,
    timeout, //updated dependecy might experinece some functionality changes because of it
    //  loadNextAssets, handleTransition,
  ]);

  useEffect(() => {
    const buttonEntity = animationButtonRef.current;

    // const buttonEntity = document.querySelector("#animation-button");
    //buttonEntity.setAttribute("visible", "false");
    if (currentDivision === "appintro") {
      if (
        currentPhoneAssetIndex === 1 ||
        currentPhoneAssetIndex === 2 ||
        currentPhoneAssetIndex === 3
      ) {
        buttonEntity.setAttribute("visible", "true");
      }
      if (!isPlaying) {
        buttonEntity.setAttribute("visible", "true");
      }
    }
  }, [currentDivision, currentPhoneAssetIndex, isPlaying]);
  useEffect(() => {
    const buttonEntity = animationButtonRef.current;
    // const buttonEntity = document.querySelector("#animation-button");
    buttonEntity.setAttribute("visible", "false");
  }, []);
  useEffect(() => {
    const audioElement = subsVideoRef.current;
    let currentSubtitleIndex = 0;

    const updateSubtitle = () => {
      const currentTime = audioElement.currentTime;

      // Assuming 'currentDivision' is defined elsewhere
      const currentAssets = assetJson[currentDivision].phoneAssets;

      // Access the 'subsVideo' property inside 'currentAssets'
      const subtitleData = currentPhoneAsset.subsVideo.subtitles;

      const subtitle = subtitleData.find((subtitle, index) => {
        const { start, end } = subtitle;
        return currentTime >= start && currentTime <= end;
      });
      if (subtitle) {
        setCurrentSubtitle(subtitle.text);
      } else {
        setCurrentSubtitle("");
      }
    };

    audioElement.addEventListener("timeupdate", updateSubtitle);

    return () => {
      audioElement.removeEventListener("timeupdate", updateSubtitle);
    };
  }, [currentDivision, currentPhoneAsset.subsVideo.subtitles]);
  useEffect(() => {
    setCurrentSubtitle("");
  }, [currentPhoneAssetIndex]);
  
  //   useEffect(()=>{
  //     const phoneVideoIn = document.querySelector('#phone-video-in');

  // // Get the material component of the entity
  // const materialComponent = phoneVideoIn.getAttribute('material');

  // // Check if the 'src' property of the material contains a video file extension
  // const isVideo = materialComponent.src.match(/\.(mp4|webm|ogg)$/i) !== null;

  // if (isVideo) {
  //   console.log('This material uses a video as its source.');
  //   phoneVideoIn.setAttribute('muted', true);

  // } else {
  //   console.log('This material uses an image as its source.');
  // }
  //   })
  useEffect(() => {
    if (currentDivision === "appintro") {
      if (
        currentPhoneAssetIndex === 1 ||
        currentPhoneAssetIndex === 2 ||
        currentPhoneAssetIndex === 1
      ) {
        setDisplayBg(false);
      } else {
        setDisplayBg(true);
      }
    }
  }, [currentDivision, currentPhoneAssetIndex]);

  const handleLobbyClick = (event) => {
    event.stopPropagation();
    navigate("/isglobby");
    // Replace "/your-route" with the desired path
  };
  const handleSmartmerchantClick = (event) => {
    event.stopPropagation();
    navigate("/smartmerchant");
     // Replace "/your-route" with the desired path
  };

  // const [currentEntityIndex, setCurrentEntityIndex] = useState(0);
  // const entityNames = Object.keys(entityVisibility);

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
    const esyAsset = document.getElementById("esy");
    esyAsset.setAttribute("gltf-model", esy);
  }, [esy]);
  useEffect(() => {
    const dummyEsyVideo = isySpeechVideoRef.current;
    const dummyEsyHandVideo = isyHandVideoRef.current;
    const placeholderEntity = document.getElementById("model-placeholder");
    const placeholderEntity1 = document.getElementById("model1-placeholder");
    const actualModelEntity = document.getElementById("esy");
    const actualModelEntity1 = document.getElementById("esy-hand");
    const checkModelLoaded = () => {
      placeholderEntity.setAttribute("visible", false);
      // actualModelEntity.setAttribute("visible", true);
      dummyEsyVideo.pause();
      placeholderEntity.remove();
      // dummyEsyVideo.removeAttribute("src");
    };
    const checkModelLoaded1 = () => {
      placeholderEntity1.setAttribute("visible", false);
      placeholderEntity1.remove();
      // actualModelEntity1.setAttribute("visible", true);
      // dummyEsyHandVideo.removeAttribute("src");
      placeholderEntity1.setAttribute("scale", "0 0 0");
      dummyEsyHandVideo.pause();
      setEsyHandLoaded(true);
    };
    // if((currentDivision==="nullAssets" && currentPhoneAssetIndex===1)|| (currentDivision==="nullAssets1" && currentPhoneAssetIndex===1)){
    actualModelEntity1.addEventListener("model-loaded", checkModelLoaded1);

    // }

    actualModelEntity.addEventListener("model-loaded", checkModelLoaded);

    return () => {
      actualModelEntity.removeEventListener("model-loaded", checkModelLoaded);
      actualModelEntity1.removeEventListener("model-loaded", checkModelLoaded);
    };
  }, []);

  return (
    <div
      className="scene-container"
      onClick={() => {
        setMute(false);
      }}
    >
      <HideVRButton />
      <Popup
        className="appdemo-popup"
        open={isPopupOpen}
        onClose={closePopup}
        position="right center"
      >
        <div className="appdemo-popup-container">
          <div className="appdemo-popup-text">
            The app demonstration is completed. Click Back to lobby to return to
            lobby or cancel to continue with the demonstation
          </div>
          <div className="popup-btn-container">
            <button className="appdemo-popup-btn" onClick={handleLobbyClick}>
              Back to lobby
            </button>{" "}
            <button className="appdemo-popup-btn" onClick={closePopup}>
              Cancel
            </button>
          </div>
        </div>
      </Popup>
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

      <div
        class="smart-dropdown"
        ref={dropDownTriggerRef}
        onClick={handleDropdownClick}
        style={{ display: isSceneLoaded ? "flex" : "none" }}
      >
        <div
          id="dropdown-trigger"

          // class="smart-dropdown"
        >
          <span className="smart-dropdown-title appdemo-dropdown-title">
            Select Demo
          </span>
        </div>
        <div
          id="dropdown-options"
          ref={dropDownOptionsRef}
          class="dropdown-options"
        >
          {/* <div class="dropdown-option" data-value="apploading">App Installation</div> */}
          <div
            id="onboarding"
            ref={onboardingRef}
            class="dropdown-option option-odd"
            data-value="appintro"
          >
            Onboarding
          </div>
          {/* <div class="dropdown-option" data-value="userreg">User Registration</div> */}
          <div
            id="payment-acceptance"
            ref={paymentAcceptanceRef}
            class="dropdown-option option-even"
            data-value="paymentmethod"
          >
            Payment Acceptance
          </div>
          {/* <div class="dropdown-option" data-value="rtpmethod">RTP</div> */}
          <div
            id="dashboard"
            class="dropdown-option option-odd"
            ref={dashboardRef}
            data-value="recpay"
          >
            Dashboard
          </div>
          {/* <div class="dropdown-option" data-value="datahandling">Data Handling</div> */}
          <div
            id="refund"
            class="dropdown-option option-even"
            ref={refundRef}
            data-value="refundprocess"
          >
            Refund
          </div>
          <div
            id="smartmerchant"
            class="dropdown-option option-odd"
            data-value="refundprocess"
            onClick={handleSmartmerchantClick}
          >
            Smartmerchant Intro
          </div>
        </div>
      </div>
      {/* <video
        src={currentPhoneAsset.subsVideo.videoElement}
        ref={subsAudioRef}
        controls={false}
        preload="metadata"
        className="demo-subs subs-audio audio-element"
      /> */}
      <audio
        id="subsAudio"
        ref={subsVideoRef}
        src={currentPhoneAsset.subsVideo.audio}
        preload="metadata"
        className="demo-subs subs-audio audio-element"
        // You can add other audio-specific attributes or styles here
      >
        <source type="audio/mpeg" src={currentPhoneAsset.subsVideo.audio} />
      </audio>
      {/* <audio ref={subsAudioRef} src={currentPhoneAsset.subsVideo.audio} controls={false} preload="auto" className="demo-subs subs-audio audio-element"/> */}
      {/* <button className="demo-play-btn" onClick={handlePlayBtnClick}>Play</button> */}
      <div className="demo-subs-container appdemo-subs-container">
        <div
          className="previous-skip-container"
          id="prevskip-container"
          style={{ display: isSceneLoaded ? "flex" : "none" }}
        >
          <button
            className="next-btn"
            ref={skipBtnRef}
            style={{
              display: currentDivision !== "refundprocess" ? "block" : "none",
            }}
          >
            {" "}
            {/*added class for overididng style */}
            Skip
          </button>
          <button
            className="previous-video-btn"
            ref={previousBtnRef} //used to go to the previous division
            style={{
              display: currentDivision !== "apploading" ? "block" : "none",
            }}
          >
            Previous
          </button>
        </div>
        <button
          className="next-video-btn lobby-btn next-btn"
          onClick={handleLobbyClick}
          style={{
            display:
              currentDivision === "refundprocess" &&
              currentPhoneAssetIndex === 2
                ? "block"
                : "none",
          }} //used to go to the previous division
        >
          Back to Lobby
        </button>

        <div
          className={`demo-subs-main-container ${
            isPlaying && displayBg ? "subs-visible" : ""
          }`}
        >
          {/* <video
            id="subsVideo"
            ref={subsVideoRef}
            src={currentPhoneAsset.subsVideo.audio}
            // onLoadedMetadata={handleLoadedMetadata}
            type="video/webm"
            muted
            controls={false}
            preload="metadata"
            className="demo-subs"
            // style={{display: "none"}}
          ><source  type="video/webm"/></video> */}
          <span className="demo-subs-span">
            {isPlaying ? currentSubtitle : ""}
          </span>
          {/* <span className="demo-subs-span">wELCOME TO iSMARTMERCHANT</span> */}

          <div className="next-button-container"></div>
        </div>
      </div>
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
         renderer={
           "antialias: true; physicallyCorrectLights: true; "
         }
         embedded={true} vr-mode-ui={{ enabled: false }} loading-screen={{ enabled: false }}
      >
        <a-entity id="camera-rig" position="0 0 0" ref={cameraRotationRef}>
          <a-entity
            id="camera"
            rotation="0 -40 0"
            wasd-controls-enabled="false"
            camera={`userHeight:1.6; active:true; zoom:1.5;`}
            look-controls="true"
            ref={cameraRef}
            position="0 0 0"
            // zoom={zoom}
            // near="0.05"
            // far="10000"
            // fov="100"
            // camera="active:true"
            //look-controls-limited="true"
            camera-rotation-limit="minRotation:-25; maxRotation: -20;"

            // looklimited
          >
            <a-entity
              id="phone-light-1"
              light="type: spot; castShadow: true; intensity: 1; distance: 200; color: #ffffff; penumbra: 1; angle: 40; groundColor: #ffffff; shadowCameraRight: 7.22; decay: -0.33"
              position="0.02127 1.151 -0.60992"
              rotation="-77.21523021860052 129.48044029043422 60.95468799278776"
              scale="0.2 0.2 0.2"
            ></a-entity>
            <a-entity
              id="phone-light-2"
              light="type: spot; castShadow: true; intensity: 0.4; distance: 197.68; color: #a0d8e3; penumbra: 0.13; angle: 40; groundColor: #ffdc2e; shadowCameraRight: 7.22; decay: -0.66"
              position="-0.02859 4.44158 1.81392"
              rotation="-64.51791252070635 20.737061479169885 172.13084560217757"
              scale="0.2 0.2 0.2"
            ></a-entity>
            <a-entity id="phone-light-3" light="type: spot; castShadow: true; intensity: 0.4; distance: 200; color: #ffffff; penumbra: 1; angle: 40; groundColor: #ffffff; shadowCameraRight: 7.22; decay: -0.33" 
            position="0.02127 -1.26743 -0.60992" rotation="84.09874516930223 -133.66303219488924 -122.26976643871281" scale="0.2 0.2 0.2"></a-entity>
            {assetsVisible && (
              <>
                <a-entity
                  lazy="true"
                  id="phone-asset"
                  useRef={phoneAssetRef}
                  gltf-model={appHandSingle}
                  scale={
                    currentPhoneAsset.imagePath.includes("app_hand_single")
                      ? `${currentPhoneAsset.scale.x} ${currentPhoneAsset.scale.y} ${currentPhoneAsset.scale.z}`
                      : `0 0 0`
                  }
                  position={`${currentPhoneAsset.position.x} ${currentPhoneAsset.position.y} ${currentPhoneAsset.position.z}`}
                  rotation={`${currentPhoneAsset.rotation.x} ${currentPhoneAsset.rotation.y} ${currentPhoneAsset.rotation.z}`}
                  // visible={currentPhoneAsset.imagePath==="appHandSingle"?true:false}
                  {...(animationClicked && {
                    "animation-mixer": `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:1;`,
                  })}
                  // animation-mixer={animationClicked ? `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:Infinity;` : ""}
                />
                <a-entity
                  lazy="true"
                  id="phone-asset"
                  useRef={phoneAssetRef}
                  gltf-model={appHandCardSingle}
                  scale={
                    currentPhoneAsset.imagePath.includes("app_hand_card_single")
                      ? `${currentPhoneAsset.scale.x} ${currentPhoneAsset.scale.y} ${currentPhoneAsset.scale.z}`
                      : `0 0 0`
                  }
                  position={`${currentPhoneAsset.position.x} ${currentPhoneAsset.position.y} ${currentPhoneAsset.position.z}`}
                  rotation={`${currentPhoneAsset.rotation.x} ${currentPhoneAsset.rotation.y} ${currentPhoneAsset.rotation.z}`}
                  // shadow="cast:true;"
                  // visible={currentPhoneAsset.imagePath==="appHandCardSingle"?true:false}
                  {...(animationClicked && {
                    "animation-mixer": `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:1;`,
                  })}
                  // animation-mixer={animationClicked ? `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:Infinity;` : ""}
                />
                <a-entity
                  lazy="true"
                  id="phone-asset"
                  useRef={phoneAssetRef}
                  gltf-model={appHandPanSingle}
                  scale={
                    currentPhoneAsset.imagePath.includes("app_hand_pan_single")
                      ? `${currentPhoneAsset.scale.x} ${currentPhoneAsset.scale.y} ${currentPhoneAsset.scale.z}`
                      : `0 0 0`
                  }
                  position={`${currentPhoneAsset.position.x} ${currentPhoneAsset.position.y} ${currentPhoneAsset.position.z}`}
                  rotation={`${currentPhoneAsset.rotation.x} ${currentPhoneAsset.rotation.y} ${currentPhoneAsset.rotation.z}`}
                  // shadow="cast:true;"
                  // visible={currentPhoneAsset.imagePath==="appHandPanSingle"?true:false}
                  {...(animationClicked && {
                    "animation-mixer": `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:1;`,
                  })}
                  // animation-mixer={animationClicked ? `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:Infinity;` : ""}
                />

                {/*no inspector because of img*/}
                <a-entity
                  lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${currentPhoneImage.imagePath};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`}
                ></a-entity>
                <a-entity
                  lazy="true"
                  id="phone-img-in"
                  material={`shader: flat;  alphaTest:0.5; src:#video-in-src;   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.phoneImg.position.x} ${currentPhoneImage.phoneImg.position.y} ${currentPhoneImage.phoneImg.position.z}`}
                  rotation={`${currentPhoneImage.phoneImg.rotation.x} ${currentPhoneImage.phoneImg.rotation.y} ${currentPhoneImage.phoneImg.rotation.z}`}
                  scale={`${currentPhoneImage.phoneImg.scale.x} ${currentPhoneImage.phoneImg.scale.y} ${currentPhoneImage.phoneImg.scale.z}`}
                ></a-entity>
                <a-entity
                  id="phone-video-in"
                  material={`shader: flat; alphaTest: 0.5; src:#video-in-src; transparent: true`}
                  geometry="primitive: plane; width: 2; height: 3.8"
                  position={`${currentPhoneAsset.phoneScreenIn.position.x} ${currentPhoneAsset.phoneScreenIn.position.y} ${currentPhoneAsset.phoneScreenIn.position.z}`}
                  rotation={`${currentPhoneAsset.phoneScreenIn.rotation.x} ${currentPhoneAsset.phoneScreenIn.rotation.y} ${currentPhoneAsset.phoneScreenIn.rotation.z}`}
                  scale={`${currentPhoneAsset.phoneScreenIn.scale.x} ${currentPhoneAsset.phoneScreenIn.scale.y} ${currentPhoneAsset.phoneScreenIn.scale.z}`}
                ></a-entity>
                <a-entity
                  lazy="true"
                  id="phone-video"
                  material={`shader: flat; alphaTest: 0.5; src:${currentPhoneImage.imagePath}; transparent: true;`}
                  geometry="primitive: plane; width: 2; height: 3.8"
                  position={`${currentPhoneAsset.phoneScreen.position.x} ${currentPhoneAsset.phoneScreen.position.y} ${currentPhoneAsset.phoneScreen.position.z}`}
                  rotation={`${currentPhoneAsset.phoneScreen.rotation.x} ${currentPhoneAsset.phoneScreen.rotation.y} ${currentPhoneAsset.phoneScreen.rotation.z}`}
                  scale={`${currentPhoneAsset.phoneScreen.scale.x} ${currentPhoneAsset.phoneScreen.scale.y} ${currentPhoneAsset.phoneScreen.scale.z}`}
                ></a-entity>

                <>
                  <a-entity
                    id="rtp-phone"
                    gltf-model={rtpmobile}
                    scale={
                      (currentDivision === "paymentmethod" &&
                        currentPhoneAssetIndex === 3) ||
                      (currentDivision === "refundprocess" &&
                        currentPhoneAssetIndex === 2)
                        ? `3 3 3`
                        : `0 0 0`
                    }
                    rotation="-46.78658763479276 -10.097808181385629 8.462013676287128"
                    position="-0.36309 -3.12602 0.50687"
                    animation-mixer="clip: Animation"
                  ></a-entity>
                </>

                {((currentDivision === "paymentmethod" &&
                  currentPhoneAssetIndex === 3) ||
                  (currentDivision === "refundprocess" &&
                    currentPhoneAssetIndex === 2)) && (
                  <a-entity
                    id="arrow-entity"
                    material={`shader: flat; color: white; transparent: true; src:#arrow;`}
                    // visible={((currentDivision === "paymentmethod" && currentPhoneAssetIndex===3) || (currentDivision === "refundprocess" && currentPhoneAssetIndex===2)) ? "true" : "false"}
                    geometry="primitive: plane; width: 5.45; height: 2.96"
                    position="-0.65925 0.12821 -1.37255"
                    rotation="0.9241809235460178 -12.21488723439402 -2.7146740333298403"
                    scale="0.21033 0.21033 0.21033"
                  ></a-entity>
                )}
              </>
            )}

            <a-entity
              id="animation-button"
              ref={animationButtonRef}
              material="shader: flat; color:white; side: double; transparent: true; opacity: 0.5; src:#buttonvideo;"
              geometry="primitive: circle; radius: 0.2; theta-length: 360"
              position={`${currentPhoneImage.buttonPosition.x} ${currentPhoneImage.buttonPosition.y} -0.86971`}
              rotation="0 -180 0"
              scale="-0.2 0.2 0.2"
              // visible={buttonVisibilityAttribute}
              // onClick={handleAnimationClick}
              event-set__mouseenter="_event: mouseenter; material.opacity: 0.9; textEntity.opacity:0.7; text.color:orange;"
              event-set__mouseleave="_event: mouseleave; material.opacity: 0.7; textEntity.opacity:0; text.color:red;"
              raycaster="objects: [gui-interactable]"
            ></a-entity>

            {/* Just for Position and rotation testing */}
            {/* <a-entity id="phone-img" material={`shader: flat;  alphaTest:0.5;   transparent: true;`} geometry="primitive: plane; width: 2; height: 3.8" position="0.65229 -0.006 -0.98319" rotation="3.5844239663384303 -4.396305162038807 0.6852575229764646" scale="0.2 0.2 0.2"></a-entity>
         <a-entity
         material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5;"
         geometry="primitive: circle; radius: 0.2; theta-length: 360"
          position={`0.642 -0.15784 -0.86971`}
          rotation="0 0 0"
          scale="-0.2 0.2 0.2"
          onClick={handleAnimationClick}
          event-set__mouseenter="_event: mouseenter; material.opacity: 0.8; textEntity.opacity:0.7; text.color:orange;"
          event-set__mouseleave="_event: mouseleave; material.opacity: 0.4; textEntity.opacity:0; text.color:red;"
          raycaster="objects: [gui-interactable]"
        ></a-entity> */}

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
        {currentDivision === "apploading" && currentPhoneAssetIndex === 0 && (
          <a-entity
            lazy="true"
            id="phone-img"
            material={`shader: flat;  alphaTest:0.5; src:#qr-code; transparent: true;`}
            geometry={`primitive: plane; width:3.8; height:3.8;`}
            position="0.80396 -0.02507 -0.96379"
            rotation="2.8447354528245374 -39.4526366581533504 -0.1753250853100319"
            scale="0.167 0.167 0.167"
          ></a-entity>
        )}

        <a-assets lazy="true">
          <img id="tv-border" src={tvImg} alt="" />
          <img id="qr-code" src={qrcode} alt="" />
          <video
            ref={videoInSrcRef}
            id="video-in-src"
            type="video/mp4"
            preload="metadata"
            src={currentPhoneAsset.phoneScreenIn.imagepath}
            width="1920"
            height="1080"
            // loop="true"
            crossOrigin="anonymous"
            playsInline=""
            webkit-playsinline=""
          ></video>
          {/* <video
            ref={videoInSrcRef}
            id="video-in-src"
            type="video/mp4"
            preload="auto"
            src={currentPhoneImage.phoneImg.imagepath}
            width="1920"
            height="1080"
            loop="true"
            crossOrigin="anonymous"
            playsInline=""
            webkit-playsinline=""

          ></video> */}
          <video
            className="displayVideo"
            ref={arrowRef}
            id="arrow"
            preload="metadata"
            src={arrow}
            width="1920"
            height="1080"
            loop="true"
            crossOrigin="anonymous"
            playsInline=""
            webkit-playsinline=""
          ></video>
          <video
            ref={buttonVideoRef}
            className="videos"
            id="buttonvideo"
            preload="metadata"
            src={buttonvideo}
            width="1920"
            height="1080"
            autoplay="true"
            loop="true"
            crossOrigin="anonymous"
            playsInline=""
            webkit-playsinline=""
          ></video>
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
          <video
            ref={isyHandVideoRef}
            className="videos"
            id="isy-hand"
            preload="metadata"
            src={isyHandraise}
            width="1920"
            height="1080"
            // autoplay="true"
            // loop="true"
            crossOrigin="anonymous"
            playsInline=""
            webkit-playsinline=""
          ></video>

          {/* <audio id="isyintro" src={isyintro} preload="auto"></audio> */}

          <a-asset-item id="esy-model" response-type="arraybuffer" src={esy} />
          {/* <a-asset-item id="esy-hand" response-type="arraybuffer" src={esyHand} /> */}

          <img id="smartapp-bg" src={smartmerchant} alt="" />
        </a-assets>
        <a-sky src="#smartapp-bg" rotation="0 -130 0" />
        <a-sky color="#ECECEC" scale="3 3 3"></a-sky>
        {/* <Entity primitive="a-sky" color="#ECECEC" scale="3 3 3" /> */}

        <a-entity
          id="spot1"
          light="type: spot; castShadow: true; intensity: 5; distance: 46.25; color: white; penumbra: 1; angle: 20"
          position="33.933 -8.73 2.177"
          rotation="6.428013503572705 53.874648518356175 -62.41916811714215"
          scale="0.2 0.2 0.2"
        ></a-entity>
        <a-entity
          id="spot2"
          light="type: spot; castShadow: true; intensity: 1; distance: 46.25; color: white; penumbra: 1; angle: 30"
          position="-18.60183 -0.329 3.43627"
          rotation="-9.325 -40.88 7.024"
          scale="0.2 0.2 0.2"
        ></a-entity>

        <a-entity
          id="spot3"
          light="type: spot; castShadow: true; intensity: 3.25; distance: 46.25; color: white; penumbra: 1; angle: 30; decay: 1.1"
          position="-21.02744 -0.52743 -39.79053"
          rotation="-1.5515697092142693 -135.06276808839382 43.00220139795368"
          scale="0.2 0.2 0.2"
        ></a-entity>
        <a-entity
          id="spot4"
          light="type: spot; castShadow: true; intensity: 2; distance: 46.25; color: #30499c; penumbra: 1; angle: 20; groundColor: #ffffff"
          position="20.43057 0 -24.38125"
          rotation="2.7845748843358007 115.23556358789169 44.978332833359886"
          scale="0.2 0.2 0.2"
        ></a-entity>
        <a-entity
          lazy="true"
          gltf-model="#esy-model"
          id="esy"
          entity-loaded-appdemo
          ref={esyRef}
          position="1.959 -6.000 -15.915"
          scale={
            (currentDivision === "nullAssets" &&
              currentPhoneAssetIndex === 1) ||
            (currentDivision === "nullAssets1" && currentPhoneAssetIndex === 1)
              ? "0 0 0"
              : " 0.18 0.18 0.18"
          }
          rotation="0 -8.586  0"
          shadow="cast:true; receive:false;"
          // animation-mixer="clip:;loop:repeat;repetitions:Infinity;"
        />
        {/* <a-entity
          gltf-model={esyDummy}
          position="-1.959 -6.000 -15.915" entity-loaded
          id="model-placeholder"
          scale="0.18 0.18 0.18"
          rotation="0 -8.586  0"
          shadow="cast:true;"
          animation-mixer="clip:Take 001;loop:repeat;repetitions:Infinity;"
          /> */}
        <a-entity
          id="model-placeholder"
          material="shader: flat;  src:#isy-speech;  transparent: true"
          geometry="primitive: plane; width: 2; height: 2.96"
          entity-loaded
          position="1.959 -2.500 -15.915"
          rotation="0 -50.586  0"
          scale={
            (currentDivision === "nullAssets" &&
              currentPhoneAssetIndex === 1) ||
            (currentDivision === "nullAssets1" && currentPhoneAssetIndex === 1)
              ? "0 0 0"
              : "2.747 3.077 2.600"
          }
        ></a-entity>
        <a-entity
          id="model1-placeholder"
          material="shader: flat;  src:#isy-hand;  transparent: true"
          geometry="primitive: plane; width: 2; height: 2.96"
          entity-loaded
          position="1.959 -2.500 -15.915"
          rotation="0 -50.586  0"
          scale={
            ((currentDivision === "nullAssets" &&
              currentPhoneAssetIndex === 1) ||
              (currentDivision === "nullAssets1" &&
                currentPhoneAssetIndex === 1)) &&
            !esyHandLoaded
              ? "2.747 3.077 2.600"
              : "0 0 0"
          }
        ></a-entity>
        <a-entity
          lazy="true"
          gltf-model={esyHand}
          id="esy-hand"
          ref={esyhandRef}
          position="1.959 -6.000 -15.915"
          scale={
            (currentDivision === "nullAssets" &&
              currentPhoneAssetIndex === 1) ||
            (currentDivision === "nullAssets1" && currentPhoneAssetIndex === 1)
              ? " 0.18 0.18 0.18"
              : "0 0 0"
          }
          rotation="0 -8.586  0"
          shadow="cast:true; receive:false;"
          // animation-mixer="clip:;loop:repeat;repetitions:Infinity;"
        />
        <a-entity
          //LobbyDoor
          id="#smartgate"
          material="shader: flat; color:#86d6e2; side: double; transparent: true; opacity: 0.5;"
          geometry="primitive: cylinder; radius: 40; height: 23.9; open-ended: true; theta-start: 142.5; theta-length: 40"
          position="-99.08677 -20.10092 122.78598"
          rotation="0 -212.78 0"
          scale="2.65625 2.65625 2.65625"
          onClick={handleLobbyClick}
          event-set__mouseenter="_event: mouseenter; material.opacity: 0.5"
          event-set__mouseleave="_event: mouseleave; material.opacity: 0"
        ></a-entity>

        <a-light light="type: ambient"></a-light>
        <button
          className=" app-demo-logout logout-position"
          onClick={logoutHandler}
          style={{ display: isSceneLoaded ? "flex" : "none" }}
        >
          Logout
        </button>
      </Scene>
    </div>
  );
}

export default AppDemonstration;
