import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import StoriesPage from './pages/StoriesPage';
import ResourcesPage from './pages/ResourcesPage';
import About from './components/About';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
