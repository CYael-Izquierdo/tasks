import React, {Fragment, useContext, useState} from "react";
import ProjectContext from "../../ context/projects/ProjectContext";

const ProjectForm = () => {
    // get form state
    const {form, formError, showForm, addProject, showError} = useContext(ProjectContext);

    const projectInitState = {
        name: ""
    };
    const [project, setProject] = useState(projectInitState);
    const {name} = project;

    // read input value
    const handleChange = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        });
    }

    // create project
    const handleSubmit = e => {
        e.preventDefault();

        // Validations
        if (name.trim() === "") {
            showError();
            return;
        }

        // add to state
        addProject(project);
        // reset form
        setProject(projectInitState);
    }

    return (
        <Fragment>
            {form ? null :
                <button
                    type="button"
                    className="btn btn-block btn-primary"
                    onClick={() => showForm()}
                >New Project</button>
            }
            {
                form ? (
                    <form
                        className="new-project-form"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Project's  Name"
                            name="name"
                            onChange={handleChange}
                            value={name}
                        />
                        <input
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Create Project"
                        />
                    </form>
                ) : null
            }
            {formError ? <p className="error message">Project's name is required</p> : null}
        </Fragment>
    );
}

export default ProjectForm;