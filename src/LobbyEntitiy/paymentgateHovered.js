import React, { useEffect, useRef, useState } from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-extras";
import * as THREE from 'three';
import "aframe-environment-component";
import "aframe-event-set-component";
import "aframe-ui-components";
import logo from "../images/paymentlogo.png"

function PaymentGateHovered() {
    const [isPaymentHovered, setIsPaymentHovered] = useState(false);
    const paymentgateRef = useRef(null);
    useEffect(() => {
        const paymentgate= paymentgateRef.current
        paymentgate.addEventListener('mouseenter', function() {
          setIsPaymentHovered(true);
        });
        paymentgate.addEventListener('mouseleave', function() {
        
          setIsPaymentHovered(false);
        });
      },[isPaymentHovered]);
  return (
    <>
    <a-entity
          //PaymentGatewayDoor
          ref={paymentgateRef}
          id="#paymentgate"
          material="shader: flat; color:#86d6e2; side: double; transparent: true; opacity: 0.5;"
          geometry="primitive: cylinder; radius: 9.2; height: 6.3; open-ended: true; theta-start: 142.5; theta-length: 51.5"
          position="7.94 0 -42"
          rotation="-180 -10 0"
          scale="1.3 1.3 1.3"
          onClick={() => {
            alert(
              "hello the Payment Gateway is not ready yet, Please try again later"
            );
          }}
          event-set__mouseenter="_event: mouseenter; material.opacity: 0.5"
          event-set__mouseleave="_event: mouseleave; material.opacity: 0"
        ></a-entity>
       {isPaymentHovered && (
         <>
         <a-assets>
             <img id="smart-logo" alt="smart logo" src={logo} />
           </a-assets>
           <a-entity position="1.06 0.1 -1.2" layout="type: line; align: center"
            material="shader: flat; color:black;  transparent: true; opacity: 0.5;"
            geometry="primitive: plane; width: 1.20; height: 0.48;"
            raycaster="objects: [gui-interactable]"
            bevel="enabled: true; thickness: 0.1; bevelSize: 0.1; bevelOffset: 0"
            rotation="0 -30 0"
            scale="0.75 0.75 0.75"
            style={{ fontSize: '0.001', alignItems: 'center',justifyContent: 'center' }}
            visible={isPaymentHovered ? true:false}
            >
             {/* <a-entity text="value: ISGPay SmartMerchant is an all-purpose payments acceptance application, otherwise known as an omnichannel. Popular modes of payment like QR Payments, Contactless or Tap and Pay using Credit, debit & prepaid cards, and Link Payments or Requests to Pay sent via SMS or email are all enabled in the app.; "
              style={{ fontSize: '0.001', alignItems: 'center',justifyContent: 'center' }} position="0 -0.6 0"></a-entity> */}
           </a-entity>
           
           <a-image src="#smart-logo"
               width="0.25"
               rotation="0 -30 0"
               height="0.13"
               // material="shader:standard; src: #smart-logo; opacity:1;"
               position="0.95 0.19 -1.1"
               raycaster="objects: [gui-interactable]"
               scale="0.8 0.8 0.8"
             ></a-image>
           <a-entity
             material="shader:standard; opacity:1; brightness: 5; emissive:white; emissiveIntensity:-2; color:white;
             font: bold;"
               text="value: Our PCI-DSS certified white label payment gateway solution allows you to unleash your true potential and grow your business online, immediately accepting payments without any investment in infrastructure or delays due to complex regulatory compliance. Our state-of-the-art platform can be shaped to match your business needs with dynamic and scalable composable services.;
               align: left; width: 1; wrapCount: 55;
               letterSpacing:1.5;"
               position="0.97 0.04 -1.1"
               raycaster="objects: [gui-interactable]"
               scale="0.8 0.8 0.8"
               rotation="0 -30 0"
             ></a-entity>
             </>
       )}
      
    </>
  )
}

export default PaymentGateHovered
