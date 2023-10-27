import path from "path";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import  router  from "./routes/productRouter.js";


const app = express();


var corsOptions = {
    orgin: "https://food-ordering-14x8.onrender.com/"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/build/index.html"))
);

const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.use('/api/', router);