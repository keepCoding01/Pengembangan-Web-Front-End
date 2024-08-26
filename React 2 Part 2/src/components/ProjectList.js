import React from "react";
import { Link } from "react-router-dom";

const projects = [
  { id: 1, title: "Project Pertama" },
  { id: 2, title: "Project Kedua" },
];
function ProjectList() {
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
