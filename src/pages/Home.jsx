import { useState, useEffect } from 'react';
import MovieGrid from '../components/MovieGrid';
import { getPopularMovies } from '../services/movieService';

// Static movie data for template, commented out because I'm not using it
/*const staticMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    poster_path: "/placeholder-poster.jpg",
    vote_average: 9.3,
    release_date: "1994-09-23"
  },
  {
    id: 2,
    title: "The Godfather",
    poster_path: "/placeholder-poster.jpg",
    vote_average: 9.2,
    release_date: "1972-03-14"
  },
  {
    id: 3,
    title: "The Dark Knight",
    poster_path: "/placeholder-poster.jpg",
    vote_average: 9.0,
    release_date: "2008-07-18"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    poster_path: "/placeholder-poster.jpg",
    vote_average: 8.9,
    release_date: "1994-10-14"
  },
  {
    id: 5,
    title: "Forrest Gump",
    poster_path: "/placeholder-poster.jpg",
    vote_average: 8.8,
    release_date: "1994-06-23"
  },
  {
    id: 6,
    title: "Inception",
    poster_path: "/placeholder-poster.jpg",
    vote_average: 8.7,
    release_date: "2010-07-16"
  }
];*/

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => { // invokes my service function
      const movieData = await getPopularMovies();
      setMovies(movieData); // setMovies now is set to movieData
    };

    fetchMovies(); // immediately call fetchMovies so the movies array has data
  }, []);

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>Popular Movies</h2>
        <p>Discover and save your favorite films</p>
      </div>
      <MovieGrid movies={movies} />
    </main>
  );
};

export default Home;