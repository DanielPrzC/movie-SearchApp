import React, { useState } from "react";

import Splash from "../components/Splash";

import SocialLink from "../components/SocialLink";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";

function Home() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(false);

  function handleResults(res) {
    setResults(res);
    setSearch(true);
  }

  function renderResults() {
    if (results.length === 0) {
      return <p>Not found</p>;
    } else {
      return <MovieList results={results} />;
    }
  }

  return (
    <div className="home-container">
      <Splash />
      <SocialLink />
      <SearchForm onResults={handleResults} />
      <div className="result-container">
        {search ? (
          renderResults()
        ) : (
          <small>Use the form to search a movie</small>
        )}
      </div>
    </div>
  );
}

export default Home;
