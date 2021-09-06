import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app =express();
// limitare poze
app.use(bodyParser.json({limit:"30mb", extended: true }));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true }));

app.use(cors());
app.use('/posts', postRoutes); // rutele se declara dupa cors() sa evit erori


const CONNECTION_URL ='mongodb+srv://mernUser:ceapa_2000@thenetninja.ftnae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	// 2 argumente: port si callback
	.then(()=> app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
	.catch((error) => console.log(`${error} did not connect`));


// mongoose.set('useFindAndModify', false);

