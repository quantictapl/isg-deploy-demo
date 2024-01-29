import React, { useEffect } from 'react';
export function PrefetchGLBModel() {
    useEffect(() => {
      // Create a new link element for prefetching the .glb model
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Esy.glb";
      link.as = 'fetch';
      link.crossOrigin = 'anonymous';
  
      // Append the link element to the document's head
      document.head.appendChild(link);
  
      // Clean up by removing the link element when the component unmounts
      return () => {
        document.head.removeChild(link);
      };
    }, []); // The empty dependency array ensures this effect runs only once
  
    return null; // This component doesn't render anything to the DOM
  }