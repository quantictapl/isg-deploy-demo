import React, { useEffect, useRef, useState } from "react";
import { Entity, Scene } from "aframe-react";
import "aframe-extras";
import * as THREE from "three";
import { resetUserSession } from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import HideVRButton from "./HideVRButton";
import smartmerchant from "../WithTable.jpg";
import Popup from "reactjs-popup";

// import "./componentcss/SmartMerchant.css";
import "aframe-event-set-component";
import esy from "../SmartMerchantAssets/Esy.glb";
import esyHand from "../SmartMerchantAssets/isy_hand.glb";
import tvImg from "../SmartMerchantAssets/tvBorder.png";
// import paymentMethod from "../SmartMerchantAssets/paymentmethod/PaymentMethod.glb";
import buttonvideo from "../videos/circle1.mp4";
import "./componentcss/AppDemonstration.css";
import rtpmobile from "../SmartMerchantAssets/rtp/rtpmobile.glb";
import arrow from "../SmartMerchantAssets/videos/arrow.webm";
import { assetJson } from "./demoJsonTesting";
import appHandSingle from  "../SmartMerchantAssets/appintro/app_hand_single.glb"
import appHandPanSingle from "../SmartMerchantAssets/userreg/app_hand_pan_single.glb";
import appHandCardSingle from "../SmartMerchantAssets/paymentmethod/app_hand_card_single.glb";

import qrcode from "../SmartMerchantAssets/apploading/appimages/Qrcode.PNG";
import appimg2 from "../SmartMerchantAssets/apploading/appimages/appLoadingImg2.png";
import appimg3 from "../SmartMerchantAssets/apploading/appimages/appLoadingImg3.png";

import appintro1 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg1.png";
import appintro2 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg2.png";
import appintro3 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg3.png";
import appintro4 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg4.png";
import appintro5 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg5.png";

import userregimg1 from "../SmartMerchantAssets/userreg/UserRegImages/userregImg1.png";
import userregimg2 from "../SmartMerchantAssets/userreg/UserRegImages/userregImg2.png";
import userregimg3 from "../SmartMerchantAssets/userreg/UserRegImages/userregImg3.png";

import paymentmethodimg1 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg1.png";
import paymentmethodimg2 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg2.png";
import paymentmethodimg3 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg3.png";
import paymentmethodimg4 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg4.png";
import paymentmethodimg5 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg5.png";
import paymentmethodimg6 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg6.png";
import paymentmethodimg7 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg7.png";

import rtpimg1 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg1.png";
import rtpimg2 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg2.png";
import rtpimg3 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg3.png";
import rtpimg4 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg4.png";

import recpayvideo1 from "../SmartMerchantAssets/recordpayment/recpayVid1.webm";
import recpayvideo2 from "../SmartMerchantAssets/recordpayment/recpayVid2.webm";
import recpayvideo3 from "../SmartMerchantAssets/recordpayment/recpayVid3.webm";

import refundimg1 from "../SmartMerchantAssets/refundprocess/refundImg1.png";
import refundimg2 from "../SmartMerchantAssets/refundprocess/refundImg2.png";
import refundimg3 from "../SmartMerchantAssets/refundprocess/refundImg3.png";

import "./CameraRotationLimit"

// var assetJson = {
//   apploading: {
//     phoneImages: [
//       {
//         name: "appimg1",
//         imagePath: qrcode,
//         buttonPosition: { x: 0.023, y: 0.088 },
//         width: 3.8,
//         height: 3.8,
//         position: { x: 0.00396, y: 0.08907, z: -0.96379 },
//         rotation: {
//           x: 2.8447354528245374,
//           y: -0.4526366581533504,
//           z: -0.1753250853100319,
//         },
//       },
//       {
//         name: "appimg2",
//         imagePath: appimg2,
//         buttonPosition: { x: 0.642, y: 0.024 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "appimg3",
//         imagePath: appimg3,
//         buttonPosition: { x: 0.642, y: 0.024 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       // {
//       //   name: "appimg4",
//       //   imagePath: appimg4,
//       //   buttonPosition: { x: 0.664, y: -0.261 },
//       //   width:2,
//       //   height:3.8,
//       //   position:{x:0.65229, y:-0.006, z:-0.98319},
//       //   rotation:{x:0.529, y:-8.097, z:0.751}
//       // },
//     ],
//     phoneAssets: [
//       {
//         name: "apploading1",
//         imagePath: invisible,
//         animation: "",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -0.97307, y: -3.08774, z: -3.43762 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: qrdialog,
//           audio: qrAudio,
//         },
//       },
//       {
//         name: "apploading2",
//         imagePath: appLoading2,
//         animation: "Animation",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -0.97307, y: -3.08774, z: -3.43762 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: appLoading2Dialog,
//           audio: appLoading2Audio,
//         },
//       },
//       {
//         name: "apploading3",
//         imagePath: appLoading3,
//         animation: "",
//         scale: { x: 2.813, y: 2.813, z: 2.813 },
//         position: { x: -0.97307, y: -3.08774, z: -3.43762 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: appLoading3Dialog,
//           audio: appLoading3Audio,
//         },
//       },
//       // {
//       //   name: "apploading4",
//       //   imagePath: appLoading4,
//       //   animation: "",
//       //   scale: { x: 0.034, y: 0.034, z: 0.034 },
//       //   position: { x: -0.97307, y: -3.08774, z: -3.43762 },
//       //   rotation: {
//       //     x: -61.526499872328316,
//       //     y: -169.76051920372137,
//       //     z: -0.8416750010471793,
//       //   },
//       //   subsVideo: {
//       //     videoElement: demoTransparent2,
//       //     audio: demoAudio,
//       //   },
//       // },
//     ],
//   },
//   nullAssets: {
//     phoneImages: [
//       {
//         name: "nullImg1",
//         imagePath: "",
//         buttonPosition: { x: 0.023, y: 0.088 },
//         width: 0,
//         height: 0,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "nullImg2",
//         imagePath: "",
//         buttonPosition: { x: -0.706, y: 0.295 },
//         width: 0,
//         height: 0,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       // {
//       //   name: "nullImg3",
//       //   imagePath: "",
//       //   buttonPosition: { x: -0.75, y: 0.350 },
//       //   width: 0,
//       //   height: 0,
//       //   position: { x: 0.65229, y: -0.006, z: -0.98319 },
//       //   rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       // },
//     ],
//     phoneAssets: [
//       {
//         name: "nullAsset1",
//         imagePath: "",
//         animation: "Animation",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -1.1, y: 0.388, z: -0.877 },
//         rotation: {
//           x: -62.723,
//           y: -171.366,
//           z: 2.282,
//         },
//         subsVideo: {
//           videoElement: onboarding1Dialog,
//           audio: onboarding1Audio,
//         },
//       },
//       {
//         name: "nullAsset2",
//         imagePath: "",
//         animation: "Animation",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -1.1, y: 0.388, z: -0.877 },
//         rotation: {
//           x: -62.723,
//           y: -171.366,
//           z: 2.282,
//         },
//         subsVideo: {
//           videoElement: onboarding2Dialog,
//           audio: onboarding2Audio,
//         },
//       },
//       // {
//       //   name: "nullAsset3",
//       //   imagePath: "",
//       //   animation: "Animation",
//       //   scale: { x: 0.034, y: 0.034, z: 0.034 },
//       //   position: { x: -1.1, y: 0.388, z: -0.877 },
//       //   rotation: {
//       //     x: -62.723,
//       //     y: -171.366,
//       //     z: 2.282,
//       //   },
//       //   subsVideo: {
//       //     videoElement: onboarding2Dialog,
//       //     audio: onboarding2Audio,
//       //   },
//       // },
//     ],
//   },
//   appintro: {
//     phoneImages: [
//       {
//         name: "appintro1",
//         imagePath: appintro1,
//         buttonPosition: { x: 0.58124, y: -0.22324 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "appintro2",
//         imagePath: appintro2,
//         buttonPosition: { x: 0.635, y: -0.294 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "appintro3",
//         imagePath: appintro3,
//         buttonPosition: { x: 0.692, y: -0.043 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "appintro4",
//         imagePath: appintro4,
//         buttonPosition: { x: 0.635, y: -0.294 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "appintro5",
//         imagePath: appintro5,
//         buttonPosition: { x: 0.69, y: -0.143 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//     ],
//     phoneAssets: [
//       {
//         name: "appintroasset1",
//         imagePath: appintroasset1,
//         animation: "",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -0.97307, y: -3.08774, z: -3.43762 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: appIntro1Dialog,
//           audio: appIntro1Audio,
//         },
//       },
//       {
//         name: "appintroasset2",
//         imagePath: appintroasset2,
//         animation: "",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -0.97307, y: -3.08774, z: -3.43762 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: appIntro1Dialog,
//           audio: appIntro1Audio,
//         },
//       },
//       {
//         name: "appintroasset3",
//         imagePath: appintroasset3,
//         animation: "",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -0.97307, y: -3.08774, z: -3.43762 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: appIntro1Dialog,
//           audio: appIntro1Audio,
//         },
//       },
//       {
//         name: "appintroasset4",
//         imagePath: appintroasset4,
//         animation: "",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -0.97307, y: -3.08774, z: -3.43762 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: appIntro1Dialog,
//           audio: appIntro1Audio,
//         },
//       },
//       {
//         name: "appintroasset5",
//         imagePath: appintroasset5,
//         animation: "",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -0.97307, y: -3.08774, z: -3.43762 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: appIntro2Dialog,
//           audio: appIntro2Audio,
//         },
//       },
//     ],
//   },
//   userreg: {
//     phoneImages: [
//       {
//         name: "userregimg1",
//         imagePath: userregimg1,
//         buttonPosition: { x: 0.662, y: -0.285 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "userregimg2",
//         imagePath: userregimg2,
//         buttonPosition: { x: 0.642, y: 0.024 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "userregimg3",
//         imagePath: userregimg3,
//         buttonPosition: { x: 0.603, y: -0.289 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//     ],
//     phoneAssets: [
//       {
//         name: "userreg1",
//         imagePath: userreg1,
//         animation: "Animation",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -0.97307, y: -3.08774, z: -3.43762 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: userreg1Dialog,
//           audio: userreg1Audio,
//         },
//       },
//       {
//         name: "userreg2",
//         imagePath: userreg2,
//         animation: "Animation",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -0.97307, y: -3.08774, z: -3.43762 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: userreg2Dialog,
//           audio: userreg2Audio,
//         },
//       },
//       {
//         name: "userreg3",
//         imagePath: userreg3,
//         animation: "",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -0.97307, y: -3.08774, z: -3.43762 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: userreg3Dialog,
//           audio: userreg3Audio,
//         },
//       },
//     ],
//   },
//   nullAssets1: {
//     phoneImages: [
//       {
//         name: "nullImg1",
//         imagePath: "",
//         buttonPosition: { x: 0.023, y: 0.088 },
//         width: 0,
//         height: 0,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "nullImg2",
//         imagePath: "",
//         buttonPosition: { x: -0.706, y: 0.295 },
//         width: 0,
//         height: 0,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       // {
//       //   name: "nullImg3",
//       //   imagePath: "",
//       //   buttonPosition: { x: -0.75, y: 0.350 },
//       //   width: 0,
//       //   height: 0,
//       //   position: { x: 0.65229, y: -0.006, z: -0.98319 },
//       //   rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       // },
//     ],
//     phoneAssets: [
//       {
//         name: "nullAsset1",
//         imagePath: "",
//         animation: "Animation",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -1.1, y: 0.388, z: -0.877 },
//         rotation: {
//           x: -62.723,
//           y: -171.366,
//           z: 2.282,
//         },
//         subsVideo: {
//           videoElement: paymentacceptance1Dialog,
//           audio: paymentacceptance1Audio,
//         },
//       },
//       {
//         name: "nullAsset2",
//         imagePath: "",
//         animation: "Animation",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -1.1, y: 0.388, z: -0.877 },
//         rotation: {
//           x: -62.723,
//           y: -171.366,
//           z: 2.282,
//         },
//         subsVideo: {
//           videoElement:paymentacceptance2Dialog,
//           audio: paymentacceptance2Audio,
//         },
//       },
//       // {
//       //   name: "nullAsset3",
//       //   imagePath: "",
//       //   animation: "Animation",
//       //   scale: { x: 0.034, y: 0.034, z: 0.034 },
//       //   position: { x: -1.1, y: 0.388, z: -0.877 },
//       //   rotation: {
//       //     x: -62.723,
//       //     y: -171.366,
//       //     z: 2.282,
//       //   },
//       //   subsVideo: {
//       //     videoElement: onboarding2Dialog,
//       //     audio: onboarding2Audio,
//       //   },
//       // },
//     ],
//   },
//   paymentmethod: {
//     phoneImages: [
//       {
//         name: "paymentimg1",
//         imagePath: paymentmethodimg1,
//         buttonPosition: { x: 0.662, y: -0.285 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "paymentimg2",
//         imagePath: paymentmethodimg2,
//         buttonPosition: { x: 0.642, y: 0.024 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "paymentimg3",
//         imagePath: paymentmethodimg3,
//         buttonPosition: { x: 0.603, y: -0.289 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "paymentimg4",
//         imagePath: paymentmethodimg4,
//         buttonPosition: { x: 0.603, y: -0.289 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "paymentimg5",
//         imagePath: paymentmethodimg5,
//         buttonPosition: { x: 0.642, y: 0.024 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "paymentimg6",
//         imagePath: paymentmethodimg6,
//         buttonPosition: { x: 0.603, y: -0.289 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "paymentimg7",
//         imagePath: paymentmethodimg7,
//         buttonPosition: { x: 0.603, y: -0.289 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//     ],
//     phoneAssets: [
//       {
//         name: "paymentmethod1",
//         imagePath: paymentmethod1,
//         animation: "",
//         scale: { x: 0.60589, y: 0.60589, z: 0.60589 },
//         position: { x: -0.77297, y: -2.61681, z: -2.98667 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: paymentmethod1Dialog,
//           audio: paymentmethod1Audio,
//         },
//       },
//       {
//         name: "paymentmethod2",
//         imagePath: paymentmethod2,
//         animation: "",
//         scale: { x: 0.029, y: 0.029, z: 0.029 },
//         position: { x: -0.773, y: -2.617, z: -2.987 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: paymentmethod2Dialog,
//           audio: paymentmethod2Audio,
//         },
//       },
//       {
//         name: "paymentmethod3",
//         imagePath: paymentmethod3,
//         animation: "",
//         scale: { x: 0.029, y: 0.029, z: 0.029 },
//         position: { x: -0.773, y: -2.617, z: -2.987 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: paymentmethod3Dialog,
//           audio: paymentmethod3Audio,
//         },
//       },
//       {
//         name: "paymentmethod4",
//         imagePath: paymentmethod4,
//         animation: "",
//         scale: { x: 0.029, y: 0.029, z: 0.029 },
//         position: { x: -0.773, y: -2.617, z: -2.987 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: paymentmethod4Dialog,
//           audio: paymentmethod4Audio,
//         },
//       },
//       {
//         name: "paymentmethod5",
//         imagePath: paymentmethod5,
//         animation: "",
//         scale: { x: 0.029, y: 0.029, z: 0.029 },
//         position: { x: -0.773, y: -2.617, z: -2.987 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: paymentmethod5Dialog,
//           audio: paymentmethod5Audio,
//         },
//       },
//       {
//         name: "paymentmethod6",
//         imagePath: paymentmethod6,
//         animation: "",
//         scale: { x: 0.029, y: 0.029, z: 0.029 },
//         position: { x: -0.773, y: -2.617, z: -2.987 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: paymentmethod6Dialog,
//           audio: paymentmethod6Audio,
//         },
//       },
//       {
//         name: "paymentmethod7",
//         imagePath: paymentmethod7,
//         animation: "",
//         scale: { x: 0.029, y: 0.029, z: 0.029 },
//         position: { x: -0.773, y: -2.617, z: -2.987 },
//         rotation: {
//           x: -61.526499872328316,
//           y: -169.76051920372137,
//           z: -0.8416750010471793,
//         },
//         subsVideo: {
//           videoElement: paymentmethod7Dialog,
//           audio: paymentmethod7Audio,
//         },
//       },
//     ],
//   },
//   rtpmethod: {
//     phoneImages: [
//       {
//         name: "rtpmethod1",
//         imagePath: rtpimg1,
//         buttonPosition: { x: 0.662, y: -0.285 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "rtpimg2",
//         imagePath: rtpimg2,
//         buttonPosition: { x: 0.642, y: 0.024 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "rtpimg3",
//         imagePath: rtpimg3,
//         buttonPosition: { x: 0.603, y: -0.289 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "rtpimg4",
//         imagePath: rtpimg4,
//         buttonPosition: { x: 0.603, y: -0.289 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//     ],
//     phoneAssets: [
//       {
//         name: "rtpmethod1",
//         imagePath: rtpmethod1,
//         animation: "Animation",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -1.0364, y: -3.02252, z: -3.46246 },
//         rotation: {
//           x: -62.42890839965937,
//           y: -172.72557579352335,
//           z: 3.9614301955345113,
//         },
//         subsVideo: {
//           videoElement: rtp1Dialog,
//           audio: rtp1Audio,
//         },
//       },
//       {
//         name: "rtpmethod2",
//         imagePath: rtpmethod2,
//         animation: "Animation",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -1.0364, y: -3.02252, z: -3.46246 },
//         rotation: {
//           x: -62.42890839965937,
//           y: -172.72557579352335,
//           z: 3.9614301955345113,
//         },
//         subsVideo: {
//           videoElement: rtp2Dialog,
//           audio: rtp2Audio,
//         },
//       },
//       {
//         name: "rtpmethod3",
//         imagePath: rtpmethod3,
//         animation: "",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -1.0364, y: -3.02252, z: -3.46246 },
//         rotation: {
//           x: -62.42890839965937,
//           y: -172.72557579352335,
//           z: 3.9614301955345113,
//         },
//         subsVideo: {
//           videoElement: rtp3Dialog,
//           audio: rtp3Audio,
//         },
//       },
//       {
//         name: "rtpmethod4",
//         imagePath: rtpmethod4,
//         animation: "",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -1.0364, y: -3.02252, z: -3.46246 },
//         rotation: {
//           x: -62.42890839965937,
//           y: -172.72557579352335,
//           z: 3.9614301955345113,
//         },
//         subsVideo: {
//           videoElement: rtp4Dialog,
//           audio: rtp4Audio,
//         },
//       },
//     ],
//   },
//   recpay: {
//     phoneImages: [
//       {
//         name: "recpayvideo1",
//         imagePath: recpayvideo1,
//         buttonPosition: { x: 0.662, y: -0.285 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "recpayvideo2",
//         imagePath: recpayvideo2,
//         buttonPosition: { x: 0.642, y: 0.024 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "recpayvideo3",
//         imagePath: recpayvideo3,
//         buttonPosition: { x: 0.603, y: -0.289 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//     ],
//     phoneAssets: [
//       {
//         name: "recpay",
//         imagePath: recpay,
//         animation: "",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -1.0364, y: -3.02252, z: -3.46246 },
//         rotation: {
//           x: -62.42890839965937,
//           y: -172.72557579352335,
//           z: 3.9614301955345113,
//         },
//         subsVideo: {
//           videoElement: recpay1Dialog,
//           audio: recpay1Audio,
//         },
//       },
//       {
//         name: "recpay2",
//         imagePath: recpay,
//         animation: "",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -1.0364, y: -3.02252, z: -3.46246 },
//         rotation: {
//           x: -62.42890839965937,
//           y: -172.72557579352335,
//           z: 3.9614301955345113,
//         },
//         subsVideo: {
//           videoElement: recpay2Dialog,
//           audio: recpay2Audio,
//         },
//       },
//       {
//         name: "recpay3",
//         imagePath: recpay,
//         animation: "",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -1.0364, y: -3.02252, z: -3.46246 },
//         rotation: {
//           x: -62.42890839965937,
//           y: -172.72557579352335,
//           z: 3.9614301955345113,
//         },
//         subsVideo: {
//           videoElement: recpay3Dialog,
//           audio: recpay3Audio,
//         },
//       },
//     ],
//   },
//   // datahandling: {
//   //   phoneImages: [
//   //     {
//   //       name: "datahandling",
//   //       imagePath: datahandlingimg,
//   //       buttonPosition: { x: 0.662, y: -0.285 },
//   //       width: 2,
//   //       height: 3.8,
//   //       position: { x: 0.65229, y: -0.006, z: -0.98319 },
//   //       rotation: { x: 0.529, y: -8.097, z: 0.751 },
//   //     },
//   //   ],
//   //   phoneAssets: [
//   //     {
//   //       name: "datahandling",
//   //       imagePath: datahandling,
//   //       animation: "Animation",
//   //       scale: { x: 0.034, y: 0.034, z: 0.034 },
//   //       position: { x: -1.0364, y: -3.02252, z: -3.46246 },
//   //       rotation: {
//   //         x: -62.42890839965937,
//   //         y: -172.72557579352335,
//   //         z: 3.9614301955345113,
//   //       },
//   //       subsVideo: {
//   //         videoElement: demoTransparent2,
//   //         audio: demoAudio,
//   //       },
//   //     },
//   //   ],
//   // },
//   refundprocess: {
//     phoneImages: [
//       {
//         name: "refundimg1",
//         imagePath: refundimg1,
//         buttonPosition: { x: 0.662, y: -0.285 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "refundim2",
//         imagePath: refundimg2,
//         buttonPosition: { x: 0.662, y: -0.285 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//       {
//         name: "refundimg3",
//         imagePath: refundimg3,
//         buttonPosition: { x: 0.662, y: -0.285 },
//         width: 2,
//         height: 3.8,
//         position: { x: 0.65229, y: -0.006, z: -0.98319 },
//         rotation: { x: 0.529, y: -8.097, z: 0.751 },
//       },
//     ],
//     phoneAssets: [
//       {
//         name: "refundasset1",
//         imagePath: refundasset1,
//         animation: "Animation",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -1.0364, y: -3.02252, z: -3.46246 },
//         rotation: {
//           x: -62.723,
//           y: -171.366,
//           z: 2.282,
//         },
//         subsVideo: {
//           videoElement: refund1Dialog,
//           audio: refund1Audio,
//         },
//       },
//       {
//         name: "refundasset2",
//         imagePath: refundasset2,
//         animation: "Animation",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -1.0364, y: -3.02252, z: -3.46246 },
//         rotation: {
//           x: -62.723,
//           y: -171.366,
//           z: 2.282,
//         },
//         subsVideo: {
//           videoElement:refund2Dialog,
//           audio: refund2Audio,
//         },
//       },
//       {
//         name: "refundasset3",
//         imagePath: refundasset3,
//         animation: "Animation",
//         scale: { x: 0.034, y: 0.034, z: 0.034 },
//         position: { x: -1.0364, y: -3.02252, z: -3.46246 },
//         rotation: {
//           x: -62.723,
//           y: -171.366,
//           z: 2.282,
//         },
//         subsVideo: {
//           videoElement: refund3Dialog,
//           audio: refund3Audio,
//         },
//       },
//     ],
//   },
// };

// registerComponent('look-controls-limited', 'look-controls-limited');


// function AppDemonstration() {
//   const cameraRef = useRef(null);
//   const cameraRotationRef = useRef(null);
//   const sceneRef = useRef(null);
//   const subsVideoRef = useRef(null);
//   const skipBtnRef = useRef(null);
//   const [zoom, setZoom] = useState(1.5);
//   const navigate = useNavigate();
//   const [skipState, setSkipState] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [videoVisible, setVideoVisible] = useState(false);
//   const subsAudioRef = useRef(null);
//   const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
//   const [pageLoaded, setPageLoaded] = useState(false);
//   const [mute, setMute] = useState(true);
//   const [animationClicked, setAnimationClicked] = useState(false);
//   const [currentPhoneAssetIndex, setCurrentPhoneAssetIndex] = useState(0);
//   const [currentPhoneImageIndex, setCurrentPhoneImageIndex] = useState(0);
//   const [videoDuration, setVideoDuration] = useState(0);
//   const [audioDuration, setAudioDuration] = useState(0);
//   const [currentDivision, setCurrentDivision] = useState("apploading");
//   const [assetsVisible, setAssetsVisible] = useState(true);
//   const [extrasVisible, setExtrasVisible] = useState(false);
//   const [lastSkipTime, setLastSkipTime] = useState(0);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [playNextAssets, setPlayNextAssests] = useState(false);
//   const [isyHandRaise,setIsyHandRaised]=useState(false)

