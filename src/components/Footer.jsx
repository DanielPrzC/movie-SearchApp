import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; Daniel Pérez Castejón. {year}</p>
    </footer>
  );
}

export default Footer;
