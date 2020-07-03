import React, {useReducer} from "react"
import uuid from "uuid/dist/v4";

import ProjectContext from "./ProjectContext";
import projectReducer from "./ProjectReducer";

import {ADD_PROJECT, DELETE_PROJECT, GET_PROJECTS, PROJECT_FORM, SELECT_PROJECT, VERIFY_FORM} from "../../types";

const useProjectState = props => {
    const initialState = {
        form: false,
        formError: false,
        projects: [],
        project: null
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

    const addProject = project => {
        project.id = uuid();
        dispatch({
            type: ADD_PROJECT,
            payload: project
        });
    }

    const showError = () => {
        dispatch({
            type: VERIFY_FORM
        });
    }

    const selectProject = projectId => {
        dispatch({
            type: SELECT_PROJECT,
            payload: projectId
        });
    }

    const deleteProject = projectID => {
        dispatch({
            type: DELETE_PROJECT,
            payloadType: projectID
        });
    }

    return (
        <ProjectContext.Provider
            value={{
                // States
                form: state.form,
                formError: state.formError,
                projects: state.projects,
                project: state.project,

                // Functions
                showForm,
                showError,
                getProjects,
                addProject,
                selectProject,
                deleteProject
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default useProjectState;