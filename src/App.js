import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
