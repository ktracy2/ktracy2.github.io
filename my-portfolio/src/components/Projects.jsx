import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section-odd">
      <h2>Projects</h2>

      <div className="project">
        <img src="/assets/project1.jpg" alt="Project 1" />
        <h3>Project 1</h3>
        <p>Description of Project 1.</p>
        <a href="#">View Project</a>
      </div>

      <div className="project">
        <img src="/assets/project2.jpg" alt="Project 2" />
        <h3>Project 2</h3>
        <p>Description of Project 2.</p>
        <a href="#">View Project</a>
      </div>

      <div className="project">
        <img src="/assets/project3.jpg" alt="Project 3" />
        <h3>Project 3</h3>
        <p>Description of Project 3.</p>
        <a href="#">View Project</a>
      </div>
    </section>
  );
}

export default Projects;
