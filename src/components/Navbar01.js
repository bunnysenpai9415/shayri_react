/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Dropdown from "./Dropdown"

function Navbar() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark justify-content-between">
        <a className="navbar-brand mx-5" href="#/">
          Wednesday
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#/jaunelia">
                Jaun Elia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/mohsinnaqvi">
                Mohsin Naqvi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/mirzagalib">
                Mirza Galib
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li> */}
            <li className="nav-item">
              <Dropdown />
            </li>
          </ul>
          {/* <form className="form-inline mx-5 my-2 my-lg-0 d-flex">
            <input
              className="form-control mx-2 mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success mx-2 my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}
        </div>
      </nav>
    </div>
  );
}




export default Navbar;
