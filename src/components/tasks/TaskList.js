import React, {Fragment} from "react";
import Task from "./Task";

const TaskList = () => {
    const projectTasks = [
        {name: "Select platform", complete: true, id: 1},
        {name: "Select colors", complete: false, id: 2},
        {name: "Select pay platform", complete: true, id: 3},
        {name: "Create home page", complete: false, id: 4}
    ];

    return (
        <Fragment>
            <h2>Project: Virtual Store</h2>

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
            >Delete project &times;</button>
        </Fragment>
    );
}

export default TaskList;