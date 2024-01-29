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
  const [model, setModel] = useState(null);
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

    console.log(lastVisitedPage);

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
          console.log("Response: ", response);
          setResponse(response);
        })
        .catch((error) => {
          console.log("Error: ", error);
          if (error.response.status === 401 || error.response.status === 403) {
            // Handle authentication errors here
          } else {
            console.log("Logged out");
          }
        });
    }
  }, [lastVisitedPage, location.pathname, username]);
  // console.log(response.data.lastVisitedPage)

  // const handleLogout = async () => {
  //   try {
  //     // Perform the logout action on the server by sending a POST request
  //     await fetch(logoutAPIUrl,requestBody,requestConfig);

  //     // Clear user authentication data from local storage or session storage
  //     localStorage.removeItem("authToken"); // Replace with your actual authentication token key
  //     // Clear any other user-related data from local storage or session storage if needed

  //     // Redirect the user to the login page after logout
  //     window.location.href = "/login"; // Replace with the appropriate URL
  //   } catch (error) {
  //     console.error("Logout error:", error);
  //     // Handle any errors that occur during logout
  //   }
  // };
  // useEffect(() => {
  //   // URL of the .glb model
  //   const modelUrl =
  //     "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Esy.glb";

  //   // Fetch the .glb model
  //   fetch(modelUrl)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       console.log("model is being fetched");
        
  //       return response.arrayBuffer(); // Get the binary data of the model
  //     })
  //     .then((arrayBuffer) => {
  //       setModelArrayBuffer(arrayBuffer)
  //       console.log(modelArrayBuffer)
  //       // Create a URL for the binary data
  //       const blob = new Blob([arrayBuffer]);
  //       // Create a URL for the Blob
  //       const objectURL = URL.createObjectURL(blob);  
  //       // const actualUrl = objectURL.substring(5);
  //       setModel(objectURL);
  //       // console.log(actualUrl)// Set the model URL in state
  //       console.log("model fetch complete");

  //     })
  //     .catch((error) => {
  //       console.error("Error fetching the model:", error);
  //     });
  // }, []);
  // useEffect(() => {
  //   // URL of the .glb model
  //   const modelUrl =
  //     "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Esy.glb";
  //     const cachedModelData = localStorage.getItem("cachedModel");
  //     if (cachedModelData) {
  //       // If it exists in local storage, use it
  //       setModel(cachedModelData);
  //       console.log("Using cached model data");
  //     }
  //     else{
  //       fetch(modelUrl)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       console.log("model is being fetched");
  //       return response.arrayBuffer(); // Get the binary data of the model
  //     })
  //     .then((arrayBuffer) => {
  //       // Create a URL for the binary data
  //       const blob = new Blob([arrayBuffer]);
  //       // Create a URL for the Blob
  //       const objectURL = URL.createObjectURL(blob);  
  //       // const actualUrl = objectURL.substring(5);
  //       setModel(objectURL);
  //       // console.log(actualUrl)// Set the model URL in state
  //       console.log("model fetch complete");
  //       // Cache the fetched data in local storage for future use
  //       localStorage.setItem("cachedModel", objectURL);

  //     })
  //     .catch((error) => {
  //       console.error("Error fetching the model:", error);
  //     });
  //     }
  //   // Fetch the .glb model
  // }, []);
  useEffect(() => {
    // URL of the .glb model
    const modelUrl = "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Esy.glb";
  
    // Fetch the .glb model
    fetch(modelUrl,{ responseType: 'blob' })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Model is being fetched");
        return response.blob(); // Get the Blob of the model
      })
      .then((blob) => {
        // Create a URL for the Blob
        const objectURL = URL.createObjectURL(blob);
        setModel(objectURL); // Set the model URL in state
        console.log("Model fetch complete");
      })
      .catch((error) => {
        console.error("Error fetching the model:", error);
      });
  }, []);
  // useEffect(() => {
  //   // Open a database
  //   const dbName = '3d-models';
  //   const request = indexedDB.open(dbName, 1);

  //   request.onerror = function (event) {
  //     console.error('Error opening database:', event.target.error);
  //   };

  //   request.onupgradeneeded = function (event) {
  //     const db = event.target.result;

  //     // Create an object store for 3D model data
  //     db.createObjectStore('3DModels', { keyPath: 'id' });
  //   };

  //   request.onsuccess = function (event) {
  //     const db = event.target.result;
  //     const modelData=modelArrayBuffer
  //     // Fetch your 3D model data and convert it to an ArrayBuffer
  //    // Assuming this element contains your model
  //     const arrayBuffer = new TextEncoder().encode(modelData.innerText);

  //     // Store the 3D model data in IndexedDB
  //     const transaction = db.transaction(['3DModels'], 'readwrite');
  //     const objectStore = transaction.objectStore('3DModels');

  //     const modelDataToStore = { id: 1, name: 'Esy', data: modelData };
  //     objectStore.add(modelDataToStore);

  //     transaction.oncomplete = function () {
  //       console.log('3D model data stored successfully.');
  //     };

  //     transaction.onerror = function (event) {
  //       console.error('Error storing 3D model data:', event.target.error);
  //     };

  //     // Retrieve the model data from IndexedDB
  //     const retrieveTransaction = db.transaction(['3DModels'], 'readonly');
  //     const retrieveObjectStore = retrieveTransaction.objectStore('3DModels');
  //     const retrieveRequest = retrieveObjectStore.get(1); // Retrieve data with id 1

  //     retrieveRequest.onsuccess = function (event) {
  //       const modelData = event.target.result;
  //       console.log('Retrieved 3D model data:', modelData);

  //       // Now you can use 'modelData' for rendering or other purposes
  //     };

  //     retrieveRequest.onerror = function (event) {
  //       console.error('Error retrieving 3D model data:', event.target.error);
  //     };
  //   };
  // }, []);
  useEffect(() => {
    // URL of the .glb model
    const modelUrl =
      "https://isg-asset.s3.ap-south-1.amazonaws.com/SmartMerchantAssets/Esy.glb";

    // Fetch the .glb model
    fetch(modelUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Model is being fetched");

        return response.arrayBuffer(); // Get the binary data of the model
      })
      .then((arrayBuffer) => {
        // Create a URL for the binary data
        const blob = new Blob([arrayBuffer]);
        // Create a URL for the Blob
        const objectURL = URL.createObjectURL(blob);
        setModel(objectURL);

        // Open a database
        const dbName = '3d-models';
        const request = indexedDB.open(dbName, 1);

        request.onerror = function (event) {
          console.error('Error opening database:', event.target.error);
        };

        request.onupgradeneeded = function (event) {
          const db = event.target.result;

          // Create an object store for 3D model data
          db.createObjectStore('3DModels', { keyPath: 'id' });
        };

        request.onsuccess = function (event) {
          const db = event.target.result;

          // Store the 3D model data in IndexedDB
          const transaction = db.transaction(['3DModels'], 'readwrite');
          const objectStore = transaction.objectStore('3DModels');

          const modelDataToStore = { id: 1, name: 'Esy', data: arrayBuffer };
          objectStore.add(modelDataToStore);

          transaction.oncomplete = function () {
            console.log('3D model data stored successfully.');
          };

          transaction.onerror = function (event) {
            console.error('Error storing 3D model data:', event.target.error);
          };
        };

        console.log("Model fetch complete");
      })
      .catch((error) => {
        console.error("Error fetching the model:", error);
      });
  }, []);

  
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/panorama"
            element={
              <PrivateRoute
                authenticated={authenticated}
                component={PanoramaViewer}
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
                model={model}
              />
            }
          />
          <Route
            path="/smartmerchant/appdemo"
            element={
              <PrivateRoute
                authenticated={authenticated}
                component={AppDemonstrationContainer}
                model={model}
              />
            }
          />
          {/* <Route path="/smartmerchant" element={<SmartMerchantHelper model={model} />} /> */}
          {/* <Route path="/smartmerchant/appdemo" element={<AppDemonstrationContainer model={model} />} />  */}
          <Route path="*" element={<Login />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/testing3d" element={<Testing3d />} />
          <Route path="/jsxtesting" element={<Jsxtesting />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default RoutePages;
