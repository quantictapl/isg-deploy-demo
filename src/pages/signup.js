import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import "./Signup.css";
import isgLogo from "../images/isglogo.png";
import GenderDropdown from "../components/GenderDropdown";
import IndustryDropdown from "../components/IndustryDropdown";
import Captcha from "../components/Captcha";
import DropShadow from "../images/DropShadowResized.png";
import Light from "../components/Light";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const rotateAndSlideAnimation = {
  initial: {
    transform:
      "perspective(500rem) rotateY(60deg) translateX(-290%) scaleX(-50%) scaleY(-50%)",
    opacity: 0,
  },
  animate: {
    transform:
      "perspective(500rem) rotateY(0deg) translateX(0%) scaleX(100%) scaleY(100%)",
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0,
      ease: "easeInOut",
    },
  },
  exit: {
    transform: "translateX(200%)",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.1,
};
const opacityInc = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {},
  },
  exit: {
    opacity: 0,
    duration: 1,
  },
};

const registerUrl =
  "https://vyw54xaie6.execute-api.ap-south-1.amazonaws.com/prod/register";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState(null);
  const [gender, setGender] = useState("");
  const [industry, setIndustry] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const navigate=useNavigate();
  const initialFormData = {
    name: "",
    email: "",
    company: "",
    // Add other fields and their default values here
  };
  const [formData, setFormData] = useState(initialFormData);
  localStorage.setItem('lastVisitedPage', "/opening");
  const handleGenderChange = (selectedOption) => {
    setGender(selectedOption);
    
  };
  const handleIndustryChange = (selectedOption) => {
    setIndustry(selectedOption);
    
  };
  const handleCaptchaValidChange = (valid) => {
    setIsCaptchaValid(valid);
  };
  const handleTermsChange = (event) => {
    setIsTermsChecked(event.target.checked);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (email.trim() === "" || name.trim() === "" || password.trim() === "") {
      setMessage("All fields are required");
      return;
    }
    if (!isCaptchaValid) {
      setMessage("Please enter the correct CAPTCHA");
      return;
    }
    if (!isTermsChecked) {
      setMessage("Please accept the terms and conditions");
      return;
    }
    localStorage.removeItem('formData');
    setMessage(null);
    
    const requestConfig = {
      headers: {
        "x-api-key": process.env.REACT_APP_X_API_KEY,
      },
    };
    const requestBody = {
      email: email,
      username: email,
      name: name,
      password: password,
      designation:designation,
      company:company,
      phone:phone,
      gender:gender,
      industry:industry,
      lastVisitedPage: '/opening',
    };
    // console.log("Request Body: ", requestBody); // Add this console.log statement
    axios
      .post(registerUrl, requestBody, requestConfig)
      .then((response) => {
        //console.log("Response: ", response); // Add this console.log statement
        setMessage("Registration Successful");

      })
      .catch((error) => {
        // console.log("Error: ", error); // Add this console.log statement
        if (error.response.status === 401 || error.response.status === 403) {
          setMessage(error.response.data.message);
        } else {
          setMessage(
            "sorry....the backend server is down!! please try again later"
          );
        }
      });
  };
  const handleNameChange = (event) => {
    const updatedName = event.target.value;
    setName(updatedName); // Update the state
    const updatedFormData = { ...formData, name: updatedName };
    setFormData(updatedFormData); // Update the form data state
    localStorage.setItem('formData', JSON.stringify(updatedFormData)); // Update local storage
  };
  const handleEmailChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail); // Update the state
    const updatedFormData = { ...formData, email: updatedEmail };
    setFormData(updatedFormData); // Update the form data state
    localStorage.setItem('formData', JSON.stringify(updatedFormData)); // Update local storage
  };
  const handleCompanyChange = (event) => {
    const updatedCompany = event.target.value;
    setCompany(updatedCompany); // Update the state
    const updatedFormData = { ...formData, company: updatedCompany };
    setFormData(updatedFormData); // Update the form data state
    localStorage.setItem('formData', JSON.stringify(updatedFormData)); // Update local storage
  };
  const handleDesignationChange = (event) => {
    const updatedDesignation = event.target.value;
    setDesignation(updatedDesignation); // Update the state
    const updatedFormData = { ...formData, designation: updatedDesignation };
    setFormData(updatedFormData); // Update the form data state
    localStorage.setItem('formData', JSON.stringify(updatedFormData)); // Update local storage
  };
  const handleMobileChange = (event) => {
    const updatedPhone = event.target.value;
    setPhone(updatedPhone); // Update the state
    const updatedFormData = { ...formData, phone: updatedPhone };
    setFormData(updatedFormData); // Update the form data state
    localStorage.setItem('formData', JSON.stringify(updatedFormData)); // Update local storage
  };
  const handlePasswordChange = (event) => {
    const updatedPassword = event.target.value;
    setPassword(updatedPassword); // Update the state
    const updatedFormData = { ...formData, password: updatedPassword };
    setFormData(updatedFormData); // Update the form data state
    localStorage.setItem('formData', JSON.stringify(updatedFormData)); // Update local storage
  };
  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData); // Update the form data state
      setName(parsedData.name);
      setEmail(parsedData.email);
      setCompany(parsedData.company);
      setDesignation(parsedData.designation);
      setPhone(parsedData.phone);
      setPassword(parsedData.password); // Update the state for each field
      // Set other fields as needed
    }
  }, []);
  if(message && message==="Registration Successful"){
    navigate("/login");
  }
 

  return (
    <div className="grad-bg">
      <div className="signup-bg">
        <Light />
        <form className="honey-comb" onSubmit={submitHandler}>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={opacityInc}
            transition={pageTransition}
          >
            <img className="drop-shadow" src={DropShadow} alt="" />
          </motion.div>

          <motion.div
            className="signup-box"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={rotateAndSlideAnimation}
            transition={pageTransition}
          >
            <div className="signup-content">
              <img className="signup-isg-logo" src={isgLogo} alt="Logo" />
              <input
                className="signup-username signup-user"
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
              <input
                className="signup-username"
                type="text"
                placeholder="Company"
                value={company}
                onChange={handleCompanyChange}
              />
              <div className="drop-container">
                <GenderDropdown onGenderChange={handleGenderChange}/>
                <IndustryDropdown onIndustryChange={handleIndustryChange} />
              </div>
              <input
                className="signup-username"
                type="text"
                placeholder="Designation"
                value={designation}
                onChange={handleDesignationChange}
              />
              <input
                className="signup-username"
                type="email"
                placeholder="Email"
                value={email}
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                size="64" maxLength="64"
                title="Please provide a valid email address."
                onChange={handleEmailChange}
              />
              <input
                className="signup-password"
                type="password"
                placeholder="Password"
                value={password}
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$"
                title="Your password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters."
                onChange={handlePasswordChange}
              />
              <input
                className="signup-username"
                type="number"
                placeholder="Mobile"
                value={phone}
                onChange={handleMobileChange}
              />
              <Captcha onCaptchaValidChange={handleCaptchaValidChange} />
              <div className="check-container-signup">
              <input type="checkbox" checked={isTermsChecked} onChange={handleTermsChange} />
                <label className="terms">
                  By checking this box, I affirm that I have read the <a href="/privacypolicy">Privacy Policy</a>
                  , agree to sharing my data, having it stored and
                  processed by ISG.
                </label>
              </div>
              <div className="btn-container">
                <button className="signup button">Submit</button>
                <button className="login button" onClick={()=>{
                  navigate("/login")
                }}>Login</button>
              </div>
             { message &&  <p className="message" id="message">{message}</p>}
            </div>
            
          </motion.div>
           
        </form>
      </div>
    </div>
  );
}

