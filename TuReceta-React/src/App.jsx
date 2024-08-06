import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './componentes/Banner/Banner';  // adjust the import path as necessary
import Carrusel from './componentes/Carrusell/Carrusell';
const App = () => {
  return (
    <Router>
      <Banner/>
    </Router>
  );
};

export default App;