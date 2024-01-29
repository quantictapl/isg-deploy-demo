import React, { useEffect, useRef, useState } from "react";
import { Entity, Scene } from "aframe-react";
import "aframe-extras";
import * as THREE from "three";
import { resetUserSession } from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import HideVRButton from "./HideVRButton";
import smartmerchant from "../WithTable.jpg";
// import "./componentcss/SmartMerchant.css";
 //import "aframe-inspector";
import "aframe-event-set-component";
import isySpeech from "../SmartMerchantAssets/videos/isy_speech.webm"
// import esy from "../SmartMerchantAssets/isy_hand.glb";
// import tvImg from "../SmartMerchantAssets/tvBorder.png";
// import eva from "../SmartMerchantAssets/eva.glb"
// import appLoading1 from "../SmartMerchantAssets/apploading/apploading1.glb";
// import appLoading2 from "../SmartMerchantAssets/apploading/apploadingtwo.glb";
// import appLoading3 from "../SmartMerchantAssets/apploading/apploadingthree.glb";
// import appLoading4 from "../SmartMerchantAssets/apploading/apploading4.glb";
// import qrcode from "../SmartMerchantAssets/apploading/appimages/Qrcode.PNG";
// import appimg2 from "../SmartMerchantAssets/apploading/appimages/appLoadingImg2.png";
// import appimg3 from "../SmartMerchantAssets/apploading/appimages/appLoadingImg3.png";
// import appimg4 from "../SmartMerchantAssets/apploading/appimages/appLoadingImg4.png";
import buttonvideo from "../videos/circle.mp4";
// import demoAudio1 from "../SmartMerchantAssets/videos/videoplayback.mp4";
// import demoAudio from "../SmartMerchantAssets/videos/demoSpeech1.webm";
// import demoTransparent from "../SmartMerchantAssets/videos/dialog2.webm";
// import demoTransparent2 from "../SmartMerchantAssets/videos/dialog1.webm";
import "./componentcss/AppDemonstration.css";
// import appintro1 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg1.png";
// import appintro2 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg2.png";
// import appintro3 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg3.png";
// import appintro4 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg4.png";
// import appintro5 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg5.png";
// import appintroasset1 from "../SmartMerchantAssets/appintro/appintro1.glb";
// import appintroasset2 from "../SmartMerchantAssets/appintro/appintro2.glb";
// import appintroasset3 from "../SmartMerchantAssets/appintro/appintro3.glb";
// import appintroasset4 from "../SmartMerchantAssets/appintro/appintro4.glb";
// import appintroasset5 from "../SmartMerchantAssets/appintro/appintro5.glb";
// import appHand from "../SmartMerchantAssets/appintro/app_hand.glb";
// import userreg1 from "../SmartMerchantAssets/userreg/userreg1.glb";
// import userreg2 from "../SmartMerchantAssets/userreg/userreg2.glb";
// import userreg3 from "../SmartMerchantAssets/userreg/userreg3.glb";
// import userregimg1 from "../SmartMerchantAssets/userreg/UserRegImages/userregImg1.png";
// import userregimg2 from "../SmartMerchantAssets/userreg/UserRegImages/userregImg2.png";
// import userregimg3 from "../SmartMerchantAssets/userreg/UserRegImages/userregImg3.png";
// import paymentmethod1 from "../SmartMerchantAssets/paymentmethod/paymentmethod1.glb";
// import paymentmethod2 from "../SmartMerchantAssets/paymentmethod/paymentmethod2.glb";
// import paymentmethod3 from "../SmartMerchantAssets/paymentmethod/paymentmethod3.glb";
// import paymentmethodimg1 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg1.png";
// import paymentmethodimg2 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg2.png";
// import paymentmethodimg3 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg3.png";
// import paymentmethodimg4 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg4.png";
// import paymentmethodimg5 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg5.png";
// import paymentmethodimg6 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg6.png";
// import paymentmethodimg7 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg7.png";
// import rtpmethod1 from "../SmartMerchantAssets/rtp/rtpmethod1.glb";
// import rtpmethod2 from "../SmartMerchantAssets/rtp/rtpmethod2.glb";
// import rtpmethod3 from "../SmartMerchantAssets/rtp/rtpmethod3.glb";
// import rtpmobile from "../SmartMerchantAssets/rtp/rtpmobile.glb";
// import rtpimg1 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg1.png";
// import rtpimg2 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg2.png";
// import rtpimg3 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg3.png";
// import rtpimg4 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg4.png";
// import arrow from "../SmartMerchantAssets/videos/arrow.webm";
// import arrowscreen from "../SmartMerchantAssets/videos/arrowscreen.jpg";
// import recpay from "../SmartMerchantAssets/recordpayment/recpay.glb";
// import recpayvideo1 from "../SmartMerchantAssets/recordpayment/recpayVid1.webm";
// import datahandling from "../SmartMerchantAssets/datahandling/datahandlingasset.glb";
// import refundasset1 from "../SmartMerchantAssets/refundprocess/refund1.glb";
// import refundasset2 from "../SmartMerchantAssets/refundprocess/refund2.glb";
// import refundasset3 from "../SmartMerchantAssets/refundprocess/refund3.glb";
// import refundimg1 from "../SmartMerchantAssets/refundprocess/refundImg1.png";
// import refundimg2 from "../SmartMerchantAssets/refundprocess/refundImg2.png";
// import refundimg3 from "../SmartMerchantAssets/refundprocess/refundImg3.png";
// import refundmobile from "../SmartMerchantAssets/refundprocess/refundmobile.glb";
// import apploading1 from "../SmartMerchantAssets/apploading1.glb";
// import appHandSingle from  "../SmartMerchantAssets/apploading/app_hand_single.glb"
// import appHandPanSingle from "../SmartMerchantAssets/apploading/app_hand_pan_single.glb";
// import appHandCardSingle from "../SmartMerchantAssets/apploading/app_hand_card_single.glb";
import "./CameraRotationLimit"
import * as AFRAME from 'aframe';
// const appHandSingle="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/handassets/app_hand_single.glb"
// const appHandPanSingle="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/handassets/app_hand_pan_single.glb"
// const appHandCardSingle="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/handassets/app_hand_card_single.glb"

