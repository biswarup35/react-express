import express from "express";
import morgan from "morgan";
import { AutoLoadRoutes } from "./utils/AutoLoadRoutes";
import path from "path";
import cors from "cors";

const app = express();
app.use(
  morgan(`:method :url :status :res[content-length] - :response-time ms`)
);
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
const port = process.env.PORT || 1337;
const host: string = process.env.HOST || "0.0.0.0";

const loader = new AutoLoadRoutes(app);
(async () => {
  await loader.loadFrom(path.join(__dirname, "routes"));
})();

app.listen(port as number, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