//   useEffect(() => {
//     // Simulating page load after 3 seconds
//     const timer = setTimeout(() => {
//       setPageLoaded(true);
//     }, 2500);

//     return () => clearTimeout(timer);
//   }, []);
//   useEffect(() => {
//     const videos = document.getElementsByTagName("video");
//     const button = document.getElementById("buttonvideo");
//     const arrowVideo = document.getElementById("arrow");
//     arrowVideo.muted = true;
//     button.muted = true;
//     for (let i = 0; i < videos.length; i++) {
//       const video = videos[i];
//       // Do something with each div element
//       video.play();
//     }
//     button.play();
//   }, []);
//   useEffect(() => {
//     const handleClick = (event) => {
//       // Handle the click event
//       setMute(false);
//     };

//     document.addEventListener("click", handleClick);

//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   }, []);
//   // const video=subsVideoRef.current
//   // console.log(video.duration)
//   const currentPhoneAsset =
//     assetJson[currentDivision].phoneAssets[currentPhoneAssetIndex];
//   const currentPhoneImage =
//     assetJson[currentDivision].phoneImages[currentPhoneImageIndex];
  
//   // console.log(currentPhoneAsset);
//   useEffect(()=>{
//     if (currentPhoneAsset.name==="nullAsset2" && currentDivision==="nullAssets") {
//       setIsyHandRaised(true)
//       console.log(currentPhoneAssetIndex)
//     } else {
//       setIsyHandRaised(false)
//     }
//   },[currentPhoneAsset, currentDivision, currentPhoneAssetIndex])
//   console.log("currentPhoneAssetIndex:",currentPhoneAssetIndex,"currentDivision:",currentDivision,"currentPhoneAsset.name:",currentPhoneAsset.name)
//   console.log("Isy hand raised",isyHandRaise)
//   useEffect(() => {
//     const video = subsVideoRef.current;
//     const audio = subsAudioRef.current;

//     const esy = document.getElementById("esy");
//     if (!mute) {
//       audio.muted = false;
//     }
//     if (mute) {
//       audio.muted = true;
//     }

//     const handleVideoPlay = () => {
//       // esy.setAttribute(
//       //   "animation-mixer",
//       //   "clip:;loop:repeat;repetitions:Infinity;"
//       // );
//       if (currentPhoneAsset.name==="nullAsset2" && currentDivision==="nullAssets") {
//         esy.setAttribute(
//           "animation-mixer",
//           "clip:Animation;loop:once;repetitions:1;"
//         );
//       } else {
//         esy.setAttribute(
//           "animation-mixer",
//           "clip:;loop:repeat;repetitions:Infinity;"
//         );
//       }
//       if (!audio.paused && audio.currentTime < video.currentTime) {
//         audio.currentTime = video.currentTime;
//       } else if (!mute) {
//         audio.play();
//         audio.muted = false;
//       }
//     };

//     const handleVideoPause = () => {
//       if (!video.paused && !audio.paused) {
//         audio.pause();
//         esy.removeAttribute("animation-mixer");
//       }

//     };
//     const handleAudioLoadedMetadata = () => {
//       // Handle loaded metadata for the subsAudio element
//       if (!mute) {
//         audio.play();
//       }
//       const duration = audio.duration;
//       console.log("Audio duration:", duration);
//     };
//     const handleVideoEnded = () => {
//       esy.removeAttribute("animation-mixer");
//       audio.pause();
//     };

//     video.addEventListener("play", handleVideoPlay);
//     video.addEventListener("pause", handleVideoPause);
//     audio.addEventListener("loadedmetadata", handleAudioLoadedMetadata);
//     video.addEventListener("loadedmetadata", handleAudioLoadedMetadata); // Added event listener to subsVideoRef as well
//     video.addEventListener("ended", handleVideoEnded);
//     return () => {
//       video.removeEventListener("play", handleVideoPlay);
//       video.removeEventListener("pause", handleVideoPause);
//       audio.removeEventListener("loadedmetadata", handleAudioLoadedMetadata);
//       video.removeEventListener("loadedmetadata", handleAudioLoadedMetadata); // Removed event listener for subsVideoRef
//     };
//   }, [subsVideoRef, subsAudioRef, mute]);

//   const video = subsVideoRef.current;
//   const audio = subsAudioRef.current;
//   const loadNextAssets = (currentAssets, cacheBuster) => {
//     const videoSrc = currentAssets.phoneAssets[0].video;
//     const audioSrc = currentAssets.phoneAssets[0].audio;
//     video.src = videoSrc + "?cache=" + cacheBuster;

//     video.addEventListener("loadedmetadata", () => {
//       video.play();

//       if (!audio.paused && audio.currentTime < video.currentTime) {
//         audio.currentTime = video.currentTime;
//       } else {
//         audio.play();
//       }
//     });
//   };

//   // Helper function to handle transition between assets
//   const handleTransition = (currentAssets) => {
//     setCurrentPhoneAssetIndex(0);
//     setCurrentPhoneImageIndex(0);
//     setAnimationClicked(false);
//     setExtrasVisible(false);

//     if (
//       currentDivision === "rtpmethod" ||
//       currentDivision === "refundprocess"
//     ) {
//       setExtrasVisible(true);
//     }
    
//   };
//   const openPopup = () => {
//     setIsPopupOpen(true);
//     setPlayNextAssests(false);
//     return;
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//     setPlayNextAssests(true);
//     console.log(playNextAssets);
//   };
//   useEffect(() => {
//     const video = subsVideoRef.current;
//     const audio = subsAudioRef.current;
//     const skipBtn = skipBtnRef.current;
//     const buttonEntity = document.querySelector("#animation-button");
//     // const appLoadingBtn = document.getElementById("apploading");
//     // const appDemoBtn = document.getElementById("appintro");
//     // const userRegBtn = document.getElementById("userreg");
//     // const paymethodBtn = document.getElementById("paymentmethod");
//     const smartDropdown = document.getElementById("smart-app-dropdown");

//     setExtrasVisible(false);
//     // const arrowEntity=document.getElementById("arrow-entity")
//     // arrowEntity.setAttribute("visible","false")
//     skipBtn.style.pointerEvents = "none"; // Disable click events initially

//     const delayBindingTimeout = setTimeout(() => {
//       skipBtn.style.pointerEvents = "auto"; // Enable click events after a delay
//       skipBtn.addEventListener("click", handleSkipClick);
//     }, 2500);

//     video.addEventListener("loadedmetadata", () => {
//       setVideoDuration(video.duration);
//     });

//     const handleVideoEnded = () => {
//       buttonEntity.setAttribute("visible", "true");
//     };

//     const handleVideoPlay = () => {
//       buttonEntity.setAttribute("visible", "false");

//       if (!audio.paused && audio.currentTime < video.currentTime) {
//         audio.currentTime = video.currentTime;
//       } else {
//         audio.play();
//       }
//     };

//     const handleVideoPause = () => {
//       if (!video.paused && !audio.paused) {
//         audio.pause();
//       }
//     };

//     video.addEventListener("ended", handleVideoEnded);
//     video.addEventListener("play", handleVideoPlay);
//     video.addEventListener("pause", handleVideoPause);

//     const handleSkipClick = () => {
//       const divisions = Object.keys(assetJson);
//       const currentDivisionIndex = divisions.indexOf(currentDivision);
//       const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//       const currentAssets = assetJson[divisions[nextDivisionIndex]];
//       const cacheBuster = new Date().getTime();

//       // Check if the last division is loaded
//       if (
//         nextDivisionIndex === 0 &&
//         currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//       ) {
//         // Last division and last asset loaded, prevent skip
//         return;
//       }

//       // Check if enough time has passed since the last skip
//       if (Date.now() - lastSkipTime < 2500) {
//         // Less than 5 seconds since the last skip, prevent skip
//         return;
//       }

//       // Set the last skip time to the current time
//       setLastSkipTime(Date.now());

//       buttonEntity.setAttribute("visible", "false"); // Hide the skip button

//       setTimeout(() => {
//         // Show the skip button after 5 seconds
//         buttonEntity.setAttribute("visible", "true");

//         // Check if the skip button is clickable (exceeds division length)
//         if (
//           nextDivisionIndex === 0 &&
//           currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//         ) {
//           // Last division and last asset loaded, prevent skip
//           buttonEntity.setAttribute("visible", "false");
//         }
//       }, 2500);

//       setCurrentDivision(divisions[nextDivisionIndex]);
//       setCurrentPhoneAssetIndex(0); // Reset the asset index
//       setCurrentPhoneImageIndex(0); // Reset the image index

//       loadNextAssets(currentAssets, cacheBuster);
//       setTimeout(() => {
//         handleTransition(currentAssets);
//         setTimeout(() => {
//           // Set visibility after the transition
//           buttonEntity.setAttribute("visible", "true");
//         }, 2500);
//       }, 2500);
//     };
//     skipBtn.removeEventListener("click", handleSkipClick);
//     skipBtn.addEventListener("click", handleSkipClick);

//     const delay = async (milliseconds) => {   //usded to delay nextDivision Loading for appintro
//       return new Promise(resolve => setTimeout(resolve, milliseconds));
//     };

//     const handleClick = async () => {
//       buttonEntity.setAttribute("visible", "false");
//       buttonEntity.removeEventListener("click", handleClick);
//       if (pageLoaded) {
//         const phoneAsset = document.querySelector("#phone-asset");
//         if (phoneAsset) {
//           console.log(phoneAsset.getAttribute("animation-mixer"));
//           setAnimationClicked(true);
//         } else {
//           setAnimationClicked(false);
//         }
//       } else {
//         setAnimationClicked(false);
//       }

//       const divisions = Object.keys(assetJson);
//       const currentDivisionIndex = divisions.indexOf(currentDivision);
//       const currentAssets = assetJson[currentDivision];
//       const currentPhoneAssetsLength = currentAssets.phoneAssets.length;
//       const currentPhoneImagesLength = currentAssets.phoneImages.length;
//       let nextPhoneAssetIndex =
//         (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
//       let nextPhoneImageIndex =
//         (currentPhoneImageIndex + 1) % currentPhoneImagesLength;
//       const cacheBuster = new Date().getTime();

//       const loadNextAssets = () => {
//         const nextVideoIndex =
//           (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
//         const videoSrc = currentAssets.phoneAssets[nextVideoIndex].video;
//         const audioSrc = currentAssets.phoneAssets[nextVideoIndex].audio;
//         video.src = videoSrc + "?cache=" + cacheBuster;

//         video.addEventListener("loadedmetadata", () => {
//           video.play();
//           // setExtrasVisible(true)
//           // if(currentDivision==="rtpmethod"){
//           //   arrowEntity.setAttribute("visible",true);
//           //    if(currentPhoneAssetIndex===0){
//           //   arrowEntity.setAttribute("visible",true);
//           // }
//           // }

//           if (!audio.paused && audio.currentTime < video.currentTime) {
//             audio.currentTime = video.currentTime;
//           } else {
//             audio.play();
//           }
//         });
//       };

//       const handleTransition = () => {
//         // if (
//         //   currentDivision === divisions[divisions.length - 1] &&
//         //   nextPhoneAssetIndex === 0
//         // ) {
//         //   // Last division and last asset loaded
//         //   setAssetsVisible(false);

//         //   console.log(assetsVisible);
//         //   // setTimeout(()=>{
//         //   //   setAssetsVisible(false);
//         //   //   console.log(assetsVisible)
//         //   // } 2500)
//         // } else {
//         setCurrentPhoneAssetIndex(nextPhoneAssetIndex);
//         setCurrentPhoneImageIndex(nextPhoneImageIndex);
//         setAnimationClicked(false);
//         setExtrasVisible(false);
//         if (
//           currentDivision === "rtpmethod" ||
//           currentDivision === "refundprocess"
//         ) {
//           setExtrasVisible(true);
//         } else {
//           setExtrasVisible(false);
//         }

//         // arrowEntity.setAttribute("visible",false);
//         buttonEntity.addEventListener("click", handleClick);
//         console.log("Event listener added");
//         buttonEntity.removeEventListener("click", handleClick);
//         console.log("Event listener removed");
//         buttonEntity.setAttribute("visible", "true");
//         // }
//       };
      
      

//       // Check if all assets in the current division are loaded
//       if (nextPhoneAssetIndex !== 0) {
//         loadNextAssets();
//         if (
//           currentDivision === "rtpmethod" ||
//           currentDivision === "refundprocess"
//         ) {
//           setExtrasVisible(true);
//           // arrowEntity.setAttribute("visible",true);
//           if (currentPhoneAssetIndex === 0) {
//             // arrowEntity.setAttribute("visible",true);
//             setExtrasVisible(true);
//           } else {
//             setExtrasVisible(false);
//           }
//         }
//       } else {
//         const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//         const nextDivision = divisions[nextDivisionIndex];
          
//         if (nextDivisionIndex === 0 && nextPhoneAssetIndex === 0) {
//           // JSON iteration completed

//           setTimeout(() => {
//             openPopup();
//           }, 2500);
//           if (playNextAssets) {
//             setCurrentDivision(nextDivision);
//             setCurrentPhoneAssetIndex(0); // Reset the asset index
//             setCurrentPhoneImageIndex(0); // Reset the image index

//             loadNextAssets();
//             console.log(playNextAssets);
//           }
//           console.log(playNextAssets);
//         }
//           //   if (nextDivisionIndex === 2) {
//           //     await delay(5000); // Wait for 5 seconds when nextDivisionIndex is 1
//           //  }
//         if (
//           currentDivision === "rtpmethod" ||
//           currentDivision === "refundprocess"
//         ) {
//           setExtrasVisible(true);
//           // arrowEntity.setAttribute("visible",true);
//           if (currentPhoneAssetIndex === 0) {
//             // arrowEntity.setAttribute("visible",true);
//             setExtrasVisible(true);
//           } else {
//             setExtrasVisible(false);
//           }
//         }
//         setTimeout(() => {
//           setCurrentDivision(nextDivision);
//           setCurrentPhoneAssetIndex(0); // Reset the asset index
//           setCurrentPhoneImageIndex(0); // Reset the image index

//           loadNextAssets();
//         }, 2500);
//       }

//       setTimeout(handleTransition, 2500);
//     };

//     buttonEntity.removeEventListener("click", handleClick);
//     console.log("Event listener removed");
//     buttonEntity.addEventListener("click", handleClick);
//     console.log("Event listener added");

//     const handleDivisionButtonClick = (event) => {
//       const selectedDivision = event.target.value;
//       const divisions = Object.keys(assetJson);
//       const currentDivisionIndex = divisions.indexOf(currentDivision);
//       const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//       const currentAssets = assetJson[divisions[nextDivisionIndex]];
//       const cacheBuster = new Date().getTime();

//       // Check if the last division is loaded
//       if (
//         nextDivisionIndex === 0 &&
//         currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//       ) {
//         // Last division and last asset loaded, prevent skip
//         return;
//       }

//       // Check if enough time has passed since the last skip
//       if (Date.now() - lastSkipTime < 2500) {
//         // Less than 5 seconds since the last skip, prevent skip
//         return;
//       }

//       // Set the last skip time to the current time
//       setLastSkipTime(Date.now());

//       buttonEntity.setAttribute("visible", "false"); // Hide the skip button

//       setTimeout(() => {
//         // Show the skip button after 5 seconds
//         buttonEntity.setAttribute("visible", "true");

//         // Check if the skip button is clickable (exceeds division length)
//         if (
//           nextDivisionIndex === 0 &&
//           currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//         ) {
//           // Last division and last asset loaded, prevent skip
//           buttonEntity.setAttribute("visible", "false");
//         }
//       }, 2500);

//       setCurrentDivision(event.target.value);
//       setCurrentPhoneAssetIndex(0); // Reset the asset index
//       setCurrentPhoneImageIndex(0); // Reset the image index

//       loadNextAssets(currentAssets, cacheBuster);

//       setTimeout(() => {
//         handleTransition(currentAssets);
//         setTimeout(() => {
//           // Set visibility after the transition
//           buttonEntity.setAttribute("visible", "true");
//         }, 2500);
//       }, 2500);
//     };
//     // appLoadingBtn.addEventListener("click", handleDivisionButtonClick);
//     // appDemoBtn.addEventListener("click", handleDivisionButtonClick);
//     // userRegBtn.addEventListener("click", handleDivisionButtonClick);
//     // paymethodBtn.addEventListener("click", handleDivisionButtonClick);
//     smartDropdown.addEventListener("change", handleDivisionButtonClick);
//     // appLoadingBtn.removeEventListener("click", handleDivisionButtonClick);
//     // appDemoBtn.removeEventListener("click", handleDivisionButtonClick);
//     // userRegBtn.removeEventListener("click", handleDivisionButtonClick);
//     // paymethodBtn.removeEventListener("click", handleDivisionButtonClick);

//     return () => {
//       video.removeEventListener("loadedmetadata", () => {
//         setVideoDuration(video.duration);
//       });
//       video.removeEventListener("ended", handleVideoEnded);
//       video.removeEventListener("play", handleVideoPlay);
//       video.removeEventListener("pause", handleVideoPause);
//       buttonEntity.removeEventListener("click", handleClick);
//       clearTimeout(delayBindingTimeout);
//       skipBtn.removeEventListener("click", handleSkipClick);
//       // appLoadingBtn.removeEventListener("click", handleDivisionButtonClick);
//       // appDemoBtn.removeEventListener("click", handleDivisionButtonClick);
//       // userRegBtn.removeEventListener("click", handleDivisionButtonClick);
//       // paymethodBtn.removeEventListener("click", handleDivisionButtonClick);
//       smartDropdown.removeEventListener("change", handleDivisionButtonClick);
//       console.log("Event listener removed");
//     };
//   }, [
//     pageLoaded,
//     currentPhoneAssetIndex,
//     currentDivision,
//     currentPhoneImageIndex,
//     assetsVisible,
//     lastSkipTime,
//     // handleTransition,loadNextAssets
//   ]);
//   // Hide the animation button initially

//   useEffect(() => {
//     const buttonEntity = document.querySelector("#animation-button");
//     buttonEntity.setAttribute("visible", "false");
//   }, []);
//   // Set the visibility attribute of the animation button based on the state
//   // const buttonVisibilityAttribute = currentPhoneAssetIndex === 0 ? "true" : "false";

//   // const handleLoadedMetadata = () => {
//   //   const video = subsVideoRef.current;
//   //   const audio=subsAudioRef.current
//   //   if (!video || !audio) return;
//   //   setVideoDuration(video.duration);
//   //   setAudioDuration(audio.duration);
//   // };
//   // console.log(videoDuration);

//   // useEffect(() => {
//   //   if (videoRef.current) {
//   //     videoRef.current.muted = true;
//   //   }
//   // }, []);

//   const handleLobbyClick = (event) => {
//     event.stopPropagation();
//     navigate("/panorama");
//     console.log("panorama button clicked"); // Replace "/your-route" with the desired path
//   };

//   // const [currentEntityIndex, setCurrentEntityIndex] = useState(0);
//   // const entityNames = Object.keys(entityVisibility);

//   const handleZoom = (event) => {
//     const newZoom = zoom + event.deltaY * -0.01;
//     if (newZoom >= 1 && newZoom <= 5) {
//       setZoom(newZoom);
//     }
//   };

//   const logoutHandler = () => {
//     resetUserSession();
//     navigate("/login");
//   };
//   useEffect(() => {
//     window.addEventListener("wheel", handleZoom);
//     return () => window.removeEventListener("wheel", handleZoom);
//   });
  
//   // useEffect(() => {
//   //   const phoneAsset = document.getElementById("phone-asset");
//   //   if (animationClicked) {
//   //     phoneAsset.setAttribute("animation-mixer", {
//   //       clip: currentPhoneAsset.animation,
//   //       loop: "repeat",
//   //       repetitions: Infinity,
//   //       crossFadeDuration: 0.3,
//   //     });
//   //   } else {
//   //     phoneAsset.removeAttribute("animation-mixer");
//   //   }
//   // }, [currentPhoneAsset, animationClicked]);
//   // console.log(animationClicked);
//   // const handleAnimationClick = () => {
//   //   setAnimationClicked(!animationClicked);

//   //   // Change assets after 5 seconds
//   //   setTimeout(() => {
//   //     setCurrentPhoneAssetIndex((prevIndex) => {
//   //       const nextIndex = (prevIndex + 1) % assetJson.phoneAssets.length;
//   //       return nextIndex;
//   //     });

//   //     setCurrentPhoneImageIndex((prevIndex) => {
//   //       const nextIndex = (prevIndex + 1) % assetJson.phoneImages.length;
//   //       return nextIndex;
//   //     });

//   //     // Enable animation
//   //     if (pageLoaded) {
//   //       const phoneAsset = document.querySelector('#phone-asset');
//   //       if (phoneAsset) {
//   //         phoneAsset.setAttribute('animation-mixer', {
//   //           clip: currentPhoneAsset.animation,
//   //           loop: 'repeat',
//   //           repetitions: Infinity,
//   //         });
//   //       }
//   //     }
//   //   }, 2500); // Wait for 5 seconds before changing assets and enabling animation

//   //   console.log(currentPhoneAsset.animation, pageLoaded);
//   //};
//   // console.log(mute);
//   return (
//     <div className="scene-container" onClick={() => setMute(false)}>
//       <HideVRButton />
//       <Popup
//         className="appdemo-popup"
//         open={isPopupOpen}
//         onClose={closePopup}
//         position="right center"
//       >
//         <div className="appdemo-popup-container">
//           <div className="appdemo-popup-text">
//             The app demonstration is completed. Click Back to lobby to return to
//             lobby or cancel to continue with the demonstation
//           </div>
//           <div className="popup-btn-container">
//             <button className="appdemo-popup-btn" onClick={handleLobbyClick}>Back to lobby</button>{" "}
//             <button className="appdemo-popup-btn" onClick={closePopup}>Cancel</button>
//           </div>
//         </div>
//       </Popup>
//       <select
//         defaultValue=""
//         className="smart-dropdown"
//         id="smart-app-dropdown"
//       >
//         <option value="none" disabled>
//           Select Demo
//         </option>
//         <option value="apploading">App Installation</option>
//         <option value="appintro">App Introduction</option>
//         <option value="userreg">User Registration</option>
//         <option value="paymentmethod">Payment Method</option>
//         <option value="rtpmethod">RTP Method</option>
//         <option value="recpay">Records/Payments</option>
//         <option value="datahandling">Data Handling</option>
//         <option value="refundprocess">Refund process</option>
//       </select>
//       <video
//         src={currentPhoneAsset.subsVideo.audio}
//         ref={subsAudioRef}
//         controls={false}
//         preload="auto"
//         className="demo-subs subs-audio audio-element"
//       />
//       {/* <button className="demo-play-btn" onClick={handlePlayBtnClick}>Play</button> */}
//       <div className="demo-subs-container">
//         <button className="next-video-btn" ref={skipBtnRef}>
//           Next
//         </button>
//         <div className="demo-subs-main-container">
//           <video
//             id="subsVideo"
//             ref={subsVideoRef}
//             src={currentPhoneAsset.subsVideo.videoElement}
//             // onLoadedMetadata={handleLoadedMetadata}
//             type="video/webm"
//             muted
//             controls={false}
//             preload="auto"
//             className="demo-subs"
//           />
//           <div className="next-button-container"></div>
//         </div>
//         {/* <video
//           src={currentPhoneAsset.subsVideo.audio}
//           ref={subsAudioRef}
//           type="video/webm"
//           controls={false}
//           preload="auto"
//           className="demo-subs subs-audio"
//         /> */}
//       </div>
//       <Scene
//         light="defaultLightsEnabled: false"
//         inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe@d52af46565230a33c0fa23e045fb74e877df7dc9/dist/aframe-master.min.js"
//         cursor="rayOrigin: mouse"
//         // raycaster="objects: [data-clickable]; far: 100"
//         onWheel={handleZoom}
//         wasd-controls="false"
//         className="scene"
//         ref={sceneRef}
//         vr-mode-ui={{ enabled: true }}
//         // onEnterVR={handleEnterVR}
//         renderer={"antialias: true; physicallyCorrectLights: true; "}
//         embedded={true}
//       >
//         <a-entity id="camera-rig" position="0 0 0" ref={cameraRotationRef}>
//         <a-entity
//              id="camera"
//              rotation="0 -45 0"
//              wasd-controls-enabled="false"
//              camera={`userHeight:1.6; active:true; zoom:${zoom};`}
//              look-controls="true"
//              ref={cameraRef}
//              position="0 0 0"
//              // zoom={zoom}
//              // near="0.05"
//              // far="10000"
//              // fov="100"
//              // camera="active:true"
//              //look-controls-limited="true"
//              camera-rotation-limit="minRotation:-30; maxRotation: 0;"
             
