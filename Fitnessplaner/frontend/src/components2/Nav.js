import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
      <label htmlFor="muskelgruppe">Muskelgruppe suchen:</label>
      <div>
        <button>
          <Link to="/training/all" className="nav-link">
            ID
          </Link>
        </button>
        <button>
          <Link to="/home" className="nav-link">
            Hallo Welt
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Nav;








