import express from "express";
import { isCorrectAnswer, Questions, randomQuestion } from "./questions.js";

export const QuizApp = express.Router();

QuizApp.get("/question", (req, res) => {
  const { id, question, answers } = randomQuestion();
  res.json({
    id,
    question,
    answers,
  });
});

QuizApp.post("/answer", (req, res) => {
  const { id, answer } = req.body;

  const question = Questions.find((q) => q.id === id);

  if (!question) {
    return res.status(404);
  }

  if (isCorrectAnswer(question, answer)) {
    return res.json({ result: "true" });
  } else {
    return res.json({ result: "false" });
  }
});