//              // looklimited
//           >
//             <a-entity
//               id="phone-light-1"
//               light="type: spot; castShadow: true; intensity: 1.5; distance: 200; color: #ffffff; penumbra: 1; angle: 40; groundColor: #ffffff; shadowCameraRight: 7.22; decay: -0.33"
//               position="0.02127 1.151 -0.60992"
//               rotation="-77.21523021860052 129.48044029043422 60.95468799278776"
//               scale="0.2 0.2 0.2"
//             ></a-entity>
//             <a-entity
//               id="phone-light-2"
//               light="type: spot; castShadow: true; intensity: 0.4; distance: 197.68; color: #a0d8e3; penumbra: 0.13; angle: 40; groundColor: #ffdc2e; shadowCameraRight: 7.22; decay: -0.66"
//               position="-0.02859 4.44158 1.81392"
//               rotation="-64.51791252070635 20.737061479169885 172.13084560217757"
//               scale="0.2 0.2 0.2"
//             ></a-entity>
//             {/* <a-entity
//           gltf-model={paymentMethod}
//           scale="0.5 0.5 0.5"
//           rotation="-68.85348415646128 -169.53248200125927 -12.258432026823963"
//           position="-0.1445 -1.86661 -2.86936"
//           // shadow="cast:true;"
//           animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
//         /> */}
//             {assetsVisible && (
//               <>
//                 <a-entity
//                   id="phone-asset"
//                   gltf-model={currentPhoneAsset.imagePath}
//                   scale={`${currentPhoneAsset.scale.x} ${currentPhoneAsset.scale.y} ${currentPhoneAsset.scale.z}`}
//                   position={`${currentPhoneAsset.position.x} ${currentPhoneAsset.position.y} ${currentPhoneAsset.position.z}`}
//                   rotation={`${currentPhoneAsset.rotation.x} ${currentPhoneAsset.rotation.y} ${currentPhoneAsset.rotation.z}`}
//                   // shadow="cast:true;"
//                   {...(animationClicked && {
//                     "animation-mixer": `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:1;`,
//                   })}
//                   // animation-mixer={animationClicked ? `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:Infinity;` : ""}
//                 />

//                 {/*no inspector because of img*/}
//                 <a-entity
//                   id="phone-img"
//                   material={`shader: flat;  alphaTest:0.5; src:${currentPhoneImage.imagePath};   transparent: true;`}
//                   geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
//                   position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
//                   rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
//                   scale="0.2 0.2 0.2"
//                 ></a-entity>
//                 {currentDivision === "recpay" && (
//                   <a-entity
//                     id="phone-video"
//                     material={`shader: flat; alphaTest: 0.5; src:${currentPhoneImage.imagePath}; transparent: true;`}
//                     geometry="primitive: plane; width: 2; height: 3.8"
//                     position="-0.10769 -0.0083 -0.7636"
//                     rotation="-2.3073010409918253 4.6564280010282 -1.7647100090029355"
//                     scale="0.11844 0.1355 0.12"
//                   ></a-entity>
//                 )}

//                 {currentDivision === "rtpmethod" &&
//                   currentPhoneAsset.imagePath.includes("rtp") &&
//                   extrasVisible && (
//                     <>
//                       <a-entity
//                         id="rtp-phone"
//                         gltf-model={rtpmobile}
//                         scale="3 3 3"
//                         rotation="-46.78658763479276 -10.097808181385629 8.462013676287128"
//                         position="-0.36309 -3.12602 0.50687"
//                         animation-mixer="clip: Animation"
//                       ></a-entity>

//                       {/* <a-entity id="arrow-entity" material={`shader: flat; color: white; transparent: true; src:#arrow `} geometry="primitive: plane; width: 5.45; height: 2.96"  position="-0.65925 0.12821 -1.37255"rotation="0.9241809235460178 -12.21488723439402 -2.7146740333298403" scale="0.21033 0.21033 0.21033"></a-entity> */}
//                     </>
//                   )}
//                 {currentDivision === "refundprocess" &&
//                   currentPhoneAsset.imagePath.includes("refund") &&
//                   extrasVisible && (
//                     <a-entity
//                       id="rtp-phone"
//                       gltf-model={rtpmobile}
//                       scale="3 3 3"
//                       rotation="-46.78658763479276 -10.097808181385629 8.462013676287128"
//                       position="-0.36309 -3.12602 0.50687"
//                       animation-mixer="clip: Animation"
//                     ></a-entity>
//                   )}

//                 <a-entity
//                   id="arrow-entity"
//                   material={`shader: flat; color: white; transparent: true; src:#arrow; `}
//                   visible={extrasVisible ? "true" : "false"}
//                   geometry="primitive: plane; width: 5.45; height: 2.96"
//                   position="-0.65925 0.12821 -1.37255"
//                   rotation="0.9241809235460178 -12.21488723439402 -2.7146740333298403"
//                   scale="0.21033 0.21033 0.21033"
//                 ></a-entity>
//               </>
//             )}
//             <a-entity
//               id="animation-button"
//               material="shader: flat; color:white; side: double; transparent: true; opacity: 0.5; src:#buttonvideo;"
//               geometry="primitive: circle; radius: 0.2; theta-length: 360"
//               position={`${currentPhoneImage.buttonPosition.x} ${currentPhoneImage.buttonPosition.y} -0.86971`}
//               rotation="0 0 0"
//               scale="-0.2 0.2 0.2"
//               // visible={buttonVisibilityAttribute}
//               // onClick={handleAnimationClick}
//               event-set__mouseenter="_event: mouseenter; material.opacity: 0.9; textEntity.opacity:0.7; text.color:orange;"
//               event-set__mouseleave="_event: mouseleave; material.opacity: 0.7; textEntity.opacity:0; text.color:red;"
//               raycaster="objects: [gui-interactable]"
//             ></a-entity>

//             {/* Just for Position and rotation testing */}
//             {/* <a-entity id="phone-img" material={`shader: flat;  alphaTest:0.5;   transparent: true;`} geometry="primitive: plane; width: 2; height: 3.8" position="0.65229 -0.006 -0.98319" rotation="3.5844239663384303 -4.396305162038807 0.6852575229764646" scale="0.2 0.2 0.2"></a-entity>
//          <a-entity
//          material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5;"
//          geometry="primitive: circle; radius: 0.2; theta-length: 360"
//           position={`0.642 -0.15784 -0.86971`}
//           rotation="0 0 0"
//           scale="-0.2 0.2 0.2"
//           onClick={handleAnimationClick}
//           event-set__mouseenter="_event: mouseenter; material.opacity: 0.8; textEntity.opacity:0.7; text.color:orange;"
//           event-set__mouseleave="_event: mouseleave; material.opacity: 0.4; textEntity.opacity:0; text.color:red;"
//           raycaster="objects: [gui-interactable]"
//         ></a-entity> */}

//             {/* <a-entity gltf-model="/static/media/apploading1.a488ca6605b75d157548.glb" scale="0.034 0.034 0.034" rotation="-68.60367455778425 -172.40758421722575 -9.044711753935175" position="-0.40232 -2.49204 -4.23453" animation-mixer="clip: Animation"></a-entity> */}
//             <a-entity
//               cursor="fuse: false;"
//               id="cursor-btn"
//               // position={`${cursorPosition.x} ${cursorPosition.y} -1 `}
//               // position=" 0 0 -1"
//               geometry="primitive: ring; radiusInner: 0.0001; radiusOuter: 0.0002"
//               // animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"
//               // animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1"
//               // animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
//               material="color: black; shader: flat"
//               raycaster="objects: [gui-interactable]; near:1 far:20;"
//               // onClick={handleMerchantClick}
//             ></a-entity>
//           </a-entity>
//         </a-entity>

//         <a-assets>
//           <img id="tv-border" src={tvImg} alt="" />
//           <video
//             className="displayVideo"
//             id="arrow"
//             preload="auto"
//             src={arrow}
//             width="1920"
//             height="1080"
//             loop="true"
//             crossOrigin="anonymous"
//             playsInline=""
//             webkit-playsinline=""
//           ></video>

//           {/* {console.log("currentPhoneImage.name:", currentPhoneImage.name)}
//           {console.log(
//             "currentPhoneImage.imagePath:",
//             currentPhoneImage.imagePath
//           )} */}
//           <video
//             className="videos"
//             id="buttonvideo"
//             preload="auto"
//             src={buttonvideo}
//             width="1920"
//             height="1080"
//             autoplay="true"
//             loop="true"
//             crossOrigin="anonymous"
//             playsInline=""
//             webkit-playsinline=""
//           ></video>

//           {/* <audio id="isyintro" src={isyintro} preload="auto"></audio> */}

//           <img id="smartm" src={smartmerchant} alt="" />
//         </a-assets>

//         {/* <a-entity gltf-model="/static/media/PaymentMethod.757d3a356cfe1cec9709.glb" scale="0.5 0.5 0.5" rotation="-1.0364806513916591 -177.40205731738115 0.2859059397702808" position="-0.07352 -2.84768 0.05947" animation-mixer="clip: Animation"></a-entity> */}
//         {/* <a-entity position="-0.14076 -3.07192 0.82356" gltf-model="/static/media/PaymentMethod.757d3a356cfe1cec9709.glb" scale="0.5 0.5 0.5" rotation="10.3 2500000000001 138.48389908311995 -10.957817831876994" animation-mixer="clip: Animation"></a-entity> */}
//         {/* <a-entity sound="src:#isyintro" autoplay="true" volume="2"></a-entity> */}
//         {/* <a-sound src={isyintro} autoplay="true"></a-sound> */}
//         {/* <a-entity id="river" geometry="primitive: plane" material="color: blue"
//           position="-10 0 0" sound="src: url(river.mp3); autoplay: true"></a-entity> */}
//         {/* <a-entity
//           gltf-model={sandclock}
//           position="1.8 0 -2"
//           scale="0.5 0.5 0.5"
//           rotation="10.325 -34.608 -10.958."
//           shadow="cast:true;"
//           animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
//         /> */}
//         <Entity primitive="a-sky" src={smartmerchant} rotation="0 -130 0" />
//         <a-sky color="#ECECEC" scale="3 3 3"></a-sky>
//         <Entity primitive="a-sky" color="#ECECEC" scale="3 3 3" />
//         {/* <a-entity id="ambient" light="type: ambient; intensity:0.2;"></a-entity> */}
//         {/* <a-entity
//           id="directional"
//           light="type: directional; castShadow:true; intensity:1;  position:0 20 0; color:#FFFFFF"
//         ></a-entity> */}
//         <a-entity
//           id="spot1"
//           light="type: spot; castShadow: true; intensity: 9; distance: 46.25; color: white; penumbra: 1; angle: 20"
//           position="33.933 -8.73 2.177"
//           rotation="6.428013503572705 53.874648518356175 -62.41916811714215"
//           scale="0.2 0.2 0.2"
//         ></a-entity>
//         <a-entity
//           id="spot2"
//           light="type: spot; castShadow: true; intensity: 3; distance: 46.25; color: white; penumbra: 1; angle: 30"
//           position="-18.60183 -0.329 3.43627"
//           rotation="-9.325 -40.88 7.024"
//           scale="0.2 0.2 0.2"
//         ></a-entity>

//         <a-entity
//           id="spot3"
//           light="type: spot; castShadow: true; intensity: 5.25; distance: 46.25; color: white; penumbra: 1; angle: 30; decay: 1.1"
//           position="-21.02744 -0.52743 -39.79053"
//           rotation="-1.5515697092142693 -135.06276808839382 43.00220139795368"
//           scale="0.2 0.2 0.2"
//         ></a-entity>
//         <a-entity
//           id="spot4"
//           light="type: spot; castShadow: true; intensity: 3.5; distance: 46.25; color: #30499c; penumbra: 1; angle: 20; groundColor: #ffffff"
//           position="20.43057 0 -24.38125"
//           rotation="2.7845748843358007 115.23556358789169 44.978332833359886"
//           scale="0.2 0.2 0.2"
//         ></a-entity>

//         {/* <a-entity
//           gltf-model={paymentMethod}
//           position="1.8 0 -2"
//           scale="0.5 0.5 0.5"
//           rotation="10.325 -34.608 -10.958."
//           // shadow="cast:true;"
//           animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
//         /> */}

//         <a-entity
//           gltf-model={isyHandRaise?esyHand:esy}
//           id="esy"
//           position="1.959 -6.000 -15.915"
//           scale="0.18 0.18 0.18"
//           rotation="0 -8.586  0"
//           shadow="cast:true; receive:false;"
//           // animation-mixer="clip:;loop:repeat;repetitions:Infinity;"
//         />
//         {/* <a-entity
//           id="menu"
//           position="25.861 11.406 28.091"
//           rotation="0 25.281 0"
//         >
//           <a-entity
//             id="apploading"
//             material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
//             geometry="primitive: plane; width: 5; height: 1.1"
//             position="-23.13553 -7.65778 -71.35983"
//             rotation="0 -177.911 0"
//             scale="2.656 2.656 2.656"
//             // onClick={handleLobbyClick}
//             event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
//             event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
//           >
//             <a-entity
//               text-geometry="value: App Loading"
//               material="color: red; shader: flat;"
//               position="1.408 -0.092 -0.082"
//               rotation="-180 1.150 -180"
//               scale="0.5 0.5 0.5"
//             ></a-entity>
//           </a-entity>
//           <a-entity
//             id="appintro"
//             material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
//             geometry="primitive: plane; width: 5; height: 1.1"
//             position="-23.13553 -11.075 -71.35983"
//             rotation="0 -177.911 0"
//             scale="2.656 2.656 2.656"
//             // onClick={handleLobbyClick}
//             event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
//             event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
//           >
//             <a-entity
//               text-geometry="value: App Demonstration"
//               material="color: red; shader: flat;"
//               position="1.408 -0.092 -0.082"
//               rotation="-180 1.150 -180"
//               scale="0.5 0.5 0.5"
//             ></a-entity>
//           </a-entity>
//           <a-entity
//             id="userreg"
//             material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
//             geometry="primitive: plane; width: 5; height: 1.1"
//             position="-23.13553 -14.725 -71.35983"
//             rotation="0 -177.911 0"
//             scale="2.656 2.656 2.656"
//             // onClick={handleLobbyClick}
//             event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
//             event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
//           >
//             <a-entity
//               text-geometry="value: User Registration"
//               material="color: red; shader: flat;"
//               position="1.408 -0.092 -0.082"
//               rotation="-180 1.150 -180"
//               scale="0.5 0.5 0.5"
//             ></a-entity>
//           </a-entity>
//           <a-entity
//             id="paymentmethod"
//             material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
//             geometry="primitive: plane; width: 5; height: 1.1"
//             position="-23.13553 -18.143 -71.35983"
//             rotation="0 -177.911 0"
//             scale="2.656 2.656 2.656"
//             // onClick={handleLobbyClick}
//             event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
//             event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
//           >
//             <a-entity
//               text-geometry="value: Payment Method"
//               material="color: red; shader: flat;"
//               position="1.408 -0.092 -0.082"
//               rotation="-180 1.150 -180"
//               scale="0.5 0.5 0.5"
//             ></a-entity>
//           </a-entity>
//         </a-entity> */}
//         <a-entity
//           //LobbyDoor
//           id="#smartgate"
//           material="shader: flat; color:#86d6e2; side: double; transparent: true; opacity: 0.5;"
//           geometry="primitive: cylinder; radius: 40; height: 23.9; open-ended: true; theta-start: 142.5; theta-length: 40"
//           position="-99.08677 -20.10092 122.78598"
//           rotation="0 -212.78 0"
//           scale="2.65625 2.65625 2.65625"
//           onClick={handleLobbyClick}
//           event-set__mouseenter="_event: mouseenter; material.opacity: 0.5"
//           event-set__mouseleave="_event: mouseleave; material.opacity: 0"
//         ></a-entity>

//         <a-light light="type: ambient"></a-light>
//         <button className="logout" onClick={logoutHandler}>
//           Logout
//         </button>
//       </Scene>
//     </div>
//   );
// }

// export default AppDemonstration;


// function AppDemonstration() {

//   const cameraRef = useRef(null);
//   const cameraRotationRef = useRef(null);
//   const sceneRef = useRef(null);
//   const subsVideoRef = useRef(null);
//   const skipBtnRef = useRef(null);
//   const [zoom, setZoom] = useState(1.5);
//   const navigate = useNavigate();
//   const [skipState, setSkipState] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [videoVisible, setVideoVisible] = useState(false);
//   const subsAudioRef = useRef(null);
//   const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
//   const [pageLoaded, setPageLoaded] = useState(false);
//   const [mute, setMute] = useState(true);
//   const [animationClicked, setAnimationClicked] = useState(false);
//   const [currentPhoneAssetIndex, setCurrentPhoneAssetIndex] = useState(0);
//   const [currentPhoneImageIndex, setCurrentPhoneImageIndex] = useState(0);
//   const [videoDuration, setVideoDuration] = useState(0);
//   const [audioDuration, setAudioDuration] = useState(0);
//   const [currentDivision, setCurrentDivision] = useState("apploading");
//   const [assetsVisible, setAssetsVisible] = useState(true);
//   const [extrasVisible, setExtrasVisible] = useState(false);
//   const [lastSkipTime, setLastSkipTime] = useState(0);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [playNextAssets, setPlayNextAssests] = useState(false);
//   const [isyHandRaise,setIsyHandRaised]=useState(false);
//   const dropDownTriggerRef=useRef(null);
//   const dropDownOptionsRef=useRef(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)
//   const buttonVideoRef=useRef(null);
//   const arrowRef=useRef(null);
//   const onboardingRef=useRef(null);
//   const paymentAcceptanceRef=useRef(null);
//   const dashboardRef=useRef(null);
//   const refundRef=useRef(null);
//   const esyRef=useRef(null);
//   const animationButtonRef=useRef(null);
//   const phoneAssetRef=useRef(null);
//   const [esyAnimation,setEsyAnimation]=useState("");

//   useEffect(() => {
//     // Simulating page load after 3 seconds
//     const timer = setTimeout(() => {
//       setPageLoaded(true);
//     }, 2500);

//     return () => clearTimeout(timer);
//   }, []);
//   useEffect(() => {
//     const videos = document.getElementsByTagName("video");
//     const button=buttonVideoRef.current;
//     // const button = document.getElementById("buttonvideo");
//     const arrowVideo=arrowRef.current;
//     // const arrowVideo = document.getElementById("arrow");
//     arrowVideo.muted = true;
//     button.muted = true;
//     for (let i = 0; i < videos.length; i++) {
//       const video = videos[i];
//       // Do something with each div element
//       video.play();
//     }
//     button.play();
//   }, []);
//   useEffect(() => {
//     const handleClick = (event) => {
//       // Handle the click event
//       setMute(false);
//     };

//     document.addEventListener("click", handleClick);

//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   }, []);
//   // const video=subsVideoRef.current
//   // console.log(video.duration)
//   const currentPhoneAsset =
//     assetJson[currentDivision].phoneAssets[currentPhoneAssetIndex];
//   const currentPhoneImage =
//     assetJson[currentDivision].phoneImages[currentPhoneImageIndex];
  
//   // console.log(currentPhoneAsset);
//   useEffect(()=>{
//     if ((currentPhoneAsset.name==="nullAsset2" && currentDivision==="nullAssets") || (currentPhoneAsset.name==="nullAsset2" && currentDivision==="nullAssets1")) {
//       setIsyHandRaised(true)
//       console.log(currentPhoneAssetIndex)
//     } else {
//       setIsyHandRaised(false)
//     }
//   },[currentPhoneAsset, currentDivision, currentPhoneAssetIndex])
//   console.log("currentPhoneAssetIndex:",currentPhoneAssetIndex,"currentDivision:",currentDivision,"currentPhoneAsset.name:",currentPhoneAsset.name)
//   console.log("Isy hand raised",isyHandRaise)
//   useEffect(() => {
//     const video = subsVideoRef.current;
//     const audio = subsAudioRef.current;
//     const esy=esyRef.current;
//     // const esy = document.getElementById("esy");
//     if (!mute) {
//       audio.muted = false;
//     }
//     if (mute) {
//       audio.muted = true;
//     }

//     const handleVideoPlay = () => {
//       // esy.setAttribute(
//       //   "animation-mixer",
//       //   "clip:;loop:repeat;repetitions:Infinity;"
//       // );
//       if (currentPhoneAsset.name==="nullAsset2" && currentDivision==="nullAssets") {
//         esy.setAttribute(
//           "animation-mixer",
//           // "clip:Animation;loop:once;repetitions:1;"
//           "clip:Animation;loop:repeat;repetitions:Infinity;"
//         );
//       } 
//       if((currentPhoneAsset.name==="nullAsset2" && currentDivision==="nullAssets1")){
//         esy.setAttribute(
//           "animation-mixer",
//           // "clip:Animation;loop:once;repetitions:1;"
//           "clip:Animation;loop:repeat;repetitions:Infinity;"
//         );
//       }else {
//         esy.setAttribute(
//           "animation-mixer",
//           "clip:;loop:repeat;repetitions:Infinity;"
//         );
//       }
//       if (!audio.paused && audio.currentTime < video.currentTime) {
//         audio.currentTime = video.currentTime;
//       } else if (!mute) {
//         audio.play();
//         audio.muted = false;
//       }
//     };

//     const handleVideoPause = () => {
//       if (!video.paused && !audio.paused) {
//         audio.pause();
//         esy.removeAttribute("animation-mixer");
//       }

//     };
//     const handleAudioLoadedMetadata = () => {
//       // Handle loaded metadata for the subsAudio element
//       if (!mute) {
//         audio.play();
//       }
//       const duration = audio.duration;
//       console.log("Audio duration:", duration);
//     };
//     const handleVideoEnded = () => {
//       esy.removeAttribute("animation-mixer");
//       audio.pause();
//     };

//     video.addEventListener("play", handleVideoPlay);
//     video.addEventListener("pause", handleVideoPause);
//     audio.addEventListener("loadedmetadata", handleAudioLoadedMetadata);
//     video.addEventListener("loadedmetadata", handleAudioLoadedMetadata); // Added event listener to subsVideoRef as well
//     video.addEventListener("ended", handleVideoEnded);
//     return () => {
//       video.removeEventListener("play", handleVideoPlay);
//       video.removeEventListener("pause", handleVideoPause);
//       audio.removeEventListener("loadedmetadata", handleAudioLoadedMetadata);
//       video.removeEventListener("loadedmetadata", handleAudioLoadedMetadata); // Removed event listener for subsVideoRef
//     };
//   }, [subsVideoRef, subsAudioRef, mute]);

//   const video = subsVideoRef.current;
//   const audio = subsAudioRef.current;
//   const loadNextAssets = (currentAssets, cacheBuster) => {
//     const videoSrc = currentAssets.phoneAssets[0].video;
//     const audioSrc = currentAssets.phoneAssets[0].audio;
//     video.src = videoSrc + "?cache=" + cacheBuster;

//     video.addEventListener("loadedmetadata", () => {
//       video.play();

//       if (!audio.paused && audio.currentTime < video.currentTime) {
//         audio.currentTime = video.currentTime;
//       } else {
//         audio.play();
//       }
//     });
//   };
 
