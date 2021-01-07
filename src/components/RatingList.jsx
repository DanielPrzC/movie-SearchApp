import React from "react";

import RatingIcon from "./RatingIcon";

function RatingList({ results }) {
  return results.map((rating, index) => {
    return (
      <RatingIcon
        key={index}
        value={rating.Value}
        source={rating.Source}
        icon={index}
      />
    );
  });
}

export default RatingList;
