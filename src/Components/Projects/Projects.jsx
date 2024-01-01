import ProjectsCard from './ProjectsCard';
import 'aos/dist/aos.css';
import useGetAllData from '../../Hooks/useGetAllData';

const Projects = () => {
  const [data, isLoading] = useGetAllData();

  return (
    <div id="projects" className="py-10 text-slate-100 text-center bg-black">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-teal-400 text-lg">My Portfolio</p>
        <h1 className="text-2xl md:text-5xl font-semibold leading-tight  mt-10 mb-20 md:mb-32">
          Visit My Recent Portfolio
        </h1>

        <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 gap-5 mx-20 lg:pb-20">
          {data?.map((project) => (
            <ProjectsCard key={project.id} project={project}></ProjectsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
