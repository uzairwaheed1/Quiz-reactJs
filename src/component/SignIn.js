import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
<div className="signup">
        <form>
          <div className="signup-heading">
            <h1>Sign In</h1>
          </div>
          <div className="center-divider"></div>

          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required="" />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required="" />
          <br />
          <br />
          <div>

          <Button>Log In</Button>
          <Link to='/signup' className="navigate">Sign Up</Link>
          </div>
        </form>
      </div>  )
}

export default SignIn