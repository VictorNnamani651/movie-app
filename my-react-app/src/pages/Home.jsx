import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";
import "./home.css";

function Home({ search_query_length, search_query }) {
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState("bi-heart");

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setErr("Failed To Load Movies");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, [movies]);

  return (
    <div className="container-md p-0">
      <div className="movie-container row justify-content-center m-0 py-2">
        {/* i set a conditional render for this component where all the movies are displayed when there is nothing typed into the search bar and when there is, only the movies with titles that contain the letters or words that were typed should be displayed and if there are no movies matching the inputted letter or words, nothing should be displayed */}

        {loading ? (
          <div className="loading d-flex align-items-center justify-content-center fw-bolder fs-1">
            Loading...
          </div>
        ) : (
          movies.map((movie) => {
            if (
              search_query_length > 0 &&
              movie.title.toLowerCase().startsWith(search_query)
            ) {
              return (
                <MovieCard
                  movie={movie}
                  key={movie.id}
                  favorite={favorite}
                  toggleFavorite={() => setFavorite("bi-heart-fill")}
                />
              );
            } else if (search_query_length == 0) {
              return (
                <MovieCard
                  movie={movie}
                  key={movie.id}
                  favorite={favorite}
                  toggleFavorite={() => setFavorite("bi-heart-fill")}
                />
              );
            }
          })
        )}
      </div>
    </div>
  );
}

export default Home;
