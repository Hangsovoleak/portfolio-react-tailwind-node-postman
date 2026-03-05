import cors from "cors";

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://69a94259de5781fc1326a9fa--voleak-portfolio.netlify.app"
  ],
}));