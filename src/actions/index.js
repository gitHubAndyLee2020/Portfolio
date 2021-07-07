import { MAIN,PROJECTS,ABOUT,CONTACT } from "../constants/actionTypes"

export const goToMain = () => {
    const action = { type: MAIN }

    return action 
}

export const goToProjects = () => {
    const action = { type: PROJECTS }

    return action 
}

export const goToAbout = () => {
    const action = { type: ABOUT }

    return action 
}

export const goToContact = () => {
    const action = { type: CONTACT }

    return action 
}