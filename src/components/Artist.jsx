import React from 'react'
import { Link } from 'react-router-dom'

import photo from '../img/selfphoto.png'
import back from '../img/back.png'

const Artist = () => {
  return (
    <div className='cv-container'>
    <Link to="/"><img src={back} className='back' alt='back arrow'/></Link>

    <section className='first-section'>
      <div><h2>Wojciech Sordyl</h2><h3>Human Being</h3></div>
      <img src={photo} alt='me' className='myphoto'/>
    </section>
    <section className='about-skils'>
      <div className='about'><h2>About</h2>
        <p>I'm a student of social computer sciense at AGH in Cracow. I started my programing journey half year ago. Before I wrote some code in pyton on my studies. I'm a student of social computer sciense at AGH in Cracow. I started my programing journey half year ago. Before I wrote some code in pyton on my studies.</p>
      </div>
      <div className='skils'><h2>Skils</h2>
        <ul><li>Playing piano</li><li>Drawing</li><li>Inkscape</li><li>Figma</li><li>Contemporary Dance</li><li>Movement</li></ul>
      </div>
    </section>
    </div>
  )
}

export default Artist