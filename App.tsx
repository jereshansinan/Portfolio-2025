import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Programming from './pages/Programming';
import ProgrammingProjects from './pages/ProgrammingProjects';
import UIUX from './pages/UIUX';
import AI from './pages/AI';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Loader from './components/Loader';

const App: React.FC = () => {
  return (
    <>
      <Loader />
      <Router>
        <Navbar />
        {/* Removed bg-white from here to allow transparent backgrounds in Home */}
        <div className="flex flex-col min-h-screen text-slate-900 selection:bg-black selection:text-white">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Specialized Pages */}
              <Route path="/programming" element={<Programming />} />
              <Route path="/programming/projects" element={<ProgrammingProjects />} />
              <Route path="/ui-ux" element={<UIUX />} />
              <Route path="/ai" element={<AI />} />
              
              {/* Generic Pages */}
              <Route path="/3d-design" element={<Projects />} />
              <Route path="/data" element={<Skills />} />

              {/* Keeping original routes accessible if needed */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
};

export default App;