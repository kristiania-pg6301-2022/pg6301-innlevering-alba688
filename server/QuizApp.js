import express from "express";
import { isCorrectAnswer, Questions, randomQuestion } from "./questions.js";

export const QuizApp = express.Router();

QuizApp.get("/score", (req, res) => {
  const score = req.signedCookies.score
    ? JSON.parse(req.signedCookies.score)
    : {
        answered: 0,
        correct: 0,
      };

  res.json(score);
});

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
  console.log(id, answer);

  const score = req.signedCookies.score
    ? JSON.parse(req.signedCookies.score)
    : {
        answered: 0,
        correct: 0,
      };

  const question = Questions.find((q) => q.id === id);
  if (!question) {
    return res.status(404);
  }

  score.answered++;

  if (isCorrectAnswer(question, answer)) {
    score.correct++;
    res.cookie("score", JSON.stringify(score), { signed: true });
    return res.json({ result: "correct" });
  } else {
    res.cookie("score", JSON.stringify(score), { signed: true });
    return res.json({ result: "incorrect" });
  }
});
