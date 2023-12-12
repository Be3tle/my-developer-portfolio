import { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      }, []);
  });
  return (
    <div className="py-10 max-w-screen-2xl mx-auto text-slate-100 text-center bg-slate-950">
      <p className="text-teal-400 text-lg">My Portfolio</p>
      <h1 className="text-5xl font-semibold leading-tight  mt-10 mb-32">
        Visit My Recent Portfolio
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-20 pb-36">
        {projects?.map((project) => (
          <ProjectsCard key={project.id} project={project}></ProjectsCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
