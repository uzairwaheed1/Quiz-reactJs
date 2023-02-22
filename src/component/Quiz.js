import { Button, Radio } from "antd";
import React, { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "../context.js";
import "./Quiz.css";
import QuizSubject from "./QuizSubject";
import { useContext } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";


function Quiz() {
  const location = useLocation();
  
  var subject = location.state;
  console.log(subject);
 
  const { timer, sec, minutes, stop, updateStop } = useContext(MyContext);


  

  const [answer, setAnswer] = useState();
  const [iteration, setIteration] = useState(0);
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState();
  const getAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const checkAnswer = () => {
    console.log(answer);
    console.log(subject[iteration].correct);
    answer === subject[iteration].correct
      ? setScore(score + 1)
      : setScore(score + 0);
    if (iteration < 9) {
      setIteration(iteration + 1);
    } else if (iteration === 9) {
      percentageCalc();
      updateStop(true);
    }
    console.log(score);
    setAnswer("");
  };

  const percentageCalc = () => {
    setPercentage((score / subject.length) * 100);
  };

  useEffect(() => {
    // stop ? setIteration(9):
    if (stop) {
      setIteration(9);
      percentageCalc();
      console.log(score);
    }
  }, [stop]);
  return (
    <>
      {stop ? (
        percentage > 50 ? (
          <div className="question-display">
            <div>
              <div className="circular-progress">
                <CircularProgressWithLabel
                  color="success"
                  size={200}
                  thickness={1.8}
                  value={percentage}
                />
              </div>
              <div className="remark">
                {percentage > 80 ? (
                  <h1>You aced the test, congratulations!</h1>
                ) : (
                  <h1>You passed! Great job!</h1>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="question-display">
            <div>
              <div className="circular-progress">
                <CircularProgressWithLabel
                  color="error"
                  size={200}
                  thickness={1.8}
                  value={percentage}
                  style={{ border: '2px solid black' }}

                />
              </div>
              <div className="remark">
                {/* <p>you passed the Test</p> */}
                {/* <h1>You passed! Great job!</h1> */}
                <h1>Test unsuccessful, try again.</h1>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="question-display">
          <div>
            <div className="timer">
              <p>
                {minutes}:{sec}
              </p>
            </div>
            <h3>{subject[iteration].ques}</h3>
            <Radio.Group onChange={getAnswer} value={answer}>
              <div className="radio-input">
                <Radio value="opt1">{subject[iteration].opt1}</Radio>
              </div>
              <div className="radio-input">
                <Radio value="opt2">{subject[iteration].opt2}</Radio>
              </div>
              <div className="radio-input">
                <Radio value="opt3">{subject[iteration].opt3}</Radio>
              </div>
              <div className="radio-input">
                <Radio value="opt4">{subject[iteration].opt4}</Radio>
              </div>{" "}
            </Radio.Group>

            <div>
              <Button onClick={checkAnswer}>Next</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz;
