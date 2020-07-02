import React from "react";
import ProjectForm from "../proyects/ProjectForm";
import ProjectList from "../proyects/ProjectList";

const Sidebar = () => {
    return (
         <aside>
             <h1>MERN<span>Tasks</span></h1>
             <ProjectForm/>
             <div className="projects">
                 <h2>Your Projects</h2>
                 <ProjectList/>
             </div>
         </aside>
    );
}

export default Sidebar;