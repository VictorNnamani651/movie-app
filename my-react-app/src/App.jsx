import React from "react";
import "./App.css";
import MyNavBar from "./components/NavBar";
import Home from "./pages/Home";
import { useState } from "react";


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
      <Home
        search_query={searchQuery}
        search_query_length={searchQuery.length}
      />
    </div>
  );
}

export default App;
