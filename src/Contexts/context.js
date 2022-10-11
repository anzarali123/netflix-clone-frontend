import { createContext, useState, useEffect } from "react";
import { API_KEY, TMDB_BASE_URL } from "../utils/TMDB/tmdb.utils";

export const MoviesContext = createContext({
  genres: [],
  movies: [],
  moviesByGenre: [],
  genre: null,
});

const createArrayFromRawData = (array, moviesArray, genres) => {
  array.forEach((movie) => {
    const movieGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
  });
};

const getRawData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const { results } = await fetch(`${api}${paging ? `&page=${i}` : ""}`).then(
      (res) => res.json()
    );
    createArrayFromRawData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const MoviesProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [moviesByGenre, setMoviesGenre] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(
        `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
      );
      const data = await response.json();
      const { genres } = data;
      setGenres(genres);
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getRawData(
        `${TMDB_BASE_URL}/trending/all/week?api_key=${API_KEY}`,
        genres,
        true
      );
      setMovies(movies);
    };
    fetchMovies();
  }, [genres]);

  const value = { genres, movies, moviesByGenre, genre };
  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