export default Signup;






// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./Signup.css";
// import isgLogo from "../images/isglogo.png";
// import GenderDropdown from "../components/GenderDropdown";
// import IndustryDropdown from "../components/IndustryDropdown";
// import Captcha from "../components/Captcha";
// import DropShadow from "../images/DropShadowResized.png";
// import Light from "../components/Light";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const rotateAndSlideAnimation = {
//   initial: {
//     transform:
//       "perspective(500rem) rotateY(60deg) translateX(-290%) scaleX(-50%) scaleY(-50%)",
//     opacity: 0,
//   },
//   animate: {
//     transform:
//       "perspective(500rem) rotateY(0deg) translateX(0%) scaleX(100%) scaleY(100%)",
//     opacity: 1,
//     transition: {
//       duration: 2,
//       delay: 0,
//       ease: "easeInOut",
//     },
//   },
//   exit: {
//     transform: "translateX(200%)",
//     opacity: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//     },
//   },
// };
// const pageTransition = {
//   type: "tween",
//   ease: "anticipate",
//   duration: 0.1,
// };
// const opacityInc = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: 1,
//     transition: {},
//   },
//   exit: {
//     opacity: 0,
//     duration: 1,
//   },
// };

// const registerUrl =
//   "https://vyw54xaie6.execute-api.ap-south-1.amazonaws.com/prod/register";
// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [designation, setDesignation] = useState("");
//   const [company, setCompany] = useState("");
//   const [phone, setPhone] = useState();  //changes on 25Sep2023
//   const [message, setMessage] = useState(null);
//   const [gender, setGender] = useState("");
//   const [industry, setIndustry] = useState("");
//   // const [timeStamp,setTimeStamp]=useState("");
//   const [isCaptchaValid, setIsCaptchaValid] = useState(false);
//   const [isTermsChecked, setIsTermsChecked] = useState(false);
//   function getCurrentTimestamp() {
//     return new Date().toISOString();
//   }
  
