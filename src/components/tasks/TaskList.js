import React, {Fragment, useContext} from "react";
import Task from "./Task";
import ProjectContext from "../../ context/projects/ProjectContext";

const TaskList = () => {
    const {project, deleteProject} = useContext(ProjectContext);

    const projectTasks = [
        {name: "Select platform", complete: true, id: 1},
        {name: "Select colors", complete: false, id: 2},
        {name: "Select pay platform", complete: true, id: 3},
        {name: "Create home page", complete: false, id: 4}
    ];

    if (!project) return <h2>Select a project</h2>;
    return (
        <Fragment>
            <h2>Project: {project.name}</h2>

            <ul className="task-list">
                {projectTasks.length !== 0 ?
                    projectTasks.map(task => <Task key={task.id} task={task}/>)
                    :
                    <li className="task">No tasks have been added to the project yet</li>
                }
            </ul>

            <button
                type="button"
                className="btn btn-delete"
                onClick={() => deleteProject(project.id)}
            >Delete project &times;</button>
        </Fragment>
    );
}

export default TaskList;