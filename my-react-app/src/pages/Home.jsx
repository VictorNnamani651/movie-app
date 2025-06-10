import MovieCard from "../components/MovieCard";

function Home({ search_query_length, search_query }) {
  const movies = [
    {
      id: 1,
      title: "Bat-man",
      url: "https://images.pexels.com/photos/31812002/pexels-photo-31812002/free-photo-of-majestic-city-clock-tower-on-an-overcast-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      title: "Mandalorian",
      url: "https://images.pexels.com/photos/31812002/pexels-photo-31812002/free-photo-of-majestic-city-clock-tower-on-an-overcast-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      title: "Halo",
      url: "https://images.pexels.com/photos/31812002/pexels-photo-31812002/free-photo-of-majestic-city-clock-tower-on-an-overcast-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  return (
    <div className="container-md border border-4 border-danger d-flex justify-content-center">
      {/* i set a conditional render for this component where all the movies are displayed when there is nothing typed into the search bar and when there is, only the movies with titles that contain the letters or words that were typed should be displayed and if there are no movies matching the inputted letter or words, nothing should be displayed  */}
      {movies.map((movie) => {
        if (search_query_length > 0 && movie.title.includes(search_query)) {
          return <MovieCard movie={movie} key={movie.id} />;
        } else if (search_query_length == 0) {
          return <MovieCard movie={movie} key={movie.id} />;
        }
      })}
    </div>
  );
}

export default Home;
