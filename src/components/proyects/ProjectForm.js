import React, {Fragment} from "react";

const ProjectForm = () => {
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primary"
            >New Project</button>
            <form
                className="new-project-form"
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Project's  Name"
                    name="name"
                />
                <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Create Project"
                />
            </form>
        </Fragment>
    );
}

export default ProjectForm;