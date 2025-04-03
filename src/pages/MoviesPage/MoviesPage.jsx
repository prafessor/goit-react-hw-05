import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMoview } from '../../tmdb-api';
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const changeSearchQuery = query => {
    const newParams = new URLSearchParams(searchParams);

    if (query !== '') {
      newParams.set('query', query);
    } else {
      newParams.delete('query');
    }

    setSearchParams(newParams);
  };

  useEffect(() => {
    async function getMovie() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getSearchMoview(query);

        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [query]);

  return (
    <div className={css.container}>
      <SearchForm value={query} onSubmit={changeSearchQuery} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
