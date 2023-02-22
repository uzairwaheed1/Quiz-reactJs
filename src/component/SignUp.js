import { Button } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import  {auth}  from "../firbaseConfig.js";
import { doc, setDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import app from "../firbaseConfig.js";


import "./SignUp.css";
function SignUp() {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();


  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmit = async () => {
    console.log(signUpData.email);
    console.log(signUpData.username);
    console.log(signUpData.password);


    createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
      .then((userCredential) => {
        // Signed in

        
        const user = userCredential.user;
        console.log(user)
        const db = getFirestore(app);

        const dataSaved = async () => {
          await setDoc(doc(db, "data", user.uid), {
            name: signUpData.username,

          });
        }
        dataSaved()
        navigate("/subject")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <>
      <div className="signup">
        <form>
          <div className="signup-heading">
            <h1>Sign Up</h1>
          </div>
          <div className="center-divider"></div>

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required=""
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required=""
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required=""
            onChange={handleChange}
          />
          <br />
          <br />
          <div>
            <Button onClick={handleSubmit}>Sign Up</Button>
            <Link to="/signin" className="navigate">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
