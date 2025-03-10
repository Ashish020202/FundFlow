import { Router } from "express";
import { calculateNAV } from "../controllers/NavAnalysis";

const router = Router();

router.get('/nav-cal',calculateNAV);

export default router;