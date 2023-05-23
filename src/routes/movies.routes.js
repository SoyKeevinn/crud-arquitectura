import { Router } from "express";
import {
    createMovie,
    deleteMovie,
    getMovie,
    getMovies,
    updateMovie,
} from "../controllers/movies.controllers.js";

const router = Router();

router.get("/movie", getMovies)
router.get("/movie/:id", getMovie)
router.post("/movie", createMovie)
router.put("/movie/:id", updateMovie)
router.delete("/movie/:id", deleteMovie)

export default router;