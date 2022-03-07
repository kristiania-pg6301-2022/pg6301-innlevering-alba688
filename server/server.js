import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { QuizApp } from "./QuizApp.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/api", QuizApp);

// serve files from dist
app.use(express.static(path.resolve("../client/dist")));

//middleware
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    res.sendStatus(404);
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
