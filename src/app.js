import express from "express"
import moviesRoutes from "./routes/movies.routes.js"


const app = express()
app.use(express.json())

app.use(moviesRoutes);

export default app
