import { Router } from "express";

const router: Router = Router();

router.get("/users", (req, res) => {
    res.send("Todo ok");
})

export default router;
