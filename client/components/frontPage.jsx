import React from "react";
import { Link } from "react-router-dom";

export function FrontPage({ totalAnswered, correctAnswer }) {
  return (
    <div>
      <h1>Quiz Application</h1>
      <p data-testid={"status"}>
        Your score: {correctAnswer} correct of {totalAnswered}
      </p>
      <Link to={"/question"}>
        <button>Answer a new question</button>
      </Link>
    </div>
  );
}
