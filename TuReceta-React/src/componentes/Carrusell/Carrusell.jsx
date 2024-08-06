import React from 'react';

const Carousel = () => {
  return (
    <main>
      <h2 id="titulo-pagina">Bienvenido a nuestro sitio web</h2>
      <p id="Pie">Acá podrás encontrar las mejores recetas para tu cocina</p>
      <br />
      <h2 id="Destacadas">Recetas Destacadas</h2>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/EnsaldaCesar.jpeg" className="d-block w-100" alt="Imagen-Carrusel" />
          </div>
          <div className="carousel-item">
            <img src="./img/Pizza-Margarita.jpeg" className="d-block w-100" alt="Imagen-Carrusel" />
          </div>
          <div className="carousel-item">
            <img src="./img/Tacos-de-pescado.jpeg" className="d-block w-100" alt="Imagen-Carrusel" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
};

export default Carousel;
