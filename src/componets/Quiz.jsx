import { useState, useEffect, useRef } from "react";

import questions from "../data/questions";
import { chronometer } from "../assets";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(questions);
  const [timer, setTimer] = useState(0);
  const timerIntervalRef = useRef(null); // Create a ref for the timer interval
  const [answerIndex, setAnswerIndex] = useState(null);

  // Function to start the timer
  const startTimer = () => {
    let startTime = Date.now(); // Record the start time
    timerIntervalRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime; // Calculate elapsed time in milliseconds
      setTimer(elapsedTime); // Update the timer
    }, 1); // Update the timer every 1 millisecond
  };

  // Initialize the timer when the component mounts
  useEffect(() => {
    randomizeQuestions();
    startTimer(); // Start the timer

    // Clean up the interval when the component unmounts
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, []);

  const randomizeQuestions = () => {
    const shuffledQuestions = questions
      .map((question) => {
        // Shuffle the answer options for each question
        const shuffledOptions = question.answerOptions
          .map((option) => ({ option, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ option }) => option);

        // Return the shuffled question object
        return { ...question, answerOptions: shuffledOptions };
      })
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setShuffledQuestions(shuffledQuestions);
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setTimer(0); // Reset the timer
    randomizeQuestions();
    startTimer(); // Restart the timer
    setAnswerIndex(null);
    setCurrentAnswer(null);
  };

  const handleAnswerClick = (currentAnswer) => {
    if (currentAnswer === null) {
      return;
    }
    if (!currentAnswer) {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current); // Clear the timerInterval
      }
      setShowScore(true);
    }
    if (currentAnswer) {
      setScore(score + 1);
      setAnswerIndex(null);
      setCurrentAnswer(null);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current); // Clear the timerInterval
      }
      setShowScore(true);
    }
  };

  // Convert the timer value to seconds and milliseconds for display
  const formattedSeconds = Math.floor(timer / 1000);
  const formattedMilliseconds = (timer % 1000).toString().padStart(3, "0");

  return (
    <>
      <div className="flex  justify-end items-center m-auto max-w-[700px] h-[100px]">
        <img src={chronometer} alt="timer" />
        <p>
          Tiempo: {formattedSeconds}:{formattedMilliseconds} segundos
        </p>
      </div>
      <div className="flex flex-col justify-center items-center border-[1px] m-auto max-w-[700px] p-5 sm:p-[120px] shadow-md shadow-black-500/50">
        {showScore ? (
          <div>
            <p>
              Contestaste bien {score} de {shuffledQuestions.length} preguntas
            </p>
            <button
              className="text-[20px] bg-red-700 text-white w-full py-[8px] mt-[20px] hover:bg-red-800"
              onClick={() => restartQuiz()}
            >
              Volver a intentarlo
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center mb-10">
              <p className="mx-2 bg-red-700 w-[50px] h-[50px] rounded-full text-center text-white text-[35px]">
                {currentQuestion + 1}
              </p>
              <p className="text-gray-400">
                {shuffledQuestions[currentQuestion].questionText}
              </p>
            </div>
            <div className="w-full">
              {shuffledQuestions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <div
                    className={`${
                      answerIndex === index
                        ? "bg-gray-500 text-white"
                        : "bg-white text-red-700"
                    } rounded-md p-2 w-full cursor-pointer border-[2px] border-bg-gray mt-[20px] text-center font-bold hover:bg-gray-500 hover:text-white`}
                    key={index}
                    onClick={() => (
                      setCurrentAnswer(answerOption.isCorrect),
                      setAnswerIndex(index)
                    )}
                  >
                    {answerOption.answerText}
                  </div>
                )
              )}
            </div>
            <button
              className="text-[20px] bg-red-700 text-white w-full py-[8px] mt-[20px] hover:bg-red-800"
              onClick={() => handleAnswerClick(currentAnswer)}
            >
              SIGUIENTE
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
