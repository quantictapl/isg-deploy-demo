import React, { useEffect,useState } from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-extras";
import * as THREE from 'three';
import "aframe-environment-component";
import "aframe-event-set-component";
import "aframe-ui-components";
import { useNavigate } from "react-router-dom";
// import wallbrand from "../videos/wallbrand.mp4";
// import frontwall from "../videos/frontdoorwall.mp4";
// import tv from "../videos/AboutUs.mp4";
// import wifi from "../videos/wifi.mp4";
// import btn from "../videos/circle.mp4";
import muteBtn from "../images/mute.png";
import volumeBtn from "../images/volume.png"
import isgloading from "../videos/isgloading.webm"



function LobbyVideos({playVideo,tvVid}) {
    const navigate = useNavigate();
    const [mute,setMute]=useState(true)
    const wallbrand="https://isg-asset.s3.ap-south-1.amazonaws.com/videos/wallbrand.mp4";
    // const tv="https://isg-asset.s3.ap-south-1.amazonaws.com/videos/AboutUs.mp4";
    const wifi="https://isg-asset.s3.ap-south-1.amazonaws.com/videos/wifi.mp4";
    const frontwall="https://isg-asset.s3.ap-south-1.amazonaws.com/videos/frontdoorwall.mp4"; 
    const btn="https://isg-asset.s3.ap-south-1.amazonaws.com/videos/circle.mp4";
    // const muteBtn="https://isg-asset.s3.ap-south-1.amazonaws.com/images/mute.png";
    // const volumeBtn="https://isg-asset.s3.ap-south-1.amazonaws.com/images/volume.png";


    const handleMerchantClick = (event) => {
        event.stopPropagation();
        navigate("/smartmerchant");
        // console.log("merchant button clicked"); // Replace "/your-route" with the desired path
      };
      useEffect(() => {
        const videos = document.getElementsByClassName("displayVideo");
        const tv=document.getElementById("tv");
        const frontwall=document.getElementById("frontwall");
        const wifi=document.getElementById("wifi");
        const myVideo=document.getElementById("myvideo");
        const btn=document.getElementById("btn");
        if(!mute){
          tv.muted=false;
        }else{
          tv.muted=true;
        }
        frontwall.muted=true;
        wifi.muted=true;
        myVideo.muted=true;
        btn.muted=true;
        for (let i = 0; i < videos.length; i++) {
               videos[i].play();
        }
      
        // if (playVideo) {
        //   for (let i = 0; i < videos.length; i++) {
        //     videos[i].play();
        //   }
        // } else {
        //   for (let i = 0; i < videos.length; i++) {
        //     videos[i].pause();
        //   }
        // }
      }, [mute]);
      const handleVolumeChange=()=>{
        setMute(!mute)
      }
      const volumeBtnSrc = mute ? "#mute-btn" : "#volume-btn";
    // console.log(mute)
  return (
    <>
     <a-assets>
          <video className="displayVideo"
          // because when muted even when hard reloaded the videos are not playing dont be scared
            id="myvideo" preload="auto" src={wallbrand} width="1920" height="1080" autoplay="true" loop="true" crossOrigin="anonymous" 
            playsInline=""
            webkit-playsinline=""
          ></video>
          <video
            className="displayVideo"
            id="frontwall" preload="auto" src={frontwall} width="1920" height="1080" autoplay="true" loop="true" crossOrigin="anonymous" 
            playsInline=""
            webkit-playsinline=""
          ></video>
          <video
            className="displayVideo"
            id="tv" preload="auto" src={tvVid} width="1920" height="1080" autoplay="true" loop="true" crossOrigin="anonymous" 
            playsInline=""
            webkit-playsinline=""
          ></video>
          <video
            className="displayVideo"
            id="wifi" preload="auto" src={wifi} width="1920" height="1080" autoplay="true" loop="true" crossOrigin="anonymous" 
            playsInline=""
            webkit-playsinline=""
          ></video>
          <video
            className="displayVideo"
            id="btn" preload="auto" src={btn} width="1920" height="1080" autoplay="true" loop="true" crossOrigin="anonymous" 
            playsInline=""
            webkit-playsinline=""
          ></video>
          <img id="mute-btn" src={muteBtn} alt=""/>
          <img id="volume-btn" src={volumeBtn} alt=""/>
        </a-assets>
        <a-entity 
        //checkout aframe material events
          material="shader: flat; side: double; src: #myvideo" 
          geometry="primitive: cylinder; radius: 9.2; height: 3.6815; open-ended: true; theta-start: 142.5; theta-length: 63;"
          position="-313 8 -128"
          rotation="0 -10 0"
          scale="-20.5 20.5 20.5"
          raycaster="objects: [gui-interactable]"
        ></a-entity>
        <a-entity
          material="shader: flat; side: double; src: #frontwall"
          geometry="primitive: cylinder; radius: 15; height:5.05; open-ended: true; theta-start: 142.5; theta-length: 45;"
          position="-17 1.4 50"
          rotation="0 135 0"
          scale="-3 3 3"
        ></a-entity>
        <a-entity
          material="shader: flat; side: double; src:#tv; opacity:1;"
          geometry="primitive: plane; width: 4.35; height: 2;"
          position="4.1 0.3 10"
          rotation="0 214 0"
          scale="0.8 0.8 0.8"
        ></a-entity>
        <a-entity
          material="shader: flat; side: double; src: #wifi; opacity:1;"
          geometry="primitive: circle; radius: 0.8; theta-length: 360;"
          position="-11 -0.45 -30"
          rotation="0 10 0"
          scale="-1.2 1.2 1.2"
          onClick={handleMerchantClick}
          raycaster="objects: [gui-interactable]"
        ></a-entity>
        <a-entity
          material="shader: flat; side: double; src: #wifi; opacity:1;"
          geometry="primitive: circle; radius: 0.8; theta-length: 360;"
          position="7.4 -0.3 -28"
          rotation="0 0 0"
          scale="-1 1 1"
          onClick={() => {
            alert(
              "hello the Payment Gateway is not ready yet, Please try again later"
            );
          }}
          raycaster="objects: [gui-interactable]"
        ></a-entity>
        {/* <a-entity
        //tv volume
          id="volume-btn" 
          material={`shader: flat; color:white; side: double; transparent: true; opacity: 0.5; src:${volumeBtnSrc};`}// this also causes inspector to dissapear as it is an image
          geometry="primitive: circle; radius: 0.18; theta-length: 360"
          position="2.7 -0.707 10"
          rotation="0 215 0"
          scale="1 1 1"
          // text="width: 2; value:Play; color:red; align:center;"}
          onClick={handleVolumeChange}
          event-set__mouseenter="_event: mouseenter; material.opacity: 0.8; textEntity.opacity:0.7; text.color:orange;"
          event-set__mouseleave="_event: mouseleave; material.opacity: 0.4; textEntity.opacity:0; text.color:red;"
        ></a-entity> */}
        {/* <a-plane
          color="grey"
          scale="100000 100000 1000000"
          repeat="1000000 1000000 100000"
          shadow="receive:true"
          position="0 -100 0"
          rotation="-90 0 0"
          transparent="true"
          opacity="0.2"

        ></a-plane> */}
      
    </>
  )
}

export default LobbyVideos
