import React,{useState} from 'react'
import './App.css';
import {questions} from './data'

function App() {
  const[currQuestion,setCurrQuestion] = useState(0);
  const[showScore,setShowScore] = useState(false);
  const[score,setScore] = useState(0);
  const[correctAns,setCorrectAns] = useState(false)

  const submitHandler = (isCorrect)=>{
    if(isCorrect === true){
      setScore(score+1);
      setCorrectAns(true)
    }
    
    setCorrectAns(false);

    if(currQuestion < questions.length-1)
    {
      setCurrQuestion(currQuestion+1);
    }
    else{
      setShowScore(true);
    }
  }

  const resetHandler = ()=>{
    setShowScore(false)
    setCurrQuestion(0)
    setScore(0)
  }

  return (
    <div className="App">
      {showScore?(
        <div className="score-section">
          <h2>You scored {score} out of {questions.length}</h2>
          <button className="btn" onClick={resetHandler}>Reset</button>
        </div>
      ) : (  
          <> 
            <div className="questions-section">
              <div className="question-count">
                <span>Question {currQuestion+1}</span>/{questions.length}
              </div>
              <div className="question-text">
                <h2>{questions[currQuestion].questionText}</h2>
              </div>
            </div>
            <div className="answer-section">
              {questions[currQuestion].answerOptions.map((ans)=>{
                return <button className={`${correctAns? 'btn correct':' btn incorrect'}`} onClick={()=>submitHandler(ans.isCorrect)}>{ans.answerText}</button>
              })}
            </div>
          </>
       )}
        </div> 
  );
}

export default App;
