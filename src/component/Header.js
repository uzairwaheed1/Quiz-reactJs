import React from "react";
import { getAuth, signOut } from "firebase/auth";
import  {auth}  from "../firbaseConfig.js";
import { useNavigate } from "react-router-dom";


function Header() {

  const navigate = useNavigate();

  console.log(auth)
  const logout = () =>{
    // console.log( "logout")
    // const auth = getAuth();
    console.log(auth)
signOut(auth).then(() => {
  navigate("/")

}).catch((error) => {
  // An error happened.
})
  }
  return (
    <>
      <div className="header">
        <div className="logo">
            <img className="logo-img" src="./The Tech Test (3) (1).png" />
            <h3 className="logo-text"> The Tech Test </h3>
            {/* <img className="logo-text" src="./The Tech Test (2) (1).png" /> */}

        </div>
        {
          auth.currentUser === null  ? "" 
        : 
        <div className="logout-container">
        <button className="logout-btn" onClick={logout}>Logout</button>
        </div>

        }
      </div>
    </>
  );
}

export default Header;
