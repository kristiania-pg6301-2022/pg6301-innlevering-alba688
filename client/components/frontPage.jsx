import React from "react";
import { Link } from "react-router-dom";

export function FrontPage() {
  return (
    <div>
      <h1>Quiz Application</h1>
      <p>Your score:</p>
      <Link to={"/question"}>
        <button>Answer a new question</button>
      </Link>
    </div>
  );
}
