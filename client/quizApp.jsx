import React from "react";
import { Link } from "react-router-dom";

export function QuestionPage() {
  return (
    <div>
      <h1>Question Page</h1>
      <div>
        <Link to={"/"}>Back</Link>
      </div>
    </div>
  );
}

export function FrontPage() {
  return (
    <div>
      <h1>Quiz Application</h1>
      <div>
        <Link to={"/question"}>Start quiz</Link>
      </div>
    </div>
  );
}

export function AnswerPage() {
  return (
    <div>
      <h1>Answer Page</h1>
    </div>
  );
}
