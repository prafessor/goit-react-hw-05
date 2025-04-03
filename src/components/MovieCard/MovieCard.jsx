import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import clsx from 'clsx';
import css from './MovieCard.module.css';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieCard({ movie }) {
  return (
    <div className={css.container}>
      <img
        className={css.poster}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className={css.text_wrapper}>

        <h1 className={css.title}>{movie.title}</h1>
        <p className={css.desc}>{movie.overview}</p>

        <div className={css.additional_wrapper}>
          <span className={css.additional_title}>Genres:</span>

          <span className={css.additional_value}>
            <ul className={css.additional_list}>
              {movie.genres.map(genre => (
                <li className={css.additional_item} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </span>
          
        </div>

        <div className={css.additional_wrapper}>
          <span className={css.additional_title}>Runtime:</span>
          <span className={css.additional_value}>{movie.runtime} min</span>
        </div>

        <div className={css.additional_wrapper}>
          <span className={css.additional_title}>Country:</span>
          <span className={css.additional_value}>{movie.origin_country}</span>
        </div>

        <div className={css.additional_wrapper}>
          <span className={css.additional_title}>Release:</span>
          <span className={css.additional_value}>{movie.release_date}</span>
        </div>

        <ul className={css.link_list}>
          <li>
            <NavLink className={getLinkStyles} to="cast">
              Casts
            </NavLink>
          </li>
          <li>
            <NavLink className={getLinkStyles} to="review">
              Reviews
            </NavLink>
          </li>
        </ul>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
