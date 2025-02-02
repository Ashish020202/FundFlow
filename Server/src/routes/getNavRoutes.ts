import { getDailyNav } from "../controllers/getNav";
import { Router } from "express";

const router = Router();

router.get('/latest-nav',getDailyNav);

export default router;