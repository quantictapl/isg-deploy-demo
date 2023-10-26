import React, { useEffect, useState } from 'react';
import SmartMerchant from '../components/SmartMerchant6';
import isgloading from "../videos/isgloading.webm"
import "../components/componentcss/SmartMerchant.css";
import bg from "../green-screen.webp"

function SmartMerchantHelper({models,videos,images}) {
  const [loading,setLoading]=useState(true);
  console.log("the models are",models)
  localStorage.setItem('lastVisitedPage', window.location.href);
  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);
  console.log("images:",images)
  if (loading) {
    return <div className='loading-container'>
      <video
   
          src={isgloading}
          // onLoadedMetadata={handleLoadedMetadata}
          type="video/webm"
          muted
          controls={false}
          preload="auto"
          className="loading-video"
          autoPlay
        />
    </div>; // Replace this with your desired loading screen component
  }
  return (
    <div>
      
      <SmartMerchant 
      esy={models.Model2}
      smartmerchantBg={images.Image2}
      // smartmerchantBg={bg}
      videos={videos} />
    </div>
  );
}

export default SmartMerchantHelper;