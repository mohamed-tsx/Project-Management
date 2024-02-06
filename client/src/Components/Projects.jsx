import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../Queries/projectQueries";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      {data.projects.length > 0 ? (
        <div>
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default Projects;
