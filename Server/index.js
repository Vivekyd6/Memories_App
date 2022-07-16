import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
import router from './routes/route.js';

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts',router);
app.get('/',(req,res)=>{
    res.send('Hello to Memories API');
})

// DATABASE CONNECTION 
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL = `mongodb+srv://${user}:${password}@test.kckc7.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to Database successfully"))
        .catch((error) => console.log(error.message));

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));

