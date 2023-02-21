// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/Home';
import { useEffect, useState } from 'react';
import QuizzQ from './components/QuizzQ';


function App() {

    const [DarkMode,setDarkMode] = useState(false)
    const [CurrCategory,setCurrCategory] = useState({
      id:'',
  })
    const [GameStatus,setGameStatus] = useState("home")
    const [Errmsg,setErrmsg] = useState('')
    const [currQCount,SetcurrQCount] = useState(0)
    const [TrivaData,setTriviaData] = useState([])
    const [isLoading,setisLoading] = useState(false)

    //Fetch Trivia Data
    async function GetTriviaData(id){
      const Data = await fetch(`https://opentdb.com/api.php?amount=10&category=${id}&difficulty=medium`)
      const res = await Data.json()
      setTriviaData(res.results)
      setisLoading(false)
      }

    function toggleMode(e){ 
      setDarkMode(prevData => !prevData)
    }

    function handleChange(e){
      setCurrCategory({id:e.value})
    }

    function StartGame(e){
      e.preventDefault();
      if(CurrCategory.id !== ''){
          GetTriviaData(CurrCategory.id)
          setisLoading(true)
          setGameStatus("quizz")
      }else{
          setErrmsg('Please select a Category from above given options')
      }
  }
    
    return (
      <div className="App">
        <Header darkmode ={DarkMode} toggle={toggleMode}/>
        {GameStatus === "home" && <Home darkmode ={DarkMode} errmsg={Errmsg} StartGame={StartGame} handleChange={handleChange}/>}
        {isLoading ?  <div className="quizz-main">Loading</div> :
        GameStatus === "quizz" && <QuizzQ darkmode ={DarkMode} id={currQCount} QuizData = {TrivaData}/>}  
        <Footer darkmode ={DarkMode}/>
        </div>
    );

}

export default App;