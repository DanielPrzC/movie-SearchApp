import React from "react";

function SocialLink() {
  return (
    <div className="social-wrapper">
      <a
        className="social-button"
        href="https://github.com/DanielPrzC/movieSearchApp"
        target="_blank"
        rel="noreferrer noopener"
        style={{ textDecoration: "none" }}
      >
        <div className="social-icon">
          <i className="fab fa-github"></i>
        </div>
        <span>See the project repository</span>
      </a>
    </div>
  );
}

export default SocialLink;
