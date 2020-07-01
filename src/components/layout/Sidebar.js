import React from "react";
import ProjectForm from "../proyects/ProjectForm";

const Sidebar = () => {
    return (
         <aside>
             <h1>MERN<span>Tasks</span></h1>
             <ProjectForm/>
             <div className="projects">
                 <h2>Your Projects</h2>
             </div>
         </aside>
    );
}

export default Sidebar;