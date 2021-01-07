import React from "react";
import { Link, useLocation } from "react-router-dom";

import MovieCard from "./MovieCard";

function MovieList({ results }) {
  let location = useLocation();

  return (
    <div className="list-container">
      {results.map((movie) => {
        return (
          <Link
            style={{
              textDecoration: "none"
            }}
            key={movie.imdbID}
            to={{
              pathname: "/detail/" + movie.imdbID,
              state: { background: location }
            }}
          >
            <MovieCard
              id={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              value={movie.imdbID}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default MovieList;
