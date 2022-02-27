import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h1>Quiz Application</h1>
    </div>
  );
}

export function QuestionPage() {
  return (
    <div>
      <h1>Question Page</h1>
    </div>
  );
}

function AnswerPage() {
  return (
    <div>
      <h1>Answer Page</h1>
    </div>
  );
}

export function QuizApplication() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/question"} element={<QuestionPage />} />
        <Route path={"/question/*"} element={<AnswerPage />} />
        <Route path={"*"} element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<QuizApplication />, document.getElementById("app"));
