import React, { useEffect, useRef, useState } from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-extras";
import * as THREE from 'three';
// import "aframe-layout-component";
import "aframe-environment-component";
import "aframe-event-set-component";
import "aframe-ui-components";
import logo from "../images/smartlogo.png"
import { useNavigate } from "react-router-dom";
import "aframe-text-geometry-component";


function SmartgateHover() {
  const smartgateRef = useRef(null);
  const navigate = useNavigate();
  const [isSmartHovered, setIsSmartHovered] = useState(false);

  const handleMerchantClick = (event) => {
    event.stopPropagation();
    navigate("/smartmerchant");
    // console.log("merchant button clicked"); // Replace "/your-route" with the desired path
  };
  useEffect(() => {
    const smartgate = smartgateRef.current;
    smartgate.addEventListener('mouseenter', function() {
      setIsSmartHovered(true);
    });
    smartgate.addEventListener('mouseleave', function() {
    
      setIsSmartHovered(false);
    });
  },[isSmartHovered]);
  return (
    <>
    <a-entity
        //smartmerchantdoor
          id="smartgate"
          ref={smartgateRef}
          material="shader: flat; color:#86d6e2; side: double; transparent: true; opacity: 0.5;"
          geometry="primitive: cylinder; radius: 30; height: 7.8; open-ended: true; theta-start: 142.5; theta-length: 18.95"
          position="-27.3 0 -80"
          rotation="-180 -10 0"
          scale="1.5 1.5 1.5"
          onClick={handleMerchantClick}
          event-set__mouseenter="_event: mouseenter; material.opacity: 0.5; textEntity.opacity:0.7;"
          event-set__mouseleave="_event: mouseleave; material.opacity: 0; textEntity.opacity:0;"
          onMouseEnter={()=>{alert("Hovered")}}
        >
        </a-entity>
    {isSmartHovered && (
      <>
      
      <a-assets>
        <img id="smart-logo" alt="smart logo" src={logo} />
      </a-assets>
      <a-entity position="0.42 0.108 -1.8" layout="type: line; align: center"
       material="shader: flat; color:black;  transparent: true; opacity: 0.4;"
       geometry="primitive: plane; width: 1.43; height: 0.47;"
       raycaster="objects: [gui-interactable]"
       rotation="0 0 0"
       bevel="enabled: true; thickness: 0.1; bevelSize: 2; bevelOffset: 0"
       scale="0.75 0.75 0.75"
       style={{ fontSize: '0.001', alignItems: 'center',justifyContent: 'center' }}
       visible={isSmartHovered ? true:false}
       >
        {/* <a-entity text="value: ISGPay SmartMerchant is an all-purpose payments acceptance application, otherwise known as an omnichannel. Popular modes of payment like QR Payments, Contactless or Tap and Pay using Credit, debit & prepaid cards, and Link Payments or Requests to Pay sent via SMS or email are all enabled in the app.; "
         style={{ fontSize: '0.001', alignItems: 'center',justifyContent: 'center' }} position="0 -0.6 0"></a-entity> */}
      </a-entity>
      
      <a-image src="#smart-logo"
          width="0.25"
          rotation="0 0 0"
          height="0.13"
          // material="shader:standard; src: #smart-logo; opacity:1;"
          position="0.35 0.17 -1.5"
          raycaster="objects: [gui-interactable]"
          scale="0.8 0.8 0.8"
        ></a-image>
      <a-entity
        material="shader:standard; opacity:1; brightness: 5; emissive:white; emissiveIntensity:-2; color:white;
        font: bold;"
          text="value: ISGPay SmartMerchant is an all-purpose payments acceptance application, otherwise known as an omnichannel. Popular modes of payment like QR Payments, Contactless or Tap and Pay using Credit, debit & prepaid cards, and Link Payments or Requests to Pay sent via SMS or email are all enabled in the app.; 
          align: left; width: 1.08; wrapCount: 55;"
          position="0.35 0.04 -1.5"
          raycaster="objects: [gui-interactable]"
          scale="0.8 0.8 0.8"
          rotation="0 0 0"
        ></a-entity>
        
        </>
        
    
    )}
    </>
   
  );
}

export default SmartgateHover

// Our PCI-DSS certified white label payment gateway solution allows you to unleash your true potential and grow your business online, immediately accepting payments without any investment in infrastructure or delays due to complex regulatory compliance. Our state-of-the-art platform can be shaped to match your business needs with dynamic and scalable composable services.