const qrAudio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/qrAudio.mp3"
const appLoading2Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/apploading2Audio.mp3";
const appLoading3Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/apploading3Audio.mp3";
const appIntro1Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/AppIntro1Audio.mp3";
const appIntro2Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/AppIntro2Audio.mp3"

const userreg1Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/userreg1Audio.mp3";
const userreg2Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/userreg2Audio.mp3";
const userreg3Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/userreg3Audio.mp3"

const  onboarding1Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/onboarding1Audio.mp3"
const  onboarding2Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/onboarding2Audio.mp3"

const paymentacceptance1Audio ="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/paymentAcceptance1Audio.mp3";
const paymentacceptance2Audio ="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/paymentAcceptance2Audio.mp3";

const paymentmethod1Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/payment1Audio.mp3"
const paymentmethod2Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/payment2Audio.mp3"
const paymentmethod3Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/payment3Audio.mp3"
const paymentmethod4Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/payment4Audio.mp3"
const paymentmethod5Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/payment5Audio.mp3"
const paymentmethod6Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/payment6Audio.mp3"
const paymentmethod7Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/payment7Audio.mp3"

const rtp1Audio = "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/rtp1Audio.mp3";
const rtp2Audio = "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/rtp2Audio.mp3";
const rtp3Audio = "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/rtp3Audio.mp3";
const rtp4Audio = "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/rtp4Audio.mp3";

const recpay1Audio= "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/recpay1Audio.mp3";
const recpay2Audio= "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/recpay2Audio.mp3";
const recpay3Audio= "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/recpay3Audio.mp3";

const refund1Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/refund1Audio.mp3";
const refund2Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/refund2Audio.mp3";
const refund3Audio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/refund3Audio.mp3";
const qrcode="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/appimages/Qrcode.PNG";
const appimg1= "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/appimages/appLoadingImg1.png";
const appimg2= "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/appimages/appLoadingImg2.png";
const appimg3= "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/appimages/appLoadingImg3.png";

const appintro1="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/appintroimages/appIntroImg1.png";
const appintro2="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/appintroimages/appIntroImg2.png";
const appintro3="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/appintroimages/appIntroImg3.png";
const appintro4="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/appintroimages/appIntroImg4.png";
const appintro5="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/appintroimages/appIntroImg5.png";


const userregimg1 ="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/UserRegImages/userregImg1.png";
const userregimg2 ="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/UserRegImages/userregImg2.png";
const userregimg3 ="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/UserRegImages/userregImg3.png";