//   // useEffect(()=>{
//   //   const dropdownTrigger = dropDownTriggerRef.current;
//   //   const dropdownOptions = dropDownOptionsRef.current;
//   //   dropdownTrigger.addEventListener("click", function() {
//   //     dropdownOptions.classList.toggle("active");
//   //     console.log(dropdownOptions.className)
//   //   });
//   //  console.log(dropdownOptions.className)
//   //   document.addEventListener("click", function(event) {
//   //     if (!dropdownTrigger.contains(event.target) && !dropdownOptions.contains(event.target)) {
//   //       dropdownOptions.classList.remove("active");
//   //       console.log(dropdownOptions.className)
//   //     }
//   //   });
//   // },[])
//   const handleDropdownClick = () => {
//     setIsDropdownOpen((prevState) => !prevState);
//     if(isDropdownOpen){
//       dropDownOptionsRef.current.classList.toggle("active");
//     }
//     else{
//       dropDownOptionsRef.current.classList.remove("active");
//     }
//   };
 
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         !dropDownTriggerRef.current.contains(event.target) && !dropDownOptionsRef.current.contains(event.target)
//       ) {
//         setIsDropdownOpen(false);
//         dropDownOptionsRef.current.classList.remove("active");
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
    

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);
//   useEffect(()=>{
//     const esy=esyRef.current;
//     // const esy=document.getElementById("esy");
//     const onboarding=onboardingRef.current;
//     // const onboarding=document.getElementById("onboarding");
//     const paymentAcceptance=paymentAcceptanceRef.current;
//     // const paymentAcceptance=document.getElementById("payment-acceptance");
//     const dashboard=dashboardRef.current;
//     // const dashboard=document.getElementById("dashboard");
//     const refund=refundRef.current;
//     // const refund=document.getElementById("refund");
//     if(currentDivision==="nullAssets" && currentPhoneAssetIndex===1){
//       setIsDropdownOpen(true)
//       setEsyAnimation("clip:;loop:repeat;repetitions:Infinity; timeScale: 0.5;");
//       esy.setAttribute("animation-mixer","clip:;loop:repeat;repetitions:Infinity; timeScale: 0.5;");
//       setTimeout(()=>{
//         dropDownOptionsRef.current.classList.add("active");
//               //  esy.setAttribute("animation-mixer","clip:;loop:repeat;repetitions:Infinity; timeScale: 0.5;");
//                onboarding.classList.add("blink-button");
//       },3500)
      
      
//       }
//       if(currentPhoneAsset.name==="nullAsset2" && currentDivision==="nullAssets1"){
//         setIsDropdownOpen(true)
//         esy.setAttribute("animation-mixer","clip:;loop:false;repetitions:1; timeScale: 0.5;");
//         setTimeout(()=>{
//           dropDownOptionsRef.current.classList.add("active");
//                 //  esy.setAttribute("animation-mixer","clip:;loop:false;repetitions:1; timeScale: 0.5;");
//                  paymentAcceptance.classList.add("blink-button");
//         },3500)
//       }
//     else{
//         setIsDropdownOpen(false)
//         onboarding.classList.remove("blink-button");
//         paymentAcceptance.classList.remove("blink-button");
//         console.log(" is dropdown closed:",isDropdownOpen)
//       }
//       console.log("is drop down open:",isDropdownOpen)
//   },
//   [currentDivision,currentPhoneAssetIndex] 
//   // [currentDivision, currentPhoneAsset.name, currentPhoneAssetIndex, isDropdownOpen] latest dependency array drop down dint open while using it
//   )

  
//   // Helper function to handle transition between assets
//   const handleTransition = (currentAssets) => {
//     setCurrentPhoneAssetIndex(0);
//     setCurrentPhoneImageIndex(0);
//     setAnimationClicked(false);
//     setExtrasVisible(false);

//     if (
//       currentDivision === "rtpmethod" ||
//       currentDivision === "refundprocess"
//     ) {
//       setExtrasVisible(true);
//     }
    
//   };
//   const openPopup = () => {
//     setIsPopupOpen(true);
//     setPlayNextAssests(false);
//     return;
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//     setPlayNextAssests(true);
//     console.log(playNextAssets);
//   };
//   useEffect(() => {
//     const video = subsVideoRef.current;
//     const audio = subsAudioRef.current;
//     const skipBtn = skipBtnRef.current;
//     const buttonEntity=animationButtonRef.current;
//     // const buttonEntity = document.querySelector("#animation-button");
//     // const appLoadingBtn = document.getElementById("apploading");
//     // const appDemoBtn = document.getElementById("appintro");
//     // const userRegBtn = document.getElementById("userreg");
//     // const paymethodBtn = document.getElementById("paymentmethod");
//     // const smartDropdown = document.getElementById("smart-app-dropdown");
//     // smartDropdown.size = smartDropdown.options.length;
//     // smartDropdown.style.height="250px";
//     setExtrasVisible(false);
//     // const arrowEntity=document.getElementById("arrow-entity")
//     // arrowEntity.setAttribute("visible","false")
//     skipBtn.style.pointerEvents = "none"; // Disable click events initially

//     const delayBindingTimeout = setTimeout(() => {
//       skipBtn.style.pointerEvents = "auto"; // Enable click events after a delay
//       skipBtn.addEventListener("click", handleSkipClick);
//     }, 2500);

//     video.addEventListener("loadedmetadata", () => {
//       setVideoDuration(video.duration);
//     });

//     const handleVideoEnded = () => {
//       buttonEntity.setAttribute("visible", "true");
//     };

//     const handleVideoPlay = () => {
//       buttonEntity.setAttribute("visible", "false");

//       if (!audio.paused && audio.currentTime < video.currentTime) {
//         audio.currentTime = video.currentTime;
//       } else {
//         audio.play();
//       }
//     };

//     const handleVideoPause = () => {
//       if (!video.paused && !audio.paused) {
//         audio.pause();
//       }
//     };

//     video.addEventListener("ended", handleVideoEnded);
//     video.addEventListener("play", handleVideoPlay);
//     video.addEventListener("pause", handleVideoPause);

//     const handleSkipClick = () => {
//       const divisions = Object.keys(assetJson);
//       const currentDivisionIndex = divisions.indexOf(currentDivision);
//       const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//       const currentAssets = assetJson[divisions[nextDivisionIndex]];
//       const cacheBuster = new Date().getTime();

//       // Check if the last division is loaded
//       if (
//         nextDivisionIndex === 0 &&
//         currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//       ) {
//         // Last division and last asset loaded, prevent skip
//         return;
//       }

//       // Check if enough time has passed since the last skip
//       if (Date.now() - lastSkipTime < 2500) {
//         // Less than 5 seconds since the last skip, prevent skip
//         return;
//       }

//       // Set the last skip time to the current time
//       setLastSkipTime(Date.now());

//       buttonEntity.setAttribute("visible", "false"); // Hide the skip button

//       setTimeout(() => {
//         // Show the skip button after 5 seconds
//         buttonEntity.setAttribute("visible", "true");

//         // Check if the skip button is clickable (exceeds division length)
//         if (
//           nextDivisionIndex === 0 &&
//           currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//         ) {
//           // Last division and last asset loaded, prevent skip
//           buttonEntity.setAttribute("visible", "false");
//         }
//       }, 2500);

//       setCurrentDivision(divisions[nextDivisionIndex]);
//       setCurrentPhoneAssetIndex(0); // Reset the asset index
//       setCurrentPhoneImageIndex(0); // Reset the image index

//       loadNextAssets(currentAssets, cacheBuster);
//       setTimeout(() => {
//         handleTransition(currentAssets);
//         setTimeout(() => {
//           // Set visibility after the transition
//           buttonEntity.setAttribute("visible", "true");
//         }, 2500);
//       }, 2500);
//     };
//     skipBtn.removeEventListener("click", handleSkipClick);
//     skipBtn.addEventListener("click", handleSkipClick);

//     const delay = async (milliseconds) => {   //usded to delay nextDivision Loading for appintro
//       return new Promise(resolve => setTimeout(resolve, milliseconds));
//     };

//     const handleClick = async () => {
//       buttonEntity.setAttribute("visible", "false");
//       buttonEntity.removeEventListener("click", handleClick);
//       if (pageLoaded) {
//         const phoneAsset=phoneAssetRef.current;
//         // const phoneAsset = document.querySelector("#phone-asset");
//         if (phoneAsset) {
//           console.log(phoneAsset.getAttribute("animation-mixer"));
//           setAnimationClicked(true);
//         } else {
//           setAnimationClicked(false);
//         }
//       } else {
//         setAnimationClicked(false);
//       }

//       const divisions = Object.keys(assetJson);
//       const currentDivisionIndex = divisions.indexOf(currentDivision);
//       const currentAssets = assetJson[currentDivision];
//       const currentPhoneAssetsLength = currentAssets.phoneAssets.length;
//       const currentPhoneImagesLength = currentAssets.phoneImages.length;
//       let nextPhoneAssetIndex =
//         (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
//       let nextPhoneImageIndex =
//         (currentPhoneImageIndex + 1) % currentPhoneImagesLength;
//       const cacheBuster = new Date().getTime();

//       const loadNextAssets = () => {
//         const nextVideoIndex =
//           (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
//         const videoSrc = currentAssets.phoneAssets[nextVideoIndex].video;
//         const audioSrc = currentAssets.phoneAssets[nextVideoIndex].audio;
//         video.src = videoSrc + "?cache=" + cacheBuster;

//         video.addEventListener("loadedmetadata", () => {
//           video.play();
//           // setExtrasVisible(true)
//           // if(currentDivision==="rtpmethod"){
//           //   arrowEntity.setAttribute("visible",true);
//           //    if(currentPhoneAssetIndex===0){
//           //   arrowEntity.setAttribute("visible",true);
//           // }
//           // }

//           if (!audio.paused && audio.currentTime < video.currentTime) {
//             audio.currentTime = video.currentTime;
//           } else {
//             audio.play();
//           }
//         });
//       };

//       const handleTransition = () => {
//         // if (
//         //   currentDivision === divisions[divisions.length - 1] &&
//         //   nextPhoneAssetIndex === 0
//         // ) {
//         //   // Last division and last asset loaded
//         //   setAssetsVisible(false);

//         //   console.log(assetsVisible);
//         //   // setTimeout(()=>{
//         //   //   setAssetsVisible(false);
//         //   //   console.log(assetsVisible)
//         //   // } 2500)
//         // } else {
//         setCurrentPhoneAssetIndex(nextPhoneAssetIndex);
//         setCurrentPhoneImageIndex(nextPhoneImageIndex);
//         setAnimationClicked(false);
//         setExtrasVisible(false);
//         if (
//           currentDivision === "rtpmethod" ||
//           currentDivision === "refundprocess"
//         ) {
//           setExtrasVisible(true);
//         } else {
//           setExtrasVisible(false);
//         }

//         // arrowEntity.setAttribute("visible",false);
//         buttonEntity.addEventListener("click", handleClick);
//         console.log("Event listener added");
//         buttonEntity.removeEventListener("click", handleClick);
//         console.log("Event listener removed");
//         buttonEntity.setAttribute("visible", "true");
//         // }
//       };

//       // Check if all assets in the current division are loaded
//       if (nextPhoneAssetIndex !== 0) {
//         loadNextAssets();
//         if (
//           currentDivision === "rtpmethod" ||
//           currentDivision === "refundprocess"
//         ) {
//           setExtrasVisible(true);
//           // arrowEntity.setAttribute("visible",true);
//           if (currentPhoneAssetIndex === 0) {
//             // arrowEntity.setAttribute("visible",true);
//             setExtrasVisible(true);
//           } else {
//             setExtrasVisible(false);
//           }
//         }
//       } else {
//         const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//         const nextDivision = divisions[nextDivisionIndex];
          
//         if (nextDivisionIndex === 0 && nextPhoneAssetIndex === 0) {
//           // JSON iteration completed

//           setTimeout(() => {
//             openPopup();
//           }, 2500);
//           if (playNextAssets) {
//             setCurrentDivision(nextDivision);
//             setCurrentPhoneAssetIndex(0); // Reset the asset index
//             setCurrentPhoneImageIndex(0); // Reset the image index

//             loadNextAssets();
//             console.log(playNextAssets);
//           }
//           console.log(playNextAssets);
//         }
//           //   if (nextDivisionIndex === 2) {
//           //     await delay(5000); // Wait for 5 seconds when nextDivisionIndex is 1
//           //  }
//         if (
//           currentDivision === "rtpmethod" ||
//           currentDivision === "refundprocess"
//         ) {
//           setExtrasVisible(true);
//           // arrowEntity.setAttribute("visible",true);
//           if (currentPhoneAssetIndex === 0) {
//             // arrowEntity.setAttribute("visible",true);
//             setExtrasVisible(true);
//           } else {
//             setExtrasVisible(false);
//           }
//         }
//         setTimeout(() => {
//           setCurrentDivision(nextDivision);
//           setCurrentPhoneAssetIndex(0); // Reset the asset index
//           setCurrentPhoneImageIndex(0); // Reset the image index

//           loadNextAssets();
//         }, 2500);
//       }

//       setTimeout(handleTransition, 2500);
//     };

//     buttonEntity.removeEventListener("click", handleClick);
//     console.log("Event listener removed");
//     buttonEntity.addEventListener("click", handleClick);
//     console.log("Event listener added");
//    const dropdownTrigger=dropDownTriggerRef.current;
//    const dropdownOptions=dropDownOptionsRef.current;
    
//   //   const toggleDropDown=(event)=>{
//   //     if (!dropdownTrigger.contains(event.target) && !dropdownOptions.contains(event.target)) {
//   //       dropdownOptions.classList.remove("active");
//   //       console.log(dropdownOptions.className)
//   //     }
//   //       dropdownOptions.classList.toggle("active");
//   //     console.log(dropdownOptions.className)
      
//   //   }
//   //   dropdownTrigger.addEventListener("click", function() {
//   //     dropdownOptions.classList.toggle("active");
//   //     console.log(dropdownOptions.className)
//   //   });
//   //  console.log(dropdownOptions.className)
//     // document.addEventListener("click", function(event) {
//     //   if (!dropdownTrigger.contains(event.target) && !dropdownOptions.contains(event.target)) {
//     //     dropdownOptions.classList.remove("active");
//     //     console.log(dropdownOptions.className)
//     //   }
//     // });
//     // const dropdownOptionElements = document.querySelectorAll(".dropdown-option");
//     if((currentDivision==="nullAssets" && currentPhoneAssetIndex===1)|| (currentPhoneAsset.name==="nullAsset2" && currentDivision==="nullAssets1")){
//       setIsDropdownOpen(true)
//       }
//     else{
//         setIsDropdownOpen(false)
//       }
//     const onboarding=onboardingRef.current;
//     // const onboarding=document.getElementById("onboarding");
//     const paymentAcceptance=paymentAcceptanceRef.current;
//     // const paymentAcceptance=document.getElementById("payment-acceptance");
//     const dashboard=dashboardRef.current;
//     // const dashboard=document.getElementById("dashboard");
//     const refund=refundRef.current;
//     // const refund=document.getElementById("refund");

//     const handleDivisionButtonClick = (event) => {
//       const selectedDivision = event.target.value;
//       const divisions = Object.keys(assetJson);
//       const currentDivisionIndex = divisions.indexOf(currentDivision);
//       const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//       const currentAssets = assetJson[divisions[nextDivisionIndex]];
//       const cacheBuster = new Date().getTime();

//       // Check if the last division is loaded
//       if (
//         nextDivisionIndex === 0 &&
//         currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//       ) {
//         // Last division and last asset loaded, prevent skip
//         return;
//       }

//       // Check if enough time has passed since the last skip
//       if (Date.now() - lastSkipTime < 2500) {
//         // Less than 5 seconds since the last skip, prevent skip
//         return;
//       }

//       // Set the last skip time to the current time
//       setLastSkipTime(Date.now());

//       buttonEntity.setAttribute("visible", "false"); // Hide the skip button

//       setTimeout(() => {
//         // Show the skip button after 5 seconds
//         buttonEntity.setAttribute("visible", "true");

//         // Check if the skip button is clickable (exceeds division length)
//         if (
//           nextDivisionIndex === 0 &&
//           currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//         ) {
//           // Last division and last asset loaded, prevent skip
//           buttonEntity.setAttribute("visible", "false");
//         }
//       }, 2500);

//       setCurrentDivision(event.target.getAttribute("data-value"));
//       setIsDropdownOpen(false)
//       setCurrentPhoneAssetIndex(0); // Reset the asset index
//       setCurrentPhoneImageIndex(0); // Reset the image index

//       loadNextAssets(currentAssets, cacheBuster);

//       setTimeout(() => {
//         handleTransition(currentAssets);
//         setTimeout(() => {
//           // Set visibility after the transition
//           buttonEntity.setAttribute("visible", "true");
//         }, 2500);
//       }, 2500);
//     };
//     // dropdownOptionElements.forEach(function(option) {
//     //   option.addEventListener("click",handleDivisionButtonClick 
//     //   );
//     // });
//     onboarding.addEventListener("click",handleDivisionButtonClick);
//     paymentAcceptance.addEventListener("click",handleDivisionButtonClick);
//     dashboard.addEventListener("click",handleDivisionButtonClick);
//     refund.addEventListener("click",handleDivisionButtonClick);
//     // appLoadingBtn.addEventListener("click", handleDivisionButtonClick);
//     // appDemoBtn.addEventListener("click", handleDivisionButtonClick);
//     // userRegBtn.addEventListener("click", handleDivisionButtonClick);
//     // paymethodBtn.addEventListener("click", handleDivisionButtonClick);
//     // smartDropdown.addEventListener("change", handleDivisionButtonClick);

//     // appLoadingBtn.removeEventListener("click", handleDivisionButtonClick);
//     // appDemoBtn.removeEventListener("click", handleDivisionButtonClick);
//     // userRegBtn.removeEventListener("click", handleDivisionButtonClick);
//     // paymethodBtn.removeEventListener("click", handleDivisionButtonClick);
//   //   dropdownTrigger.removeEventListener("click", function() {
//   //     dropdownOptions.classList.toggle("active");
//   //     console.log(dropdownOptions.className)
//   //   });
//   //  console.log(dropdownOptions.className)
//   //   document.removeEventListener("click", function(event) {
//   //     if (!dropdownTrigger.contains(event.target) && !dropdownOptions.contains(event.target)) {
//   //       dropdownOptions.classList.remove("active");
//   //       console.log(dropdownOptions.className)
//   //     }
//   //   });

//     return () => {
//       video.removeEventListener("loadedmetadata", () => {
//         setVideoDuration(video.duration);
//       });
//       video.removeEventListener("ended", handleVideoEnded);
//       video.removeEventListener("play", handleVideoPlay);
//       video.removeEventListener("pause", handleVideoPause);
//       buttonEntity.removeEventListener("click", handleClick);
//       clearTimeout(delayBindingTimeout);
//       skipBtn.removeEventListener("click", handleSkipClick);
//       // appLoadingBtn.removeEventListener("click", handleDivisionButtonClick);
//       // appDemoBtn.removeEventListener("click", handleDivisionButtonClick);
//       // userRegBtn.removeEventListener("click", handleDivisionButtonClick);
//       // paymethodBtn.removeEventListener("click", handleDivisionButtonClick);
//       // smartDropdown.removeEventListener("change", handleDivisionButtonClick);
//       // dropdownOptionElements.forEach(function(option) {
//       //   option.removeEventListener("click",handleDivisionButtonClick 
//       //   );
//       // });
//       onboarding.removeEventListener("click",handleDivisionButtonClick);
//     paymentAcceptance.removeEventListener("click",handleDivisionButtonClick);
//     dashboard.removeEventListener("click",handleDivisionButtonClick);
//     refund.removeEventListener("click",handleDivisionButtonClick);
//       console.log("Event listener removed");
//     };
//   }, [pageLoaded, currentPhoneAssetIndex, currentDivision, currentPhoneImageIndex, assetsVisible, lastSkipTime,playNextAssets,      //updated dependecy might experinece some functionality changes because of it
//     //  loadNextAssets, handleTransition, 
//     ]);
//   // Hide the animation button initially

//   useEffect(() => {
//     const buttonEntity=animationButtonRef.current;
//     // const buttonEntity = document.querySelector("#animation-button");
//     buttonEntity.setAttribute("visible", "false");
//   }, []);
//   // Set the visibility attribute of the animation button based on the state
//   // const buttonVisibilityAttribute = currentPhoneAssetIndex === 0 ? "true" : "false";

//   // const handleLoadedMetadata = () => {
//   //   const video = subsVideoRef.current;
//   //   const audio=subsAudioRef.current
//   //   if (!video || !audio) return;
//   //   setVideoDuration(video.duration);
//   //   setAudioDuration(audio.duration);
//   // };
//   // console.log(videoDuration);

//   // useEffect(() => {
//   //   if (videoRef.current) {
//   //     videoRef.current.muted = true;
//   //   }
//   // }, []);

//   const handleLobbyClick = (event) => {
//     event.stopPropagation();
//     navigate("/panorama");
//     console.log("panorama button clicked"); // Replace "/your-route" with the desired path
//   };
//   const handleSmartmerchantClick = (event) => {
//     event.stopPropagation();
//     navigate("/smartmerchant");
//     console.log("panorama button clicked"); // Replace "/your-route" with the desired path
//   };

//   // const [currentEntityIndex, setCurrentEntityIndex] = useState(0);
//   // const entityNames = Object.keys(entityVisibility);

//   const handleZoom = (event) => {
//     const newZoom = zoom + event.deltaY * -0.01;
//     if (newZoom >= 1 && newZoom <= 5) {
//       setZoom(newZoom);
//     }
//   };

//   const logoutHandler = () => {
//     resetUserSession();
//     navigate("/login");
//   };
//   useEffect(() => {
//     window.addEventListener("wheel", handleZoom);
//     return () => window.removeEventListener("wheel", handleZoom);
//   });
  
//   // useEffect(() => {
//   //   const phoneAsset = document.getElementById("phone-asset");
//   //   if (animationClicked) {
//   //     phoneAsset.setAttribute("animation-mixer", {
//   //       clip: currentPhoneAsset.animation,
//   //       loop: "repeat",
//   //       repetitions: Infinity,
//   //       crossFadeDuration: 0.3,
//   //     });
//   //   } else {
//   //     phoneAsset.removeAttribute("animation-mixer");
//   //   }
//   // }, [currentPhoneAsset, animationClicked]);
//   // console.log(animationClicked);
//   // const handleAnimationClick = () => {
//   //   setAnimationClicked(!animationClicked);

//   //   // Change assets after 5 seconds
//   //   setTimeout(() => {
//   //     setCurrentPhoneAssetIndex((prevIndex) => {
//   //       const nextIndex = (prevIndex + 1) % assetJson.phoneAssets.length;
//   //       return nextIndex;
//   //     });

//   //     setCurrentPhoneImageIndex((prevIndex) => {
//   //       const nextIndex = (prevIndex + 1) % assetJson.phoneImages.length;
//   //       return nextIndex;
//   //     });

//   //     // Enable animation
//   //     if (pageLoaded) {
//   //       const phoneAsset = document.querySelector('#phone-asset');
//   //       if (phoneAsset) {
//   //         phoneAsset.setAttribute('animation-mixer', {
//   //           clip: currentPhoneAsset.animation,
//   //           loop: 'repeat',
//   //           repetitions: Infinity,
//   //         });
//   //       }
//   //     }
//   //   }, 2500); // Wait for 5 seconds before changing assets and enabling animation

//   //   console.log(currentPhoneAsset.animation, pageLoaded);
//   //};
//   // console.log(mute);
//   return (
//     <div className="scene-container" onClick={() => setMute(false)}>
//       <HideVRButton />
//       <Popup
//         className="appdemo-popup"
//         open={isPopupOpen}
//         onClose={closePopup}
//         position="right center"
//       >
//         <div className="appdemo-popup-container">
//           <div className="appdemo-popup-text">
//             The app demonstration is completed. Click Back to lobby to return to
//             lobby or cancel to continue with the demonstation
//           </div>
//           <div className="popup-btn-container">
//             <button className="appdemo-popup-btn" onClick={handleLobbyClick}>Back to lobby</button>{" "}
//             <button className="appdemo-popup-btn" onClick={closePopup}>Cancel</button>
//           </div>
//         </div>
//       </Popup>
//       {/* <select
//         defaultValue=""
//         className="smart-dropdown"
//         id="smart-app-dropdown"
//       >
//         <option value="none" disabled>
//           Select Demo
//         </option>
//         <option value="apploading">App Installation</option>
//         <option value="appintro">App Introduction</option>
//         <option value="userreg">User Registration</option>
//         <option value="paymentmethod">Payment Method</option>
//         <option value="rtpmethod">RTP Method</option>
//         <option value="recpay">Records/Payments</option>
//         <option value="datahandling">Data Handling</option>
//         <option value="refundprocess">Refund process</option>
//       </select> */}
//   <div class="smart-dropdown">
//     <div id="dropdown-trigger" ref={dropDownTriggerRef} class="smart-dropdown" onClick={handleDropdownClick}>Select Demo</div>
//       <div id="dropdown-options" ref={dropDownOptionsRef} class="dropdown-options">
//         {/* <div class="dropdown-option" data-value="apploading">App Installation</div> */}
//         <div id="onboarding" ref={onboardingRef} class="dropdown-option" data-value="appintro">Onboarding</div>
//         {/* <div class="dropdown-option" data-value="userreg">User Registration</div> */}
//         <div id="payment-acceptance" ref={paymentAcceptanceRef} class="dropdown-option" data-value="paymentmethod">Payment Acceptance</div>
//         {/* <div class="dropdown-option" data-value="rtpmethod">RTP</div> */}
//         <div id="dashboard" class="dropdown-option"  ref={dashboardRef} data-value="recpay">Dashboard</div>
//         {/* <div class="dropdown-option" data-value="datahandling">Data Handling</div> */}
//         <div id="refund" class="dropdown-option" ref={refundRef} data-value="refundprocess">Refund</div>
//         <div id="smartmerchant" class="dropdown-option" data-value="refundprocess" onClick={handleSmartmerchantClick}>Back to ISG Pay Introduction</div>

