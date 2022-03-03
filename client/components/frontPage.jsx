import React from "react";
import { Link } from "react-router-dom";

export function FrontPage() {
  return (
    <div>
      <h1>Quiz Application</h1>
      <div>
        <Link to={"/question"}>Start quiz</Link>
      </div>
    </div>
  );
}