const paymentmethodimg1="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/paymentmethodimg/paymentMethodImg1.png";
const paymentmethodimg2="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/paymentmethodimg/paymentMethodImg2.png";
const paymentmethodimg3="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/paymentmethodimg/paymentMethodImg3.png";
const paymentmethodimg4="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/paymentmethodimg/paymentMethodImg4.png";
const paymentmethodimg5="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/paymentmethodimg/paymentMethodImg5.png";
const paymentmethodimg6="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/paymentmethodimg/paymentMethodImg6.png";
const paymentmethodimg7="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/paymentmethodimg/paymentMethodImg7.png";

const rtpimg1="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/rtpimages/rtpImg1.png";
const rtpimg2="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/rtpimages/rtpImg2.png";
const rtpimg3="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/rtpimages/rtpImg3.png";
const rtpimg4="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/rtpimages/rtpImg4.png";

const refundimg1="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/refundprocess/refundImg1.png";
const refundimg2="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/refundprocess/refundImg2.png";
const refundimg3="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/refundprocess/refundImg3.png";

const recpayimg1="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/recordpayment/recpayImg1.png";

const recpayVidIn1="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/recordpayment/recpayIn1.mp4";
const recpayVidIn2="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/recordpayment/recpayIn2.mp4";
const recpayVidIn3="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/recordpayment/recpayIn3.mp4";

const blankAudio="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Audios/blankAudio.mp3";


// import recpayimg1 from "../SmartMerchantAssets/recordpayment/recpayImg1.png";
// import recpayVidIn1 from "../SmartMerchantAssets/recordpayment/recpayIn1.mp4"
var PI_2 = Math.PI / 2;
var utils=AFRAME.utils
var bind=utils.bind
// registerComponent(lookControlsLimited)

// window.addEventListener('DOMContentLoaded', lookControlsLimited);
function changeColorToRed() {
  // This function will be called when the component is initialized.
  // It will change the color of the entity to red.
  this.el.setAttribute('material', 'color', 'red');
}

AFRAME.registerComponent('change-color', {
  init: changeColorToRed
});


