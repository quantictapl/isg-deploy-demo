import React, { useEffect, useState } from 'react';
import Panorama from './Panorama';
// import rough from './Lobby.webp'
// import model from './Test2.gltf'
import isgloading from "./videos/isgloading.webm"
// import globe from './globeuu.glb'
// import ellie from "./Ellie.glb"


function PanoramaViewer({models,videos,images}) {
  const [loading,setLoading]=useState(true);
  const globe=models.Model1;
  const tv=videos.Video1;
  localStorage.setItem('lastVisitedPage', "/isglobby");
  // const rough="https://isg-asset.s3.ap-south-1.amazonaws.com/RoughLobby.jpg";
  // const globe="https://isg-asset.s3.ap-south-1.amazonaws.com/globeuu.glb";
  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);
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
   height="1080"
   width="1920"
 />
    </div>; // Replace this with your desired loading screen component
  }
  return (
    <div>
      
      <Panorama lobbyBg={images.Image1}
      // modelSrc={model}
      globe={globe}
      // ellie={ellie} 
      tv={tv} />
    </div>
  );
}

export default PanoramaViewer;