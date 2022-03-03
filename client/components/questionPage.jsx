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
