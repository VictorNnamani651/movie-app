import "./App.css";
import MyNavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <MyNavBar
        search_Query={searchQuery}
        setSearch_query={(evt) => {
          setSearchQuery(evt.target.value);
        }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search_query={searchQuery}
              search_query_length={searchQuery.length}
            />
          }
        />
        <Route path="Favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
