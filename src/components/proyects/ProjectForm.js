import React, {Fragment, useContext, useState} from "react";
import ProjectContext from "../../ context/projects/ProjectContext";

const ProjectForm = () => {
    // get form state
    const {form, showForm} = useContext(ProjectContext);

    const [project, setProject] = useState({
        name: ""
    });
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

        // add to state

        // reset form
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
        </Fragment>
    );
}

export default ProjectForm;