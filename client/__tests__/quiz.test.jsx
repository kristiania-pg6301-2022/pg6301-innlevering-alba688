import * as React from "react";
import ReactDOM from "react-dom";
import { Application } from "../quizApp.jsx";
import { FrontPage } from "../components/frontPage";
import { QuestionComponent } from "../components/questionPage";
import { MemoryRouter } from "react-router";

const testQuestion = {
  id: 201,
  question: "What year is it?",
  answers: {
    answer_a: "1988",
    answer_b: "1673",
    answer_c: "2022",
    answer_d: "3121",
  },
};

describe("Client Quiz Application", () => {
  it("shows a random question", async function () {
    const element = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter initialEntries={["/question"]}>
        <QuestionComponent />
      </MemoryRouter>,
      element
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
