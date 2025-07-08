import "./MovieCard.css";

function MovieCard({ movie, favorite, toggleFavorite }) {
  return (
    <div className="movie-card col-auto col-md-3 d-flex flex-column justify-content-center align-items-center">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt={movie.title}
          className="img-fluid d-block"
        />
        <button className="favorite-btn btn btn-warning">
          <i className={`bi ${favorite} fs-5`}></i>
        </button>
      </div>
      <div className="movie-info">
        <div className="movie-title">{movie.title}</div>
      </div>
    </div>
  );
}

export default MovieCard;
