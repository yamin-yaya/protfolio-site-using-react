import React from "react";
import imageOne from "../assets/images/css-mySite.jpg"
import imageTwo from '../assets/images/pet-site.jpg';
import imageThree from "../assets/images/calculator-app.png";
import imageFour from "../assets/images/movie-app.jpg";
import imageFive from "../assets/images/blog-site.jpg";
import imageSix from "../assets/images/google-keep.jpg";


const projects = [
  { id: 1, title: 'CSS My Site', description: 'Description of Project One', image: imageOne },
  { id: 2, title: 'Pet Selling Site', description: 'Description of Project Two', image: imageTwo },
  { id: 3, title: 'Calculator Using React', description: 'Description of Project Three', image: imageThree },
  { id: 4, title: 'Movie App ', description: 'Description of Project Four', image: imageFour },
  { id: 5, title: 'Blog Site', description: 'Description of Project Five', image: imageFive},
  { id: 6, title: 'To Do List App', description: 'Description of Project Six', image: imageSix },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
