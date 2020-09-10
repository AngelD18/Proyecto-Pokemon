import React from 'react';
import './style.css';

function Navbar() {
  return (
    <div className="navbar-dark bg-danger fixed-top">
      <nav className="navbar navbar-expand container d-flex  align-items-center ">
        <a className="mr-2" href="/">
          <svg
            width="35"
            height="35"
            viewBox="0 0 16 16"
            className="bi bi-arrow-left-circle"
            fill="#ffc107"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fillRule="evenodd"
              d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
            />
            <path
              fillRule="evenodd"
              d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
            />
          </svg>
        </a>
        <a className="navbar-brand alineadoTextoImagenCentro " href="/pokemons">
          <img className=" alineadoTextoImagenCentro  " src={process.env.PUBLIC_URL + '/images/poke.png'} width='100' alt='poke' />
        </a>
      </nav>
    </div>


  );
}

export default Navbar;