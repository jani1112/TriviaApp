import { useState,useEffect } from "react";
export default function Timer(){
    
    const [Timer,SetTimer] = useState(new Date())

    function refreshClock() {
        SetTimer(new Date());
      }

      useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
          clearInterval(timerId);
        };
      }, []);

      return (
        <p className="quizz-head-timer">Time : {Timer.toLocaleTimeString()}</p>
      )
}