import React from "react";
import Sidebar from "../layout/Sidebar";
import Bar from "../layout/Bar";
import FormTask from "../tasks/FormTask";
import TaskList from "../tasks/TaskList";

const Projects = () => {
    return (
        <div className="app-container">
            <Sidebar/>
            <div className="main-section">
                <Bar/>
                <main>
                    <FormTask/>
                    <div className="task-container">
                        <TaskList/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Projects;