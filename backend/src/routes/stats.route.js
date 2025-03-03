import { Router } from "express";
const router = Router();
 router.get('/stats', (req, res) => {
    res.send('Stats route');
 })

 export default router;