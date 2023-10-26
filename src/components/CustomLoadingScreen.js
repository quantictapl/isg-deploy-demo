import React from "react";
import "./CustomLoadingScreen.css";
import isgLoading from "../videos/isgloading.webm";
// const CustomLoadingScreen = () => {
//   return (
//     <div className="custom-loading-screen">
//       <div>
//         <video
//           src={isgLoading}
//           // onLoadedMetadata={handleLoadedMetadata}
//           type="video/webm"
//           muted
//           controls={false}
//           preload="auto"
//           loop={true}
//           className="loading-video"
//           autoPlay
//         />
//       </div>
//       {/* <div className="loading-spinner"></div> */}
//     </div>
//   );
// };

// export default CustomLoadingScreen;

const CustomLoadingScreen = () => {
  return (
    <div className="custom-loading-screen">
      <span class="loader"></span>

    </div>
  );
};

export default CustomLoadingScreen;
