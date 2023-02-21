import CategoriesData from "../CategoriesData";
import Select from 'react-select';


export default function Home(props){

    return (
            <div className={props.darkmode ? "landing-page-dark":"landing-page"}>
               <img src="./images/Vector.png" alt="landing" className="landing-img"></img>
               <h1>Trivia Challenge</h1>
               <p>You will receive 10 question can you answer all right?</p>
               <form className="landing-category">
                   <label htmlFor="quiizcat" >Choose a Category</label> 
                    <Select name="quiizcat" id="quiizcat" onChange={props.handleChange} options={CategoriesData} required/>
                    {props.errmsg && props.errmsg}
                <button className="start-btn" onClick={props.StartGame}>Start Game</button>
                </form>
            </div>
        )
}