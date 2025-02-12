import express, { Application } from "express";
import cors from "cors";
import router from "./app/router";
import globalErrorHandlers from "./app/middleware/GlobalErrorHandler";
import notFound from "./app/middleware/NotFound";

const app: Application = express();
app.use(cors({ origin: [
  "http://localhost:3000",
],
credentials: true }));
app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("This is Portfolio API");
});

app.use(globalErrorHandlers);

// not found api
app.use(notFound);

export default app;
