import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";

function Home({ search_query_length, search_query }) {
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setErr("Failed To Load Movies");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, [movies]);

  return (
    <div className="container-md border border-4 border-danger d-flex justify-content-center">
      {/* i set a conditional render for this component where all the movies are displayed when there is nothing typed into the search bar and when there is, only the movies with titles that contain the letters or words that were typed should be displayed and if there are no movies matching the inputted letter or words, nothing should be displayed  */}

      {movies.map((movie) => {
        if (
          search_query_length > 0 &&
          movie.title.toLowerCase().startsWith(search_query)
        ) {
          return <MovieCard movie={movie} key={movie.id} />;
        } else if (search_query_length == 0) {
          return <MovieCard movie={movie} key={movie.id} />;
        }
      })}
    </div>
  );
}

export default Home;
