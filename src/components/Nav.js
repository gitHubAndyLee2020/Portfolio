import React from 'react'
import { goToMain,goToAbout,goToContact,goToProjects } from '../actions'
import { useDispatch,useSelector } from 'react-redux'


export default function About() {
    const dispatch = useDispatch()
    const pages = useSelector((state) => state.pages)

    let navClass = 'nav'

    if (pages === 'main') {
        navClass += ' nav-main'
    } else if (pages === 'about') {
        navClass += ' nav-about'
    } else if (pages === 'projects') {
        navClass += ' nav-projects'
    } else {
        navClass += ' nav-contact'
    }

    return (
        <div>
            <nav className={navClass}>
                <div className='page' onClick={() => dispatch(goToMain())}>Main</div>
                <div className='page' onClick={() => dispatch(goToAbout())}>About</div>
                <div className='page' onClick={() => dispatch(goToProjects())}>Projects</div>
                <div className='page' onClick={() => dispatch(goToContact())}>Contact</div>
            </nav>
        </div>
    )
}