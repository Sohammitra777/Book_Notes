import express, { Application } from "express";
import userRoute from "./route/userRoute.js";
const PORT = 3000;
const app: Application = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRoute);

app.listen(PORT, () =>
    console.log(`Server fire at : http://localhost:${PORT}`)
);
