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
    <div className="py-10 text-slate-100 text-center bg-slate-950">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-teal-400 text-lg">My Portfolio</p>
        <h1 className="text-2xl md:text-5xl font-semibold leading-tight  mt-10 mb-20 md:mb-32">
          Visit My Recent Portfolio
        </h1>

        <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 gap-5 mx-20 pb-36">
          {projects?.map((project) => (
            <ProjectsCard key={project.id} project={project}></ProjectsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
