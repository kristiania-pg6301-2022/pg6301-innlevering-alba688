import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
app.use(bodyParser.json());

app.get("/api/quiz", (req, res) => {
  res.json({
    question: "Hi, how are you?",
  });
});

app.post("/api/quiz", (req, res) => {
  res.sendStatus(200);
});

app.use(express.static(path.resolve("../client/dist")));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else next();
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
