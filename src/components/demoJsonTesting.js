import React from 'react'
import appLoading1 from "../SmartMerchantAssets/apploading/apploading1.glb";
import appLoading2 from "../SmartMerchantAssets/apploading/apploadingtwo.glb";
import appLoading3 from "../SmartMerchantAssets/apploading/apploadingthree.glb";
import appLoading4 from "../SmartMerchantAssets/apploading/apploading4.glb";
import appimg1 from "../SmartMerchantAssets/apploading/appimages/appLoadingImg1.png";
import appimg2 from "../SmartMerchantAssets/apploading/appimages/appLoadingImg2.png";
import appimg3 from "../SmartMerchantAssets/apploading/appimages/appLoadingImg3.png";
import appimg4 from "../SmartMerchantAssets/apploading/appimages/appLoadingImg4.png";
// import qrdialog from "../SmartMerchantAssets/videos/Dialogs/qrdialog.webm";
import qrdialog from "../SmartMerchantAssets/videos/Dialogs/qrdialog.webm";
import qrAudio from "../SmartMerchantAssets/videos/Dialogs/qrAudio.mp4";
import buttonvideo from "../videos/circle1.mp4";
import AFRAME from "aframe";
import demoAudio1 from "../SmartMerchantAssets/videos/videoplayback.mp4";
import demoAudio from "../SmartMerchantAssets/videos/demoSpeech1.webm";
import demoTransparent from "../SmartMerchantAssets/videos/dialog2.webm";
import demoTransparent2 from "../SmartMerchantAssets/videos/dialog1.webm";
// import appLoading2Dialog from "../SmartMerchantAssets/videos/Dialogs/Apploading2Dialog.webm";
import appLoading2Dialog from "../SmartMerchantAssets/videos/Dialogs/Apploading2Dialog.webm";
import appLoading2Audio from "../SmartMerchantAssets/videos/Dialogs/apploading2Audio.mp4";
// import appLoading3Dialog from "../SmartMerchantAssets/videos/Dialogs/Apploading3Dialog.webm";
import appLoading3Dialog from "../SmartMerchantAssets/videos/Dialogs/Apploading3Dialog.webm";
import appLoading3Audio from "../SmartMerchantAssets/videos/Dialogs/apploading3Audio.mp4";
// import appIntro1Dialog from "../SmartMerchantAssets/videos/Dialogs/AppIntro1Dialog.webm";
import appIntro1Dialog from "../SmartMerchantAssets/videos/Dialogs/AppIntro1Dialog.webm";
import appIntro1Audio from "../SmartMerchantAssets/videos/Dialogs/AppIntro1Audio.mp4";
// import appIntro2Dialog from "../SmartMerchantAssets/videos/Dialogs/AppIntro2Dialog.webm";
import appIntro2Dialog from "../SmartMerchantAssets/videos/Dialogs/AppIntro2Dialog.webm";
import appIntro2Audio from "../SmartMerchantAssets/videos/Dialogs/AppIntro2Audio.mp4";
import userreg1Dialog from "../SmartMerchantAssets/videos/Dialogs/userreg1Dialog.webm";
import userreg1Audio from "../SmartMerchantAssets/videos/Dialogs/userreg1Audio.mp4";
import userreg2Dialog from "../SmartMerchantAssets/videos/Dialogs/userreg2Dialog.webm";
import userreg2Audio from "../SmartMerchantAssets/videos/Dialogs/userreg2Audio.mp4";
import userreg3Dialog from "../SmartMerchantAssets/videos/Dialogs/userreg3Dialog.webm";
import userreg3Audio from "../SmartMerchantAssets/videos/Dialogs/userreg3Audio.mp4";
import onboarding1Dialog from "../SmartMerchantAssets/videos/Dialogs/onboarding1Dialog.webm";
import onboarding1Audio from "../SmartMerchantAssets/videos/Dialogs/onboarding1Audio.mp4";
import onboarding2Dialog from "../SmartMerchantAssets/videos/Dialogs/onboarding2Dialog.webm";
import onboarding2Audio from "../SmartMerchantAssets/videos/Dialogs/onboarding2Audio.mp4";
import paymentacceptance1Dialog from "../SmartMerchantAssets/videos/Dialogs/paymentacceptance1Dialog.webm";
import paymentacceptance1Audio from "../SmartMerchantAssets/videos/Dialogs/paymentAcceptance1Audio.mp4";
import paymentacceptance2Dialog from "../SmartMerchantAssets/videos/Dialogs/paymentacceptance2Dialog.webm";
import paymentacceptance2Audio from "../SmartMerchantAssets/videos/Dialogs/paymentAcceptance2Audio.mp4";
import paymentmethod1Dialog from "../SmartMerchantAssets/videos/Dialogs/paymentmethod1Dialog.webm";
import paymentmethod1Audio from "../SmartMerchantAssets/videos/Dialogs/payment1Audio.mp4";
import paymentmethod2Dialog from "../SmartMerchantAssets/videos/Dialogs/paymentmethod2Dialog.webm";
import paymentmethod2Audio from "../SmartMerchantAssets/videos/Dialogs/payment2Audio.mp4";
import paymentmethod3Dialog from "../SmartMerchantAssets/videos/Dialogs/paymentmethod3Dialog.webm";
import paymentmethod3Audio from "../SmartMerchantAssets/videos/Dialogs/payment3Audio.mp4";
import paymentmethod4Dialog from "../SmartMerchantAssets/videos/Dialogs/paymentmethod4Dialog.webm";
import paymentmethod4Audio from "../SmartMerchantAssets/videos/Dialogs/payment4Audio.mp4";
import paymentmethod5Dialog from "../SmartMerchantAssets/videos/Dialogs/paymentmethod5Dialog.webm";
import paymentmethod5Audio from "../SmartMerchantAssets/videos/Dialogs/payment5Audio.mp4";
import paymentmethod6Dialog from "../SmartMerchantAssets/videos/Dialogs/paymentmethod6Dialog.webm";
import paymentmethod6Audio from "../SmartMerchantAssets/videos/Dialogs/payment6Audio.mp4";
import paymentmethod7Dialog from "../SmartMerchantAssets/videos/Dialogs/paymentmethod7Dialog.webm";
import paymentmethod7Audio from "../SmartMerchantAssets/videos/Dialogs/payment7Audio.mp4";
import rtp1Dialog from "../SmartMerchantAssets/videos/Dialogs/rtp1Dialog.webm";
import rtp1Audio from "../SmartMerchantAssets/videos/Dialogs/rtp1Audio.mp4";
import rtp2Dialog from "../SmartMerchantAssets/videos/Dialogs/rtp2Dialog.webm";
import rtp2Audio from "../SmartMerchantAssets/videos/Dialogs/rtp2Audio.mp4";
import rtp3Dialog from "../SmartMerchantAssets/videos/Dialogs/rtp3Dialog.webm";
import rtp3Audio from "../SmartMerchantAssets/videos/Dialogs/rtp3Audio.mp4";
import rtp4Dialog from "../SmartMerchantAssets/videos/Dialogs/rtp4Dialog.webm";
import rtp4Audio from "../SmartMerchantAssets/videos/Dialogs/rtp4Audio.mp4";
import recpay1Dialog from "../SmartMerchantAssets/videos/Dialogs/recpay1Dialog.webm";
import recpay1Audio from "../SmartMerchantAssets/videos/Dialogs/recpay1Audio.mp4";
import recpay2Dialog from "../SmartMerchantAssets/videos/Dialogs/recpay2Dialog.webm";
import recpay2Audio from "../SmartMerchantAssets/videos/Dialogs/recpay2Audio.mp4";
import recpay3Dialog from "../SmartMerchantAssets/videos/Dialogs/recpay3Dialog.webm";
import recpay3Audio from "../SmartMerchantAssets/videos/Dialogs/recpay3Audio.mp4";
import refund1Dialog from "../SmartMerchantAssets/videos/Dialogs/refund1Dialog.webm";
import refund1Audio from "../SmartMerchantAssets/videos/Dialogs/refund1Audio.mp4";
import refund2Dialog from "../SmartMerchantAssets/videos/Dialogs/refund2Dialog.webm";
import refund2Audio from "../SmartMerchantAssets/videos/Dialogs/refund2Audio.mp4";
import refund3Dialog from "../SmartMerchantAssets/videos/Dialogs/refund3Dialog.webm";
import refund3Audio from "../SmartMerchantAssets/videos/Dialogs/refund3Audio.mp4";

