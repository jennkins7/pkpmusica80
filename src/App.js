import React, { useState, useRef } from "react";
import questions from "./questions";
import "./App2.css";

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const audioRef = useRef(null);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // parar audio al contestar
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const nextQuestion = current + 1;
    if (nextQuestion < questions.length) {
      setCurrent(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section neon-title">
          ¡¡¡A ver cuántas has fallado!!! 🎶
          <p>Aciertos: {score} de {questions.length}</p>
        </div>
      ) : (
        <>
          {/* Render seguro */}
          {questions[current] && (
            <>
              {/* Barra de audio arriba */}
              <audio
                ref={audioRef}
                controls
                className="audio-player"
                src={questions[current].audio}
              />

              {/* Pregunta */}
              <div className="question-box">
                <h1 className="neon-title">
                  {questions[current].questionText}
                </h1>
              </div>

              {/* Respuestas */}
              <div className="answer-section">
                {questions[current].answerOptions.map((answer, index) => (
                  <button
                    key={index}
                    className="neon-button"
                    onClick={() => handleAnswerOptionClick(answer.isCorrect)}
                  >
                    {answer.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
