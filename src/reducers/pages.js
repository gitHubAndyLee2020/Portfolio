import { MAIN,PROJECTS,ABOUT,CONTACT } from "../constants/actionTypes"

export const pages = (page='main',action) => {
    switch (action.type) {
        case MAIN:
            return 'main'
        case PROJECTS:
            return 'projects'
        case ABOUT:
            return 'about'
        case CONTACT:
            return 'contact'
        default:
            return 'main'
    }
}