import React, { useState } from "react";

function SearchForm(props) {
  const [inputMovie, setInputMovie] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputMovie(newValue);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(
      "https://www.omdbapi.com/?apikey=" +
        process.env.REACT_APP_API_KEY +
        "&s=" +
        inputMovie
    )
      .then((res) => res.json())
      .then((result) => {
        const { Search = [] } = result;
        console.log(Search);
        props.onResults(Search);
      });
    setInputMovie("");
  }

  function reload() {
    location.reload();
  }

  return (
    <div className="search-form">
      <div className="logo" onClick={reload}>
        <img src="./images/film-solid.svg" alt="film-logo" />
        <h1>Movie Search</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Search a movie"
          onChange={handleChange}
          value={inputMovie}
        />
        <button className="form-button">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
