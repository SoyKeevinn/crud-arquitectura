import { movie } from "../models/Movie.js";

export const getMovies = async (req, res) => {
    try{
        const movies = await movie.findAll();
        res.json(movies)
    } catch (err) {
        return res.status(500).json({ message: err.message});
    }
};

export const getMovie = async (req, res) => {
    const { id } = req.params;
    try{
        const movie = await movie.findOne({
            where: { id },
        })
        if (!movie) return res.status(400).json({ message: "Movie not found"});
        res.json(movie);
    } catch (err) {
        return res.status(500).json({ message: err.message});
    }

}

export const createMovie = async (req, res) => {
    try {
        const { name_movie, anio } = req.body;
        let newMovie= await movie.create({
          name_movie,
          anio
        });
        res.json(newMovie);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const deleteMovie = async (req, res) => {
    const { id } = req.params;
  try {
    const deleteRowCount = await movie.destroy({
      where: {
        id,
      },
    });
    console.log(deleteRowCount);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateMovie= async (req, res) => {
  const { id } = req.params;

  try {
    const movie= await movie.findOne({
      where: {
        id,
      },
    });
    

    movie.set(req.body);
    await movie.save();
    return res.json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
