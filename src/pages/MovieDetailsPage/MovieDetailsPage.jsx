import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../../tmdb-api';
import MovieCard from '../../components/MovieCard/MovieCard';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state ?? '/movies');

  useEffect(() => {
    async function getMovie() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getMovieById(movieId);

        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false)
      }
    }

    getMovie();
  }, [movieId]);

  return (
    <div className={css.container}>
      <Link className={css.back_btn} to={backLink.current}>
        Go back
      </Link>
      
      {movie !== null && <MovieCard movie={movie} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
