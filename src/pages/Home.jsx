import { useState, useEffect } from 'react';
import MovieGrid from '../components/MovieGrid';
import { getPopularMovies } from '../services/movieService';
import LoadingSpinner from '../components/LoadingSpinner';

function Home({ searchResults }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => { // invokes my service function
      setLoading(true);
      const movieData = await getPopularMovies();
      setMovies(movieData); // setMovies now is set to movieData
      setLoading(false);
    };

    fetchMovies(); // immediately call fetchMovies so the movies array has data
  }, []);

  const displayMovies = searchResults || movies; // if searchResults doesn't have a value then it will display the popular movies instead

  if (loading) {
    return (
      <main className="main-content">
        <LoadingSpinner />
      </main>
    );
  }

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>{searchResults ? 'Search Results' : 'Popular Movies'}</h2>
        <p>Discover and save your favorite films</p>
      </div>
      <MovieGrid movies={displayMovies} />
    </main>
  );
};

export default Home;