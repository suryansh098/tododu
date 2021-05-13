import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import logo from "./logo.png"

export const Header = (props) => {
  const headerStyle = {
    backgroundColor: "rgba(255,255,255,0.1)",
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark" style={headerStyle}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" width="26" height="24" className="d-inline-block align-text-top" />{props.title}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            { props.searchbar ?
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-light" type="submit">Search</button>
              </form>
              : ""
            }
          </div>
        </div>
      </nav>
    </header>
  );
}

Header.defaultProps = {
  title: "Your Title Here",
  searchbar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool
}