import React, {useReducer} from "react"

import ProjectContext from "./ProjectContext";
import projectReducer from "./ProjectReducer";

import {GET_PROJECTS, PROJECT_FORM} from "../../types";

const useProjectState = props => {
    const initialState = {
        form: false,
        projects: []
    };

    const projects = [
        {id: 1, name: "Virtual Store"},
        {id: 2, name: "Learn React"},
        {id: 3, name: "Learn Node"}
    ];

    // Dispatch to execute actions
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // functions for crud

    // Switch state.form to true to show the create project form
    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        });
    }

    // get projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        });
    }

    return (
        <ProjectContext.Provider
            value={{
                // States
                form: state.form,
                projects: state.projects,

                // Functions
                showForm,
                getProjects
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default useProjectState;