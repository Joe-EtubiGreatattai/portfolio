import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import StacksPage from './pages/Stack/StacksPage';
import ProjectsPage from './pages/Project/ProjectsPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';
import Space from './components/Space/Space'; // Adjust the import path as needed

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Space />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stacks" element={<StacksPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
