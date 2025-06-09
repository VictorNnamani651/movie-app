import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <div className="container-md border border-4 border-danger">
      <MovieCard
        movie={{
          title: "Bat-Man",
          url: "https://images.pexels.com/photos/31812002/pexels-photo-31812002/free-photo-of-majestic-city-clock-tower-on-an-overcast-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        }}
      />
    </div>
  );
}

export default Home;
