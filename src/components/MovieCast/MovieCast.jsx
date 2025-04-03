import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../tmdb-api';
import css from './Moviecast.module.css';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function MovieCast() {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getMovieCast(movieId);

        setCasts(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  return (
    <>
      <ul className={css.list}>

        {casts.map(cast => (
          <li className={css.item} key={cast.id}>
            <img
              className={css.image}
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                  : 'https://static.vecteezy.com/system/resources/thumbnails/001/840/618/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'
              }
              alt="Avatar"
            />
            <h3 className={css.name}>{cast.name}</h3>
          </li>
        ))}
      </ul>
      
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