//       </div>
//      </div> 
//       <video
//         src={currentPhoneAsset.subsVideo.audio}
//         ref={subsAudioRef}
//         controls={false}
//         preload="auto"
//         className="demo-subs subs-audio audio-element"
//       />
//       {/* <button className="demo-play-btn" onClick={handlePlayBtnClick}>Play</button> */}
//       <div className="demo-subs-container">
//         <button className="next-video-btn" ref={skipBtnRef}>
//           Next
//         </button>
//         <div className="demo-subs-main-container">
//           <video
//             id="subsVideo"
//             ref={subsVideoRef}
//             src={currentPhoneAsset.subsVideo.videoElement}
//             // onLoadedMetadata={handleLoadedMetadata}
//             type="video/webm"
//             muted
//             controls={false}
//             preload="auto"
//             className="demo-subs"
//           />
//           <div className="next-button-container"></div>
//         </div>
//         {/* <video
//           src={currentPhoneAsset.subsVideo.audio}
//           ref={subsAudioRef}
//           type="video/webm"
//           controls={false}
//           preload="auto"
//           className="demo-subs subs-audio"
//         /> */}
//       </div>
//       <Scene
//         light="defaultLightsEnabled: false"
//         inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe@d52af46565230a33c0fa23e045fb74e877df7dc9/dist/aframe-master.min.js"
//         cursor="rayOrigin: mouse"
//         // raycaster="objects: [data-clickable]; far: 100"
//         onWheel={handleZoom}
//         wasd-controls="false"
//         className="scene"
//         ref={sceneRef}
//         vr-mode-ui={{ enabled: true }}
//         // onEnterVR={handleEnterVR}
//         renderer={"antialias: true; physicallyCorrectLights: true; "}
//         embedded={true}
//       >
//         <a-entity id="camera-rig" position="0 0 0" ref={cameraRotationRef}>
//         <a-entity
//              id="camera"
//             rotation="0 -45 0"
//              wasd-controls-enabled="false"
//              camera={`userHeight:1.6; active:true; zoom:${zoom};`}
//              look-controls="true"
//              ref={cameraRef}
//              position="0 0 0"
//              // zoom={zoom}
//              // near="0.05"
//              // far="10000"
//              // fov="100"
//              // camera="active:true"
//              //look-controls-limited="true"
//              camera-rotation-limit="minRotation:-25; maxRotation: -22;"
             
//              // looklimited
//           >
//             <a-entity
//               id="phone-light-1"
//               light="type: spot; castShadow: true; intensity: 1.5; distance: 200; color: #ffffff; penumbra: 1; angle: 40; groundColor: #ffffff; shadowCameraRight: 7.22; decay: -0.33"
//               position="0.02127 1.151 -0.60992"
//               rotation="-77.21523021860052 129.48044029043422 60.95468799278776"
//               scale="0.2 0.2 0.2"
//             ></a-entity>
//             <a-entity
//               id="phone-light-2"
//               light="type: spot; castShadow: true; intensity: 0.4; distance: 197.68; color: #a0d8e3; penumbra: 0.13; angle: 40; groundColor: #ffdc2e; shadowCameraRight: 7.22; decay: -0.66"
//               position="-0.02859 4.44158 1.81392"
//               rotation="-64.51791252070635 20.737061479169885 172.13084560217757"
//               scale="0.2 0.2 0.2"
//             ></a-entity>
//             {/* <a-entity
//           gltf-model={paymentMethod}
//           scale="0.5 0.5 0.5"
//           rotation="-68.85348415646128 -169.53248200125927 -12.258432026823963"
//           position="-0.1445 -1.86661 -2.86936"
//           // shadow="cast:true;"
//           animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
//         /> */}
//             {assetsVisible && (
//               <>
//                 <a-entity
//                   id="phone-asset"
//                   useRef={phoneAssetRef}
//                   gltf-model={currentPhoneAsset.imagePath}
//                   scale={`${currentPhoneAsset.scale.x} ${currentPhoneAsset.scale.y} ${currentPhoneAsset.scale.z}`}
//                   position={`${currentPhoneAsset.position.x} ${currentPhoneAsset.position.y} ${currentPhoneAsset.position.z}`}
//                   rotation={`${currentPhoneAsset.rotation.x} ${currentPhoneAsset.rotation.y} ${currentPhoneAsset.rotation.z}`}
//                   // shadow="cast:true;"
//                   {...(animationClicked && {
//                     "animation-mixer": `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:1;`,
//                   })}
//                   // animation-mixer={animationClicked ? `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:Infinity;` : ""}
//                 />

//                 {/*no inspector because of img*/}
//                 <a-entity
//                   id="phone-img"
//                   material={`shader: flat;  alphaTest:0.5; src:${currentPhoneImage.imagePath};   transparent: true;`}
//                   geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
//                   position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
//                   rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
//                   scale="0.2 0.2 0.2"
//                 ></a-entity>
//                 {currentDivision === "recpay" && (
//                   <a-entity
//                     id="phone-video"
//                     material={`shader: flat; alphaTest: 0.5; src:${currentPhoneImage.imagePath}; transparent: true;`}
//                     geometry="primitive: plane; width: 2; height: 3.8"
//                     position="-0.10769 -0.0083 -0.7636"
//                     rotation="-2.3073010409918253 4.6564280010282 -1.7647100090029355"
//                     scale="0.11844 0.1355 0.12"
//                   ></a-entity>
//                 )}

//                 {currentDivision === "rtpmethod" &&
//                   currentPhoneAsset.imagePath.includes("rtp") &&
//                   extrasVisible && (
//                     <>
//                       <a-entity
//                         id="rtp-phone"
//                         gltf-model={rtpmobile}
//                         scale="3 3 3"
//                         rotation="-46.78658763479276 -10.097808181385629 8.462013676287128"
//                         position="-0.36309 -3.12602 0.50687"
//                         animation-mixer="clip: Animation"
//                       ></a-entity>

//                       {/* <a-entity id="arrow-entity" material={`shader: flat; color: white; transparent: true; src:#arrow `} geometry="primitive: plane; width: 5.45; height: 2.96"  position="-0.65925 0.12821 -1.37255"rotation="0.9241809235460178 -12.21488723439402 -2.7146740333298403" scale="0.21033 0.21033 0.21033"></a-entity> */}
//                     </>
//                   )}
//                 {currentDivision === "refundprocess" &&
//                   currentPhoneAsset.imagePath.includes("refund") &&
//                   extrasVisible && (
//                     <a-entity
//                       id="rtp-phone"
//                       gltf-model={rtpmobile}
//                       scale="3 3 3"
//                       rotation="-46.78658763479276 -10.097808181385629 8.462013676287128"
//                       position="-0.36309 -3.12602 0.50687"
//                       animation-mixer="clip: Animation"
//                     ></a-entity>
//                   )}

//                 <a-entity
//                   id="arrow-entity"
//                   material={`shader: flat; color: white; transparent: true; src:#arrow; `}
//                   visible={extrasVisible ? "true" : "false"}
//                   geometry="primitive: plane; width: 5.45; height: 2.96"
//                   position="-0.65925 0.12821 -1.37255"
//                   rotation="0.9241809235460178 -12.21488723439402 -2.7146740333298403"
//                   scale="0.21033 0.21033 0.21033"
//                 ></a-entity>
//               </>
//             )}
//             <a-entity
//               id="animation-button"
//               ref={animationButtonRef}
//               material="shader: flat; color:white; side: double; transparent: true; opacity: 0.5; src:#buttonvideo;"
//               geometry="primitive: circle; radius: 0.2; theta-length: 360"
//               position={`${currentPhoneImage.buttonPosition.x} ${currentPhoneImage.buttonPosition.y} -0.86971`}
//               rotation="0 -180 0"
//               scale="-0.2 0.2 0.2"
//               // visible={buttonVisibilityAttribute}
//               // onClick={handleAnimationClick}
//               event-set__mouseenter="_event: mouseenter; material.opacity: 0.9; textEntity.opacity:0.7; text.color:orange;"
//               event-set__mouseleave="_event: mouseleave; material.opacity: 0.7; textEntity.opacity:0; text.color:red;"
//               raycaster="objects: [gui-interactable]"
//             ></a-entity>

//             {/* Just for Position and rotation testing */}
//             {/* <a-entity id="phone-img" material={`shader: flat;  alphaTest:0.5;   transparent: true;`} geometry="primitive: plane; width: 2; height: 3.8" position="0.65229 -0.006 -0.98319" rotation="3.5844239663384303 -4.396305162038807 0.6852575229764646" scale="0.2 0.2 0.2"></a-entity>
//          <a-entity
//          material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5;"
//          geometry="primitive: circle; radius: 0.2; theta-length: 360"
//           position={`0.642 -0.15784 -0.86971`}
//           rotation="0 0 0"
//           scale="-0.2 0.2 0.2"
//           onClick={handleAnimationClick}
//           event-set__mouseenter="_event: mouseenter; material.opacity: 0.8; textEntity.opacity:0.7; text.color:orange;"
//           event-set__mouseleave="_event: mouseleave; material.opacity: 0.4; textEntity.opacity:0; text.color:red;"
//           raycaster="objects: [gui-interactable]"
//         ></a-entity> */}

//             {/* <a-entity gltf-model="/static/media/apploading1.a488ca6605b75d157548.glb" scale="0.034 0.034 0.034" rotation="-68.60367455778425 -172.40758421722575 -9.044711753935175" position="-0.40232 -2.49204 -4.23453" animation-mixer="clip: Animation"></a-entity> */}
//             <a-entity
//               cursor="fuse: false;"
//               id="cursor-btn"
//               // position={`${cursorPosition.x} ${cursorPosition.y} -1 `}
//               // position=" 0 0 -1"
//               geometry="primitive: ring; radiusInner: 0.0001; radiusOuter: 0.0002"
//               // animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"
//               // animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1"
//               // animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
//               material="color: black; shader: flat"
//               raycaster="objects: [gui-interactable]; near:1 far:20;"
//               // onClick={handleMerchantClick}
//             ></a-entity>
//           </a-entity>
//         </a-entity>

//         <a-assets>
//           <img id="tv-border" src={tvImg} alt="" />
//           <video
//             className="displayVideo"
//             ref={arrowRef}
//             id="arrow"
//             preload="auto"
//             src={arrow}
//             width="1920"
//             height="1080"
//             loop="true"
//             crossOrigin="anonymous"
//             playsInline=""
//             webkit-playsinline=""
//           ></video>

//           {/* {console.log("currentPhoneImage.name:", currentPhoneImage.name)}
//           {console.log(
//             "currentPhoneImage.imagePath:",
//             currentPhoneImage.imagePath
//           )} */}
//           <video
//             ref={buttonVideoRef}
//             className="videos"
//             id="buttonvideo"
//             preload="auto"
//             src={buttonvideo}
//             width="1920"
//             height="1080"
//             autoplay="true"
//             loop="true"
//             crossOrigin="anonymous"
//             playsInline=""
//             webkit-playsinline=""
//           ></video>

//           {/* <audio id="isyintro" src={isyintro} preload="auto"></audio> */}

//           <img id="smartm" src={smartmerchant} alt="" />
//         </a-assets>

//         {/* <a-entity gltf-model="/static/media/PaymentMethod.757d3a356cfe1cec9709.glb" scale="0.5 0.5 0.5" rotation="-1.0364806513916591 -177.40205731738115 0.2859059397702808" position="-0.07352 -2.84768 0.05947" animation-mixer="clip: Animation"></a-entity> */}
//         {/* <a-entity position="-0.14076 -3.07192 0.82356" gltf-model="/static/media/PaymentMethod.757d3a356cfe1cec9709.glb" scale="0.5 0.5 0.5" rotation="10.3 2500000000001 138.48389908311995 -10.957817831876994" animation-mixer="clip: Animation"></a-entity> */}
//         {/* <a-entity sound="src:#isyintro" autoplay="true" volume="2"></a-entity> */}
//         {/* <a-sound src={isyintro} autoplay="true"></a-sound> */}
//         {/* <a-entity id="river" geometry="primitive: plane" material="color: blue"
//           position="-10 0 0" sound="src: url(river.mp3); autoplay: true"></a-entity> */}
//         {/* <a-entity
//           gltf-model={sandclock}
//           position="1.8 0 -2"
//           scale="0.5 0.5 0.5"
//           rotation="10.325 -34.608 -10.958."
//           shadow="cast:true;"
//           animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
//         /> */}
//         <Entity primitive="a-sky" src={smartmerchant} rotation="0 -130 0" />
//         <a-sky color="#ECECEC" scale="3 3 3"></a-sky>
//         <Entity primitive="a-sky" color="#ECECEC" scale="3 3 3" />
//         {/* <a-entity id="ambient" light="type: ambient; intensity:0.2;"></a-entity> */}
//         {/* <a-entity
//           id="directional"
//           light="type: directional; castShadow:true; intensity:1;  position:0 20 0; color:#FFFFFF"
//         ></a-entity> */}
//         <a-entity
//           id="spot1"
//           light="type: spot; castShadow: true; intensity: 5; distance: 46.25; color: white; penumbra: 1; angle: 20"
//           position="33.933 -8.73 2.177"
//           rotation="6.428013503572705 53.874648518356175 -62.41916811714215"
//           scale="0.2 0.2 0.2"
//         ></a-entity>
//         <a-entity
//           id="spot2"
//           light="type: spot; castShadow: true; intensity: 1; distance: 46.25; color: white; penumbra: 1; angle: 30"
//           position="-18.60183 -0.329 3.43627"
//           rotation="-9.325 -40.88 7.024"
//           scale="0.2 0.2 0.2"
//         ></a-entity>

//         <a-entity
//           id="spot3"
//           light="type: spot; castShadow: true; intensity: 3.25; distance: 46.25; color: white; penumbra: 1; angle: 30; decay: 1.1"
//           position="-21.02744 -0.52743 -39.79053"
//           rotation="-1.5515697092142693 -135.06276808839382 43.00220139795368"
//           scale="0.2 0.2 0.2"
//         ></a-entity>
//         <a-entity
//           id="spot4"
//           light="type: spot; castShadow: true; intensity: 2; distance: 46.25; color: #30499c; penumbra: 1; angle: 20; groundColor: #ffffff"
//           position="20.43057 0 -24.38125"
//           rotation="2.7845748843358007 115.23556358789169 44.978332833359886"
//           scale="0.2 0.2 0.2"
//         ></a-entity>

//         {/* <a-entity
//           gltf-model={paymentMethod}
//           position="1.8 0 -2"
//           scale="0.5 0.5 0.5"
//           rotation="10.325 -34.608 -10.958."
//           // shadow="cast:true;"
//           animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
//         /> */}

//         <a-entity
//           gltf-model={isyHandRaise?esyHand:esy}
//           id="esy"
//           ref={esyRef}
//           position="1.959 -6.000 -15.915"
//           scale="0.18 0.18 0.18"
//           rotation="0 -8.586  0"
//           shadow="cast:true; receive:false;"
//           // animation-mixer="clip:;loop:repeat;repetitions:Infinity;"
//         />
//         {/* <a-entity
//           id="menu"
//           position="25.861 11.406 28.091"
//           rotation="0 25.281 0"
//         >
//           <a-entity
//             id="apploading"
//             material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
//             geometry="primitive: plane; width: 5; height: 1.1"
//             position="-23.13553 -7.65778 -71.35983"
//             rotation="0 -177.911 0"
//             scale="2.656 2.656 2.656"
//             // onClick={handleLobbyClick}
//             event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
//             event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
//           >
//             <a-entity
//               text-geometry="value: App Loading"
//               material="color: red; shader: flat;"
//               position="1.408 -0.092 -0.082"
//               rotation="-180 1.150 -180"
//               scale="0.5 0.5 0.5"
//             ></a-entity>
//           </a-entity>
//           <a-entity
//             id="appintro"
//             material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
//             geometry="primitive: plane; width: 5; height: 1.1"
//             position="-23.13553 -11.075 -71.35983"
//             rotation="0 -177.911 0"
//             scale="2.656 2.656 2.656"
//             // onClick={handleLobbyClick}
//             event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
//             event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
//           >
//             <a-entity
//               text-geometry="value: App Demonstration"
//               material="color: red; shader: flat;"
//               position="1.408 -0.092 -0.082"
//               rotation="-180 1.150 -180"
//               scale="0.5 0.5 0.5"
//             ></a-entity>
//           </a-entity>
//           <a-entity
//             id="userreg"
//             material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
//             geometry="primitive: plane; width: 5; height: 1.1"
//             position="-23.13553 -14.725 -71.35983"
//             rotation="0 -177.911 0"
//             scale="2.656 2.656 2.656"
//             // onClick={handleLobbyClick}
//             event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
//             event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
//           >
//             <a-entity
//               text-geometry="value: User Registration"
//               material="color: red; shader: flat;"
//               position="1.408 -0.092 -0.082"
//               rotation="-180 1.150 -180"
//               scale="0.5 0.5 0.5"
//             ></a-entity>
//           </a-entity>
//           <a-entity
//             id="paymentmethod"
//             material="shader: flat; color:black; side: double; transparent: true; opacity: 0.5"
//             geometry="primitive: plane; width: 5; height: 1.1"
//             position="-23.13553 -18.143 -71.35983"
//             rotation="0 -177.911 0"
//             scale="2.656 2.656 2.656"
//             // onClick={handleLobbyClick}
//             event-set__mouseenter="_event: mouseenter; material.opacity: 0.7"
//             event-set__mouseleave="_event: mouseleave; material.opacity: 0.5"
//           >
//             <a-entity
//               text-geometry="value: Payment Method"
//               material="color: red; shader: flat;"
//               position="1.408 -0.092 -0.082"
//               rotation="-180 1.150 -180"
//               scale="0.5 0.5 0.5"
//             ></a-entity>
//           </a-entity>
//         </a-entity> */}
//         <a-entity
//           //LobbyDoor
//           id="#smartgate"
//           material="shader: flat; color:#86d6e2; side: double; transparent: true; opacity: 0.5;"
//           geometry="primitive: cylinder; radius: 40; height: 23.9; open-ended: true; theta-start: 142.5; theta-length: 40"
//           position="-99.08677 -20.10092 122.78598"
//           rotation="0 -212.78 0"
//           scale="2.65625 2.65625 2.65625"
//           onClick={handleLobbyClick}
//           event-set__mouseenter="_event: mouseenter; material.opacity: 0.5"
//           event-set__mouseleave="_event: mouseleave; material.opacity: 0"
//         ></a-entity>

//         <a-light light="type: ambient"></a-light>
//         <button className="logout" onClick={logoutHandler}>
//           Logout
//         </button>
//       </Scene>
//     </div>
//   );
// }

// export default AppDemonstration;


