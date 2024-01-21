import React from 'react'
import photo from './assets/photo.png'

export default function About() {
  return (
    <>
        <section className='about'>
            <div className="d-flex justify-content-around" style={{marginTop:"0px", padding:"50px"}}>

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
        {/* <section className='about'>
            <div className="d-flex justify-content-around" style={{marginTop:"150px", padding:"50px"}}>

                <div className='container'>
                    <h2 className='mt-5 ms-5'>Hi, <br />I am Aditya <br /> <br /><br /> <span style={{fontSize:"20px"}}>I am currently a first year student at IIT Bombay pursuing BTech. in Civil Engineering.
                    <br />Feel free to explore this website to know more about me.</span></h2>
                </div>
                <div>
                    <img style={{height:"90%", width:"90%"}} src={photo} alt="profile pic" />
                </div>
            </div>
        </section> */}

        

        {/* <div className='container'>
            <h1 className='mt-5'>Hi,</h1>
            <h1 className='my-3'>I am Aditya</h1>
            <h3 className='text-center'>I am currently a first year student at IIT Bombay pursuing BTech. in Civil Engineering.
            <br />Feel free to explore this website to know more about me.</h3>
        </div>
        <div>
            <img style={{height:"15%", width:"15%"}} src={photo} alt="profile photo" />
        </div> */}
    </>
  )
}
