import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import getnavRoutes from "./routes/getNavRoutes"
import calNavRoute from "./routes/NAVanalysisRoutes"


dotenv.config();
const app  = express();


app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI ||'';


const PORT = process.env.PORT || 3000;

app.use('/api',getnavRoutes)
app.use('/api',calNavRoute);


mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

   

export default app;