import qrcode from "../SmartMerchantAssets/apploading/appimages/Qrcode.PNG";
import appintro1 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg1.png";
import appintro2 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg2.png";
import appintro3 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg3.png";
import appintro4 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg4.png";
import appintro5 from "../SmartMerchantAssets/appintro/appintroimages/appIntroImg5.png";
import appintroasset1 from "../SmartMerchantAssets/appintro/appintro1.glb";
import appintroasset2 from "../SmartMerchantAssets/appintro/appintro2.glb";
import appintroasset3 from "../SmartMerchantAssets/appintro/appintro3.glb";
import appintroasset4 from "../SmartMerchantAssets/appintro/appintro4.glb";
import appintroasset5 from "../SmartMerchantAssets/appintro/appintro5.glb";
import appHand from "../SmartMerchantAssets/appintro/app_hand.glb"
import userreg1 from "../SmartMerchantAssets/userreg/userreg1.glb";
import userreg2 from "../SmartMerchantAssets/userreg/userreg2.glb";
import userreg3 from "../SmartMerchantAssets/userreg/userreg3.glb";
import userregimg1 from "../SmartMerchantAssets/userreg/UserRegImages/userregImg1.png";
import userregimg2 from "../SmartMerchantAssets/userreg/UserRegImages/userregImg2.png";
import userregimg3 from "../SmartMerchantAssets/userreg/UserRegImages/userregImg3.png";
import paymentmethod1 from "../SmartMerchantAssets/paymentmethod/paymentmethod1.glb";
import paymentmethod2 from "../SmartMerchantAssets/paymentmethod/paymentmethod2.glb";
import paymentmethod3 from "../SmartMerchantAssets/paymentmethod/paymentmethod3.glb";
import paymentmethod4 from "../SmartMerchantAssets/paymentmethod/paymentmethod4.glb";
import paymentmethod5 from "../SmartMerchantAssets/paymentmethod/paymentmethod5.glb";
import paymentmethod6 from "../SmartMerchantAssets/paymentmethod/paymentmethod6.glb";
import paymentmethod7 from "../SmartMerchantAssets/paymentmethod/paymentmethod7.glb";
import paymentmethodimg1 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg1.png";
import paymentmethodimg2 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg2.png";
import paymentmethodimg3 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg3.png";
import paymentmethodimg4 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg4.png";
import paymentmethodimg5 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg5.png";
import paymentmethodimg6 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg6.png";
import paymentmethodimg7 from "../SmartMerchantAssets/paymentmethod/paymentmethodimg/paymentMethodImg7.png";
import rtpmethod1 from "../SmartMerchantAssets/rtp/rtpmethod1.glb";
import rtpmethod2 from "../SmartMerchantAssets/rtp/rtpmethod2.glb";
import rtpmethod3 from "../SmartMerchantAssets/rtp/rtpmethod3.glb";
import rtpmethod4 from "../SmartMerchantAssets/rtp/rtpmethod4.glb";
import rtpmobile from "../SmartMerchantAssets/rtp/rtpmobile.glb";
import rtpimg1 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg1.png";
import rtpimg2 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg2.png";
import rtpimg3 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg3.png";
import rtpimg4 from "../SmartMerchantAssets/rtp/rtpimages/rtpImg4.png";
import arrow from "../SmartMerchantAssets/videos/arrow.webm";
import recpay from "../SmartMerchantAssets/recordpayment/recpay.glb";
import recpayvideo1 from "../SmartMerchantAssets/recordpayment/recpayVid1.mp4";
import recpayvideo2 from "../SmartMerchantAssets/recordpayment/recpayVid2.mp4";
import recpayvideo3 from "../SmartMerchantAssets/recordpayment/recpayVid3.mp4";
import recpaygif1 from "../SmartMerchantAssets/recordpayment/recpay1.gif";
import datahandling from "../SmartMerchantAssets/datahandling/datahandlingasset.glb";
import datahandlingimg from "../SmartMerchantAssets/datahandling/datahandling.png";
import refundasset1 from "../SmartMerchantAssets/refundprocess/refund1.glb";
import refundasset2 from "../SmartMerchantAssets/refundprocess/refund2.glb";
import refundasset3 from "../SmartMerchantAssets/refundprocess/refund3.glb";
import refundimg1 from "../SmartMerchantAssets/refundprocess/refundImg1.png";
import refundimg2 from "../SmartMerchantAssets/refundprocess/refundImg2.png";
import refundimg3 from "../SmartMerchantAssets/refundprocess/refundImg3.png";
import invisible from "../SmartMerchantAssets/invisible.glb";
import appHandSingle from  "../SmartMerchantAssets/appintro/app_hand_single.glb"
import appHandPanSingle from "../SmartMerchantAssets/userreg/app_hand_pan_single.glb";
import appHandCardSingle from "../SmartMerchantAssets/paymentmethod/app_hand_card_single.glb";
import recpayimg1 from "../SmartMerchantAssets/recordpayment/recpayImg1.png";
import recpayimg2 from "../SmartMerchantAssets/recordpayment/recpayImg2.png";
import recpayimg3 from "../SmartMerchantAssets/recordpayment/recpayImg3.png";
import recpayVidIn1 from "../SmartMerchantAssets/recordpayment/recpayIn1.mp4";
import recpayVidIn2 from "../SmartMerchantAssets/recordpayment/recpayIn2.mp4";
import recpayVidIn3 from "../SmartMerchantAssets/recordpayment/recpayIn3.mp4";
import blankAudio from "../SmartMerchantAssets/videos/Dialogs/blank.mp4";

