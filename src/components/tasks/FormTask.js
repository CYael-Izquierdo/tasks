import React, {useContext} from "react";
import ProjectContext from "../../ context/projects/ProjectContext";

const FormTask = () => {

    const {project} = useContext(ProjectContext);

    if (!project) return null;
    return (
        <div className="form-custom">
            <form

            >
                <div className="input-container">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Task Name..."
                        name="name"
                    />
                </div>
                <div className="input-container">
                    <input
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                        value="Add task"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTask;