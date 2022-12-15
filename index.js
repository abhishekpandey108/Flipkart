import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connection from './database/db.js';
import DefaultData from "./default.js";
import Router from './routes/route.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));


app.use('/',Router); 
dotenv.config();

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});


const userName = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
connection(userName,password);

const port = process.env.port || 8000 ;   
app.listen(port,()=>{
    console.log(`Server listening on port localhost:${port}`);
});

DefaultData(userName,password);


