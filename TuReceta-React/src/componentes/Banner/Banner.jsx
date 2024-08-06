import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">TuReceta.cl</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/acerca">Acerca de Nosotros</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/tutoriales">Tutoriales</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/resenas">Reseñas</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contactos">Contactos</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Banner;
