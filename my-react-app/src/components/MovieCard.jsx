import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card col-5 col-md-auto">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="img-fluid" />
        <button className="favorite-btn btn btn-success">
          <i className="bi bi-heart"></i>
        </button>
      </div>
      <div className="movie-info">
        <div className="movie-title">{movie.title}</div>
      </div>
    </div>
  );
}

export default MovieCard;