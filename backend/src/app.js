import express from "express";
import router from "./routes/index.js";
const app = express();

//global middlewares
app.use(express.json());

//routes
app.use("/", router);

export default app;
