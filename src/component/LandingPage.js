import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="main-landing">
        <div className="heading">
          <h1>WELCOME TO THE TECH TEST</h1>
        </div>
        <div className="landing-img">
          <img src="./cartoon-girl-studying-via-computer-at-home-vector-31017473-removebg-preview.png" />
        </div>
        <div className="description">
          <p>
            Assess your technical skills and knowledge with our comprehensive
            tech quizzes
          </p>
        </div>
        <div className="start-btn">
          <Link to={"/signup"}>
            <Button>Start Quiz</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
