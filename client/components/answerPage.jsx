import React from "react";
import { Link, Routes, Route } from "react-router-dom";

export function AnswerPage() {
  return (
    <div>
      <Routes>
        <Route path={"correct"} element={<h1>Correct answer.</h1>} />
        <Route path={"wrong"} element={<h1>Wrong answer.</h1>} />
      </Routes>
      <div>
        <Link to={"/question"}>
          <button>New question</button>
        </Link>
      </div>
      <div>
        <Link to={"/"}>
          <button>Show score</button>
        </Link>
      </div>
    </div>
  );
}
