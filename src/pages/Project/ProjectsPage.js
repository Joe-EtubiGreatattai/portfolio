// pages/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard'; // Adjust the import path as needed
import { projects } from './projects'; // Adjust the import path as needed
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
