import React from "react";
import { Link } from "react-router-dom";
import { useLoader } from "../util/useLoader";
import { fetchJSON } from "../util/http";

export function FrontPage() {
  const { data: score, loading } = useLoader(async () =>
    fetchJSON("/api/score")
  );

  return (
    <div>
      <h1>Quiz Application</h1>
      {loading && <div>Loading...</div>}
      {score && (
        <div>
          Score: {score.correct} correct out of {score.answered} questions.
        </div>
      )}
      <br />
      <Link to={"/question"}>
        <button>Answer a new question</button>
      </Link>
    </div>
  );
}
