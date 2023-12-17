import { useParams } from 'react-router-dom';
import useGetAllData from '../../../Hooks/useGetAllData';
import { useEffect, useState } from 'react';
import DetailsCard from './DetailsCard';

const Details = () => {
  const { id } = useParams();

  //useCustomHook
  const [projects, isLoading] = useGetAllData();

  const [project, setProject] = useState({});

  useEffect(() => {
    if (projects) {
      const findSingleProject = projects?.find(
        (singleProject) => singleProject.id == id
      );
      setProject(findSingleProject);
    }
  }, [id, projects]);

  return (
    <div className="py-60">
      <DetailsCard project={project}></DetailsCard>
    </div>
  );
};

export default Details;
