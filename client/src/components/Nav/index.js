import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="nav navbar-brand search" href="/">
        <p>Search</p>
      </a>
      <a className="nav navbar-brand saved" href="/saved">
        <p>Saved</p>
      </a>
    </nav>
  );
}

export default Nav;
