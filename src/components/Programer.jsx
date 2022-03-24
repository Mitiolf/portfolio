import React from 'react'
import { Link } from 'react-router-dom'

import photo from '../img/selfphoto.png'
import back from '../img/back.png'

const Programer = () => {
  return (
    <div className='cv-container'>
    <Link to="/"><img src={back} className='back' alt='back arrow'/></Link>
    
      <section className='first-section'>
        <div><h2>Wojciech Sordyl</h2><h3>Front-end Developer</h3></div>
        <img src={photo} alt='me' className='myphoto'/>
      </section>
      <section className='about-skils'>
        <div className='about'><h2>About</h2>
          <p>I'm a student of social computer sciense at AGH in Cracow. I started my programing journey half year ago. Before I wrote some code in pyton on my studies. I'm a student of social computer sciense at AGH in Cracow. I started my programing journey half year ago. Before I wrote some code in pyton on my studies.</p>
        </div>
        <div className='skils'><h2>Skils</h2>
          <ul><li>Html</li><li>JavaScript</li><li>CSS</li><li>React</li><li>Git</li><li>Node</li><li>Figma</li></ul>
        </div>
      </section>
      <section className='projects'>
        <h2>Projects</h2>
        <div className='projects-container'>
          <div className='projectdemo'></div><div className='projectdemo'></div><div className='projectdemo'></div>
        </div>
      </section>
      </div>
  )
}

export default Programer