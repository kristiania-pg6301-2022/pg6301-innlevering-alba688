import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FrontPage } from "./components/frontPage";
import { QuestionPage } from "./components/questionPage";
import { AnswerPage } from "./components/answerPage";

export function Application() {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route path={"/question"} element={<QuestionPage />} />
      <Route path={"/question/*"} element={<AnswerPage />} />
      <Route path={"*"} element={<h1>Not found</h1>} />
    </Routes>
  );
}
