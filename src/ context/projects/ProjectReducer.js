import {ADD_PROJECT, DELETE_PROJECT, GET_PROJECTS, PROJECT_FORM, SELECT_PROJECT, VERIFY_FORM} from "../../types/index"

export default (state, action) => {
    switch (action.type) {
        case PROJECT_FORM:
            return {
                ...state,
                form: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false,
                formError: false
            }
        case SELECT_PROJECT:
            return {
                ...state,
                project: state.projects.filter(project => project.id === action.payload)[0]
            }
        case VERIFY_FORM:
            return {
                ...state,
                formError: true
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payloadType),
                project: null,
            }
        default:
            return state;
    }
}