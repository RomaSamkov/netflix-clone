import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingMovie(req, res) {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];
    res.json({ success: true, content: randomMovie });
  } catch (error) {
    console.log("Error in movie controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
}

export async function getMovieTrailers(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
    );
    res.json({ success: true, trailers: data.results });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }
    console.log("Error in trailer controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
}

export async function getMovieDetails(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    );
    res.json({ success: true, content: data });
  } catch (error) {
    if (error.message.includes("404")) {
      return res.status(404).send(null);
    }
    console.log("Error in details controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
}

export async function getSimilarMovies(req, res) {
  // https://api.themoviedb.org/3/movie/movie_id/similar?language=en-US&page=1
  const { id } = req.params;
  try {
  } catch (error) {
    console.log("Error in similar controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
}
