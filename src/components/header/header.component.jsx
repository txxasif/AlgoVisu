import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link className="option" to="/">
          <button type="button" className="btn btn-outline-secondary">
            HOME
          </button>
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/player">
          <button type="button" className="btn btn-outline-secondary">
            Players
          </button>
        </Link>
        <Link className="option" to="/sort">
          <button type="button" className="btn btn-outline-secondary">
            SORT
          </button>
        </Link>
        <Link className="option" to="/algovisu">
          <button type="button" className="btn btn-outline-secondary">
            VISUALIZATION
          </button>
        </Link>
        <Link className="option" to="/binary">
          <button type="button" className="btn btn-outline-secondary">
            Binary
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
