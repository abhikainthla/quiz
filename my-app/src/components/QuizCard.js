import React, { useState } from 'react'
import './QuizCard.css'
const QuizCard = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [wrongQuestions, setWrongQuestions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [clicked, setClicked] = useState(false);
    const reactQuestions = [
        {
          question: "What is React?",
          options: [
            "A server-side framework",
            "A front-end library",
            "A database management tool",
            "A CSS preprocessor"
          ],
          correctAnswer: "A front-end library"
        },
        {
          question: "What is a component in React?",
          options: [
            "A function that returns a JSX element",
            "A JavaScript variable",
            "A CSS class",
            "An HTML element"
          ],
          correctAnswer: "A function that returns a JSX element"
        },
        {
          question: "What is JSX?",
          options: [
            "JavaScript XML",
            "JSON Syntax Extension",
            "JavaScript Syntax Extension",
            "JavaScript and HTML"
          ],
          correctAnswer: "JavaScript XML"
        },
        {
          question: "How do you create a state in a functional component?",
          options: [
            "Using the useState hook",
            "Using the this.state property",
            "Using the setState method",
            "Using the useEffect hook"
          ],
          correctAnswer: "Using the useState hook"
        },
        {
          question: "What is the purpose of the useEffect hook?",
          options: [
            "To manage state in a component",
            "To perform side effects in a component",
            "To handle events in a component",
            "To fetch data from an API"
          ],
          correctAnswer: "To perform side effects in a component"
        },
        {
          question: "How do you pass data from a parent component to a child component?",
          options: [
            "Using props",
            "Using state",
            "Using context",
            "Using hooks"
          ],
          correctAnswer: "Using props"
        },
        {
          question: "What is the virtual DOM?",
          options: [
            "A lightweight copy of the actual DOM",
            "A way to manipulate the real DOM directly",
            "A new type of database",
            "A JavaScript library for managing state"
          ],
          correctAnswer: "A lightweight copy of the actual DOM"
        },
        {
          question: "What is the use of the key prop in React?",
          options: [
            "To uniquely identify elements in a list",
            "To set the id of an element",
            "To add styles to an element",
            "To handle form inputs"
          ],
          correctAnswer: "To uniquely identify elements in a list"
        },
        {
          question: "How do you handle events in React?",
          options: [
            "By adding event listeners directly to the elements",
            "By using inline event handlers in the HTML",
            "By using camelCase syntax for event handlers",
            "By using the addEventListener method"
          ],
          correctAnswer: "By using camelCase syntax for event handlers"
        },
        {
          question: "What is React Router used for?",
          options: [
            "To manage application state",
            "To make HTTP requests",
            "To handle routing in a React application",
            "To style React components"
          ],
          correctAnswer: "To handle routing in a React application"
        }
      ];

      const handleClick = (e) => {
        const selected = e.target.innerHTML;
        const correct = selected === reactQuestions[currentQuestion].correctAnswer;
    
        setSelectedOption(selected);
        setIsCorrect(correct);
        setClicked(true);
        setTimeout(() => {
          if (correct) {
            setCurrentScore(currentScore + 1);
          } else {
            setWrongQuestions([...wrongQuestions, reactQuestions[currentQuestion]]);
          }
    
          if (currentQuestion < reactQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setIsCorrect(null);
          } else {
            setShowScore(true);
          }

          setClicked(false);
        }, 2000); 
      };

  return (
    <>
     <div className={showScore ? 'hide-container':'container'}>
     <p>{currentQuestion+1}/{reactQuestions.length}</p>
        <h2>React Quiz</h2>
        <h4>Current Score:{currentScore}</h4>
        <div className='question'>
        <span>{currentQuestion+1}. </span> 
        <span>{
            reactQuestions[currentQuestion].question
            }</span>
        </div>
        
            <div className='options-container'>
        {
            reactQuestions[currentQuestion].options.map((option, index)=>{
                return <button onClick={handleClick} className={`option ${selectedOption === option ? (isCorrect ? 'correct' : 'incorrect') : ''}`} key={index}>{option}</button>
            })
        }
        <p className={clicked ? 'show-answer' : 'hide-answer'}>*Ans: {reactQuestions[currentQuestion].correctAnswer}</p>
        </div>
    </div>

    <div className={showScore ? 'showResult':'hideResult'}>
        <h2>Result</h2>
        <h4>Current Score:{currentScore}</h4>
        <h4>Wrong Questions:</h4>
        <ul>
            {wrongQuestions.map((element, index)=>{
                return <li key={index}><span><b>Question:</b> {element.question}</span>  <span><b>Answer:</b> {element.correctAnswer}</span></li>
                })}
        </ul>
    </div>
    </>
   
  )
}

export default QuizCard