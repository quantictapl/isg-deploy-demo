import React, { useEffect, useState } from "react";
import AppDemonstration from "./AppDemonstration15";
import isgloading from "../videos/isgloading.webm";
import bg from "../green-screen.webp";
function AppDemonstrationContainer({ models, images }) {
  const [loading, setLoading] = useState(true);
  localStorage.setItem("lastVisitedPage", "/smartmerchant/appdemo");

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);
  if (loading) {
    return (
      <div>
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
      </div>
    ); // Replace this with your desired loading screen component
  }
  return (
    <div>
      <AppDemonstration
        esy={models.Model2}
        esyHand={models.Model3}
        appHandSingle={models.Model4}
        appHandPanSingle={models.Model5}
        appHandCardSingle={models.Model6}
        smartmerchant={images.Image3}
        // smartmerchant={bg}
      />
    </div>
  );
}

export default AppDemonstrationContainer;
