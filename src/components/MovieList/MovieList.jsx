import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
        
      {movies.map(movie => (
        <li className={css.item} key={movie.id}>
          <Link
            className={css.link}
            to={`/movies/${movie.id}`}
            state={location}
          >
            <img
              className={css.poster}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
