import { Button, Card } from "antd";
import React, { useContext, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firbaseConfig.js";
import { useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import "./QuizSubject.css";
import { useNavigate } from "react-router-dom";
import Link from "antd/es/typography/Link.js";
import {MyContext} from "../context.js";
import Quiz from "./Quiz.js";
import {typeScript,javaScript, pythonQuiz, reactJSQuiz, cSharp, javaQuiz} from "../data.js";

function QuizSubject() {
  const [name, setName] = useState("");
  // const [uid, setUid] = useState("")

  const navigate = useNavigate()
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // console.log(uid);
        // setUid(uid)
        getData(uid);
      } else {
        // User is signed out
        // ...
        console.log("no");
      }
    });
  }, []);

  // this function is for getting name of user from database
  const getData = async (uid) => {
    const db = getFirestore(app);
    // console.log(uid);
    const docRef = doc(db, "data", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setName(docSnap.data().name);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

    
  };

  
  const {timer, sec, minutes, stop}  = useContext(MyContext)
  // console.log(sec)
  // console.log(minutes)
  // console.log(stop)
  return (
    <>
      <div className="sub-main">
        <h1>Welcome, {name} </h1>
        <div className="center-divider"></div>

        <div className="subjects-card">
          <div>
            <Card
              title="Python"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>Total Questions: 10</p>
              <p>Total Time: 10 Minutes</p>
              <div className="start-btn-quiz">
                <Button onClick={() => {navigate('/quiz', {state: pythonQuiz}); timer()}}>Start</Button>
              </div>
            </Card>
          </div>
          <div>
            <Card
              title="Javascript"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>Total Questions: 10</p>
              <p>Total Time: 10 Minutes</p>
              <div className="start-btn-quiz">
                <Button onClick={() => {navigate('/quiz', {state: javaScript}); timer()}}>Start</Button>
              </div>
            </Card>
          </div>
          <div>
            <Card
              title="TypeScript"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>Total Questions: 10</p>
              <p>Total Time: 10 Minutes</p>
              <div className="start-btn-quiz">
                {/* <Link to={{
                  pathname: "/quiz",
                  state: "Typescript"
                }}> */}
                <Button onClick={() => {navigate('/quiz', {state: typeScript}); timer()}} >Start</Button>
                {/* </Link> */}
              </div>
            </Card>
          </div>
        </div>

        <div className="subjects-card">
          <div>
            <Card
              title="React Js"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>Total Questions: 10</p>
              <p>Total Time: 10 Minutes</p>
              <div className="start-btn-quiz">
                <Button onClick={() => {navigate('/quiz', {state: reactJSQuiz}); timer()}}>Start</Button>
              </div>
            </Card>
          </div>
          <div>
            <Card
              title="C#"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>Total Questions: 10</p>
              <p>Total Time: 10 Minutes</p>
              <div className="start-btn-quiz">
                <Button onClick={() => {navigate('/quiz', {state: cSharp}); timer()}}>Start</Button>
              </div>
            </Card>
          </div>
          <div>
            <Card
              title="Java"
              bordered={false}
              style={{
                width: 300,
              }}
            >
              <p>Total Questions: 10</p>
              <p>Total Time: 10 Minutes</p>
              <div className="start-btn-quiz">
                <Button onClick={() => {navigate('/quiz', {state: javaQuiz}); timer()}}>Start</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizSubject;
