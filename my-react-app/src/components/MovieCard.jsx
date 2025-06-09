import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card w-25">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} className="img-fluid" />
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
