import React from "react";
import { Link, Routes, Route } from "react-router-dom";

export function AnswerPage() {
  return (
    <div>
      <Routes>
        <Route path={"correct"} element={<h1>Correct.</h1>} />
        <Route path={"wrong"} element={<h1>Wrong answer.</h1>} />
      </Routes>
      <button>
        <Link to={"/question"}>New question</Link>
      </button>
      <button>
        <Link to={"/"}>Show score</Link>
      </button>
    </div>
  );
}
