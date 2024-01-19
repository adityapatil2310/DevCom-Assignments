import React from 'react'
import photo from './photo.png'

export default function About() {
  return (
    <>
        <div className="d-flex justify-content-around" style={{marginTop:"150px"}}>

            <div className='container'>
                <h2 className='mt-5 ms-5'>Hi, <br />I am Aditya <br /> <br /><br /> <span style={{fontSize:"20px"}}>I am currently a first year student at IIT Bombay pursuing BTech. in Civil Engineering.
                <br />Feel free to explore this website to know more about me.</span></h2>
            </div>
            <div>
                <img style={{height:"90%", width:"90%"}} src={photo} alt="profile pic" />
            </div>
        </div>

        

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
