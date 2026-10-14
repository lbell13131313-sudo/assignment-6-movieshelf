function MovieCard({ movie }) {
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img 
          src={poster}
          alt={movie.title}
        />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <span className="movie-rating">⭐ {movie.vote_average}</span>
          <span className="movie-year">{movie.release_date.substring(0, 4)}</span>
        </div>
        <button className="favorite-button">♡ Add to Favorites</button>
      </div>
    </div>
  );
};

export default MovieCard;