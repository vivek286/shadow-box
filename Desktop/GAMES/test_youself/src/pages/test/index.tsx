// import "./styles.css";
import React, { useState } from "react";
const data = [
  {
    id: "0",
    question: "Which letter of the alphabet has the most water?",
    answer: "C",
    variants: [`A`, `B`, `C`]
  },
  {
    id: "1",
    question: "What kind of dog keeps the best time?",
    answer: "Watchdog",
    variants: [`Watchdog`, `hotdog`, `Cutedog`]
  },
  {
    id: "2",
    question:
      "What time of day, when written in a capital letters, is the same forwards, backwards and upside down?",
    answer: "Noon",
    variants: [`Morning`, `Noon`, `Evening`]
  },

  {
    id: "3",
    question: "What has a face and two hands but no arms or legs?",
    answer: "Clock",
    variants: [`Clock`, `Watch`, `Person`]
  },
  {
    id: "4",
    question:
      "What five-letter word becomes shorter when you add two letters to it?",
    answer: "Short",
    variants: [`Long`, `Short`, `Little`]
  },

  {
    id: "5",
    question: "What has a neck but no head?",
    answer: "Bottle",
    variants: [`Pan`, `Bottle`, `Plate`]
  },

  {
    id: "6",
    question:
      "What starts with a 'P', ends with an 'E' and has thousands of letters?",
    answer: "Post Office",
    variants: [`Letter`, `Envelope`, `Post Office`]
  },
  {
    id: "7",
    question: "What has to be broken before you can eat it?",
    answer: "Egg",
    variants: [`Bread`, `Banana`, `Egg`]
  },
  {
    id: "8",
    question: "What begins with T, ends with T and has T in it?",
    answer: "Teapot",
    variants: [`Teapot`, `Teacup`, `Teatree`]
  },
  {
    id: "9",
    question: "Teddy bears are never hungry because they are always what?",
    answer: "Stuffed",
    variants: [`Full`, `Stuffed`, `Sleep`]
  },
  {
    id: "10",
    question: "What belongs to you but others use it more than you do?",
    answer: "Name",
    variants: [`Reputation`, `Name`, `Nickname`]
  }
];


export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswer, setMyAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);
  const [show, setShow] = useState(false);
  const [clickAnswer, setClickAnswer] = useState(false);

  const checkAnswer = (variant) => {
    setMyAnswer(variant);
    setClickAnswer(true);
  };

  const checkCorrectAnswer = () => {
    if (myAnswer === data[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const showAnswer = () => {
    setShow((show) => !show); //better to be toggled like this
  };
  const reset = () => {
    setShow(false);
    setClickAnswer(false);
  };

  const finishHandler = () => {
    if (currentQuestion === data.length - 1) {
      setFinish(true);
    }
  };

  const startOver = () => {
    setCurrentQuestion(0);
    setFinish(false);
    setMyAnswer("");
    setScore(0);
  };

  if (finish) {
    return (
      <div className="container m-4 p-4 mx-auto h-min-screen grid grid-rows-1 grid-cols-1 items-center">
        <div className="wrapper">
          <h3 className="m-4 p-2 h-30 text-center text-2xl font-bold">
            {`Game Over! Your Final Score is
            ${score}/${data.length - 1}
            points.`}
          </h3>
          <button
            className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
            onClick={() => startOver()}
          >
            Start Over
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container m-4 p-4 mx-auto h-min-screen grid grid-rows-1 grid-cols-1 items-center">
        <div className="wrapper">
          <h2 className="m-4 p-2 h-30 text-center text-2xl font-bold">
            {data[currentQuestion].question}
          </h2>
          <span className="m-2 border-2 border-black mx-auto px-2 bg-gray-600 text-pink-400 rounded-lg text-center">
            {`${currentQuestion}/${data.length - 1}`}
          </span>
          {data[currentQuestion].variants.map((variant) => (
            <div className="m-2 h-14 border-2 border-black mx-auto text-center">
              <p
                key={variant}
                className={`variant ${
                  myAnswer === variant
                    ? myAnswer === data[currentQuestion].answer
                      ? "correctAnswer"
                      : "incorrectAnswer"
                    : null
                }`}
                onClick={() => checkAnswer(variant)}
              >
                {variant}
              </p>
            </div>
          ))}

          {clickAnswer && (
            <button
              className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-200 text-blue-400 font-bold hover:bg-gray-400 hover:text-blue-600"
              onClick={() => showAnswer()}
            >
              Show Answer
            </button>
          )}
          {show && (
            <p className="m-2 h-14 mx-auto text-center">
              Correct Answer: {data[currentQuestion].answer}
            </p>
          )}

          {currentQuestion < data.length - 1 && (
            <button
              className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
              onClick={() => {
                setCurrentQuestion(currentQuestion + 1);
                checkCorrectAnswer();
                reset();
              }}
            >
              NEXT
            </button>
          )}

          {currentQuestion === data.length - 1 && (
            <button
              className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
              onClick={() => finishHandler()}
            >
              FINISH
            </button>
          )}

         
        </div>
      </div>
    );
  }
  
}