//   const rawtimeStamp=getCurrentTimestamp();
//   const timeStamp=toString(rawtimeStamp);
//   console.log(timeStamp)

//   const navigate=useNavigate();
//   const handleGenderChange = (selectedOption) => {
//     setGender(selectedOption);
//   };
//   const handleIndustryChange = (selectedOption) => {
//     setIndustry(selectedOption);
    
//   };
//   const handleCaptchaValidChange = (valid) => {
//     setIsCaptchaValid(valid);
//   };
//   const handleTermsChange = (event) => {
//     setIsTermsChecked(event.target.checked);
//   };
//   const submitHandler = (event) => {
//     event.preventDefault();
//     if (email.trim() === "" || name.trim() === "" || password.trim() === "") {
//       setMessage("All fields are required");
//       return;
//     }
//     if (!isCaptchaValid) {
//       setMessage("Please enter the correct CAPTCHA");
//       return;
//     }
//     if (!isTermsChecked) {
//       setMessage("Please accept the terms and conditions");
//       return;
//     }
//     setMessage(null);
//     const requestConfig = {
//       headers: {
//         "x-api-key": process.env.REACT_APP_X_API_KEY,
//       },
//     };
//     const requestBody = {
//       email: email,
//       username: email,
//       timestamp:new Date().toISOString(),
//       name: name,
//       password: password,
//       designation:designation,
//       company:company,
//       phone:phone,
//       gender:gender,
//       industry:industry,
//       lastVisitedPage: '/opening',
//     };
//     console.log("Request Body: ", requestBody); // Add this console.log statement
//     axios
//       .post(registerUrl, requestBody, requestConfig)
//       .then((response) => {
//         console.log("Response: ", response); // Add this console.log statement
//         setMessage("Registeration Successful");

//       })
//       .catch((error) => {
//         console.log("Error: ", error); // Add this console.log statement
//         if (error.response.status === 401 || error.response.status === 403) {
//           setMessage(error.response.data.message);
//         } else {
//           setMessage(
//             "sorry....the backend server is down!! please try again later"
//           );
//         }
//       });
//   };

//   return (
//     <div className="grad-bg">
//       <div className="signup-bg">
//         <Light />
//         <form className="honey-comb" onSubmit={submitHandler}>
//           <motion.div
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             variants={opacityInc}
//             transition={pageTransition}
//           >
//             <img className="drop-shadow" src={DropShadow} alt="" />
//           </motion.div>

//           <motion.div
//             className="signup-box"
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             variants={rotateAndSlideAnimation}
//             transition={pageTransition}
//           >
//             <div className="signup-content">
//               <img className="signup-isg-logo" src={isgLogo} alt="Logo" />
//               <input
//                 className="signup-username signup-user"
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(event) => setName(event.target.value)}
//               />
//               <input
//                 className="signup-username"
//                 type="text"
//                 placeholder="Company"
//                 value={company}
//                 onChange={(event) => setCompany(event.target.value)}
//               />
//               <div className="drop-container">
//                 <GenderDropdown onGenderChange={handleGenderChange}/>
//                 <IndustryDropdown onIndustryChange={handleIndustryChange} />
//               </div>
//               <input
//                 className="signup-username"
//                 type="text"
//                 placeholder="Designation"
//                 value={designation}
//                 onChange={(event) => setDesignation(event.target.value)}
//               />
//               <input
//                 className="signup-username"
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//               />
//               <input
//                 className="signup-password"
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//               />
//               <input
//                 className="signup-username"
//                 type="number"
//                 placeholder="Mobile"
//                 value={phone}
//                 onChange={(event) => setPhone(event.target.value)}
//               />
//               <Captcha onCaptchaValidChange={handleCaptchaValidChange} />
//               <div className="check-container-signup">
//               <input type="checkbox" checked={isTermsChecked} onChange={handleTermsChange} />
//                 <label className="terms">
//                   By checking this box, I affirm that I have read the <a href="/privacypolicy">Privacy Policy</a>
//                   , agree to sharing my data, having it stored and
//                   processed by ISG.
//                 </label>
//               </div>
//               <div className="btn-container">
//                 <button className="signup button">Submit</button>
//                 <button className="login button" onClick={()=>{
//                   navigate("/login")
//                 }}>Login</button>
//               </div>
//              { message &&  <p className="message" id="message">{message}</p>}
//             </div>
            
//           </motion.div>
           
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;
