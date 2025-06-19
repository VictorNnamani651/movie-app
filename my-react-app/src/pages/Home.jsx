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
  // [
  //   {
  //     id: 1,
  //     title: "Bat-man",
  //     url: "https://images.pexels.com/photos/31812002/pexels-photo-31812002/free-photo-of-majestic-city-clock-tower-on-an-overcast-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  //   },
  //   {
  //     id: 2,
  //     title: "Mandalorian",
  //     url: "https://images.pexels.com/photos/31812002/pexels-photo-31812002/free-photo-of-majestic-city-clock-tower-on-an-overcast-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  //   },
  //   {
  //     id: 3,
  //     title: "Halo",
  //     url: "https://images.pexels.com/photos/31812002/pexels-photo-31812002/free-photo-of-majestic-city-clock-tower-on-an-overcast-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  //   },
  // ];
  // useEffect(() => {
  //   alert(`${search_query_length} words : ${search_query}`);
  // }, [search_query_length]);

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
