import React, {useContext} from "react";
import ProjectContext from "../../ context/projects/ProjectContext";

const Project = ({project}) => {

    const {selectProject} = useContext(ProjectContext);

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => selectProject(project.id)}
            >
                {project.name}
            </button>
        </li>
    );
}

export default Project;