import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './componentes/Banner';  // adjust the import path as necessary


const App = () => {
  return (
    <Router>
      <Banner/>
    </Router>
  );
};

export default App;