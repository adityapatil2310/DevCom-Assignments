import React from 'react'
import photo from './assets/photo.png'

export default function About() {
  return (
    <>
        <section className='about'>
            <div className="about-container">

                <div className='about-content'>
                    <h2>Hi, I am</h2>
                    <h1>Aditya</h1>
                    <p>I am currently a first year student at IIT Bombay pursuing BTech. in Civil Engineering.
                    <br />Feel free to explore this website to know more about me.</p>
                </div>
                <div className='profileImg'>
                    <img id="profile"style={{height:"70%", width:"60%"}} src={photo} alt="profile pic" />
                </div>
            </div>
            <div className="socials">
                <a href="https://www.instagram.com/adityapatil_2310/" target="_blank" rel="noopener noreferrer"><i class='bx bxl-instagram'></i> Instagram</a>
                <a href="https://github.com/adityapatil2310" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github' ></i>GitHub</a>
                <a href="https://twitter.com/adityapatil2310" target="_blank" rel="noopener noreferrer"><i class='bx bxl-twitter'></i>Twitter</a>
            </div>
        </section>
    </>
  )
}
