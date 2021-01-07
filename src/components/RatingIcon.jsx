import React from "react";

function RatingIcon({ value, source, icon }) {
  return (
    <div className="rating-icon">
      <img src={"../images/" + icon + ".svg"} alt={source + " Icon"} />
      <p>{value}</p>
    </div>
  );
}

export default RatingIcon;
