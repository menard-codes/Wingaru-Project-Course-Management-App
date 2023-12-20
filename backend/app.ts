import express from "express";
import "dotenv/config";
import cors from "cors";

import coursesRouter from "./routes/coursesRoutes";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

app.use("/courses", coursesRouter);

app.use((req, res) => {
  res.json({
    status: 404,
    message: "404 Not Found",
  });
});
