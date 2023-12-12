import { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      }, []);
  });
  return <div>
    
  </div>;
};

export default Projects;
