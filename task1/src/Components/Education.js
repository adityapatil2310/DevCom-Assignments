import React from 'react'
import iitb from './assets/iitb.png'
import nhps from './assets/nhps.png'
import pbis from './assets/pbis.png'

export default function Education() {
  return (
    <div className='container eduContainer'>
      <h1>My Education</h1>
      <div className="col">
        <div className="row"><span className="year my-3">2023-present</span> <img className='eduLogo' src={iitb} alt="IITB" />IIT Bombay</div>
        <div className="row"><span className="year my-3"> 2021-23</span> <img className='eduLogo' src={pbis} alt="PBIS" />Poddar Brio Internatiol School</div>
        <div className="row"><span className="year my-3">2008-21 </span> <img className='eduLogo' src={nhps} alt="NHPS" />New Horizon Public School</div>
      </div>
        
    </div>
  )
}
