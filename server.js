import express from "express";
import RandomBytes from "crypto";
import userRouter from "./router/user.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/login", userRouter);

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   console.log("Hello World");
//   res.status(500).json({ message: "Bad request" });
// });

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
