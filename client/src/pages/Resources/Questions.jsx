import "./resources.css"
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import data from './data.json';
import Swal from 'sweetalert2'
import AnswerModel from "./AnswerModel";

function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(data.questions.length).fill(null));
  const [ishow, setishow] = useState(false)

  const handleOptionChange = (event) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = event.target.value;
    setUserAnswers(updatedUserAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmitQuiz = () => {
    console.log(userAnswers)
    const correctAnswers = data.questions.filter(
      (question,i) => question.answer === userAnswers[i]
    );
    const score = (correctAnswers.length / data.questions.length) * 100;
    // Swal.fire(
    //   'Score',
    //   `Your score is ${score.toFixed(2)}%`,
    //   'info'
    // )

    Swal.fire({
      title: 'Score',
      text:`Your score is ${score.toFixed(2)}%`,
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: 'okay',
      icon:'info'
    }).then((result) => {
      if (result.isConfirmed) {
        setishow(true)
      } 
    })

  };


  const handleClose =()=>{
    setCurrentQuestion(0);
    setUserAnswers([])
    setishow(false);
  }

  const renderQuestion = () => {
    const question = data.questions[currentQuestion];
    return (
      <>
        <h2 className="question-text">{question.question}</h2>
        <div className="options" style={{paddingBottom:'35px'}}>
          {question.options.map((option) => (
            <div key={option} className="child" style={{paddingTop:'10px'}}>
                <input
                 type="radio"
                  value={option}
                  checked={userAnswers[currentQuestion] === option}
                  onChange={handleOptionChange}
                />
                <span>{option}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="quiz">
        <div>
            {renderQuestion()}
            <div className="btns">
            {currentQuestion > 0 ? (
                <Button variant="secondary" onClick={handlePrevQuestion}>
                Previous Question
                </Button>
            ) : null}
            {currentQuestion < data.questions.length - 1 ? (
                <Button
                variant="primary"
                disabled={!userAnswers[currentQuestion]}
                onClick={handleNextQuestion}
                >
                Next Question
                </Button>
            ) : (
                <Button variant="success"  onClick={handleSubmitQuiz}>
                Submit Quiz
                </Button>
            )}
        </div>
        </div>
        <AnswerModel data={data} show={ishow} handleClose={handleClose} />
    </div>
  );
}

export default Questions;

