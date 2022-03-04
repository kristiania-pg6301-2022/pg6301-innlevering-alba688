import React from "react";
import { Link } from "react-router-dom";

import { postJSON, fetchJSON } from "../util/http.jsx";
import { useLoader } from "../util/useLoader";

function QuestionPage({ question, onReload }) {
  async function handleAnswer(answer) {
    const { id } = question;
    await postJSON("/api/answer", { id, answer });
    await onReload();
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
  const { reload, data } = useLoader(async () => fetchJSON("/api/question"));

  const question = data;

  if (!question) {
    return <div>Error no question</div>;
  }

  return <QuestionPage question={question} onReload={reload} />;
}
