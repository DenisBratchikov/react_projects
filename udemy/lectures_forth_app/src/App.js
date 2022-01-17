import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(() => {
    setIsLoading(true);
    fetch('https://swapi.dev/api/films/').then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Something went wrong!');
      }
    }).then(data => {
      const transformedMovies = data.results.map(film => ({
        id: film.episode_id,
        title: film.title,
        openingText: film.opening_crawl,
        releaseDate: film.release_date
      }));
      setMovies(transformedMovies);
    }).catch(err => {
      setError(err.message);
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading ? <p>Loading...</p> :
          error ? <p>{error}</p> :
          movies.length > 0 ? <MoviesList movies={movies} /> : <p>Found no movies.</p>
        }
      </section>
    </React.Fragment>
  );
}

export default App;