function Testing3d({models}) {
  const esy=models.model2;
  const cameraRef = useRef(null);
  const cameraRotationRef = useRef(null);
  const sceneRef = useRef(null);
  const [zoom, setZoom] = useState(1.5);
  const navigate = useNavigate();

  useEffect(() => {
    const videos = document.getElementsByTagName("video");
    const button = document.getElementById("buttonvideo");
    // const recpay = document.getElementById("recpay");
    // const phoneImg = document.getElementById("phone-img");
    // phoneImg.muted = true;
    button.muted = true;
    // recpay.muted = true;
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      // Do something with each div element
      video.play();
    }
    button.play();
  }, []);
  const handleLobbyClick = (event) => {
    event.stopPropagation();
    navigate("/panorama");
    console.log("panorama button clicked"); // Replace "/your-route" with the desired path
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
    const camera = document.getElementById("camera");
    const logCameraRotation = () => {
      if (cameraRef.current && cameraRef.current.object3D) {
        const rotation = camera.object3D.rotation;
        const { x, y, z } = rotation;

        // Apply the restriction for x-axis rotation between 0.034 and 0.044
        if (x < 0.034) {
          rotation.x = 0.034;
        } else if (x > 0.044) {
          rotation.x = 0.044;
        }

        cameraRef.current.object3D.rotation.copy(rotation);
      }
    };

    const interval = setInterval(logCameraRotation, 100); // Adjust the interval duration as needed

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    const esy = document.getElementById("esy");
    esy.object3D.lookAt("[camera]");
  }, []);
  return (
    <div className="scene-container">
       <div class="smart-dropdown">
    <div id="dropdown-trigger"  class="smart-dropdown" >Select Demo</div>
      <div id="dropdown-options"  class="dropdown-options">
        <div class="dropdown-option" data-value="apploading">App Installation</div>
        <div id="onboarding" class="dropdown-option" data-value="appintro">Onboarding</div>
        <div class="dropdown-option" data-value="userreg">User Registration</div>
        <div id="payment-acceptance" class="dropdown-option" data-value="paymentmethod">Payment Acceptance</div>
        <div class="dropdown-option" data-value="rtpmethod">RTP</div>
        <div id="dashboard" class="dropdown-option" data-value="recpay">Dashboard</div>
        <div class="dropdown-option" data-value="datahandling">Data Handling</div>
        <div id="refund" class="dropdown-option" data-value="refundprocess">Refund</div>

      </div>
     </div> 
      <Scene light="defaultLightsEnabled: false"
        inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe@d52af46565230a33c0fa23e045fb74e877df7dc9/dist/aframe-master.min.js"
        cursor="rayOrigin: mouse"
        // raycaster="objects: [data-clickable]; far: 100"
        onWheel={handleZoom}
        wasd-controls="false"
        className="scene"
        ref={sceneRef}
        vr-mode-ui={{ enabled: true }}
        // onEnterVR={handleEnterVR} 
        loading-screen={"enabled:false;"}
        renderer={"antialias: true; physicallyCorrectLights: true; "}
        embedded={true}
        
        
      >
        <a-entity id="camera-rig" position="0 0 0" ref={cameraRotationRef} >
          {/* used this camera because unable to inspect the commented camera */}
        <Entity
             id="camera"
             // camera={`active: ${isRotated ? 'true' : 'false'}`}
             wasd-controls-enabled="false"
             primitive="a-camera"
             ref={cameraRef}
             position="0 0 0"
             zoom={zoom}
             near="0.5"
             far="10000"
             camera="active:true"
             look-controls="reverseMouseDrag:true"
             //new
          >
       
          {/* <a-entity
            id="camera"
            rotation="0 -45 0"
            wasd-controls-enabled="false"
            camera={`userHeight:1.6; active:true; zoom:${zoom};`}
            look-controls="true"
            ref={cameraRef}
            position="0 0 0"
            // zoom={zoom}
            // near="0.05"
            // far="10000"
            // fov="100"
            // camera="active:true"
            //look-controls-limited="true"
            camera-rotation-limit="minRotation:0; maxRotation: 80;"
            
            // looklimited
          > */}
            {/* <a-entity
          gltf-model={rtpmethod1}
          scale="0.034 0.034 0.034"
          rotation="-68.85348415646128 -169.53248200125927 -12.258432026823963"
          position="-0.1445 -1.86661 -2.86936"
          // shadow="cast:true;"
          animation-mixer="clip:;loop:repeat;repetitions:Infinity;"
        /> */}
        
        {/* <a-entity id="phone-light-1" light="type: spot; castShadow: true; intensity: 5; distance: 200; color: #ffffff; penumbra: 1; angle: 40; groundColor: #ffffff; shadowCameraRight: 7.22; decay: -0.33" position="0.02127 1.151 -0.60992" rotation="-77.21523021860052 129.48044029043422 60.95468799278776" scale="0.2 0.2 0.2"></a-entity>
        <a-entity id="phone-light-2" light="type: spot; castShadow: true; intensity: 2.38; distance: 197.68; color: #a0d8e3; penumbra: 0.13; angle: 40; groundColor: #ffdc2e; shadowCameraRight: 7.22; decay: -0.66" position="-0.02859 4.44158 1.81392" rotation="-64.51791252070635 20.737061479169885 172.13084560217757" scale="0.2 0.2 0.2"></a-entity> */}
          {/* <a-entity
                  id="phone-asset"
                  gltf-model={appHandSingle}
                  scale="0.034 0.034 0.034"
                  position=" -0.97307 -3.08774 -3.43762 "
                  rotation="x: -61.526499872328316 -169.76051920372137 -0.8416750010471793"
                  // shadow="cast:true;"
                  // visible={currentPhoneAsset.imagePath==="appHandCardSingle"?true:false}
                 
                  animation-mixer= "clip:;loop:repeat;repetitions:Infinity;"
                  // animation-mixer={animationClicked ? `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:Infinity;` : ""}
                /> */}
                {/* <a-entity
                  lazy="true"
                  id="phone-asset"
     
                  gltf-model={appHandCardSingle}
                  scale=""
                  position=""
                  rotation=""
                  // shadow="cast:true;"
                  // visible={currentPhoneAsset.imagePath==="appHandCardSingle"?true:false}

                  animation-mixer= "clip:;loop:repeat;repetitions:Infinity;"
                />
                <a-entity
                  lazy="true"
                  id="phone-asset"

                  gltf-model={appHandPanSingle}
                  scale=""
                  position=""
                  rotation=""
                  animation-mixer= "clip:;loop:repeat;repetitions:Infinity;"
                  // shadow="cast:true;"
                  // visible={currentPhoneAsset.imagePath==="appHandPanSingle"?true:false}
    

                  // animation-mixer={animationClicked ? `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:Infinity;` : ""}
                /> */}
       <a-entity
              id="phone-light-1"
              light="type: spot; castShadow: true; intensity: 1.5; distance: 200; color: #ffffff; penumbra: 1; angle: 40; groundColor: #ffffff; shadowCameraRight: 7.22; decay: -0.33"
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
     
            {/* <a-entity
              gltf-model={appHandSingle}
              scale="0.034 0.034 0.034"
              rotation=" -61.526499872328316 -169.76051920372137 -0.8416750010471793,"
              position= "-0.97307 -3.08774, z: -3.43762"
              animation-mixer="clip:;loop:repeat;repeat:infinite;"
            ></a-entity> */}
            {/* <a-entity
              gltf-model={refundasset2}
              scale="0.60589 0.60589 0.60589"
              rotation=" -61.526499872328316 -169.76051920372137 -0.8416750010471793"
              position= "-0.77297 -2.61681 -2.98667"
              animation-mixer="clip:;loop:repeat;repeat:Infinite;"
            ></a-entity> */}


            {/* <a-entity id="phone-video" material="shader: flat; alphaTest: 0.5; src: /static/media/1.4912ffee27a11d3cfdf3.png; transparent: true" geometry="primitive: plane; width: 2; height: 3.8" position="-0.231 -0.01277 -0.74997" rotation="-2.756 3.434 0.238" scale="0.11855 0.13664 0.12056"></a-entity> */}
            {/* <a-entity
                    id="phone-video"
                    material={`shader: flat; alphaTest: 0.5; src:${refundimg1}; transparent: true;`}
                    geometry="primitive: plane; width: 2; height: 3.8"
                     position="-0.234 -0.015 -0.750" rotation="-2.657 3.524 0.630" scale="0.128 0.139 0.121"
                  ></a-entity> */}

                 
            {/* <a-entity gltf-model={rtpmobile} scale="3 3 3" rotation="-46.78658763479276 -10.097808181385629 8.462013676287128" position="-0.28567 -3.11816 0.51216" animation-mixer="clip: Animation"></a-entity>
               <a-entity id="phone-asset" gltf-model={rtpmethod1} scale="0.60589 0.60589 0.60589" position="-0.77297 -2.61681 -2.98667" rotation="-61.526499872328316 -169.76051920372137 -0.8416750010471793" animation-mixer=""></a-entity> */}
            {/* <a-entity material={`shader: flat; color: white; transparent: true; src: `} geometry="primitive: plane; width: 5.45; height: 2.96"  position="-0.65925 0.12821 -1.37255"rotation="0.9241809235460178 -12.21488723439402 -2.7146740333298403" scale="0.21033 0.21033 0.21033"></a-entity> */}
            {/* <a-entity gltf-model="/static/media/rtpmobile.de056e1a27b7b6f58e8e.glb" scale="3 3 3" rotation="-46.78658763479276 -10.097808181385629 8.462013676287128" position="-0.36309 -3.12602 0.50687" animation-mixer="clip: Animation"></a-entity>
              <a-entity material="shader: flat; color: white; transparent: true; src: /static/media/arrowscreen.7525b38788b828f009cf.jpg" geometry="primitive: plane; width: 5.45; height: 2.96" position="-0.65925 0.12821 -1.37255" rotation="0.9241809235460178 -12.21488723439402 -2.7146740333298403" scale="0.21033 0.21033 0.21033"></a-entity> */}

                  {/* <a-entity id="phone-video" material={`shader: flat; alphaTest: 0.5; src: ${recpayimg1}; transparent: true`} geometry="primitive: plane; width: 2; height: 3.8" position="-0.23 -0.01408 -0.75005" rotation="-3.0154768757735226 3.5414521317036183 0.43487496650429486" scale="0.12336 0.138 0.117"></a-entity>
                  <a-entity id="phone-video-in" material="shader: flat; alphaTest: 0.5; transparent: true" geometry="primitive: plane; width: 2; height: 3.8" position="-0.2301 -0.00471 -0.74983" rotation="-3.0154768757735226 3.5414521317036183 0.43487496650429486" scale="0.10852 0.04769 0.117"></a-entity> */}


            <a-entity
              id="phone-light-2"
              light="type: spot; castShadow: true; intensity: 3; distance: 197.68; color: #a0d8e3; penumbra: 0.13; angle: 40; groundColor: #ffdc2e; shadowCameraRight: 7.22; decay: -0.66"
              position="-0.02859 4.44158 1.81392"
              rotation="-64.51791252070635 20.737061479169885 172.13084560217757"
              scale="0.2 0.2 0.2"
            ></a-entity>
            <a-entity
                lazy="true"
                  id="phone-img-in"
                  material={`shader: flat;  alphaTest:0.5; color:white;   transparent: true;`}
                  geometry={`primitive: plane; width:2; height:3.8`}
                  position={`0.64733 -0.00469 -0.9757`}
                  rotation={`0.661 -8.841 0.762`}
                  scale={` 0.14783 0.07129 0.117`}
                ></a-entity>
    
          
          
            {/* <a-entity
              id="rtp-phone"
              gltf-model={refundmobile}
              scale="3 3 3"
              rotation="-46.78658763479276 -10.097808181385629 8.462013676287128"
              position="-0.36309 -3.12602 0.50687"
              animation-mixer="clip: Animation"
            ></a-entity> */}
            <a-entity
              id="animation-button"
              material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5;"
              geometry="primitive: circle; radius: 0.2; theta-length: 360"
              position="0.620 -0.294  -0.877"
              rotation="0 0 0"
              scale="-0.2 0.2 0.2"
              change-color
              // visible={buttonVisibilityAttribute}
              // onClick={handleAnimationClick}
              event-set__mouseenter="_event: mouseenter; material.opacity: 0.8; textEntity.opacity:0.7; text.color:orange;"
              event-set__mouseleave="_event: mouseleave; material.opacity: 0.4; textEntity.opacity:0; text.color:red;"
              raycaster="objects: [gui-interactable]"
            ></a-entity>

            {/* Just for Position and rotation testing */}
            {/* <a-entity id="phone-img" material={`shader: flat;  alphaTest:0.5; src:${recpayimg1}; color:white;  transparent: true;`} geometry="primitive: plane; width: 2; height: 3.8" position=" 0.65229 -0.006 -0.98319" rotation="0.529 -8.097 0.751" scale="0.178 0.2 0.2"></a-entity> */}
         <a-entity
         material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5;"
         geometry="primitive: circle; radius: 0.2; theta-length: 360"
          position={`0.642 -0.15784 -0.86971`}
          rotation="0 0 0"
          scale="-0.2 0.2 0.2"
          // onClick={handleAnimationClick}
          event-set__mouseenter="_event: mouseenter; material.opacity: 0.8; textEntity.opacity:0.7; text.color:orange;"
          event-set__mouseleave="_event: mouseleave; material.opacity: 0.4; textEntity.opacity:0; text.color:red;"
          raycaster="objects: [gui-interactable]"
        ></a-entity> 
      
         
            {/* <a-entity gltf-model="/static/media/apploading1.a488ca6605b75d157548.glb" scale="0.034 0.034 0.034" rotation="-68.60367455778425 -172.40758421722575 -9.044711753935175" position="-0.40232 -2.49204 -4.23453" animation-mixer="clip: Animation"></a-entity> */}
            <a-entity
              change-color
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
          </Entity>
        </a-entity>
        <a-entity
          lazy="true"
            id="phone-img"
            material={`shader: flat;  alphaTest:0.5; src:#qr-code; transparent: true;`}
            geometry={`primitive: plane; width:3.8; height:3.8`}
            position="0.00396 -0.01997 -0.96379"
            rotation="2.8447354528245374 -0.4526366581533504 -0.1753250853100319"
            scale="0.13 0.13 0.13"
          ></a-entity>
        
        <a-assets>
          {/* <img id="tv-border" src={tvImg} alt="" /> */}
          <img id="qr-code" src={qrcode} alt=""/>
          <video
            className="videos"
            id="buttonvideo"
            preload="auto"
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
            // ref={buttonVideoRef}
            className="videos"
            id="isy-speech"
            preload="metadata"
            src={isySpeech}
            width="1920"
            height="1080"
            autoplay="true"
            loop="true"
            crossOrigin="anonymous"
            playsInline=""
            webkit-playsinline=""
          ></video>
          {/* <video
            className="displayVideo"
            // because when muted even when hard reloaded the videos are not playing dont be scared
            id="recpay"
            preload="auto"
            src={recpayvideo1}
            width="1920"
            height="1080"
            autoplay="true"
            loop="true"
            crossOrigin="anonymous"
            playsInline=""
            webkit-playsinline=""
          ></video> */}
          {/* <audio id="isyintro" src={isyintro} preload="auto"></audio> */}
      
          {/* <img id="smartm" src={smartmerchant} alt="" /> */}
        </a-assets>

         {/* <a-entity id="tv-border" material="shader: flat;  alphaTest:0.5;  src:; transparent: true;" geometry="primitive: plane; width: 4; height: 2.05" position="-0.336 0.100 -11.814" rotation="3.500 -2.762 0.000" scale="7.5 7.5 7.5"></a-entity> */}
         <a-entity id="tv-video" material="shader: flat;  src:;  transparent: true" geometry="primitive: plane; width: 5.45; height: 2.96" position="9.95 0 -12" rotation="0 -42.004 0" scale="2.6 2.6 2.6"></a-entity>
        <a-entity gltf-model="/static/media/PaymentMethod.757d3a356cfe1cec9709.glb" scale="0.5 0.5 0.5" rotation="-1.0364806513916591 -177.40205731738115 0.2859059397702808" position="-0.07352 -2.84768 0.05947" animation-mixer="clip: Animation"></a-entity>
        {/* <a-entity position="-0.14076 -3.07192 0.82356" gltf-model="/static/media/PaymentMethod.757d3a356cfe1cec9709.glb" scale="0.5 0.5 0.5" rotation="10.325000000000001 138.48389908311995 -10.957817831876994" animation-mixer="clip: Animation"></a-entity> */}
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
        <a-entity id="ambient" light="type: ambient; intensity:1;"></a-entity>
        <a-entity
          id="directional"
          light="type: directional; castShadow:true; intensity:1;  position:0 20 0; color:#FFFFFF"
        ></a-entity>
        {/* <a-entity
          id="spot1"
          light="type: spot; castShadow: true; intensity: 2.5; distance: 15; color: white; angle: 60.16"
          position="6.26958 3.91449 64.86643"
          rotation="49.99973494988642 -156.67244428954794 20.000237754631645"
        ></a-entity>
       <a-entity
          id="spot3"
          light="type: spot; castShadow: true; intensity: 3.4; decay: 0; distance: 15; color: white; angle: 60.16"
          position="3.47559 2.02332 -6.3246"
        ></a-entity> */}

        {/* <a-entity
          gltf-model={paymentMethod}
          position="1.8 0 -2"
          scale="0.5 0.5 0.5"
          rotation="10.325 -34.608 -10.958."
          // shadow="cast:true;"
          animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
        /> */}
        
       <a-entity id="spot1" light="type: spot; castShadow: true; intensity: 300; distance: 50; color: white; penumbra: 1; angle: 20" position="33.933 -8.73 2.177" rotation="6.428013503572705 53.874648518356175 -62.41916811714215" scale="0.2 0.2 0.2"></a-entity>
       <a-entity id="spot2" light="type: spot; castShadow: true; intensity: 150; distance: 50; color: white; penumbra: 1; angle: 30" position="-18.60183 -0.329 3.43627" rotation="-9.325 -40.88 7.024" scale="0.2 0.2 0.2"></a-entity>
        
       <a-entity id="spot3" light="type: spot; castShadow: true; intensity: 75; distance: 50; color: white; penumbra: 1; angle: 30; decay: 1.1" position="-21.02744 -0.52743 -39.79053" rotation="-1.5515697092142693 -135.06276808839382 43.00220139795368" scale="0.2 0.2 0.2"></a-entity>
       <a-entity id="spot4" light="type: spot; castShadow: true; intensity: 40; distance: 50; color: #30499c; penumbra: 1; angle: 20; groundColor: #ffffff" position="20.43057 0 -24.38125" rotation="2.7845748843358007 115.23556358789169 44.978332833359886" scale="0.2 0.2 0.2"></a-entity>
        <a-entity
          gltf-model={esy}
          id="esy"
          position="1.959 -6.000 -15.915"
          scale="0.18 0.18 0.18"
          rotation="0 -8.586  0"
          shadow="cast:true; receive:false;"
          animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
        />
        {/* <a-entity
          id="model-placeholder"
          material="shader: flat;  src:#isy-speech;  transparent: true"
          geometry="primitive: plane; width: 0.5; height: 2.96"
          entity-loaded
          // position="-7.504 -2.183 -17.951"
          //rotation="0 -8.586  0"
          // scale="27 3.077 2.600"
          position="-14.241 -2.902 -18.629"
          rotation="0 -8.586  0"
          scale="36.297 4.146 3.495"
        ></a-entity>
         */}
        <a-entity id="menu"  position="25.861 11.406 28.091" rotation="0 25.281 0">
          <a-entity

            id="rtpmethod"
            material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
            geometry="primitive: plane; width: 5; height: 1.1"
            position="-23.13553 -7.65778 -71.35983"
            rotation="0 -177.911 0"
            scale="2.656 2.656 2.656"
            // onClick={handleLobbyClick}
            event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
            event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
          >
            <a-entity
              text-geometry="value: App Loading"
              material="color: red; shader: flat;"
              position="1.408 -0.092 -0.082"
              rotation="-180 1.150 -180"
              scale="0.5 0.5 0.5"
            ></a-entity>
          </a-entity>
          <a-entity

            id="appdemomenu"
            material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
            geometry="primitive: plane; width: 5; height: 1.1"
            position="-23.13553 -11.075 -71.35983"
            rotation="0 -177.911 0"
            scale="2.656 2.656 2.656"
            // onClick={handleLobbyClick}
            event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
            event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
          >
            <a-entity
              text-geometry="value: App Demonstration"
              material="color: red; shader: flat;"
              position="1.408 -0.092 -0.082"
              rotation="-180 1.150 -180"
              scale="0.5 0.5 0.5"
            ></a-entity>
          </a-entity>
          <a-entity

            id="userregmenu"
            material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
            geometry="primitive: plane; width: 5; height: 1.1"
            position="-23.13553 -14.725 -71.35983"
            rotation="0 -177.911 0"
            scale="2.656 2.656 2.656"
            // onClick={handleLobbyClick}
            event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
            event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
          >
            <a-entity
              text-geometry="value: User Registration"
              material="color: red; shader: flat;"
              position="1.408 -0.092 -0.082"
              rotation="-180 1.150 -180"
              scale="0.5 0.5 0.5"
            ></a-entity>
          </a-entity>
          
          <a-entity

            id="paymethodmenu"
            material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
            geometry="primitive: plane; width: 5; height: 1.1"
            position="-23.13553 -18.143 -71.35983"
            rotation="0 -177.911 0"
            scale="2.656 2.656 2.656"
            // onClick={handleLobbyClick}
            event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
            event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
          >
            <a-entity
              text-geometry="value: Payment Method"
              material="color: red; shader: flat;"
              position="1.408 -0.092 -0.082"
              rotation="-180 1.150 -180"
              scale="0.5 0.5 0.5"
            ></a-entity>
          </a-entity>
        </a-entity>
        <a-entity
          //SmartMerchantDoor
          id="#smartgate"
          material="shader: flat; color:#86d6e2; side: double; transparent: true; opacity: 0.5;"
          geometry="primitive: cylinder; radius: 40; height: 23.9; open-ended: true; theta-start: 142.5; theta-length: 40"
          position="-99.087 -20.10092 122.78598"
          rotation="0 -212.78 0"
          scale="2.65625 2.65625 2.65625"
          // onClick={handleLobbyClick}
          event-set__mouseenter="_event: mouseenter; material.opacity: 0.5"
          event-set__mouseleave="_event: mouseleave; material.opacity: 0"
        ></a-entity>
        {/* <a-entity
          gltf-model={eva}
          position="-8.504 -3.002 -12.702" entity-loaded
          id="model-placeholder"
          scale="2 2 2"
          rotation="0 31.419  0"
          shadow="cast:true;"
          animation-mixer="clip:Take 001;loop:repeat;repetitions:Infinity;"
        /> */}

        <a-light light="type: ambient"></a-light>
        <button className="logout" onClick={logoutHandler}>
          Logout
        </button>
      </Scene>
    </div>
  );
}

export default Testing3d;
