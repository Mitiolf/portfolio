import React from 'react'
import { Link } from 'react-router-dom'

import {selfphoto} from '../img'
import Footer from './Footer'

const Artist = () => {
  return (
    <div className='cv-container'>
    <Link to="/">
      <svg className='back' width="334" height="334" viewBox="0 0 334 334" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="167" cy="167" r="159.5" stroke="#552200" stroke-width="15"/>
        <path id='arrow' d="M254 174.5C258.142 174.5 261.5 171.142 261.5 167C261.5 162.858 258.142 159.5 254 159.5V174.5ZM74.6967 161.697C71.7678 164.626 71.7678 169.374 74.6967 172.303L122.426 220.033C125.355 222.962 130.104 222.962 133.033 220.033C135.962 217.104 135.962 212.355 133.033 209.426L90.6066 167L133.033 124.574C135.962 121.645 135.962 116.896 133.033 113.967C130.104 111.038 125.355 111.038 122.426 113.967L74.6967 161.697ZM254 159.5L80 159.5V174.5L254 174.5V159.5Z" fill="#552200"/>
        </svg>
    </Link>

    <section className='first-section'>
      <div><h2>Wojciech Sordyl</h2><h3>Human Being</h3></div>
      <img src={selfphoto} alt='me' className='myphoto'/>
    </section>
    <section className='about-skils'>
      <div className='about'><h2>About</h2>
        <p>I'm interested in every kind of art. Currently, I'm developing my dancing skills because it connects music and movement.
        Music is important in my life because I was a student in the Wadowice Music School, where I learned how to play bassoon and piano.
        Movement also plays a key role in my lifetime. I have been playing sports since I can remember.
        I'm fascinated by the human body and nature. I love hiking and being in the wild.
        </p>
      </div>
      <div className='skils'><h2>Skils</h2>
        <ul><li>Playing piano</li><li>Drawing</li><li>Inkscape</li><li>Figma</li><li>Contemporary Dance</li><li>Movement</li></ul>
      </div>
    </section>
    <Footer />
    </div>
  )
}

export default Artist