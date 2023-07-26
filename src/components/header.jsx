import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-light justify-content-center">
      <div className="container-fluid">
        <Link className="navbar-brand">
          <img src="./assets/logo.png" width="30" height="30" className="d-inline-block align-top" alt="Logo" />
        </Link>
        <div className="navbar navbar-expand-sm bg-light justify-content-center">
          <ul className="navbar-nav">
            {/* Use relative paths for the links */}
            <li className="nav-item">
              <Link className="nav-link" to="/registration">Registration</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Create Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/documentUpload">Document Upload</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/taskCheckList">Task CheckList</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
