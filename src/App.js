// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/Home';
import { useState } from 'react';
import QuizzQ from './components/QuizzQ';
import Result from './components/Result';
import Timer from './components/Timer';

function App() {
    const [DarkMode,setDarkMode] = useState(false)
    const [CurrCategory,setCurrCategory] = useState({
      id:'',
  })

    const [GameStatus,setGameStatus] = useState("home")
    const [Errmsg,setErrmsg] = useState('')
    const [currQCount,SetcurrQCount] = useState(0)
    const [currAns,SetcurrAns] = useState(0)
    const [TrivaData,setTriviaData] = useState([])
    const [isLoading,setisLoading] = useState(false)
    
    
    //Fetch Trivia Data
    // async function GetTriviaData(id){
    //   setisLoading(true)
    //   const Data = await fetch(`https://opentdb.com/api.php?amount=10&category=${id}&difficulty=medium`)
    //   const res = await Data.json()
    //   setTriviaData(res.results)
    //   setisLoading(false)
    //   }

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
          setisLoading(true)  
          GetTriviaData(CurrCategory.id)
          setGameStatus("quizz")
      }
      else{
          setErrmsg('Please select a Category from above given options')
      }
  }

      function NextQues(is_correct) {
        if(is_correct === true){
          SetcurrAns(prevData => prevData + 1)
        }

        if(currQCount + 1 < TrivaData.length){
          SetcurrQCount(prevQ => prevQ + 1)
        }else{
          setGameStatus("end")
        }
      }
      
      function RestartGame(){
        setGameStatus('home')
        setCurrCategory({id:''})
        setErrmsg('')
        SetcurrQCount(0)
        SetcurrAns(0)
        setTriviaData([])
      }
    
     const UpdateGameStatus = (state) => {
      setGameStatus(state);
     }
      

    return (
      <div className="App">
        {GameStatus === "home" || GameStatus === "end" ? 
        <Header darkmode ={DarkMode} toggle={toggleMode}/>
        :
        <Header darkmode ={DarkMode} toggle={toggleMode} timer={<Timer gamestate={UpdateGameStatus}/>} />
              }
        {GameStatus === "home" && <Home darkmode ={DarkMode} errmsg={Errmsg} StartGame={StartGame} handleChange={handleChange}/>}
        {isLoading ?  <div className="quizz-main"><span>Loading</span></div> :
        GameStatus === "quizz" && 
        <QuizzQ 
        darkmode ={DarkMode} 
        id={currQCount} 
        QuizData = {TrivaData} 
        Submit={NextQues}/>}          

        {GameStatus === "end" && <Result Restart= {RestartGame} darkmode={DarkMode} result={currAns} questions={TrivaData.length}/>}
        <Footer darkmode ={DarkMode}/>
        </div>
    );

}

export default App;