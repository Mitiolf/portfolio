import React from 'react'
import { Link } from 'react-router-dom'
import {artist, programer} from '../img'

const Homepage = () => {
  return (
    <div className='homepage-container'>
        <h1>Hi, I'm Wojtek</h1>
        <div className='programer-container'><Link to="/programer"><img src={programer} alt="programer graphic"/><h2>Programer</h2></Link></div>
        <div className='artist-container'><Link to="/artist"><img src={artist} alt='artist graphic'/><h2>Artist</h2></Link></div>
    </div>
  )
}

export default Homepage