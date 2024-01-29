import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PanoramaViewer from "../PanoramaViewer";
import Signup from "../pages/signup";
import Login from "../pages/login";
import Intro from "../pages/Intro";
import Opening from "../pages/Opening";
import PublicRoute from "../Routes.js/PublicRoute";
import PrivateRoute from "../Routes.js/PrivateRoute";
import { getToken } from "../service/AuthService";
import SmartMerchantHelper from "../helpers/SmartMerchantHelper";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Testing3d from "./testing3d";
import AppDemonstrationContainer from "./AppDemonstrationContainer";
import Jsxtesting from "./Jsxtesting";
import axios from "axios";
import { resetUserSession, getUser } from "../service/AuthService";
import CustomLoadingScreen from "./CustomLoadingScreen";
const logoutAPIUrl =
  "https://vyw54xaie6.execute-api.ap-south-1.amazonaws.com/prod/logout";
export const esy =
  "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Esy.glb";
function RoutePages() {
  const [username, setUsername] = useState("");
  const [lastVisitedPage, setLastVisitedPage] = useState("");
  const location = useLocation();
  const authenticated = getToken() ? true : false;
  const [response, setResponse] = useState({});
  const [modelURLs, setModelURLs] = useState({});
  const [models, setModels] = useState({});
  const [videos,setVideos]=useState({});
  const [images, setImages] = useState({});
  const [modelArrayBuffer,setModelArrayBuffer]=useState([]);
  // if(sessionStorage.getItem('user')){
  //   setUsername(getUser);
  // }
  // setUsername(getUser);
  // console.log(username);
  // console.log(window.location.pathname)
  useEffect(() => {
    const storedPage = localStorage.getItem("lastVisitedPage");
    // const trimmedPage = storedPage
    //   ? storedPage.replace("http://localhost:3000", "")
    //   : "";
    if (storedPage) {
      let trimmedPage;

      if (
        storedPage.startsWith("http://") ||
        storedPage.startsWith("https://")
      ) {
        try {
          const url = new URL(storedPage);
          trimmedPage = url.pathname;
        } catch (error) {
          console.error("Invalid URL stored:", storedPage);
          // Handle the case where the stored page is not a valid URL
        }
      } else {
        trimmedPage = storedPage;
      }

      setLastVisitedPage(trimmedPage);
    } else {
      setLastVisitedPage("/opening");
    }
    if (sessionStorage.getItem("user") !== null) {
      let userDataString = sessionStorage.getItem("user");
      let userData = JSON.parse(userDataString);
      setUsername(userData.username);
    } else {
      setUsername(null);
    }

    // console.log(lastVisitedPage);

    // Send Axios request when the page changes
    if (username) {
      const requestConfig = {
        headers: {
          "x-api-key": process.env.REACT_APP_X_API_KEY,
        },
      };
      const requestBody = {
        username: username,
        lastVisitedPage: lastVisitedPage, // Use the current page path as currentPage
      };

      axios
        .post(logoutAPIUrl, requestBody, requestConfig)
        .then((response) => {
          // console.log("Response: ", response);
          setResponse(response);
        })
        .catch((error) => {
          console.log("Error: ", error);
          if (error.response.status === 401 || error.response.status === 403) {
            // Handle authentication errors here
          } else {
            // console.log("Logged out");
          }
        });
    }
  }, [lastVisitedPage, location.pathname, username]);
  const appHandSingle="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/handassets/app_hand_single.glb"
  const appHandPanSingle="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/handassets/app_hand_pan_single.glb"
  const appHandCardSingle="https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/handassets/app_hand_card_single.glb"
  useEffect(() => {
    // List of model URLs and their corresponding keys
    const modelURLList = [
      { url: 'https://isg-asset.s3.ap-south-1.amazonaws.com/globeuu.glb', key: 'Model1' },
      { url: 'https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Esy.glb', key: 'Model2' },
      { url: 'https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/isy_hand.glb', key: 'Model3' },
      { url: 'https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/handassets/app_hand_single.glb', key: 'Model4' },
      { url: 'https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/handassets/app_hand_pan_single.glb', key: 'Model5' },
      { url: 'https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/handassets/app_hand_card_single.glb', key: 'Model6' },
      
      // Add more models as needed
    ];
  
    // Open a database
    const dbName = '3d-models';
    const request = indexedDB.open(dbName, 1);
  
    request.onerror = function (event) {
      console.error('Error opening database:', event.target.error);
    };
  
    request.onupgradeneeded = function (event) {
      const db = event.target.result;
  
      // Create an object store for 3D model data
      db.createObjectStore('3DModels', { keyPath: 'key' });
    };
  
    request.onsuccess = function (event) {
      const db = event.target.result;
  
      // Fetch and store models
      modelURLList.forEach(({ url, key }) => {
        const retrieveTransaction = db.transaction(['3DModels'], 'readonly');
        const retrieveObjectStore = retrieveTransaction.objectStore('3DModels');
        const retrieveRequest = retrieveObjectStore.get(key);
  
        retrieveRequest.onsuccess = function (event) {
          const modelData = event.target.result;
  
          if (modelData) {
            // If the data exists in IndexedDB, convert it to Blob and set as the URL
            const blob = new Blob([modelData.data], { type: 'model/gltf-binary' });
            const objectURL = URL.createObjectURL(blob);
            setModels((prevModels) => ({
              ...prevModels,
              [key]: objectURL,
            }));
          } else {
            // If the data doesn't exist, fetch it from the network
            fetchAndStoreModelData(db, url, key); // Pass 'db' as an argument
          }
        };
  
        retrieveRequest.onerror = function (event) {
          console.error('Error retrieving 3D model data:', event.target.error);
          // If there's an error, proceed with fetching the data
          fetchAndStoreModelData(db, url, key); // Pass 'db' as an argument
        };
      });
    };
  
    function fetchAndStoreModelData(db, modelUrl, key) { // Accept 'db' as an argument
      // Fetch the .glb model
      fetch(modelUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          // console.log(`${key} is being fetched`);
  
          return response.arrayBuffer(); // Get the binary data of the model
        })
        .then((arrayBuffer) => {
          // Create a URL for the binary data
          const blob = new Blob([arrayBuffer]);
          // Create a URL for the Blob
          const objectURL = URL.createObjectURL(blob);
  
          // Set the model data in state
          setModels((prevModels) => ({
            ...prevModels,
            [key]: objectURL,
          }));
  
          // Store the 3D model data in IndexedDB
          const transaction = db.transaction(['3DModels'], 'readwrite');
          const objectStore = transaction.objectStore('3DModels');
  
          const modelDataToStore = { key, data: arrayBuffer };
          objectStore.put(modelDataToStore);
  
          transaction.oncomplete = function () {
            // console.log(`${key} data stored successfully.`);
          };
  
          transaction.onerror = function (event) {
            console.error(`Error storing ${key} data:`, event.target.error);
          };
        })
        .catch((error) => {
          console.error(`Error fetching ${key}:`, error);
        });
    }
  }, []);
  useEffect(() => {
    // List of video URLs and their corresponding keys
    const videoURLList = [
      { url: 'https://isg-asset.s3.ap-south-1.amazonaws.com/videos/AboutUs.mp4', key: 'Video1' },
      { url: 'https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/videos/MerchantTv1.mp4', key: 'Video2' },
      { url: 'https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/videos/benifits.mp4', key: 'Video3' },
      // Add more video links as needed
    ];

    // Open a database for videos
    const videoDBName = 'isg-videos';
    const videoDBRequest = indexedDB.open(videoDBName, 1);

    videoDBRequest.onerror = function (event) {
      console.error('Error opening video database:', event.target.error);
    };

    videoDBRequest.onupgradeneeded = function (event) {
      const db = event.target.result;

      // Create an object store for video data
      db.createObjectStore('Videos', { keyPath: 'key' });
    };

    videoDBRequest.onsuccess = function (event) {
      const db = event.target.result;

      // Fetch and store videos
      videoURLList.forEach(({ url, key }) => {
        const retrieveTransaction = db.transaction(['Videos'], 'readonly');
        const retrieveObjectStore = retrieveTransaction.objectStore('Videos');
        const retrieveRequest = retrieveObjectStore.get(key);

        retrieveRequest.onsuccess = function (event) {
          const videoData = event.target.result;

          if (videoData) {
            // If the data exists in IndexedDB, you can use it here.
            // console.log(`Video with key ${key} is already in the database.`);
            // You can set the video data in your state here.
            const blob = new Blob([videoData.data], { type: 'video/mp4' });
            const objectURL = URL.createObjectURL(blob);
            setVideos((prevVideos) => ({
              ...prevVideos,
              [key]: objectURL,
            }));
          } else {
            // If the data doesn't exist, fetch it from the network
            fetchAndStoreVideoData(db, url, key);
          }
        };

        retrieveRequest.onerror = function (event) {
          console.error('Error retrieving video data:', event.target.error);
          // If there's an error, proceed with fetching the data
          fetchAndStoreVideoData(db, url, key);
        };
      });
    };

    function fetchAndStoreVideoData(db, videoUrl, key) {
      // Fetch the video
      fetch(videoUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // console.log(`Video with key ${key} is being fetched`);

          return response.blob(); // Get the video data as a Blob
        })
        .then((blob) => {
            // Convert the Blob into an object URL
            const objectURL = URL.createObjectURL(blob);
          
            // Set the video data in state with the object URL
            setVideos((prevVideos) => ({
              ...prevVideos,
              [key]: objectURL,
            }));
          
            // Store the video data in IndexedDB
            const transaction = db.transaction(['Videos'], 'readwrite');
            const objectStore = transaction.objectStore('Videos');
          
            const videoDataToStore = { key, data: blob };
            objectStore.put(videoDataToStore);
          
            transaction.oncomplete = function () {
              // console.log(`Video with key ${key} data stored successfully.`);
            };
          
            transaction.onerror = function (event) {
              console.error(`Error storing video data for key ${key}:`, event.target.error);
            };
          })
        .catch((error) => {
          console.error(`Error fetching video with key ${key}:`, error);
        });
    }
  }, []);
  useEffect(() => {
    // List of image URLs and their corresponding keys
    const imageURLList = [
      { url: 'https://isg-asset.s3.ap-south-1.amazonaws.com/Lobby.webp', key: 'Image1' },
      { url: 'https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchant.jpg', key: 'Image2' },
      { url: 'https://isg-asset.s3.ap-south-1.amazonaws.com/WithTable.jpg', key: 'Image3' },
      // Add more image links as needed
    ];

    // Open a database for images
    const imageDBName = 'isg-images';
    const imageDBRequest = indexedDB.open(imageDBName, 1);

    imageDBRequest.onerror = function (event) {
      console.error('Error opening image database:', event.target.error);
    };

    imageDBRequest.onupgradeneeded = function (event) {
      const db = event.target.result;

      // Create an object store for image data
      db.createObjectStore('Images', { keyPath: 'key' });
    };

    imageDBRequest.onsuccess = function (event) {
      const db = event.target.result;

      // Fetch and store images
      imageURLList.forEach(({ url, key }) => {
        const retrieveTransaction = db.transaction(['Images'], 'readonly');
        const retrieveObjectStore = retrieveTransaction.objectStore('Images');
        const retrieveRequest = retrieveObjectStore.get(key);

        retrieveRequest.onsuccess = function (event) {
            const imageData = event.target.result;
          
            if (imageData) {
              // If the data exists in IndexedDB, you can use it here.
              // console.log(`Image with key ${key} is already in the database.`);
              // You should set the image data in your state with an object URL.
              const blob = new Blob([imageData.data], { type: 'image/jpeg' });
              const objectURL = URL.createObjectURL(blob);
              setImages((prevImages) => ({
                ...prevImages,
                [key]: objectURL,
              }));
            } else {
              // If the data doesn't exist, fetch it from the network
              fetchAndStoreImageData(db, url, key);
            }
        };

        retrieveRequest.onerror = function (event) {
          console.error('Error retrieving image data:', event.target.error);
          // If there's an error, proceed with fetching the data
          fetchAndStoreImageData(db, url, key);
        };
      });
    };

    function fetchAndStoreImageData(db, imageUrl, key) {
      // Fetch the image
      fetch(imageUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // console.log(`Image with key ${key} is being fetched`);

          return response.blob(); // Get the image data as a Blob
        })
        .then((blob) => {
          // Convert the Blob into an object URL
          const objectURL = URL.createObjectURL(blob);

          // Set the image data in state with the object URL
          setImages((prevImages) => ({
            ...prevImages,
            [key]: objectURL,
          }));

          // Store the image data in IndexedDB
          const transaction = db.transaction(['Images'], 'readwrite');
          const objectStore = transaction.objectStore('Images');

          const imageDataToStore = { key, data: blob };
          objectStore.put(imageDataToStore);

          transaction.oncomplete = function () {
            // console.log(`Image with key ${key} data stored successfully.`);
          };

          transaction.onerror = function (event) {
            console.error(`Error storing image data for key ${key}:`, event.target.error);
          };
        })
        .catch((error) => {
          console.error(`Error fetching image with key ${key}:`, error);
        });
    }
  }, []);


  
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/isglobby"
            element={
              <PrivateRoute
                authenticated={authenticated}
                component={PanoramaViewer}
                models={models}
                videos={videos}
                images={images}
              />
            }
          />
          {/* <Route path="/panorama" element={<PanoramaViewer/>} />  */}
          <Route
            path="/opening"
            element={
              <PrivateRoute authenticated={authenticated} component={Opening} />
            }
          />
          <Route
            path="/intro"
            element={
              <PrivateRoute authenticated={authenticated} component={Intro} />
            }
          />
          <Route
            path="/smartmerchant"
            element={
              <PrivateRoute
                authenticated={authenticated}
                component={SmartMerchantHelper}
                models={models} videos={videos} images={images}
              />
            }
          />
          <Route
            path="/smartmerchant/appdemo"
            element={
              <PrivateRoute
                authenticated={authenticated}
                component={AppDemonstrationContainer}
                models={models} images={images}
              />
            }
          />
          {/* <Route path="/smartmerchant" element={<SmartMerchantHelper model={model} />} /> */}
          {/* <Route path="/smartmerchant/appdemo" element={<AppDemonstrationContainer model={model} />} />  */}
          <Route path="*" element={<Opening />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/testing3d" element={<Testing3d models={models}/>} />
          <Route path="/jsxtesting" element={<CustomLoadingScreen/>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default RoutePages;