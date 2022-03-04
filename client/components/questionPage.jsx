import React from "react";

import { postJSON, fetchJSON } from "../util/http.jsx";
import { useLoader } from "../util/useLoader";
import { Link } from "react-router-dom";

function QuestionPage({ question, onReload }) {
  async function handleAnswer(answer) {
    const { id } = question;
    await postJSON("/api/answer", { id, answer });
    onReload();
  }

  return (
    <div>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((a) => (
          <p key={a}>
            <button onClick={() => handleAnswer(a)}>
              {question.answers[a]}
            </button>
          </p>
        ))}
      <Link to="/">Go back</Link>
    </div>
  );
}

export function QuestionComponent() {
  const { loading, error, reload, data } = useLoader(async () =>
    fetchJSON("/api/question")
  );

  const question = data;

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return (
      <div style={{ border: "1px solid red", background: "Pink" }}>
        An error occurred: {error.toString()}
      </div>
    );
  }

  return <QuestionPage question={question} onReload={reload} />;
}
