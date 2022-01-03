import React from "react";
import "bootstrap/dist/css/bootstrap.css";

//  Stateless Functional component

const NavBar = ({ totalCounters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://facebook.com">
            Navbar
            <span className="badge badge-pill badge-secondary m-1">
              {totalCounters}
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
