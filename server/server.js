import express from "express";

const app = express();

app.get("/api/quiz", (req, res) => {
  res.json({
    question: "Hi, how are you?",
  });
});

app.post("/api/quiz", (req, res) => {
  res.sendStatus(200);
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
