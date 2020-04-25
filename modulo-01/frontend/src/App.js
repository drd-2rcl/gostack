import React from "react";
import Header from "./components/Header";

function App() {
  const projects = ["Desenvolvimento de app", "Front-end web"];

  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
