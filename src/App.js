import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
