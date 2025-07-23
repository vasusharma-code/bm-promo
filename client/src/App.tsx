import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Calculators from './pages/Calculators';
import Blog from './pages/Blog';
import CollegeForms from './pages/CollegeForms';
import FreeMaterials from './pages/FreeMaterials';
import Admin from './pages/Admin';
import BMOfflineAcademy from './pages/BMOfflineAcademy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/college-forms" element={<CollegeForms />} />
            <Route path="/free-materials" element={<FreeMaterials />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/bm-offline-academy" element={<BMOfflineAcademy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;