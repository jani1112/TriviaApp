export default function Result(props){
 
    return (
        <div className={props.darkmode ? "quizz-end-dark" : "quizz-end"}>
            <p>You have scored {props.result} out of {props.questions} ({(props.result/props.questions) * 100}%)</p>
            <button className="restart-btn" onClick={props.Restart}>Restart Game</button>
        </div>
    )
}