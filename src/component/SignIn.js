import { Button } from "antd";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import  {auth}  from "../firbaseConfig.js";


function SignIn() {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  }
  const handleSubmit = () => {
    console.log("clicked")
    console.log(signInData.email)
    console.log(signInData.password)
      // const auth = getAuth();
      signInWithEmailAndPassword(auth, signInData.email, signInData.password)
        .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user)
              navigate("/subject")

              // ...
            })
            .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                });
        }  
  return (
    <div className="signup">
      <form>
        <div className="signup-heading">
          <h1>Sign In</h1>
        </div>
        <div className="center-divider"></div>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required="" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required="" onChange={handleChange}/>
        <br />
        <br />
        <div>
          <Button onClick={handleSubmit}>Log In</Button>
          <Link to="/signup" className="navigate">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
