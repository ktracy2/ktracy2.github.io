import React from 'react';

function About() {
  return (
    <section id="about" className="section-even">
      <h1>About Me</h1>
      <p>Information about yourself.</p>

      <div className="summary">
        <h2>Get to know me</h2>
        <p>Summary about what you have done.</p>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Lisp</li>
          <li>Java</li>
          <li>C</li>
          <li>LC3</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
