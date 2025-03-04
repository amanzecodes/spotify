import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllSongs, getFeaturedSongs, getMadeForYouSongs, getTrendingSongs } from "../controller/song.controller.js";
import { requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get('/', protectRoute, requireAdmin, getAllSongs)
router.get('/featured', getFeaturedSongs)
router.get('/made-for-you', getMadeForYouSongs)
router.get('/trending', getTrendingSongs)

export default router;