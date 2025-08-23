import express from "express";
import {
    getAllTasks,
    getCompletedTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

//definicion de rutas 

router.get("/", getAllTasks);
router.get("/completed", getCompletedTasks);
router.get("/:id", getTaskById);
router.post("/tasks", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
