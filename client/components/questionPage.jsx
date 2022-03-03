import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { randomQuestion, isCorrectAnswer } from "../../server/questions";

export const QuestionContext = React.createContext({ randomQuestion });

export function QuestionPage({ setTotalAnswered, setCorrectAnswer }) {
  const { randomQuestion } = useContext(QuestionContext);

  const [question] = useState(randomQuestion());
  const navigate = useNavigate();

  function handleAnswer(a) {
    setTotalAnswered((count) => count + 1);
    if (isCorrectAnswer(question, a)) {
      setCorrectAnswer((count) => count + 1);
      navigate("/answer/correct");
    } else {
      navigate("/answer/wrong");
    }
  }

  return (
    <div>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((a) => (
          <p key={a} data-testid={a}>
            <button onClick={() => handleAnswer(a)}>
              {question.answers[a]}
            </button>
          </p>
        ))}
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}
