import {nanoid} from "nanoid";
import { useEffect } from "react";

export default function QuizzQ(props) {
    const Incorrect_ans = props.QuizData[props.id].incorrect_answers
    const Correct_ans = props.QuizData[props.id].correct_answer

    const OptionComp = Incorrect_ans.map((item) => ({
        "value" : item,
        "is_correct":false
    }))

    OptionComp.push({ 
    "value" : Correct_ans,
    "is_correct":true})

    const shuffle = (array) => {
        return array.sort(() => 0.5 - Math.random());
    };

    useEffect(() =>{
        shuffle(OptionComp)
    })


return (      
    <div className={props.darkmode ? "quizz-main-section-dark" :"quizz-main-section"}>     
        <div key={nanoid()} className="quizz-main">
            <p className="quizz-head-count">Question {props.id + 1} of {props.QuizData && props.QuizData.length}</p>
            <p className="quizz-head-category">{props.QuizData[props.id].category}</p>
        </div>
        <div className="question ml-sm-5 pl-sm-5 pt-2">
        <p dangerouslySetInnerHTML={{__html:props.QuizData[props.id].question}} className="quizz-question"/>
        
        <div className="quizz-options">
            {
                OptionComp.map((data) => {
                   return <button className="options" key={nanoid()} onClick={() => props.Submit(data.is_correct)}>{data.value}</button>
                })
            }
                    </div>
    </div>
    </div>
        )
}
