import React from "react";
import { Route, Routes } from "react-router-dom";
import { FrontPage } from "./components/frontPage";
import { QuestionComponent } from "./components/questionPage";

export function Application() {
  return (
    <Routes>
      <Route path={"/"} element={<FrontPage />} />
      <Route path={"/question"} element={<QuestionComponent />} />
      <Route path={"*"} element={<h1>Not found</h1>} />
    </Routes>
  );
}
