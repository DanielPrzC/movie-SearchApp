import React from "react";

function MovieCard({ poster, title, year }) {
  return (
    <div className="card">
      <div className="card-poster">
        <img src={poster} alt={poster + "poster"} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <h5>{year}</h5>
      </div>
    </div>
  );
}

export default MovieCard;
