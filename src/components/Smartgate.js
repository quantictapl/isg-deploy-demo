import React, { useState } from 'react';
import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-extras";
import "aframe-environment-component";
import "aframe-event-set-component";
import "aframe-ui-components";
import "aframe-gui";


const SmartGate = () => {
  const [isTextVisible, setTextVisible] = useState(false);
  const [smartGateOpacity, setSmartGateOpacity] = useState(0.5);
  const [textEntityOpacity, setTextEntityOpacity] = useState(0);

  const handleMerchantClick = () => {
    // Handle click event
  };

  const handleMouseEnter = () => {
    setSmartGateOpacity(0.5);
    setTextEntityOpacity(0.7);
    setTextVisible(true);
    console.log("hovered")
  };

  const handleMouseLeave = () => {
    setSmartGateOpacity(0);
    setTextEntityOpacity(0);
    setTextVisible(false);
  };

  return (
    <a-entity id="smartgate" position="0 0 0" rotation="-180 -10 0" scale="1.5 1.5 1.5">
      {/* Smart Gate Cylinder */}
      <a-cylinder
        material={`shader: flat; color:#86d6e2; side: double; transparent: true; opacity: ${smartGateOpacity};`}
        geometry="primitive: cylinder; radius: 30; height: 7.8; open-ended: true; theta-start: 142.5; theta-length: 18.95"
        // onClick={handleMouseEnter}
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        raycaster="objects: [gui-interactable]"
      ></a-cylinder>

      {/* Text Entity */}
      {isTextVisible && (
        <a-entity
          id="textEntity"
          text={`value: Hover Text; align: center; color: #000000; opacity: ${textEntityOpacity}; visible:${isTextVisible}`}
          position="0 1 8"
          rotation="-180 -10 0"
        ></a-entity>
      )}
    </a-entity>
    
  );
};

export default SmartGate;