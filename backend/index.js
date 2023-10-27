import path from "path";
import express from "express";
import dotenv from "dotenv";
import router  from "./routes/productRouter.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const __dirname = path.resolve();
app.use("/", router);

app.use(express.static(path.join(__dirname, "../build")));
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../build/index.html"))
);

const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.use('/api/', router);