import React, {useContext, useEffect} from "react";
import Project from "./Project";
import ProjectContext from "../../ context/projects/ProjectContext";

const ProjectList = () => {
    // get projects from ProjectContext
    const {projects, getProjects} = useContext(ProjectContext);

    // Get projects when component is rendered
    useEffect(() => {
        getProjects();
    }, []);

    if (projects.length === 0) return null;
    return (
        <ul className="project-list">
            {projects.map(project =>
                <Project
                    key={project.id}
                    project={project}
                />
            )}
        </ul>
    );
}

export default ProjectList;