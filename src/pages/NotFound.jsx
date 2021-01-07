import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-icon">
        <img src="../images/unlink-solid.svg" alt="Not Found icon" />
      </div>
      <div className="not-found-info">
        <h1>
          Oops,
          <br />
          <span>nothing</span> here...
        </h1>
        <p>
          Uh oh, we can't seem to find the page you are looking for.
          <br />
          Try going back to the previous page and start a new search.
        </p>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
