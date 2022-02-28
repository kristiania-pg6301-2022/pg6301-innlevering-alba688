import * as React from "react";
import ReactDOM from "react-dom";
import { QuestionPage } from "../quizApp";

describe("Quiz Application", () => {
  it("Shows a question", () => {
    const element = document.createElement("div");
    ReactDOM.render(<QuestionPage />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });
});