import {nanoid} from "nanoid";
import { useState,useEffect } from "react";
import Timer from "./Timer";

export default function QuizzQ(props) {
    const Mode = props.darkmode
    // const Incorrect_ans = props.data.incorrect_answers
    // const Correct_ans = props.data.correct_answer
    // const Answers = [...Incorrect_ans,Correct_ans]
    // let randomValue = Answers[Math.floor(Math.random() * Answers.length)];

    return (           
        <div key={nanoid()} className={Mode ? "quizz-main-dark" : "quizz-main"}>
            <p className="quizz-head-count">Question {props.id + 1} of {props.QuizData && props.QuizData.length}</p>
            <p className="quizz-head-category">{props.QuizData[props.id].category}</p>
            {Timer && <Timer/>}
            <div className="quizz-section">
            {/* <p className="quizz-question" key={nanoid()}>{props.QuizData[props.id].question}</p> */}
            </div>
            {/* <p>Correct Score - {currAns}</p> */}
        </div>
        )
}
