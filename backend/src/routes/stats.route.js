import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { stats } from "../controller/stats.controller.js";
const router = Router();

 router.get('/stats', protectRoute, requireAdmin, stats)

 export default router;