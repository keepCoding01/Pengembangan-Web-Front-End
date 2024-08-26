import React from "react";
import { useParams } from "react-router-dom";

const projectData = {
  1: { title: "Project One", description: "This is the first project." },
  2: { title: "Project Two", description: "This is the second project." },
};

function ProjectDetail() {
  let { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDetail;
