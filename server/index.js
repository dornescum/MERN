
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
// inainte de routes !
app.use(cors());

// =================================
app.get('/', (req, res) => {
	res.redirect('/posts');
})
// =================================


// imp '/posts'
app.use('/posts', postRoutes);

// const CONNECTION_URL ='mongodb+srv://mernUser:ceapa_2000@thenetninja.ftnae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT|| 5000;
// err dc adaug {}
// mongoose.connect(CONNECTION_URL)
mongoose.connect(process.env.CONNECTION_URL)
	.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
	.catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);

