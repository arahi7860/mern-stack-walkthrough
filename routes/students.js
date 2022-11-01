import { Router } from "express";
import * as controllers from "../controllers/students.js";

const router = Router();

router.get("/", controllers.getStudents);
router.get("/:id", controllers.getStudent);
router.post("/", controllers.createStudent);
router.put("/:id", controllers.updateStudent);
router.delete("/:id", controllers.deleteStudent);

export default router;
