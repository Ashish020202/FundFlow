import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const app  = express();


app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI ||'';
// console.log("uri",MONGO_URI);

const PORT = process.env.PORT || 3000;




mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

   

export default app;