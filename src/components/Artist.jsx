import React from 'react'
import { Link } from 'react-router-dom'

import {back , selfphoto} from '../img'
import Footer from './Footer'

const Artist = () => {
  return (
    <div className='cv-container'>
    <Link to="/"><img src={back} className='back' alt='back arrow'/></Link>

    <section className='first-section'>
      <div><h2>Wojciech Sordyl</h2><h3>Human Being</h3></div>
      <img src={selfphoto} alt='me' className='myphoto'/>
    </section>
    <section className='about-skils'>
      <div className='about'><h2>About</h2>
        <p>I'm interested in every kind of art. Currently, I'm focusing on dance because it includes music and movement.
        Music is important to me because I attended the Wadowice Music School, where I learned to play bassoon and piano.
        Movement also plays a key role in my life. I have been playing sports since I can remember.
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