import * as React from "react";
import ReactDOM from "react-dom";
import { AnswerPage, FrontPage, QuestionPage } from "../quizApp";

describe("Quiz Application", () => {
  it("Shows a question", () => {
    const element = document.createElement("div");
    ReactDOM.render(<QuestionPage />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("Shows front page", () => {
    const element = document.createElement("div");
    ReactDOM.render(<FrontPage />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("Shows answer page", () => {
    const element = document.createElement("div");
    ReactDOM.render(<AnswerPage />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });
});
