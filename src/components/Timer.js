import { useEffect, useState } from "react";
function Timer({gamestate}){
    const [Timer,SetTimer] = useState(120)

    useEffect(() => {
      const intervalId = setInterval(() => {
        SetTimer((prevTimeRemaining) => prevTimeRemaining - 1);
      }, 1000);
  
      if (Timer <= 0) { 
        alert("Times up!!")
        gamestate("end")
      }
      return () => {
        clearInterval(intervalId);     
      };
    }, [Timer,gamestate]);
    
    const minutes = Math.floor(Timer / 60);
    const seconds = Timer % 60;


    // function refreshClock() {
    //     SetTimer(new Date());
    //   }

    //   useEffect(() => {
    //     const timerId = setInterval(refreshClock, 1000);
    //     return function cleanup() {
    //       clearInterval(timerId);
    //     };
    //   }, []);

      return (
        <p className="quizz-head-timer">Time : {minutes}:{seconds < 10 ? `0${seconds}`: seconds}</p>
      )
}

export default Timer