import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm === 'Biceps') {
      navigate('/Biceps');
    } else if (searchTerm === 'Neck') {
      navigate('/Neck');
    } else if (searchTerm === 'Chest') {
        navigate('/Chest');
    } 
    else if (searchTerm === 'Triceps') {
      navigate('/Triceps');
  } 
  else if (searchTerm === 'Middle_Back') {
    navigate('/Middle_Back');
}  else {
      navigate('/');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
    <label htmlFor="muskelgruppe">
      <h5>
      Muskelgruppe suchen:
      </h5>
      <span>Mögliche Anfragen wären: Biceps, Neck, Middle_Back, Triceps, Chest</span>
      <br/>
      <span>Bitte achten Sie auf Groß- und Kleinschreibung</span>
    </label>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
}

export default Nav;






/*import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
      <label htmlFor="muskelgruppe">Muskelgruppe suchen:</label>
      <div>
        <button>
          <Link to="/Bizeps" className="nav-link">
            Bizeps
          </Link>
        </button>
        <button>
          <Link to="/Home" className="nav-link">
            Neck
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Nav;*/