export  const assetJson = {
    apploading: {
      phoneImages: [
        {
          name: "appimg1",
          imagePath: "",
          buttonPosition: { x: 0.1, y: 0.088 },
          width: 3.8,
          height: 3.8,
          scale:{x: 0, y: 0, z: 0},
          position: { x: 0.00396, y: -0.01997, z: -0.96379 },
          rotation: {
            x: 2.8447354528245374,
            y: -0.4526366581533504,
            z: -0.1753250853100319,
          },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
          subtitles:[
            { "start": 0, "end": 4, "text": "Subtitle 1" },
            { "start": 4, "end": 7, "text": "Subtitle 2" },
            { "start": 7, "end": 14, "text": "Subtitle 3" },
            { "start": 14, "end": 17, "text": "Subtitle 4" },
          ],
        },
        {
          name: "appimg2",
          imagePath: appimg2,
          buttonPosition: { x: 0.642, y: 0.024 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "appimg3",
          imagePath: appimg3,
          buttonPosition: { x: 0.642, y: 0.024 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        // {
        //   name: "appimg4",
        //   imagePath: appimg4,
        //   buttonPosition: { x: 0.664, y: -0.261 },
        //   width:2,
        //   height:3.8,
        //   position:{x:0.65229, y:-0.006, z:-0.98319},
        //   rotation:{x:0.529, y:-8.097, z:0.751}
        // },
      ],
      phoneAssets: [
        {
          name: "apploading1",
          imagePath: invisible,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: qrdialog,
            audio: qrAudio,
          },
        },
        {
          name: "apploading2",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: appLoading2Dialog,
            audio: appLoading2Audio,
          },
        },
        {
          name: "apploading3",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: appLoading3Dialog,
            audio: appLoading3Audio,
          },
        },
        // {
        //   name: "apploading4",
        //   imagePath: appLoading4,
        //   animation: "",
        //   scale: { x: 0.034, y: 0.034, z: 0.034 },
        //   position: { x: -0.97307, y: -3.08774, z: -3.43762 },
        //   rotation: {
        //     x: -61.526499872328316,
        //     y: -169.76051920372137,
        //     z: -0.8416750010471793,
        //   },
        //   subsVideo: {
        //     videoElement: demoTransparent2,
        //     audio: demoAudio,
        //   },
        // },
      ],
    },
    nullAssets: {
      phoneImages: [
        {
          name: "nullImg1",
          imagePath: "",
          buttonPosition: { x: 0.023, y: 0.088 },
          width: 0,
          height: 0,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "nullImg2",
          imagePath: "",
          buttonPosition: { x: -0.706, y: 0.295 },
          width: 0,
          height: 0,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        // {
        //   name: "nullImg3",
        //   imagePath: "",
        //   buttonPosition: { x: -0.75, y: 0.350 },
        //   width: 0,
        //   height: 0,
        //   position: { x: 0.65229, y: -0.006, z: -0.98319 },
        //   rotation: { x: 0.529, y: -8.097, z: 0.751 },
        // },
      ],
      phoneAssets: [
        {
          name: "nullAsset1",
          imagePath: "",
          animation: "Animation",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -1.1, y: 0.388, z: -0.877 },
          rotation: {
            x: -62.723,
            y: -171.366,
            z: 2.282,
          },
          phoneScreen:{
            scale:{x:0, y:0, z:0},
            position:{x:-0.10769, y:-0.0083, z:-0.7636},
            rotation:{x:-2.3073010409918253, y:4.6564280010282, z:-1.7647100090029355},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: onboarding1Dialog,
            audio: onboarding1Audio,
          },
        },
        {
          name: "nullAsset2",
          imagePath: "",
          animation: "Animation",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -1.1, y: 0.388, z: -0.877 },
          rotation: {
            x: -62.723,
            y: -171.366,
            z: 2.282,
          },
          phoneScreen:{
            scale:{x:0., y:0, z:0},
            position:{x:-0.10769, y:-0.0083, z:-0.7636},
            rotation:{x:-2.3073010409918253, y:4.6564280010282, z:-1.7647100090029355},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: onboarding2Dialog,
            audio: onboarding2Audio,
          },
        },
        // {
        //   name: "nullAsset3",
        //   imagePath: "",
        //   animation: "Animation",
        //   scale: { x: 0.034, y: 0.034, z: 0.034 },
        //   position: { x: -1.1, y: 0.388, z: -0.877 },
        //   rotation: {
        //     x: -62.723,
        //     y: -171.366,
        //     z: 2.282,
        //   },
        //   subsVideo: {
        //     videoElement: onboarding2Dialog,
        //     audio: onboarding2Audio,
        //   },
        // },
      ],
    },
    appintro: {
      phoneImages: [
        {
          name: "appintro1",
          imagePath: appintro1,
          buttonPosition: { x: 0.58124, y: -0.22324 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "appintro2",
          imagePath: appintro2,
          buttonPosition: { x: 0.635, y: -0.294 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "appintro3",
          imagePath: appintro3,
          buttonPosition: { x: 0.692, y: -0.043 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "appintro4",
          imagePath: appintro4,
          buttonPosition: { x: 0.635, y: -0.294 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "appintro5",
          imagePath: appintro5,
          buttonPosition: { x: 0.69, y: -0.143 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
      ],
      phoneAssets: [
        {
          name: "appintroasset1",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position:{x:0, y:0, z:-10},
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: appIntro1Dialog,
            audio: appIntro1Audio,
          },
        },
        {
          name: "appintroasset2",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: appIntro1Dialog,
            audio: blankAudio,
          },
        },
        {
          name: "appintroasset3",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: appIntro1Dialog,
            audio: rtpimg1,
          },
        },
        {
          name: "appintroasset4",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: appIntro1Dialog,
            audio: rtpimg1,
          },
        },
        {
          name: "appintroasset5",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: appIntro2Dialog,
            audio: appIntro2Audio,
          },
        },
      ],
    },
    userreg: {
      phoneImages: [
        {
          name: "userregimg1",
          imagePath: userregimg1,
          buttonPosition: { x: 0.662, y: -0.285 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "userregimg2",
          imagePath: userregimg2,
          buttonPosition: { x: 0.642, y: 0.024 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "userregimg3",
          imagePath: userregimg3,
          buttonPosition: { x: 0.603, y: -0.289 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
      ],
      phoneAssets: [
        {
          name: "userreg1",
          imagePath: appHandPanSingle,
          animation: "Animation",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position:{x:0, y:0, z:-10},
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: userreg1Dialog,
            audio: userreg1Audio,
          },
        },
        {
          name: "userreg2",
          imagePath: appHandPanSingle,
          animation: "Animation",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: userreg2Dialog,
            audio: userreg2Audio,
          },
        },
        {
          name: "userreg3",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: userreg3Dialog,
            audio: userreg3Audio,
          },
        },
      ],
    },
    nullAssets1: {
      phoneImages: [
        {
          name: "nullImg1",
          imagePath: "",
          buttonPosition: { x: 0.023, y: 0.088 },
          width: 0,
          height: 0,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "nullImg2",
          imagePath: "",
          buttonPosition: { x: -0.706, y: 0.295 },
          width: 0,
          height: 0,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        // {
        //   name: "nullImg3",
        //   imagePath: "",
        //   buttonPosition: { x: -0.75, y: 0.350 },
        //   width: 0,
        //   height: 0,
        //   position: { x: 0.65229, y: -0.006, z: -0.98319 },
        //   rotation: { x: 0.529, y: -8.097, z: 0.751 },
        // },
      ],
      phoneAssets: [
        {
          name: "nullAsset1",
          imagePath: "",
          animation: "Animation",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -1.1, y: 0.388, z: -0.877 },
          rotation: {
            x: -62.723,
            y: -171.366,
            z: 2.282,
          },
          phoneScreen:{
            scale:{x:0, y:0, z:0},
            position:{x:-0.10769, y:-0.0083, z:-0.7636},
            rotation:{x:-2.3073010409918253, y:4.6564280010282, z:-1.7647100090029355},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position:{x:0, y:0, z:-10},
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: paymentacceptance1Dialog,
            audio: paymentacceptance1Audio,
          },
        },
        {
          name: "nullAsset2",
          imagePath: "",
          animation: "Animation",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -1.1, y: 0.388, z: -0.877 },
          rotation: {
            x: -62.723,
            y: -171.366,
            z: 2.282,
          },
          phoneScreen:{
            scale:{x:0, y:0, z:0},
            position:{x:-0.10769, y:-0.0083, z:-0.7636},
            rotation:{x:-2.3073010409918253, y:4.6564280010282, z:-1.7647100090029355},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position:{x:0, y:0, z:-10},
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement:paymentacceptance2Dialog,
            audio: paymentacceptance2Audio,
          },
        },
        // {
        //   name: "nullAsset3",
        //   imagePath: "",
        //   animation: "Animation",
        //   scale: { x: 0.034, y: 0.034, z: 0.034 },
        //   position: { x: -1.1, y: 0.388, z: -0.877 },
        //   rotation: {
        //     x: -62.723,
        //     y: -171.366,
        //     z: 2.282,
        //   },
        //   subsVideo: {
        //     videoElement: onboarding2Dialog,
        //     audio: onboarding2Audio,
        //   },
        // },
      ],
    },
    paymentmethod: {
      phoneImages: [
        {
          name: "paymentimg1",
          imagePath: paymentmethodimg1,
          buttonPosition: { x: 0.662, y: -0.285 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "paymentimg2",
          imagePath: paymentmethodimg2,
          buttonPosition: { x: 0.642, y: 0.024 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "paymentimg3",
          imagePath: paymentmethodimg3,
          buttonPosition: { x: 0.603, y: -0.289 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "paymentimg4",
          imagePath: paymentmethodimg4,
          buttonPosition: { x: 0.603, y: -0.289 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "paymentimg5",
          imagePath: paymentmethodimg5,
          buttonPosition: { x: 0.642, y: 0.024 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "paymentimg6",
          imagePath: paymentmethodimg6,
          buttonPosition: { x: 0.603, y: -0.289 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "paymentimg7",
          imagePath: paymentmethodimg7,
          buttonPosition: { x: 0.603, y: -0.289 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
      ],
      phoneAssets: [
        {
          name: "paymentmethod1",
          imagePath: appHandCardSingle,
          animation: "",
          scale: { x: 0.60589, y: 0.60589, z: 0.60589 },
          position: { x: -0.77297, y: -2.61681, z: -2.98667 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793
          },
          phoneScreen:{
            scale:{x:0.09727, y:0.10034, z:0.10796},
            position:{x:-0.15298, y:-0.0327, z:-0.74092},
            rotation:{x:-3.1965315390348628, y:3.4325901506287617, z:0.23777748497929163},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: paymentmethod1Dialog,
            audio: paymentmethod1Audio,
          },
        },
        {
          name: "paymentmethod2",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: paymentmethod2Dialog,
            audio: paymentmethod2Audio,
          },
        },
        {
          name: "paymentmethod3",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: paymentmethod3Dialog,
            audio: paymentmethod3Audio,
          },
        },
        {
          name: "paymentmethod4",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: paymentmethod4Dialog,
            audio: paymentmethod4Audio,
          },
        },
        {
          name: "paymentmethod5",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: paymentmethod5Dialog,
            audio: paymentmethod5Audio,
          },
        },
        {
          name: "paymentmethod6",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: paymentmethod6Dialog,
            audio: paymentmethod6Audio,
          },
        },
        {
          name: "paymentmethod7",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: paymentmethod7Dialog,
            audio: paymentmethod7Audio,
          },
        },
      ],
    },
    rtpmethod: {
      phoneImages: [
        {
          name: "rtpimg1",
          imagePath: rtpimg1,
          buttonPosition: { x: 0.662, y: -0.285 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "rtpimg2",
          imagePath: rtpimg2,
          buttonPosition: { x: 0.642, y: 0.024 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "rtpimg3",
          imagePath: rtpimg3,
          buttonPosition: { x: 0.603, y: -0.289 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "rtpimg4",
          imagePath: rtpimg4,
          buttonPosition: { x: 0.603, y: -0.289 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
      ],
      phoneAssets: [
        {
          name: "rtpmethod1",
          imagePath: appHandSingle,
          animation: "Animation",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: rtp1Dialog,
            audio: rtp1Audio,
          },
        },
        {
          name: "rtpmethod2",
          imagePath: appHandSingle,
          animation: "Animation",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: rtp2Dialog,
            audio: rtp2Audio,
          },
        },
        {
          name: "rtpmethod3",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: rtp3Dialog,
            audio: rtp3Audio,
          },
        },
        {
          name: "rtpmethod4",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: rtp4Dialog,
            audio: rtp4Audio,
          },
        },
      ],
    },
    recpay: {
      phoneImages: [
        {
          name: "recpayvideo1",
          imagePath: recpayimg1,
          buttonPosition: { x: 0.662, y: -0.285 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:recpayVidIn1,
            scale:{x:0.14983, y:0.07264, z:0.01075},
            position: { x:0.64708, y:0.00007, z:-0.97569 },
            rotation: {x:0.657755548810185, y:-8.859073428312788, z:1.124143194046675},
          },
        },
        {
          name: "recpayvideo2",
          imagePath: recpayimg1,
          buttonPosition: { x: 0.642, y: 0.024 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:recpayVidIn2,
            scale:{x:0.14983, y:0.07264, z:0.01075},
            position: { x:0.64708, y:0.00007, z:-0.97569 },
            rotation: {x:0.657755548810185, y:-8.859073428312788, z:1.124143194046675},
          },
        },
        {
          name: "recpayvideo3",
          imagePath: recpayimg1,
          buttonPosition: { x: 0.603, y: -0.289 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:recpayVidIn3,
            scale:{x:0.14983, y:0.07264, z:0.01075},
            position: { x:0.64708, y:0.00007, z:-0.97569 },
            rotation: {x:0.657755548810185, y:-8.859073428312788, z:1.124143194046675},
          },
        },
      ],
      phoneAssets: [
        {
          name: "recpay",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:recpayVidIn1,
            scale:{x:0.10852, y:0.04769, z:0.117},
            position:{x:-0.2301, y:-0.00471, z:-0.74983},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          subsVideo: {
            videoElement: recpay1Dialog,
            audio: recpay1Audio,
          },
        },
        {
          name: "recpay2",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:recpayVidIn2,
            scale:{x:0.10852, y:0.04769, z:0.117},
            position:{x:-0.2301, y:-0.00471, z:-0.74983},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          subsVideo: {
            videoElement: recpay2Dialog,
            audio: recpay2Audio,
          },
        },
       
        {
          name: "recpay3",
          imagePath: appHandSingle,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:recpayVidIn3,
            scale:{x:0.10852, y:0.04769, z:0.117},
            position:{x:-0.2301, y:-0.00471, z:-0.74983},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          subsVideo: {
            videoElement: recpay3Dialog,
            audio: recpay3Audio,
          },
        },
      ],
    },
    // datahandling: {
    //   phoneImages: [
    //     {
    //       name: "datahandling",
    //       imagePath: datahandlingimg,
    //       buttonPosition: { x: 0.662, y: -0.285 },
    //       width: 2,
    //       height: 3.8,
    //       position: { x: 0.65229, y: -0.006, z: -0.98319 },
    //       rotation: { x: 0.529, y: -8.097, z: 0.751 },
    //     },
    //   ],
    //   phoneAssets: [
    //     {
    //       name: "datahandling",
    //       imagePath: datahandling,
    //       animation: "Animation",
    //       scale: { x: 0.034, y: 0.034, z: 0.034 },
    //       position: { x: -1.0364, y: -3.02252, z: -3.46246 },
    //       rotation: {
    //         x: -62.42890839965937,
    //         y: -172.72557579352335,
    //         z: 3.9614301955345113,
    //       },
    //       subsVideo: {
    //         videoElement: demoTransparent2,
    //         audio: demoAudio,
    //       },
    //     },
    //   ],
    // },
    refundprocess: {
      phoneImages: [
        {
          name: "refundimg1",
          imagePath: refundimg1,
          buttonPosition: { x: 0.662, y: -0.285 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "refundim2",
          imagePath: refundimg2,
          buttonPosition: { x: 0.662, y: -0.285 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
        {
          name: "refundimg3",
          imagePath: refundimg3,
          buttonPosition: { x: 0.662, y: -0.285 },
          width: 2,
          height: 3.8,
          scale:{x: 0.178, y: 0.2, z: 0.2},
          position: { x: 0.65229, y: -0.006, z: -0.98319 },
          rotation: { x: 0.529, y: -8.097, z: 0.751 },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
      ],
      phoneAssets: [
        {
          name: "refundasset1",
          imagePath: appHandSingle,
          animation: "Animation",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },  
          rotation: {    
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: refund1Dialog,
            audio: refund1Audio,
          },
        },
        {
          name: "refundasset2",
          imagePath: appHandSingle,
          animation: "Animation",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },  
          rotation: {    
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position: { x: 0, y: 0, z: -10 },
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement:refund2Dialog,
            audio: refund2Audio,
          },
        },
        {
          name: "refundasset3",
          imagePath: appHandSingle,
          animation: "Animation",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },  
          rotation: {    
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0.12336, y:0.138, z:0.117},
            position:{x:-0.23, y:-0.01408, z:-0.75005},
            rotation:{x:-3.0154768757735226, y:3.5414521317036183, z:0.43487496650429486},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position:{x:0, y:0, z:-10},
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: refund3Dialog,
            audio: refund3Audio,
          },
        },
      ],
    },
    null: {
      phoneImages: [
        {
          name: "null1",
          imagePath: "",
          buttonPosition: { x: 0, y: 0 },
          width: 3.8,
          height: 3.8,
          scale:{x: 0, y: 0, z: 0},
          position: { x: 0.00396, y: -0.01507, z: -0.96379 },
          rotation: {
            x: 2.8447354528245374,
            y: -0.4526366581533504,
            z: -0.1753250853100319,
          },
          phoneImg:{
            imagePath:"",
            scale:{x: 0, y: 0, z: 0},
            position: { x: 0, y: 0, z: -10 },
            rotation: { x: 0, y: 0, z: 0 },
          },
        },
      ],
      phoneAssets: [
        {
          name: "null1",
          imagePath: invisible,
          animation: "",
          scale: { x: 0.034, y: 0.034, z: 0.034 },
          position: { x: -0.97307, y: -3.08774, z: -3.43762 },
          rotation: {
            x: -61.526499872328316,
            y: -169.76051920372137,
            z: -0.8416750010471793,
          },
          phoneScreen:{
            scale:{x:0, y:0, z:0},
            position:{x:-0.231, y:-0.01277, z:-0.74997},
            rotation:{x:-2.756, y:3.434, z:0.238},
          },
          phoneScreenIn:{
            imagepath:invisible,
            scale:{x:0, y:0, z:0},
            position:{x:0, y:0, z:0},
            rotation:{x:0, y:0, z:0},
          },
          subsVideo: {
            videoElement: refund3Dialog,
            audio: refund3Audio,
          },
        },
      ],
    },
  };