function AppDemonstration() {

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
  const [playNextAssets, setPlayNextAssests] = useState(false);
  const [isyHandRaise,setIsyHandRaised]=useState(false);
  const dropDownTriggerRef=useRef(null);
  const dropDownOptionsRef=useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const buttonVideoRef=useRef(null);
  const arrowRef=useRef(null);
  const onboardingRef=useRef(null);
  const paymentAcceptanceRef=useRef(null);
  const dashboardRef=useRef(null);
  const refundRef=useRef(null);
  const esyRef=useRef(null);
  const animationButtonRef=useRef(null);
  const phoneAssetRef=useRef(null);
  const [esyAnimation,setEsyAnimation]=useState("");
  const recPayVid1Ref=useRef(null);
  const recPayVid2Ref=useRef(null);
  const recPayVid3Ref=useRef(null);
  const previousBtnRef=useRef(null);
  const esyhandRef=useRef(null)
  localStorage.setItem('lastVisitedPage', window.location.href);
  useEffect(() => {
    // Simulating page load after 3 seconds
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const videos = document.getElementsByTagName("video");
    const button=buttonVideoRef.current;
    // const recpayVid1=recPayVid1Ref.current;
    // const recpayVid2=recPayVid2Ref.current;
    // const recpayVid3=recPayVid3Ref.current;
    // const button = document.getElementById("buttonvideo");
    const arrowVideo=arrowRef.current;
    // const arrowVideo = document.getElementById("arrow");
    arrowVideo.muted = true;
    button.muted = true;
    // recpayVid1.muted=true;
    // recpayVid2.muted=true;
    // recpayVid3.muted=true;
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      // Do something with each div element
      if(!mute){
        video.play();
      }
      
    }
    button.play();
  }, [mute]);
  useEffect(() => {
    const handleClick = (event) => {
      // Handle the click event
      setMute(false);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  // const video=subsVideoRef.current
  // console.log(video.duration)
  const currentPhoneAsset =
    assetJson[currentDivision].phoneAssets[currentPhoneAssetIndex];
  const currentPhoneImage =
    assetJson[currentDivision].phoneImages[currentPhoneImageIndex];
  
  // console.log(currentPhoneAsset);
  // useEffect(()=>{
  //   if ((currentPhoneAssetIndex===1 && currentDivision==="nullAssets") || (currentPhoneAssetIndex===1 && currentDivision==="nullAssets1")) {
  //     setIsyHandRaised(true)
  //     console.log(currentPhoneAssetIndex)
  //   } else {
  //     setIsyHandRaised(false)
  //   }
  //   console.log("currentPhoneAssetIndex:",currentPhoneAssetIndex,"currentDivision:",currentDivision,"currentPhoneAsset.name:",currentPhoneAsset.name)
  //   console.log("Isy hand raised",isyHandRaise)
  // },[currentPhoneAsset, currentDivision, currentPhoneAssetIndex])
  //  console.log("currentPhoneAssetIndex:",currentPhoneAssetIndex,"currentDivision:",currentDivision,"currentPhoneAsset.name:",currentPhoneAsset.name)
   console.log("Isy hand raised",isyHandRaise)
  useEffect(() => {
    const video = subsVideoRef.current;
    const audio = subsAudioRef.current;
    const esy=esyRef.current;
    const esyHand=esyhandRef.current;
    // const esy = document.getElementById("esy");
    if (!mute) {
      audio.muted = false;
    }
    if (mute) {
      audio.muted = true;
    }

    // const handleVideoPlay = () => {
    //   // esy.setAttribute(
    //   //   "animation-mixer",
    //   //   "clip:;loop:repeat;repetitions:Infinity;"
    //   // );
    //   console.log("esy animation nigga",esy.getAttribute("animation-mixer"))
    //   if (currentDivision==="nullAssets" && currentPhoneAssetIndex===1  ) {
    //     esy.setAttribute(
    //       "animation-mixer",
    //       // "clip:Animation;loop:once;repetitions:1;"
    //       "clip:Animation;loop:once;repetitions:1;"
    //     );
    //   } 
    //   if(currentDivision==="nullAssets1" && currentPhoneAssetIndex===1  ){
    //     esy.setAttribute(
    //       "animation-mixer",
    //       // "clip:Animation;loop:once;repetitions:1;"
    //       "clip:Animation;loop:once;repetitions:1;"
    //     );
    //   }else if((currentDivision!=="nullAssets" && currentPhoneAssetIndex!==1) || (currentDivision!=="nullAssets1" && currentPhoneAssetIndex!==1)) {
    //     esy.setAttribute(
    //       "animation-mixer",
    //       "clip:;loop:repeat;repetitions:Infinity;"
    //     );
    //   }
    //   if (!audio.paused && audio.currentTime < video.currentTime) {
    //     audio.currentTime = video.currentTime;
    //   } else if (!mute) {
    //     audio.play();
    //     audio.muted = false;
    //   }
    // };
    if(video.paused){
      esy.removeAttribute("animation-mixer");
    }
    const handleVideoPlay = () => {
      // esy.setAttribute(
      //   "animation-mixer",
      //   "clip:;loop:repeat;repetitions:Infinity;"
      // );
        if (currentDivision==="nullAssets" && currentPhoneAssetIndex===1  ) {
          esyHand.setAttribute(
            "animation-mixer",
            // "clip:Animation;loop:once;repetitions:1;"
            "clip:Animation;loop:once;repetitions:1;"
          );
        } 
        if(currentDivision==="nullAssets1" && currentPhoneAssetIndex===1  ){
          esyHand.setAttribute(
            "animation-mixer",
            // "clip:Animation;loop:once;repetitions:1;"
            "clip:Animation;loop:once;repetitions:1;"
          );
        }else if((currentDivision!=="nullAssets" && currentPhoneAssetIndex!==1) || (currentDivision!=="nullAssets1" && currentPhoneAssetIndex!==1)) {
          esy.setAttribute(
            "animation-mixer",
            "clip:;loop:repeat;repetitions:Infinity;"
          );
        }
      }
      if (currentDivision==="nullAssets" && currentPhoneAssetIndex===1  ) {
        esyHand.setAttribute(
          "animation-mixer",
          // "clip:Animation;loop:once;repetitions:1;"
          "clip:Animation;loop:once;repetitions:1;"
        );
      } 
      if(currentDivision==="nullAssets1" && currentPhoneAssetIndex===1  ){
        esyHand.setAttribute(
          "animation-mixer",
          // "clip:Animation;loop:once;repetitions:1;"
          "clip:Animation;loop:once;repetitions:1;"
        );
      }else if((currentDivision!=="nullAssets" && currentPhoneAssetIndex!==1) || (currentDivision!=="nullAssets1" && currentPhoneAssetIndex!==1)) {
        esy.setAttribute(
          "animation-mixer",
          "clip:;loop:repeat;repetitions:Infinity;"
        );
      
      if (!audio.paused && audio.currentTime < video.currentTime) {
        audio.currentTime = video.currentTime;
      } else if (!mute) {
        audio.play();
        audio.muted = false;
      }
    };


    const handleVideoPause = () => {
      if (!video.paused && !audio.paused) {
        audio.pause();
        esy.removeAttribute("animation-mixer");
        esyHand.removeAttribute("animation-mixer");
      }

    };
    const handleAudioLoadedMetadata = () => {
      // Handle loaded metadata for the subsAudio element
      if (!mute) {
        audio.play();
      }
      const duration = audio.duration;
      console.log("Audio duration:", duration);
    };
    const handleVideoEnded = () => {
      esy.removeAttribute("animation-mixer");
      esyHand.removeAttribute("animation-mixer");
      audio.pause();
    };

    video.addEventListener("play", handleVideoPlay);
    video.addEventListener("pause", handleVideoPause);
    audio.addEventListener("loadedmetadata", handleAudioLoadedMetadata);
    video.addEventListener("loadedmetadata", handleAudioLoadedMetadata); // Added event listener to subsVideoRef as well
    video.addEventListener("ended", handleVideoEnded);
    return () => {
      video.removeEventListener("play", handleVideoPlay);
      video.removeEventListener("pause", handleVideoPause);
      audio.removeEventListener("loadedmetadata", handleAudioLoadedMetadata);
      video.removeEventListener("loadedmetadata", handleAudioLoadedMetadata); // Removed event listener for subsVideoRef
    };
  }, [subsVideoRef, subsAudioRef, mute, currentDivision, currentPhoneAssetIndex]);// added new dependecies currentDivison and currentPhoneAssetIndex 13Sep2023

  const video = subsVideoRef.current;
  const audio = subsAudioRef.current;
  
 
  // useEffect(()=>{
  //   const dropdownTrigger = dropDownTriggerRef.current;
  //   const dropdownOptions = dropDownOptionsRef.current;
  //   dropdownTrigger.addEventListener("click", function() {
  //     dropdownOptions.classList.toggle("active");
  //     console.log(dropdownOptions.className)
  //   });
  //  console.log(dropdownOptions.className)
  //   document.addEventListener("click", function(event) {
  //     if (!dropdownTrigger.contains(event.target) && !dropdownOptions.contains(event.target)) {
  //       dropdownOptions.classList.remove("active");
  //       console.log(dropdownOptions.className)
  //     }
  //   });
  // },[])
  const handleDropdownClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
    if(isDropdownOpen){
      dropDownOptionsRef.current.classList.toggle("active");
    }
    else{
      dropDownOptionsRef.current.classList.remove("active");
    }
  };
 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !dropDownTriggerRef.current.contains(event.target) && !dropDownOptionsRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        dropDownOptionsRef.current.classList.remove("active");
      }
    };

    document.addEventListener("click", handleClickOutside);
    

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(()=>{
    const esy=esyRef.current;
    const esyHand=esyhandRef.current;
    // const esy=document.getElementById("esy");
    const onboarding=onboardingRef.current;
    // const onboarding=document.getElementById("onboarding");
    const paymentAcceptance=paymentAcceptanceRef.current;
    // const paymentAcceptance=document.getElementById("payment-acceptance");
    const dashboard=dashboardRef.current;
    // const dashboard=document.getElementById("dashboard");
    const refund=refundRef.current;
    // const refund=document.getElementById("refund");
    if(currentDivision==="nullAssets" && currentPhoneAssetIndex===1){
      setIsDropdownOpen(true)
      setIsyHandRaised(true)
      setEsyAnimation("clip:;loop:once;repetitions:1; timeScale: 0.5;");
      esyHand.setAttribute("animation-mixer","clip:Animation;loop:once;repetitions:1; timeScale: 0.5;");
      setTimeout(()=>{
        dropDownOptionsRef.current.classList.add("active");
              //  esy.setAttribute("animation-mixer","clip:;loop:repeat;repetitions:Infinity; timeScale: 0.5;");
               onboarding.classList.add("blink-button");
      },5500)  //earlier 2500 changes on 05-09-2023
      
      
      }
      if(currentPhoneAssetIndex===1 && currentDivision==="nullAssets1"){
        setIsDropdownOpen(true)
        setIsyHandRaised(true)
        esyHand.setAttribute("animation-mixer","clip:Animation;loop:once;repetitions:1; timeScale: 0.5;");
        setTimeout(()=>{
          dropDownOptionsRef.current.classList.add("active");
                //  esy.setAttribute("animation-mixer","clip:;loop:false;repetitions:1; timeScale: 0.5;");
                 paymentAcceptance.classList.add("blink-button");
        },3500)
      }
    else{
      esy.setAttribute("animation-mixer","clip:;loop:repeat;repetitions:Infinity;");
        setIsDropdownOpen(false);
        setIsyHandRaised(false);
        onboarding.classList.remove("blink-button");
        paymentAcceptance.classList.remove("blink-button");
        console.log(" is dropdown closed:",isDropdownOpen)
      }
      console.log("is drop down open:",isDropdownOpen)
  },
  //[currentDivision,currentPhoneAssetIndex] 
  //latest dependency array drop down dint open while using it
   [currentDivision,currentPhoneAssetIndex] //console.log() requires unecessary dependencies
  )

  //Instead of giving empty src to videos try giving video with nothing in it
  // Helper function to handle transition between assets
  
  const openPopup = () => {
    setIsPopupOpen(true);
    setPlayNextAssests(false);
    return;
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPlayNextAssests(true);
    console.log(playNextAssets);
    setCurrentDivision("apploading");//11Sep2023
  };
  useEffect(()=>{
    const skipBtn = skipBtnRef.current;
    const buttonEntity=animationButtonRef.current;
    const video=subsVideoRef.current;
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
      }
      else{
        setExtrasVisible(false);
      }
      buttonEntity.setAttribute("visible", "false");
      
    };
  const delayBindingTimeout = setTimeout(() => {
    skipBtn.style.pointerEvents = "auto"; // Enable click events after a delay
    skipBtn.addEventListener("click", handleSkipClick);
  }, 2500);
    const loadNextAssets = (currentAssets, cacheBuster) => {
      const videoSrc = currentAssets.phoneAssets[0].video;
      const audioSrc = currentAssets.phoneAssets[0].audio;
      // document.querySelector('#phone-img').components.material.material.map.dispose();//05-09-2023
      //   document.querySelector('#phone-video').components.material.material.map.dispose();//05-09-2023
      video.src = videoSrc + "?cache=" + cacheBuster;
  
      video.addEventListener("loadedmetadata", () => {
        video.play();
  
        if (!audio.paused && audio.currentTime < video.currentTime) {
          audio.currentTime = video.currentTime;
        } else {
          audio.play();
        }
      });
    };
    const handleSkipClick = async() => {
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
      buttonEntity.setAttribute("visible", "true");

      // Check if the skip button is clickable (exceeds division length)
      if (
        nextDivisionIndex === 0 &&
        currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
      ) {
        // Last division and last asset loaded, prevent skip
        buttonEntity.setAttribute("visible", "false");
      }
    }, 2500);

    setCurrentDivision(divisions[nextDivisionIndex]);
    setCurrentPhoneAssetIndex(0); // Reset the asset index
    setCurrentPhoneImageIndex(0); // Reset the image index

    loadNextAssets(currentAssets, cacheBuster);
    setTimeout(() => {
      handleTransition(currentAssets);
      setTimeout(() => {
        // Set visibility after the transition
        buttonEntity.setAttribute("visible", "true");
      },video.duration*1000);// earlier it was 2500 today changed to video.duration 1Sep2023
    }, 2500);
    
  };
  skipBtn.removeEventListener("click", handleSkipClick);
  skipBtn.addEventListener("click", handleSkipClick);
  const delay = async (milliseconds) => {   //usded to delay nextDivision Loading for appintro
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
    return () => {
      clearTimeout(delayBindingTimeout);
      skipBtn.removeEventListener("click", handleSkipClick);
      console.log("Event listener removed");
    };
  },[audio, currentDivision,  currentPhoneAssetIndex, lastSkipTime, video])
  
  useEffect(()=>{
    const previousBtn = previousBtnRef.current;
    const buttonEntity=animationButtonRef.current;
    const video=subsVideoRef.current;
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
      }
      else{
        setExtrasVisible(false);
      }
      buttonEntity.setAttribute("visible", "false");
      
    };
  const delayBindingTimeout = setTimeout(() => {
    previousBtn.style.pointerEvents = "auto"; // Enable click events after a delay
    previousBtn.addEventListener("click", handlePreviousClick);
  }, 2500);
    const loadPreviousAssets = (currentAssets, cacheBuster) => {
      const videoSrc = currentAssets.phoneAssets[0].video;
      const audioSrc = currentAssets.phoneAssets[0].audio;
      // document.querySelector('#phone-img').components.material.material.map.dispose();//05-09-2023
      //   document.querySelector('#phone-video').components.material.material.map.dispose();//05-09-2023
      video.src = videoSrc + "?cache=" + cacheBuster;
  
      video.addEventListener("loadedmetadata", () => {
        video.play();
  
        if (!audio.paused && audio.currentTime < video.currentTime) {
          audio.currentTime = video.currentTime;
        } else {
          audio.play();
        }
      });
    };
    const handlePreviousClick = async() => {
      previousBtn.style.pointerEvents = "none";
    const divisions = Object.keys(assetJson);
    const currentDivisionIndex = divisions.indexOf(currentDivision);
    let nextDivisionIndex; 
    const currentAssets = assetJson[divisions[nextDivisionIndex]];
    const cacheBuster = new Date().getTime();
    
    if(currentDivision==="paymentmethod"||currentDivision==="appintro"){
      nextDivisionIndex=(currentDivisionIndex - 2) % divisions.length;
    }
    else{
      nextDivisionIndex=(currentDivisionIndex - 1) % divisions.length;
    }
    // Check if the last division is loaded
    // if (
    //   nextDivisionIndex === 0 &&
    //   currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
    // ) {
    //   // Last division and last asset loaded, prevent skip
    //   return;
    // }

    // Check if enough time has passed since the last skip
    if (Date.now() - lastSkipTime < 2500) {
      // Less than 5 seconds since the last skip, prevent skip
      return;
    }

    // Set the last skip time to the current time
    setLastSkipTime(Date.now());

    buttonEntity.setAttribute("visible", "false"); // Hide the skip button

    // setTimeout(() => {
    //   // Show the skip button after 5 seconds
    //   buttonEntity.setAttribute("visible", "true");

    //   // Check if the skip button is clickable (exceeds division length)
    //   if (
    //     nextDivisionIndex === 0 &&
    //     currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
    //   ) {
    //     // Last division and last asset loaded, prevent skip
    //     buttonEntity.setAttribute("visible", "false");
    //   }
    // }, 2500);

    setCurrentDivision(divisions[nextDivisionIndex]);
    setCurrentPhoneAssetIndex(0); // Reset the asset index
    setCurrentPhoneImageIndex(0); // Reset the image index

    loadPreviousAssets(currentAssets, cacheBuster);
    setTimeout(() => {
      handleTransition(currentAssets);
      setTimeout(() => {
        // Set visibility after the transition
        buttonEntity.setAttribute("visible", "true");
      },video.duration*1000);// earlier it was 2500 today changed to video.duration 1Sep2023
    }, 2500);
    
  };
  previousBtn.removeEventListener("click", handlePreviousClick);
  previousBtn.addEventListener("click", handlePreviousClick);
  const delay = async (milliseconds) => {   //usded to delay nextDivision Loading for appintro
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
    return () => {
      clearTimeout(delayBindingTimeout);
      previousBtn.removeEventListener("click", handlePreviousClick);
      console.log("Event listener removed");
    };
  },[audio, currentDivision,  currentPhoneAssetIndex, lastSkipTime, video])
  

  useEffect(()=>{
    const buttonEntity=animationButtonRef.current;
    const onboarding=onboardingRef.current;
    // const onboarding=document.getElementById("onboarding");
    const paymentAcceptance=paymentAcceptanceRef.current;
    // const paymentAcceptance=document.getElementById("payment-acceptance");
    const dashboard=dashboardRef.current;
    // const dashboard=document.getElementById("dashboard");
    const refund=refundRef.current;
    // const refund=document.getElementById("refund");
    const video=subsVideoRef.current;
    const handleTransition = (currentAssets) => {
      setCurrentPhoneAssetIndex(0);
      setCurrentPhoneImageIndex(0);
      setAnimationClicked(false);
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
    const loadNextAssets = (currentAssets) => { //earlier it was (currentAssets,cacheBuster)
      const videoSrc = currentAssets.phoneAssets[0].video;
      const audioSrc = currentAssets.phoneAssets[0].audio;
      // document.querySelector('#phone-img').components.material.material.map.dispose();//05-09-2023
      //   document.querySelector('#phone-video').components.material.material.map.dispose();//05-09-2023
      // video.src = videoSrc + "?cache=" + cacheBuster;
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play();
  
        if (!audio.paused && audio.currentTime < video.currentTime) {
          audio.currentTime = video.currentTime;
        } else {
          audio.play();
        }
      });
    };
    const handleDivisionButtonClick = async(event) => {

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
        buttonEntity.setAttribute("visible", "true");

        // Check if the skip button is clickable (exceeds division length)
        if (
          nextDivisionIndex === 0 &&
          currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
        ) {
          // Last division and last asset loaded, prevent skip
          buttonEntity.setAttribute("visible", "false");
        }
      }, 2500);
      setCurrentDivision(event.target.getAttribute("data-value"));
      setIsDropdownOpen(false)
      setCurrentPhoneAssetIndex(0); // Reset the asset index
      setCurrentPhoneImageIndex(0); // Reset the image index

      loadNextAssets(currentAssets, cacheBuster);

      setTimeout(() => {
        handleTransition(currentAssets);
        buttonEntity.setAttribute("visible", "false");//09-5-2023
        setTimeout(() => {
          // Set visibility after the transition
          buttonEntity.setAttribute("visible", "true");
        }, video.duration*1000);  //2500
      }, 2500);
    };
    onboarding.addEventListener("click",handleDivisionButtonClick);
    paymentAcceptance.addEventListener("click",handleDivisionButtonClick);
    dashboard.addEventListener("click",handleDivisionButtonClick);
    refund.addEventListener("click",handleDivisionButtonClick);
    return () => {  
    onboarding.removeEventListener("click",handleDivisionButtonClick);
    paymentAcceptance.removeEventListener("click",handleDivisionButtonClick);
    dashboard.removeEventListener("click",handleDivisionButtonClick);
    refund.removeEventListener("click",handleDivisionButtonClick);
      console.log("Event listener removed");
    };
  },[audio, currentDivision, currentPhoneAssetIndex, lastSkipTime, video])
  useEffect(() => {
    const video = subsVideoRef.current;
    const audio = subsAudioRef.current;
    const buttonEntity=animationButtonRef.current;
    // const buttonEntity = document.querySelector("#animation-button");
    // const appLoadingBtn = document.getElementById("apploading");
    // const appDemoBtn = document.getElementById("appintro");
    // const userRegBtn = document.getElementById("userreg");
    // const paymethodBtn = document.getElementById("paymentmethod");
    // const smartDropdown = document.getElementById("smart-app-dropdown");
    // smartDropdown.size = smartDropdown.options.length;
    // smartDropdown.style.height="250px";
    // setExtrasVisible(false);
    // const arrowEntity=document.getElementById("arrow-entity")
    // arrowEntity.setAttribute("visible","false")
     // Disable click events initially

    

    video.addEventListener("loadedmetadata", () => {
      setVideoDuration(video.duration);
    });

    const handleVideoEnded = () => {
      buttonEntity.setAttribute("visible", "true");
    };

    const handleVideoPlay = () => {
      buttonEntity.setAttribute("visible", "false");

      if (!audio.paused && audio.currentTime < video.currentTime) {
        audio.currentTime = video.currentTime;
      } else {
        audio.play();
      }
    };

    const handleVideoPause = () => {
      if (!video.paused && !audio.paused) {
        audio.pause();
      }
      
    };
    video.addEventListener("ended", handleVideoEnded);
    video.addEventListener("play", handleVideoPlay);
    video.addEventListener("pause", handleVideoPause);
    const handleClick = async () => {
      buttonEntity.setAttribute("visible", "false");
      buttonEntity.removeEventListener("click", handleClick);
      if (pageLoaded) {
        // const phoneAsset=phoneAssetRef.current;
        const phoneAsset = document.querySelector("#phone-asset");
        if (phoneAsset) {
          console.log(phoneAsset.getAttribute("animation-mixer"));
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
        const videoSrc = currentAssets.phoneAssets[nextVideoIndex].video;
        const audioSrc = currentAssets.phoneAssets[nextVideoIndex].audio;
        // document.querySelector('#phone-img').components.material.material.map.dispose();//05-09-2023
        // document.querySelector('#phone-video').components.material.material.map.dispose();//05-09-2023
        video.src = videoSrc + "?cache=" + cacheBuster;

        video.addEventListener("loadedmetadata", () => {
          video.play();
          // setExtrasVisible(true)
          // if(currentDivision==="rtpmethod"){
          //   arrowEntity.setAttribute("visible",true);
          //    if(currentPhoneAssetIndex===0){
          //   arrowEntity.setAttribute("visible",true);
          // }
          // }

          if (!audio.paused && audio.currentTime < video.currentTime) {
            audio.currentTime = video.currentTime;
          } else {
            audio.play();
          }
        });
      };

      const handleTransition = () => {
        // if (
        //   currentDivision === divisions[divisions.length - 1] &&
        //   nextPhoneAssetIndex === 0
        // ) {
        //   // Last division and last asset loaded
        //   setAssetsVisible(false);

        //   console.log(assetsVisible);
        //   // setTimeout(()=>{
        //   //   setAssetsVisible(false);
        //   //   console.log(assetsVisible)
        //   // } 2500)
        // } else {
        setCurrentPhoneAssetIndex(nextPhoneAssetIndex);
        setCurrentPhoneImageIndex(nextPhoneImageIndex);
        setAnimationClicked(false);
        setExtrasVisible(false);
        //document.querySelector('#phone-img').components.material.material.map.dispose();//05-09-2023
        //document.querySelector('#phone-video').components.material.material.map.dispose();//05-09-2023
        // document.querySelector('#phone-asset').components.material.material.map.dispose();//06-09-2023  
        // document.querySelector('#phone-img').components.material.material.textureCach.dispose();//05-09-2023
        // document.querySelector('#phone-video').components.material.material.textureCach.dispose(); //05-09-2023
        // document.querySelector('Scene').systems.material.textureCache.dispose();//05-09-2023 did nothing special consider rechecking
        // if (
        //   currentDivision === "rtpmethod" ||
        //   currentDivision === "refundprocess"
        // ) {
        //   setExtrasVisible(true);
        // } else {
        //   setExtrasVisible(false);
        // }

        // arrowEntity.setAttribute("visible",false);
        buttonEntity.addEventListener("click", handleClick);
        console.log("Event listener added");
        buttonEntity.removeEventListener("click", handleClick);
        console.log("Event listener removed");
        buttonEntity.setAttribute("visible", "true");
        // }
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
          
        if (nextDivisionIndex === divisions.length-1) {  //nextDivisionIndex === 0 && nextPhoneAssetIndex === 0
          // JSON iteration completed

          setTimeout(() => {
            openPopup();
          }, 2500);
          // if (playNextAssets) {
          //   setCurrentDivision(nextDivision);
          //   setCurrentPhoneAssetIndex(0); // Reset the asset index
          //   setCurrentPhoneImageIndex(0); // Reset the image index

          //   loadNextAssets();
          //   console.log(playNextAssets);
          // }
          console.log(playNextAssets);
        }
          //   if (nextDivisionIndex === 2) {
          //     await delay(5000); // Wait for 5 seconds when nextDivisionIndex is 1
          //  }
        // if (
        //   currentDivision === "rtpmethod" ||
        //   currentDivision === "refundprocess"
        // ) {
        //   setExtrasVisible(true);
        //   // arrowEntity.setAttribute("visible",true);
        //   if (currentPhoneAssetIndex === 0) {
        //     // arrowEntity.setAttribute("visible",true);
        //     setExtrasVisible(true);
        //   } else {
        //     setExtrasVisible(false);
        //   }
        // }
        setTimeout(() => {
          setCurrentDivision(nextDivision);
          setCurrentPhoneAssetIndex(0); // Reset the asset index
          setCurrentPhoneImageIndex(0); // Reset the image index

          loadNextAssets();
        }, 2500);
      }

      setTimeout(handleTransition, 2500);
    };

    buttonEntity.removeEventListener("click", handleClick);
    console.log("Event listener removed");
    buttonEntity.addEventListener("click", handleClick);
    console.log("Event listener added");
    
  //   const toggleDropDown=(event)=>{
  //     if (!dropdownTrigger.contains(event.target) && !dropdownOptions.contains(event.target)) {
  //       dropdownOptions.classList.remove("active");
  //       console.log(dropdownOptions.className)
  //     }
  //       dropdownOptions.classList.toggle("active");
  //     console.log(dropdownOptions.className)
      
  //   }
  //   dropdownTrigger.addEventListener("click", function() {
  //     dropdownOptions.classList.toggle("active");
  //     console.log(dropdownOptions.className)
  //   });
  //  console.log(dropdownOptions.className)
    // document.addEventListener("click", function(event) {
    //   if (!dropdownTrigger.contains(event.target) && !dropdownOptions.contains(event.target)) {
    //     dropdownOptions.classList.remove("active");
    //     console.log(dropdownOptions.className)
    //   }
    // });
    // const dropdownOptionElements = document.querySelectorAll(".dropdown-option");
    if((currentDivision==="nullAssets" && currentPhoneAssetIndex===1)|| (currentPhoneAssetIndex===1 && currentDivision==="nullAssets1")){
      setIsDropdownOpen(true);
      }
    else{
        setIsDropdownOpen(false);
      }
    return () => {
      video.removeEventListener("loadedmetadata", () => {
        setVideoDuration(video.duration);
      });
      video.removeEventListener("ended", handleVideoEnded);
      video.removeEventListener("play", handleVideoPlay);
      video.removeEventListener("pause", handleVideoPause);
      buttonEntity.removeEventListener("click", handleClick);
      // appLoadingBtn.removeEventListener("click", handleDivisionButtonClick);
      // appDemoBtn.removeEventListener("click", handleDivisionButtonClick);
      // userRegBtn.removeEventListener("click", handleDivisionButtonClick);
      // paymethodBtn.removeEventListener("click", handleDivisionButtonClick);
      // smartDropdown.removeEventListener("change", handleDivisionButtonClick);
      // dropdownOptionElements.forEach(function(option) {
      //   option.removeEventListener("click",handleDivisionButtonClick 
      //   );
      // });
    //   onboarding.removeEventListener("click",handleDivisionButtonClick);
    // paymentAcceptance.removeEventListener("click",handleDivisionButtonClick);
    // dashboard.removeEventListener("click",handleDivisionButtonClick);
    // refund.removeEventListener("click",handleDivisionButtonClick);
      console.log("Event listener removed");
    };
  }, [pageLoaded, currentPhoneAssetIndex, currentDivision, currentPhoneImageIndex, assetsVisible, lastSkipTime,playNextAssets,      //updated dependecy might experinece some functionality changes because of it
    //  loadNextAssets, handleTransition, 
    ]);
    console.log(currentPhoneAsset.imagePath)
  // Hide the animation button initially
//   useEffect(()=>{
//     const entity = document.querySelector('a-entity');
// const modelComponent = entity.components['gltf-model']; // Get the model component

// if (modelComponent) {
//   const model = modelComponent.model;

//   if (model) {
//     // Dispose of any resources associated with the model
//     if (model.animations) {
//       model.animations.length = 0;
//     }
//     model.traverse((node) => {
//       if (node instanceof THREE.Mesh) {
//         node.material.dispose();
//         node.material.map.dispose();
//       }
//     });
//     document.getElementsByTagName("Scene").remove(model); // Remove the model from the scene
//   }
// }
//   })
  
  useEffect(() => {
    const buttonEntity=animationButtonRef.current;
    // const buttonEntity = document.querySelector("#animation-button");
    buttonEntity.setAttribute("visible", "false");
  }, []);
  // Set the visibility attribute of the animation button based on the state
  // const buttonVisibilityAttribute = currentPhoneAssetIndex === 0 ? "true" : "false";

  // const handleLoadedMetadata = () => {
  //   const video = subsVideoRef.current;
  //   const audio=subsAudioRef.current
  //   if (!video || !audio) return;
  //   setVideoDuration(video.duration);
  //   setAudioDuration(audio.duration);
  // };
  // console.log(videoDuration);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.muted = true;
  //   }
  // }, []);

  const handleLobbyClick = (event) => {
    event.stopPropagation();
    navigate("/panorama");
    console.log("panorama button clicked"); // Replace "/your-route" with the desired path
  };
  const handleSmartmerchantClick = (event) => {
    event.stopPropagation();
    navigate("/smartmerchant");
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
  
  // useEffect(() => {
  //   const phoneAsset = document.getElementById("phone-asset");
  //   if (animationClicked) {
  //     phoneAsset.setAttribute("animation-mixer", {
  //       clip: currentPhoneAsset.animation,
  //       loop: "repeat",
  //       repetitions: Infinity,
  //       crossFadeDuration: 0.3,
  //     });
  //   } else {
  //     phoneAsset.removeAttribute("animation-mixer");
  //   }
  // }, [currentPhoneAsset, animationClicked]);
  // console.log(animationClicked);
  // const handleAnimationClick = () => {
  //   setAnimationClicked(!animationClicked);

  //   // Change assets after 5 seconds
  //   setTimeout(() => {
  //     setCurrentPhoneAssetIndex((prevIndex) => {
  //       const nextIndex = (prevIndex + 1) % assetJson.phoneAssets.length;
  //       return nextIndex;
  //     });

  //     setCurrentPhoneImageIndex((prevIndex) => {
  //       const nextIndex = (prevIndex + 1) % assetJson.phoneImages.length;
  //       return nextIndex;
  //     });

  //     // Enable animation
  //     if (pageLoaded) {
  //       const phoneAsset = document.querySelector('#phone-asset');
  //       if (phoneAsset) {
  //         phoneAsset.setAttribute('animation-mixer', {
  //           clip: currentPhoneAsset.animation,
  //           loop: 'repeat',
  //           repetitions: Infinity,
  //         });
  //       }
  //     }
  //   }, 2500); // Wait for 5 seconds before changing assets and enabling animation

  //   console.log(currentPhoneAsset.animation, pageLoaded);
  //};
  // console.log(mute);
  return (
    <div className="scene-container" onClick={() => setMute(false)}>
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
            <button className="appdemo-popup-btn" onClick={handleLobbyClick}>Back to lobby</button>{" "}
            <button className="appdemo-popup-btn" onClick={closePopup}>Cancel</button>
          </div>
        </div>
      </Popup>
      {/* <select
        defaultValue=""
        className="smart-dropdown"
        id="smart-app-dropdown"
      >
        <option value="none" disabled>
          Select Demo
        </option>
        <option value="apploading">App Installation</option>
        <option value="appintro">App Introduction</option>
        <option value="userreg">User Registration</option>
        <option value="paymentmethod">Payment Method</option>
        <option value="rtpmethod">RTP Method</option>
        <option value="recpay">Records/Payments</option>
        <option value="datahandling">Data Handling</option>
        <option value="refundprocess">Refund process</option>
      </select> */}
  <div class="smart-dropdown">
    <div id="dropdown-trigger" ref={dropDownTriggerRef} class="smart-dropdown" onClick={handleDropdownClick}>Select Demo</div>
      <div id="dropdown-options" ref={dropDownOptionsRef} class="dropdown-options">
        {/* <div class="dropdown-option" data-value="apploading">App Installation</div> */}
        <div id="onboarding" ref={onboardingRef} class="dropdown-option option-odd" data-value="appintro">Onboarding</div>
        {/* <div class="dropdown-option" data-value="userreg">User Registration</div> */}
        <div id="payment-acceptance" ref={paymentAcceptanceRef} class="dropdown-option option-even" data-value="paymentmethod">Payment Acceptance</div>
        {/* <div class="dropdown-option" data-value="rtpmethod">RTP</div> */}
        <div id="dashboard" class="dropdown-option option-odd"  ref={dashboardRef} data-value="recpay">Dashboard</div>
        {/* <div class="dropdown-option" data-value="datahandling">Data Handling</div> */}
        <div id="refund" class="dropdown-option option-even" ref={refundRef} data-value="refundprocess">Refund</div>
        <div id="smartmerchant" class="dropdown-option option-odd" data-value="refundprocess" onClick={handleSmartmerchantClick}>Smartmerchant Intro</div>

      </div>
     </div> 
      <video
        src={currentPhoneAsset.subsVideo.audio}
        ref={subsAudioRef}
        controls={false}
        preload="auto"
        className="demo-subs subs-audio audio-element"
      />
       {/* <audio ref={subsAudioRef} src={currentPhoneAsset.subsVideo.audio} controls={false} preload="auto" className="demo-subs subs-audio audio-element"/> */}
      {/* <button className="demo-play-btn" onClick={handlePlayBtnClick}>Play</button> */}
      <div className="demo-subs-container">  
         <button className="next-video-btn next-btn" ref={skipBtnRef}
         style={{ display:  currentDivision!=="refundprocess"? 'block' : 'none' }}> {/*added class for overididng style */}
          Skip
        </button>
          <button className="previous-video-btn" ref={previousBtnRef}  //used to go to the previous division
           style={{ display:  currentDivision!=="apploading"? 'block' : 'none' }}
          >
          Previous
        </button>
        <button className="next-video-btn lobby-btn next-btn" onClick={handleLobbyClick}
        style={{ display:  currentDivision==="refundprocess" && currentPhoneAssetIndex===2? 'block' : 'none' }}  //used to go to the previous division
          >
          Back to Lobby
        </button>
        
        <div className="demo-subs-main-container">
          <video
            id="subsVideo"
            ref={subsVideoRef}
            src={currentPhoneAsset.subsVideo.videoElement}
            // onLoadedMetadata={handleLoadedMetadata}
            type="video/webm"
            muted
            controls={false}
            preload="auto"
            className="demo-subs"
            // style={{display: "none"}}
          />
          <div className="next-button-container"></div>
        </div>
        {/* <video
          src={currentPhoneAsset.subsVideo.audio}
          ref={subsAudioRef}
          type="video/webm"
          controls={false}
          preload="auto"
          className="demo-subs subs-audio"
        /> */}
      </div>
      <Scene
        light="defaultLightsEnabled: false"
        inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe@d52af46565230a33c0fa23e045fb74e877df7dc9/dist/aframe-master.min.js"
        cursor="rayOrigin: mouse"
        // raycaster="objects: [data-clickable]; far: 100"
        onWheel={handleZoom}
        wasd-controls="false"
        className="scene"
        ref={sceneRef}
        vr-mode-ui={{ enabled: true }}
        // onEnterVR={handleEnterVR}
        renderer={"antialias: true; physicallyCorrectLights: true; "}
        embedded={true}
      >
        <a-entity id="camera-rig" position="0 0 0" ref={cameraRotationRef}>
        <a-entity
             id="camera"
            rotation="0 -40 0"
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
             camera-rotation-limit="minRotation:-25; maxRotation: -20;"
             
             // looklimited
          >
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
          gltf-model={paymentMethod}
          scale="0.5 0.5 0.5"
          rotation="-68.85348415646128 -169.53248200125927 -12.258432026823963"
          position="-0.1445 -1.86661 -2.86936"
          // shadow="cast:true;"
          animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
        /> */}
            {assetsVisible && (
              <>
                {/* <a-entity
                lazy="true"
                  id="phone-asset"
                  useRef={phoneAssetRef}
                  gltf-model={currentPhoneAsset.imagePath}
                  scale={`${currentPhoneAsset.scale.x} ${currentPhoneAsset.scale.y} ${currentPhoneAsset.scale.z}`}
                  position={`${currentPhoneAsset.position.x} ${currentPhoneAsset.position.y} ${currentPhoneAsset.position.z}`}
                  rotation={`${currentPhoneAsset.rotation.x} ${currentPhoneAsset.rotation.y} ${currentPhoneAsset.rotation.z}`}
                  // shadow="cast:true;"
                  {...(animationClicked && {
                    "animation-mixer": `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:1;`,
                  })}
                  // animation-mixer={animationClicked ? `clip:${currentPhoneAsset.animation};loop:repeat;repetitions:Infinity;` : ""}
                /> */}

                <a-entity
                lazy="true"
                  id="phone-asset"
                  useRef={phoneAssetRef}
                  gltf-model={appHandSingle}
                  scale={currentPhoneAsset.imagePath.includes("app_hand_single")?`${currentPhoneAsset.scale.x} ${currentPhoneAsset.scale.y} ${currentPhoneAsset.scale.z}`:`0 0 0`}
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
                  scale={currentPhoneAsset.imagePath.includes("app_hand_card_single")?`${currentPhoneAsset.scale.x} ${currentPhoneAsset.scale.y} ${currentPhoneAsset.scale.z}`:`0 0 0`}
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
                  scale={currentPhoneAsset.imagePath.includes("app_hand_pan_single")?`${currentPhoneAsset.scale.x} ${currentPhoneAsset.scale.y} ${currentPhoneAsset.scale.z}`:`0 0 0`}
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
                  material={`shader: flat;  alphaTest:0.5; src:${currentPhoneImage.phoneImg.imagePath};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.phoneImg.position.x} ${currentPhoneImage.phoneImg.position.y} ${currentPhoneImage.phoneImg.position.z}`}
                  rotation={`${currentPhoneImage.phoneImg.rotation.x} ${currentPhoneImage.phoneImg.rotation.y} ${currentPhoneImage.phoneImg.rotation.z}`}
                  scale={`${currentPhoneImage.phoneImg.scale.x} ${currentPhoneImage.phoneImg.scale.y} ${currentPhoneImage.phoneImg.scale.z}`}
                ></a-entity>
                
                
                {/* <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${qrcode};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("Qrcode")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${appimg2};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("appLoadingImg2")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${appimg3};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("appLoadingImg3")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>

                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${appintro1};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("appIntroImg1")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${appintro2};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("appIntroImg2")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${appintro3};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("appIntroImg3")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${appintro4};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("appIntroImg4")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${appintro5};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("appIntroImg5")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>

                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${userregimg1};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("userregImg1")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${userregimg2};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("userregImg2")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${userregimg3};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("userregImg3")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>

                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${paymentmethodimg1};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("paymentMethodImg1")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${paymentmethodimg2};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("paymentMethodImg2")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${paymentmethodimg3};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("paymentMethodImg3")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${paymentmethodimg4};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("paymentMethodImg4")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${paymentmethodimg5};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("paymentMethodImg5")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${paymentmethodimg6};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("paymentMethodImg6")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${paymentmethodimg7};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("paymentMethodImg7")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>

                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${rtpimg1};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("rtpImg1")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${rtpimg2};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("rtpImg2")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${rtpimg3};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("rtpImg3")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${rtpimg4};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("rtpImg4")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
 
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:#recpayVid1;   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("recpayVid1")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity> 
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:#recpayVid2;    transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("recpayVid2")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity> 
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:#recpayVid3;    transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("recpayVid3")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>

                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${refundimg1};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("refundImg1")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${refundimg2};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("refundImg2")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity>
                <a-entity
                lazy="true"
                  id="phone-img"
                  material={`shader: flat;  alphaTest:0.5; src:${refundimg3};   transparent: true;`}
                  geometry={`primitive: plane; width:${currentPhoneImage.width}; height:${currentPhoneImage.height}`}
                  position={`${currentPhoneImage.position.x} ${currentPhoneImage.position.y} ${currentPhoneImage.position.z}`}
                  rotation={`${currentPhoneImage.rotation.x} ${currentPhoneImage.rotation.y} ${currentPhoneImage.rotation.z}`}
                  scale={currentPhoneImage.imagePath.includes("refundImg3")?`${currentPhoneImage.scale.x} ${currentPhoneImage.scale.y} ${currentPhoneImage.scale.z}`:`0 0 0`}
                ></a-entity> */}
                {/* {currentDivision === "recpay" && (
                  <a-entity
                    id="phone-video"
                    material={`shader: flat; alphaTest: 0.5; src:${currentPhoneImage.imagePath}; transparent: true;`}
                    geometry="primitive: plane; width: 2; height: 3.8"
                    position="-0.10769 -0.0083 -0.7636"
                    rotation="-2.3073010409918253 4.6564280010282 -1.7647100090029355"
                    scale="0.11844 0.1355 0.12"
                  ></a-entity>
                )} */}
                 <a-entity id="phone-video-in" 
                 material={`shader: flat; alphaTest: 0.5; src: ${currentPhoneAsset.phoneScreenIn.imagepath}; transparent: true`}  
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
                        scale={(currentDivision === "paymentmethod" && currentPhoneAssetIndex===3) || (currentDivision === "refundprocess" && currentPhoneAssetIndex===2)?`3 3 3`:`0 0 0`}
                        rotation="-46.78658763479276 -10.097808181385629 8.462013676287128"
                        position="-0.36309 -3.12602 0.50687"
                        animation-mixer="clip: Animation"
                      ></a-entity>

                      {/* <a-entity id="arrow-entity" material={`shader: flat; color: white; transparent: true; src:#arrow `} geometry="primitive: plane; width: 5.45; height: 2.96"  position="-0.65925 0.12821 -1.37255"rotation="0.9241809235460178 -12.21488723439402 -2.7146740333298403" scale="0.21033 0.21033 0.21033"></a-entity> */}
                    </>
                  
                {/* {currentDivision === "refundprocess" &&
                  currentPhoneAsset.imagePath.includes("refund") &&
                  extrasVisible && (
                    <a-entity
                      id="rtp-phone"
                      gltf-model={rtpmobile}
                      scale="3 3 3"
                      rotation="-46.78658763479276 -10.097808181385629 8.462013676287128"
                      position="-0.36309 -3.12602 0.50687"
                      animation-mixer="clip: Animation"
                    ></a-entity>
                  )} */}
                {((currentDivision === "paymentmethod" && currentPhoneAssetIndex===3) || (currentDivision === "refundprocess" && currentPhoneAssetIndex===2)) &&
                (
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

            {/* <a-entity gltf-model="/static/media/apploading1.a488ca6605b75d157548.glb" scale="0.034 0.034 0.034" rotation="-68.60367455778425 -172.40758421722575 -9.044711753935175" position="-0.40232 -2.49204 -4.23453" animation-mixer="clip: Animation"></a-entity> */}
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

        <a-assets lazy="true">
          <img id="tv-border" src={tvImg} alt="" />
          <video
            className="displayVideo"
            ref={arrowRef}
            id="arrow"
            preload="auto"
            src={arrow}
            width="1920"
            height="1080"
            loop="true"
            crossOrigin="anonymous"
            playsInline=""
            webkit-playsinline=""
          ></video>

          {/* {console.log("currentPhoneImage.name:", currentPhoneImage.name)}
          {console.log(
            "currentPhoneImage.imagePath:",
            currentPhoneImage.imagePath
          )} */}
          {/* <video
            ref={recPayVid1Ref}
            className="videos"
            id="recpayVid1"
            preload="auto"
            src={recpayvideo1}
            width="1920"
            height="1080"
            autoplay="true"
            loop="true"
            crossOrigin="anonymous"
            playsInline=""
            webkit-playsinline=""
          ></video>
          <video
            ref={recPayVid2Ref}
            className="videos"
            id="recpayVid2"
            preload="auto"
            src={recpayvideo2}
            width="1920"
            height="1080"
            autoplay="true"
            loop="true"
            crossOrigin="anonymous"
            playsInline=""
            webkit-playsinline=""
          ></video>
          <video
            ref={recPayVid3Ref}
            className="videos"
            id="recpayVid3"
            preload="auto"
            src={recpayvideo3}
            width="1920"
            height="1080"
            autoplay="true"
            loop="true"
            crossOrigin="anonymous"
            playsInline=""
            webkit-playsinline=""
          ></video> */}

          <video
            ref={buttonVideoRef}
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

          {/* <audio id="isyintro" src={isyintro} preload="auto"></audio> */}

          <img id="smartm" src={smartmerchant} alt="" />
        </a-assets>
       
        {/* <a-entity gltf-model="/static/media/PaymentMethod.757d3a356cfe1cec9709.glb" scale="0.5 0.5 0.5" rotation="-1.0364806513916591 -177.40205731738115 0.2859059397702808" position="-0.07352 -2.84768 0.05947" animation-mixer="clip: Animation"></a-entity> */}
        {/* <a-entity position="-0.14076 -3.07192 0.82356" gltf-model="/static/media/PaymentMethod.757d3a356cfe1cec9709.glb" scale="0.5 0.5 0.5" rotation="10.3 2500000000001 138.48389908311995 -10.957817831876994" animation-mixer="clip: Animation"></a-entity> */}
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
        <Entity primitive="a-sky" src={smartmerchant} rotation="0 -130 0" />
        <a-sky color="#ECECEC" scale="3 3 3"></a-sky>
        <Entity primitive="a-sky" color="#ECECEC" scale="3 3 3" />
        {/* <a-entity id="ambient" light="type: ambient; intensity:0.2;"></a-entity> */}
        {/* <a-entity
          id="directional"
          light="type: directional; castShadow:true; intensity:1;  position:0 20 0; color:#FFFFFF"
        ></a-entity> */}
        {/* <a-assets>
                    <a-asset-item id="appHandSingle" src={appHandSingle}></a-asset-item>
                    <a-asset-item id="appHandCardSingle" src={appHandCardSingle}></a-asset-item>
                    <a-asset-item id="appHandPanSingle" src={appHandPanSingle}></a-asset-item>
        </a-assets> */}
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

        {/* <a-entity
          gltf-model={paymentMethod}
          position="1.8 0 -2"
          scale="0.5 0.5 0.5"
          rotation="10.325 -34.608 -10.958."
          // shadow="cast:true;"
          animation-mixer="clip:Animation;loop:repeat;repetitions:Infinity;"
        /> */}

        {/* <a-entity
          gltf-model={(currentDivision==="nullAssets"&& currentPhoneAssetIndex===1)||(currentDivision==="nullAssets1"&& currentPhoneAssetIndex===1)?esyHand:esy}
          id="esy"
          ref={esyRef}
          position="1.959 -6.000 -15.915"
          scale="0.18 0.18 0.18"
          rotation="0 -8.586  0"
          shadow="cast:true; receive:false;"
          // animation-mixer="clip:;loop:repeat;repetitions:Infinity;"
        /> */}
        <a-entity lazy="true"
          gltf-model={esy}
          id="esy"
          ref={esyRef}
          position="1.959 -6.000 -15.915"
          scale={(currentDivision==="nullAssets"&& currentPhoneAssetIndex===1)||(currentDivision==="nullAssets1"&& currentPhoneAssetIndex===1)?"0 0 0":" 0.18 0.18 0.18"}
          rotation="0 -8.586  0"
          shadow="cast:true; receive:false;"
          // animation-mixer="clip:;loop:repeat;repetitions:Infinity;"
        />
        <a-entity lazy="true"
          gltf-model={esyHand}
          id="esy"
          ref={esyhandRef}
          position="1.959 -6.000 -15.915"
          scale={(currentDivision==="nullAssets"&& currentPhoneAssetIndex===1)||(currentDivision==="nullAssets1"&& currentPhoneAssetIndex===1)?" 0.18 0.18 0.18":"0 0 0"}
          rotation="0 -8.586  0"
          shadow="cast:true; receive:false;"
          // animation-mixer="clip:;loop:repeat;repetitions:Infinity;"
        />
        {/* <a-entity
          id="menu"
          position="25.861 11.406 28.091"
          rotation="0 25.281 0"
        >
          <a-entity
            id="apploading"
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
            id="appintro"
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
            id="userreg"
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
            id="paymentmethod"
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
        </a-entity> */}
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
        <button className=" app-demo-logout logout-position" onClick={logoutHandler}>
          Logout
        </button>
      </Scene>
    </div>
  );
}

export default AppDemonstration;


// The second  iteration (since new changes are made)useEffect used for the handling next set assests

// useEffect(() => {
//   const video = subsVideoRef.current;
//   const audio = subsAudioRef.current;
//   const skipBtn = skipBtnRef.current;
//   const buttonEntity = document.querySelector("#animation-button");
//   // const appLoadingBtn = document.getElementById("apploading");
//   // const appDemoBtn = document.getElementById("appintro");
//   // const userRegBtn = document.getElementById("userreg");
//   // const paymethodBtn = document.getElementById("paymentmethod");
//   const smartDropdown = document.getElementById("smart-app-dropdown");

//   setExtrasVisible(false);
//   // const arrowEntity=document.getElementById("arrow-entity")
//   // arrowEntity.setAttribute("visible","false")
//   skipBtn.style.pointerEvents = "none"; // Disable click events initially

//   const delayBindingTimeout = setTimeout(() => {
//     skipBtn.style.pointerEvents = "auto"; // Enable click events after a delay
//     skipBtn.addEventListener("click", handleSkipClick);
//   }, 2500);

//   video.addEventListener("loadedmetadata", () => {
//     setVideoDuration(video.duration);
//   });

//   const handleVideoEnded = () => {
//     buttonEntity.setAttribute("visible", "true");
//   };

//   const handleVideoPlay = () => {
//     buttonEntity.setAttribute("visible", "false");

//     if (!audio.paused && audio.currentTime < video.currentTime) {
//       audio.currentTime = video.currentTime;
//     } else {
//       audio.play();
//     }
//   };

//   const handleVideoPause = () => {
//     if (!video.paused && !audio.paused) {
//       audio.pause();
//     }
//   };

//   video.addEventListener("ended", handleVideoEnded);
//   video.addEventListener("play", handleVideoPlay);
//   video.addEventListener("pause", handleVideoPause);

//   const handleSkipClick = () => {
//     const divisions = Object.keys(assetJson);
//     const currentDivisionIndex = divisions.indexOf(currentDivision);
//     const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//     const currentAssets = assetJson[divisions[nextDivisionIndex]];
//     const cacheBuster = new Date().getTime();

//     // Check if the last division is loaded
//     if (
//       nextDivisionIndex === 0 &&
//       currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//     ) {
//       // Last division and last asset loaded, prevent skip
//       return;
//     }

//     // Check if enough time has passed since the last skip
//     if (Date.now() - lastSkipTime < 2500) {
//       // Less than 5 seconds since the last skip, prevent skip
//       return;
//     }

//     // Set the last skip time to the current time
//     setLastSkipTime(Date.now());

//     buttonEntity.setAttribute("visible", "false"); // Hide the skip button

//     setTimeout(() => {
//       // Show the skip button after 5 seconds
//       buttonEntity.setAttribute("visible", "true");

//       // Check if the skip button is clickable (exceeds division length)
//       if (
//         nextDivisionIndex === 0 &&
//         currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//       ) {
//         // Last division and last asset loaded, prevent skip
//         buttonEntity.setAttribute("visible", "false");
//       }
//     }, 2500);

//     setCurrentDivision(divisions[nextDivisionIndex]);
//     setCurrentPhoneAssetIndex(0); // Reset the asset index
//     setCurrentPhoneImageIndex(0); // Reset the image index

//     loadNextAssets(currentAssets, cacheBuster);
//     setTimeout(() => {
//       handleTransition(currentAssets);
//       setTimeout(() => {
//         // Set visibility after the transition
//         buttonEntity.setAttribute("visible", "true");
//       }, 2500);
//     }, 2500);
//   };
//   skipBtn.removeEventListener("click", handleSkipClick);
//   skipBtn.addEventListener("click", handleSkipClick);

//   const handleClick = () => {
//     buttonEntity.setAttribute("visible", "false");
//     buttonEntity.removeEventListener("click", handleClick);
//     if (pageLoaded) {
//       const phoneAsset = document.querySelector("#phone-asset");
//       if (phoneAsset) {
//         console.log(phoneAsset.getAttribute("animation-mixer"));
//         setAnimationClicked(true);
//       } else {
//         setAnimationClicked(false);
//       }
//     } else {
//       setAnimationClicked(false);
//     }

//     const divisions = Object.keys(assetJson);
//     const currentDivisionIndex = divisions.indexOf(currentDivision);
//     const currentAssets = assetJson[currentDivision];
//     const currentPhoneAssetsLength = currentAssets.phoneAssets.length;
//     const currentPhoneImagesLength = currentAssets.phoneImages.length;
//     let nextPhoneAssetIndex =
//       (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
//     let nextPhoneImageIndex =
//       (currentPhoneImageIndex + 1) % currentPhoneImagesLength;
//     const cacheBuster = new Date().getTime();

//     const loadNextAssets = () => {
//       const nextVideoIndex =
//         (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
//       const videoSrc = currentAssets.phoneAssets[nextVideoIndex].video;
//       const audioSrc = currentAssets.phoneAssets[nextVideoIndex].audio;
//       video.src = videoSrc + "?cache=" + cacheBuster;

//       video.addEventListener("loadedmetadata", () => {
//         video.play();
//         // setExtrasVisible(true)
//         // if(currentDivision==="rtpmethod"){
//         //   arrowEntity.setAttribute("visible",true);
//         //    if(currentPhoneAssetIndex===0){
//         //   arrowEntity.setAttribute("visible",true);
//         // }
//         // }

//         if (!audio.paused && audio.currentTime < video.currentTime) {
//           audio.currentTime = video.currentTime;
//         } else {
//           audio.play();
//         }
//       });
//     };

//     const handleTransition = () => {
//       if (
//         currentDivision === divisions[divisions.length - 1] &&
//         nextPhoneAssetIndex === 0
//       ) {
//         // Last division and last asset loaded
//         setAssetsVisible(false);

//         console.log(assetsVisible);
//         // setTimeout(()=>{
//         //   setAssetsVisible(false);
//         //   console.log(assetsVisible)
//         // } 2500)
//       } else {
//         setCurrentPhoneAssetIndex(nextPhoneAssetIndex);
//         setCurrentPhoneImageIndex(nextPhoneImageIndex);
//         setAnimationClicked(false);
//         setExtrasVisible(false);
//         if (
//           currentDivision === "rtpmethod" ||
//           currentDivision === "refundprocess"
//         ) {
//           setExtrasVisible(true);
//         } else {
//           setExtrasVisible(false);
//         }

//         // arrowEntity.setAttribute("visible",false);
//         buttonEntity.addEventListener("click", handleClick);
//         console.log("Event listener added");
//         buttonEntity.removeEventListener("click", handleClick);
//         console.log("Event listener removed");
//         buttonEntity.setAttribute("visible", "true");
//       }
//     };

//     // Check if all assets in the current division are loaded
//     if (nextPhoneAssetIndex !== 0) {
//       loadNextAssets();
//       if (
//         currentDivision === "rtpmethod" ||
//         currentDivision === "refundprocess"
//       ) {
//         setExtrasVisible(true);
//         // arrowEntity.setAttribute("visible",true);
//         if (currentPhoneAssetIndex === 0) {
//           // arrowEntity.setAttribute("visible",true);
//           setExtrasVisible(true);
//         }
//         // else{
//         //     setExtrasVisible(false);
//         // }
//       }
//     } else {
//       const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//       const nextDivision = divisions[nextDivisionIndex];

//       if (nextDivisionIndex === 0 && nextPhoneAssetIndex === 0) {
//         // JSON iteration completed
//         if (
//           currentDivision === "rtpmethod" ||
//           currentDivision === "refundprocess"
//         ) {
//           setExtrasVisible(true);
//           // arrowEntity.setAttribute("visible",true);
//           if (currentPhoneAssetIndex === 0) {
//             // arrowEntity.setAttribute("visible",true);
//             setExtrasVisible(true);
//           } else {
//             setExtrasVisible(false);
//           }
//         }
//         setTimeout(() => {
//           setAssetsVisible(false);
//           video.style.display = "none";
//           audio.removeAttribute("src");
//           console.log(assetsVisible);
//         }, 2500);
//         return;
//       }
//       setTimeout(() => {
//         setCurrentDivision(nextDivision);
//         setCurrentPhoneAssetIndex(0); // Reset the asset index
//         setCurrentPhoneImageIndex(0); // Reset the image index

//         loadNextAssets();
//       }, 2500);
//     }

//     setTimeout(handleTransition, 2500);
//   };

//   buttonEntity.removeEventListener("click", handleClick);
//   console.log("Event listener removed");
//   buttonEntity.addEventListener("click", handleClick);
//   console.log("Event listener added");

//   const handleDivisionButtonClick = (event) => {
//     const selectedDivision=event.target.value;
//     const divisions = Object.keys(assetJson);
//     const currentDivisionIndex = divisions.indexOf(currentDivision);
//     const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//     const currentAssets = assetJson[divisions[nextDivisionIndex]];
//     const cacheBuster = new Date().getTime();

//     // Check if the last division is loaded
//     if (
//       nextDivisionIndex === 0 &&
//       currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//     ) {
//       // Last division and last asset loaded, prevent skip
//       return;
//     }

//     // Check if enough time has passed since the last skip
//     if (Date.now() - lastSkipTime < 2500) {
//       // Less than 5 seconds since the last skip, prevent skip
//       return;
//     }

//     // Set the last skip time to the current time
//     setLastSkipTime(Date.now());

//     buttonEntity.setAttribute("visible", "false"); // Hide the skip button

//     setTimeout(() => {
//       // Show the skip button after 5 seconds
//       buttonEntity.setAttribute("visible", "true");

//       // Check if the skip button is clickable (exceeds division length)
//       if (
//         nextDivisionIndex === 0 &&
//         currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//       ) {
//         // Last division and last asset loaded, prevent skip
//         buttonEntity.setAttribute("visible", "false");
//       }
//     }, 2500);

//     setCurrentDivision(event.target.value);
//     setCurrentPhoneAssetIndex(0); // Reset the asset index
//     setCurrentPhoneImageIndex(0); // Reset the image index

//     loadNextAssets(currentAssets, cacheBuster);

//     setTimeout(() => {
//       handleTransition(currentAssets);
//       setTimeout(() => {
//         // Set visibility after the transition
//         buttonEntity.setAttribute("visible", "true");
//       }, 2500);
//     }, 2500);
//   };
//   // appLoadingBtn.addEventListener("click", handleDivisionButtonClick);
//   // appDemoBtn.addEventListener("click", handleDivisionButtonClick);
//   // userRegBtn.addEventListener("click", handleDivisionButtonClick);
//   // paymethodBtn.addEventListener("click", handleDivisionButtonClick);
//   smartDropdown.addEventListener("change", handleDivisionButtonClick);
//   // appLoadingBtn.removeEventListener("click", handleDivisionButtonClick);
//   // appDemoBtn.removeEventListener("click", handleDivisionButtonClick);
//   // userRegBtn.removeEventListener("click", handleDivisionButtonClick);
//   // paymethodBtn.removeEventListener("click", handleDivisionButtonClick);

//   return () => {
//     video.removeEventListener("loadedmetadata", () => {
//       setVideoDuration(video.duration);
//     });
//     video.removeEventListener("ended", handleVideoEnded);
//     video.removeEventListener("play", handleVideoPlay);
//     video.removeEventListener("pause", handleVideoPause);
//     buttonEntity.removeEventListener("click", handleClick);
//     clearTimeout(delayBindingTimeout);
//     skipBtn.removeEventListener("click", handleSkipClick);
//     // appLoadingBtn.removeEventListener("click", handleDivisionButtonClick);
//     // appDemoBtn.removeEventListener("click", handleDivisionButtonClick);
//     // userRegBtn.removeEventListener("click", handleDivisionButtonClick);
//     // paymethodBtn.removeEventListener("click", handleDivisionButtonClick);
//     smartDropdown.removeEventListener("change", handleDivisionButtonClick);
//     console.log("Event listener removed");
//   };
// }, [
//   pageLoaded,
//   currentPhoneAssetIndex,
//   currentDivision,
//   currentPhoneImageIndex,
//   assetsVisible,
//   lastSkipTime,
//   // handleTransition,loadNextAssets
// ]);





// High priority useEffect of handleClick,handelDvsionClikc andhandelSkipClick September 1 2023 latest
// useEffect(() => {
//   const video = subsVideoRef.current;
//   const audio = subsAudioRef.current;
//   const skipBtn = skipBtnRef.current;
//   const buttonEntity=animationButtonRef.current;
//   // const buttonEntity = document.querySelector("#animation-button");
//   // const appLoadingBtn = document.getElementById("apploading");
//   // const appDemoBtn = document.getElementById("appintro");
//   // const userRegBtn = document.getElementById("userreg");
//   // const paymethodBtn = document.getElementById("paymentmethod");
//   // const smartDropdown = document.getElementById("smart-app-dropdown");
//   // smartDropdown.size = smartDropdown.options.length;
//   // smartDropdown.style.height="250px";
//   setExtrasVisible(false);
//   // const arrowEntity=document.getElementById("arrow-entity")
//   // arrowEntity.setAttribute("visible","false")
//   skipBtn.style.pointerEvents = "none"; // Disable click events initially

//   const delayBindingTimeout = setTimeout(() => {
//     skipBtn.style.pointerEvents = "auto"; // Enable click events after a delay
//     skipBtn.addEventListener("click", handleSkipClick);
//   }, 2500);

//   video.addEventListener("loadedmetadata", () => {
//     setVideoDuration(video.duration);
//   });

//   const handleVideoEnded = () => {
//     buttonEntity.setAttribute("visible", "true");
//   };

//   const handleVideoPlay = () => {
//     buttonEntity.setAttribute("visible", "false");

//     if (!audio.paused && audio.currentTime < video.currentTime) {
//       audio.currentTime = video.currentTime;
//     } else {
//       audio.play();
//     }
//   };

//   const handleVideoPause = () => {
//     if (!video.paused && !audio.paused) {
//       audio.pause();
//     }
//   };

//   video.addEventListener("ended", handleVideoEnded);
//   video.addEventListener("play", handleVideoPlay);
//   video.addEventListener("pause", handleVideoPause);

//   const handleSkipClick = () => {
//     const divisions = Object.keys(assetJson);
//     const currentDivisionIndex = divisions.indexOf(currentDivision);
//     const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//     const currentAssets = assetJson[divisions[nextDivisionIndex]];
//     const cacheBuster = new Date().getTime();

//     // Check if the last division is loaded
//     if (
//       nextDivisionIndex === 0 &&
//       currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//     ) {
//       // Last division and last asset loaded, prevent skip
//       return;
//     }

//     // Check if enough time has passed since the last skip
//     if (Date.now() - lastSkipTime < 2500) {
//       // Less than 5 seconds since the last skip, prevent skip
//       return;
//     }

//     // Set the last skip time to the current time
//     setLastSkipTime(Date.now());

//     buttonEntity.setAttribute("visible", "false"); // Hide the skip button

//     setTimeout(() => {
//       // Show the skip button after 5 seconds
//       buttonEntity.setAttribute("visible", "true");

//       // Check if the skip button is clickable (exceeds division length)
//       if (
//         nextDivisionIndex === 0 &&
//         currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//       ) {
//         // Last division and last asset loaded, prevent skip
//         buttonEntity.setAttribute("visible", "false");
//       }
//     }, 2500);

//     setCurrentDivision(divisions[nextDivisionIndex]);
//     setCurrentPhoneAssetIndex(0); // Reset the asset index
//     setCurrentPhoneImageIndex(0); // Reset the image index

//     loadNextAssets(currentAssets, cacheBuster);
//     setTimeout(() => {
//       handleTransition(currentAssets);
//       setTimeout(() => {
//         // Set visibility after the transition
//         buttonEntity.setAttribute("visible", "true");
//       }, 2500);
//     }, 2500);
//   };
//   skipBtn.removeEventListener("click", handleSkipClick);
//   skipBtn.addEventListener("click", handleSkipClick);

//   const delay = async (milliseconds) => {   //usded to delay nextDivision Loading for appintro
//     return new Promise(resolve => setTimeout(resolve, milliseconds));
//   };

//   const handleClick = async () => {
//     buttonEntity.setAttribute("visible", "false");
//     buttonEntity.removeEventListener("click", handleClick);
//     if (pageLoaded) {
//       // const phoneAsset=phoneAssetRef.current;
//       const phoneAsset = document.querySelector("#phone-asset");
//       if (phoneAsset) {
//         console.log(phoneAsset.getAttribute("animation-mixer"));
//         setAnimationClicked(true);
//       } else {
//         setAnimationClicked(false);
//       }
//     } else {
//       setAnimationClicked(false);
//     }

//     const divisions = Object.keys(assetJson);
//     const currentDivisionIndex = divisions.indexOf(currentDivision);
//     const currentAssets = assetJson[currentDivision];
//     const currentPhoneAssetsLength = currentAssets.phoneAssets.length;
//     const currentPhoneImagesLength = currentAssets.phoneImages.length;
//     let nextPhoneAssetIndex =
//       (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
//     let nextPhoneImageIndex =
//       (currentPhoneImageIndex + 1) % currentPhoneImagesLength;
//     const cacheBuster = new Date().getTime();

//     const loadNextAssets = () => {
//       const nextVideoIndex =
//         (currentPhoneAssetIndex + 1) % currentPhoneAssetsLength;
//       const videoSrc = currentAssets.phoneAssets[nextVideoIndex].video;
//       const audioSrc = currentAssets.phoneAssets[nextVideoIndex].audio;
//       video.src = videoSrc + "?cache=" + cacheBuster;

//       video.addEventListener("loadedmetadata", () => {
//         video.play();
//         // setExtrasVisible(true)
//         // if(currentDivision==="rtpmethod"){
//         //   arrowEntity.setAttribute("visible",true);
//         //    if(currentPhoneAssetIndex===0){
//         //   arrowEntity.setAttribute("visible",true);
//         // }
//         // }

//         if (!audio.paused && audio.currentTime < video.currentTime) {
//           audio.currentTime = video.currentTime;
//         } else {
//           audio.play();
//         }
//       });
//     };

//     const handleTransition = () => {
//       // if (
//       //   currentDivision === divisions[divisions.length - 1] &&
//       //   nextPhoneAssetIndex === 0
//       // ) {
//       //   // Last division and last asset loaded
//       //   setAssetsVisible(false);

//       //   console.log(assetsVisible);
//       //   // setTimeout(()=>{
//       //   //   setAssetsVisible(false);
//       //   //   console.log(assetsVisible)
//       //   // } 2500)
//       // } else {
//       setCurrentPhoneAssetIndex(nextPhoneAssetIndex);
//       setCurrentPhoneImageIndex(nextPhoneImageIndex);
//       setAnimationClicked(false);
//       setExtrasVisible(false);
//       if (
//         currentDivision === "rtpmethod" ||
//         currentDivision === "refundprocess"
//       ) {
//         setExtrasVisible(true);
//       } else {
//         setExtrasVisible(false);
//       }

//       // arrowEntity.setAttribute("visible",false);
//       buttonEntity.addEventListener("click", handleClick);
//       console.log("Event listener added");
//       buttonEntity.removeEventListener("click", handleClick);
//       console.log("Event listener removed");
//       buttonEntity.setAttribute("visible", "true");
//       // }
//     };

//     // Check if all assets in the current division are loaded
//     if (nextPhoneAssetIndex !== 0) {
//       loadNextAssets();
//       if (
//         currentDivision === "rtpmethod" ||
//         currentDivision === "refundprocess"
//       ) {
//         setExtrasVisible(true);
//         // arrowEntity.setAttribute("visible",true);
//         if (currentPhoneAssetIndex === 0) {
//           // arrowEntity.setAttribute("visible",true);
//           setExtrasVisible(true);
//         } else {
//           setExtrasVisible(false);
//         }
//       }
//     } else {
//       const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//       const nextDivision = divisions[nextDivisionIndex];
        
//       if (nextDivisionIndex === 0 && nextPhoneAssetIndex === 0) {
//         // JSON iteration completed

//         setTimeout(() => {
//           openPopup();
//         }, 2500);
//         if (playNextAssets) {
//           setCurrentDivision(nextDivision);
//           setCurrentPhoneAssetIndex(0); // Reset the asset index
//           setCurrentPhoneImageIndex(0); // Reset the image index

//           loadNextAssets();
//           console.log(playNextAssets);
//         }
//         console.log(playNextAssets);
//       }
//         //   if (nextDivisionIndex === 2) {
//         //     await delay(5000); // Wait for 5 seconds when nextDivisionIndex is 1
//         //  }
//       if (
//         currentDivision === "rtpmethod" ||
//         currentDivision === "refundprocess"
//       ) {
//         setExtrasVisible(true);
//         // arrowEntity.setAttribute("visible",true);
//         if (currentPhoneAssetIndex === 0) {
//           // arrowEntity.setAttribute("visible",true);
//           setExtrasVisible(true);
//         } else {
//           setExtrasVisible(false);
//         }
//       }
//       setTimeout(() => {
//         setCurrentDivision(nextDivision);
//         setCurrentPhoneAssetIndex(0); // Reset the asset index
//         setCurrentPhoneImageIndex(0); // Reset the image index

//         loadNextAssets();
//       }, 2500);
//     }

//     setTimeout(handleTransition, 2500);
//   };

//   buttonEntity.removeEventListener("click", handleClick);
//   console.log("Event listener removed");
//   buttonEntity.addEventListener("click", handleClick);
//   console.log("Event listener added");
//  const dropdownTrigger=dropDownTriggerRef.current;
//  const dropdownOptions=dropDownOptionsRef.current;
  
// //   const toggleDropDown=(event)=>{
// //     if (!dropdownTrigger.contains(event.target) && !dropdownOptions.contains(event.target)) {
// //       dropdownOptions.classList.remove("active");
// //       console.log(dropdownOptions.className)
// //     }
// //       dropdownOptions.classList.toggle("active");
// //     console.log(dropdownOptions.className)
    
// //   }
// //   dropdownTrigger.addEventListener("click", function() {
// //     dropdownOptions.classList.toggle("active");
// //     console.log(dropdownOptions.className)
// //   });
// //  console.log(dropdownOptions.className)
//   // document.addEventListener("click", function(event) {
//   //   if (!dropdownTrigger.contains(event.target) && !dropdownOptions.contains(event.target)) {
//   //     dropdownOptions.classList.remove("active");
//   //     console.log(dropdownOptions.className)
//   //   }
//   // });
//   // const dropdownOptionElements = document.querySelectorAll(".dropdown-option");
//   if((currentDivision==="nullAssets" && currentPhoneAssetIndex===1)|| (currentPhoneAsset.name==="nullAsset2" && currentDivision==="nullAssets1")){
//     setIsDropdownOpen(true)
//     }
//   else{
//       setIsDropdownOpen(false)
//     }
//   const onboarding=onboardingRef.current;
//   // const onboarding=document.getElementById("onboarding");
//   const paymentAcceptance=paymentAcceptanceRef.current;
//   // const paymentAcceptance=document.getElementById("payment-acceptance");
//   const dashboard=dashboardRef.current;
//   // const dashboard=document.getElementById("dashboard");
//   const refund=refundRef.current;
//   // const refund=document.getElementById("refund");

//   const handleDivisionButtonClick = (event) => {
//     const selectedDivision = event.target.value;
//     const divisions = Object.keys(assetJson);
//     const currentDivisionIndex = divisions.indexOf(currentDivision);
//     const nextDivisionIndex = (currentDivisionIndex + 1) % divisions.length;
//     const currentAssets = assetJson[divisions[nextDivisionIndex]];
//     const cacheBuster = new Date().getTime();

//     // Check if the last division is loaded
//     if (
//       nextDivisionIndex === 0 &&
//       currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//     ) {
//       // Last division and last asset loaded, prevent skip
//       return;
//     }

//     // Check if enough time has passed since the last skip
//     if (Date.now() - lastSkipTime < 2500) {
//       // Less than 5 seconds since the last skip, prevent skip
//       return;
//     }

//     // Set the last skip time to the current time
//     setLastSkipTime(Date.now());

//     buttonEntity.setAttribute("visible", "false"); // Hide the skip button

//     setTimeout(() => {
//       // Show the skip button after 5 seconds
//       buttonEntity.setAttribute("visible", "true");

//       // Check if the skip button is clickable (exceeds division length)
//       if (
//         nextDivisionIndex === 0 &&
//         currentPhoneAssetIndex === currentAssets.phoneAssets.length - 1
//       ) {
//         // Last division and last asset loaded, prevent skip
//         buttonEntity.setAttribute("visible", "false");
//       }
//     }, 2500);

//     setCurrentDivision(event.target.getAttribute("data-value"));
//     setIsDropdownOpen(false)
//     setCurrentPhoneAssetIndex(0); // Reset the asset index
//     setCurrentPhoneImageIndex(0); // Reset the image index

//     loadNextAssets(currentAssets, cacheBuster);

//     setTimeout(() => {
//       handleTransition(currentAssets);
//       setTimeout(() => {
//         // Set visibility after the transition
//         buttonEntity.setAttribute("visible", "true");
//       }, 2500);
//     }, 2500);
//   };
//   // dropdownOptionElements.forEach(function(option) {
//   //   option.addEventListener("click",handleDivisionButtonClick 
//   //   );
//   // });
//   onboarding.addEventListener("click",handleDivisionButtonClick);
//   paymentAcceptance.addEventListener("click",handleDivisionButtonClick);
//   dashboard.addEventListener("click",handleDivisionButtonClick);
//   refund.addEventListener("click",handleDivisionButtonClick);
//   // appLoadingBtn.addEventListener("click", handleDivisionButtonClick);
//   // appDemoBtn.addEventListener("click", handleDivisionButtonClick);
//   // userRegBtn.addEventListener("click", handleDivisionButtonClick);
//   // paymethodBtn.addEventListener("click", handleDivisionButtonClick);
//   // smartDropdown.addEventListener("change", handleDivisionButtonClick);

//   // appLoadingBtn.removeEventListener("click", handleDivisionButtonClick);
//   // appDemoBtn.removeEventListener("click", handleDivisionButtonClick);
//   // userRegBtn.removeEventListener("click", handleDivisionButtonClick);
//   // paymethodBtn.removeEventListener("click", handleDivisionButtonClick);
// //   dropdownTrigger.removeEventListener("click", function() {
// //     dropdownOptions.classList.toggle("active");
// //     console.log(dropdownOptions.className)
// //   });
// //  console.log(dropdownOptions.className)
// //   document.removeEventListener("click", function(event) {
// //     if (!dropdownTrigger.contains(event.target) && !dropdownOptions.contains(event.target)) {
// //       dropdownOptions.classList.remove("active");
// //       console.log(dropdownOptions.className)
// //     }
// //   });

//   return () => {
//     video.removeEventListener("loadedmetadata", () => {
//       setVideoDuration(video.duration);
//     });
//     video.removeEventListener("ended", handleVideoEnded);
//     video.removeEventListener("play", handleVideoPlay);
//     video.removeEventListener("pause", handleVideoPause);
//     buttonEntity.removeEventListener("click", handleClick);
//     clearTimeout(delayBindingTimeout);
//     skipBtn.removeEventListener("click", handleSkipClick);
//     // appLoadingBtn.removeEventListener("click", handleDivisionButtonClick);
//     // appDemoBtn.removeEventListener("click", handleDivisionButtonClick);
//     // userRegBtn.removeEventListener("click", handleDivisionButtonClick);
//     // paymethodBtn.removeEventListener("click", handleDivisionButtonClick);
//     // smartDropdown.removeEventListener("change", handleDivisionButtonClick);
//     // dropdownOptionElements.forEach(function(option) {
//     //   option.removeEventListener("click",handleDivisionButtonClick 
//     //   );
//     // });
//     onboarding.removeEventListener("click",handleDivisionButtonClick);
//   paymentAcceptance.removeEventListener("click",handleDivisionButtonClick);
//   dashboard.removeEventListener("click",handleDivisionButtonClick);
//   refund.removeEventListener("click",handleDivisionButtonClick);
//     console.log("Event listener removed");
//   };
// }, [pageLoaded, currentPhoneAssetIndex, currentDivision, currentPhoneImageIndex, assetsVisible, lastSkipTime,playNextAssets,      //updated dependecy might experinece some functionality changes because of it
//   //  loadNextAssets, handleTransition, 
//   ]);