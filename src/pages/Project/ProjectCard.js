// components/ProjectCard.js
import React from 'react';
import './Projects.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-stack"><b>Stack:</b> {project.stack}</p>
      <p className="project-technologies"><b>Technologies:</b> {project.technologies}</p>
      <p className="project-description">{project.description}</p>
      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
            Demo Video
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
