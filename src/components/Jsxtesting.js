import React from 'react'
// import paymentmethod7Dialog from "../SmartMerchantAssets/videos/Dialogs/paymentmethod7Dialog.mp4";
import sampleSubs from "../SmartMerchantAssets/sample.vtt"
function Jsxtesting() {
  return (
    <div>
    {/* Display subtitles */}
    <div className="subtitles-container">
      <p className="subtitle-text"></p>
    </div>

    {/* Video element with subtitles (hidden) */}
    <video controls style={{ display: 'none' }}>
      {/* <source src={paymentmethod7Dialog} type="video/mp4" /> */}
      <track label="English" kind="subtitles" src={sampleSubs} srcLang="en" default />
      {/* Other video settings */}
    </video>
  </div>
  )
}

export default Jsxtesting
