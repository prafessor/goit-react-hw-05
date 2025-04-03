import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../tmdb-api';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './MovieReview.module.css';

export default function MovieReview() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getReview() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getMovieReviews(movieId);

        setReviews(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getReview();
  }, []);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map(review => (
            <li className={css.item} key={review.id}>
              <p className={css.title}>{review.author}</p>
              <p className={css.text}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>it is not reviews</p>
      )}
      
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
