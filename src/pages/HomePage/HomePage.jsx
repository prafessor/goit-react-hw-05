import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../tmdb-api';
import css from './HomePage.module.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setError(false);
        setIsLoader(true);

        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch {
        setError(true);
      } finally {
        setIsLoader(false);
      }
    }

    getMovies();
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Trending today</h2>
      
      {movies.length > 0 && <MovieList movies={movies} />}
      {isLoader && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
