import React, { useEffect, useState } from "react";

import RatingList from "../components/RatingList";

function Detail({ match }) {
  const [foundMovie, setFoundMovie] = useState({});
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    fetchMovie();
  }, []);

  function fetchMovie() {
    fetch(
      "https://www.omdbapi.com/?apikey=" +
        process.env.REACT_APP_API_KEY +
        "&i=" +
        match.params.id
    )
      .then((response) => response.json())
      .then((movie) => {
        setFoundMovie(movie);
        setIsFound(true);
      });
  }

  function renderRating() {
    if (foundMovie.Ratings.lenght === 0) {
      return <p>No Rating</p>;
    } else {
      return <RatingList results={foundMovie.Ratings} />;
    }
  }

  return (
    <div className="detail">
      <div className="detail-content">
        <div className="detail-poster">
          <img src={foundMovie.Poster} alt={foundMovie.Title + "poster"} />
        </div>
        <div className="detail-info">
          <h2>{foundMovie.Title}</h2>
          <h3>{foundMovie.Year}</h3>
          <p>Rated: {foundMovie.Rated}</p>
          <p>Director: {foundMovie.Director}</p>
          <p>Cast: {foundMovie.Actors}</p>
          <p>"{foundMovie.Plot}"</p>
        </div>
      </div>
      <div className="detail-score">{isFound && renderRating()}</div>
    </div>
  );
}

export default Detail;
