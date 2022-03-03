import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FrontPage } from "./components/frontPage";
import { QuestionPage } from "./components/questionPage";
import { AnswerPage } from "./components/answerPage";

export function Application() {
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <FrontPage
            totalAnswered={totalAnswered}
            correctAnswer={correctAnswer}
          />
        }
      />
      <Route
        path={"/question"}
        element={
          <QuestionPage
            setTotalAnswered={setTotalAnswered}
            setCorrectAnswered={setCorrectAnswer}
          />
        }
      />
      <Route path={"/answer/*"} element={<AnswerPage />} />
      <Route path={"*"} element={<h1>Not found</h1>} />
    </Routes>
  );
}
