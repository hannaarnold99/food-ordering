import path from "path";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import  db  from "./db/index.js";
import  productRouter  from "./routes/productRouter";


const app = express();


var corsOptions = {
    orgin: "https://food-ordering-14x8.onrender.com/"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/build/index.html"))
);

const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.use('/api/', productRouter);