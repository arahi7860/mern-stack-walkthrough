import { Router } from "express";
import studentRoutes from "./students.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/students", studentRoutes);

export default router;
