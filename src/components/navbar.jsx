import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge rounded-pill bg-secondary ms-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
