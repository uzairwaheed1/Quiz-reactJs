import React, { createContext } from "react";
import { useState, useEffect } from "react";
import QuizSubject from "./component/QuizSubject";
import { useRef } from "react";

const MyContext = createContext();

function Context({ children }) {
  // console.log(children)
  const [sec, setSec] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [stop, setStop] = useState(false);
  const intervalRef = useRef();

  const timer = () => {
    clearInterval(intervalRef.current)
    setStop(false);
    setSec(0)
    setMinutes(5)
    intervalRef.current = setInterval(() => {
      setSec((sec) => sec - 1);
      // console.log(sec)
    }, 1000);

  
  };


  const updateStop = (value) => {
    setStop(value)
  }

  useEffect(() => {
    if (sec < 1 && minutes > 0) {
      setSec(59);
      setMinutes((minutes) => minutes - 1)

    }
    if (minutes <= 0 && sec <= 0) {
      // if(sec <= 0){
      setStop(true);
      setSec(0);
      clearInterval(intervalRef.current)
      // }
    }
  }, [sec, minutes]);

  return (
    <>
      <MyContext.Provider value={{ timer, sec, minutes, stop,updateStop }}>
        {children}
      </MyContext.Provider>
    </>
  );
}

export default Context;

export { MyContext };
