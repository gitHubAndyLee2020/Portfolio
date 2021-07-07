import React from 'react'
import calculator from '../pictures/calculator.PNG'
import planets from '../pictures/planets.PNG'
import sortingAlgorithm from '../pictures/sorting_algorithm.PNG'
import memories from '../pictures/memories.PNG'

export default function Projects() {

    return (
        <div>
            <div className='background-projects'></div>
            <h1 className='title title-projects'>Projects</h1>
            <div className='triangle-red'></div>
            <div className='container-projects'>
                <div className='container-picture-description'>
                    <a className='project-link' target='_blank' href='https://githubandylee2020.github.io/calculator/'><img className='project-picture' src={calculator} alt='calculator' /></a>
                    <p className='project-description'>Calculator App</p>
                </div>
                <div className='container-picture-description'>
                    <a className='project-link' target='_blank' href='https://githubandylee2020.github.io/Planets/'><img className='project-picture' src={planets} alt='planets' /></a>
                    <p className='project-description'>Planets Simulator</p>
                </div>
                <div className='container-picture-description'>
                    <a className='project-link' target='_blank' href='https://githubandylee2020.github.io/SortingVisualizer/'><img className='project-picture' src={sortingAlgorithm} alt='sortingAlgorithm' /></a>
                    <p className='project-description'>Sorting Algorithm Visualizer</p>
                </div>
                <div className='container-picture-description'>
                    <a className='project-link' target='_blank' href='https://memories-app-techandy42.netlify.app/'><img className='project-picture' src={memories} alt='memories' /></a>
                    <p className='project-description'>Memories Clone Project</p>
                </div>
            </div>
        </div>
    )
}
