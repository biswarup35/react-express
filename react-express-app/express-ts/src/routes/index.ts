import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from the api route!");
});

export default router;
