import React from 'react'
import myPicture from '../pictures/my_picture.png'

export default function About() {
    return (
        <div >
            <div className='background-about'></div>
            <h1 className='title title-about'>About Me</h1>
            <div className='triangle-red'></div>
            <div className='container-content'>
                <div className='container-cards'>
                    <div className='card card-one'>
                        <div className='card-symbol'>♠</div>
                        <h3 className='title title-card'>Personal Info</h3>
                        <p>Hello! My name is Hokyung (Andy) Lee</p>
                        <p>I am 17 years old</p>
                        <p>I currently live in Canada</p>
                    </div>
                    <div className='card card-two'>
                        <div className='card-symbol'>♣</div>
                        <h3 className='title title-card'>Tech Stack</h3>
                        <p>MERN Web Stack</p>
                        <p>M - MongoDB with Mongoose</p>
                        <p>E - Express</p>
                        <p>R - React / Redux / CSS</p>
                        <p>N - Node.js</p>
                    </div>
                    <div className='card card-three'>
                        <div className='card-symbol'>♥</div>
                        <h3 className='title title-card'>Other Coding Knowledge</h3>
                        <p>Python</p>
                        <p>Java</p>
                        <p>ES6 Javascript and DOM</p>
                        <p>PostgreSQL</p>
                    </div>
                    <div className='card card-four'>
                        <div className='card-symbol'>♦</div>
                        <h3 className='title title-card'>Fun Facts</h3>
                        <p>I am a nerd</p>
                        <p>A COMPUTER NERD</p>
                    </div>
                    <div className='container-picture'><img className='picture' src={myPicture} alt='My Picture' /></div>
                </div>
            </div>
        </div>
    )
}
