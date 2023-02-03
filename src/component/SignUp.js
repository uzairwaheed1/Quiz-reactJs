import React from "react";
import "./SignUp.css";
function SignUp() {
  return (
    <>
      <div className="signup">
        <form>
          <div className="signup-heading">
            <h1>Sign Up</h1>
          </div>
          <div className="center-divider"></div>

          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required="" />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required="" />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required="" />
          <br />
          <br />
          <div>

          <input type="submit" defaultValue="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
