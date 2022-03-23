import React from 'react'
import { Link } from 'react-router-dom'
import artist from '../img/artist.png'
import programer from '../img/programer.png'

const Homepage = () => {
  return (
    <div className='homepage-container'>
        <h1 className='homepage-h1'>Hi, I'm Wojtek</h1>
        <div className='programer-container'><Link to="/programer"><img src={programer} alt="programer graphic"/><h2 className='homepage-h2'>Programer</h2></Link></div>
        <div className='artist-container'><Link to="artist"><img src={artist} alt='artist graphic'/><h2 className='homepage-h2'>Artist</h2></Link></div>
    </div>
  )
}

export default Homepage