import React from 'react'
import { Link } from 'react-router-dom'

import {back , tenzies, quiz, crypto, selfphoto} from '../img'
import Footer from './Footer'

const Programer = () => {
  return (
    <div className='cv-container'>
    <Link to="/"><img src={back} className='back' alt='back arrow'/></Link>
    
      <section className='first-section'>
        <div><h2>Wojciech Sordyl</h2><h3>Front-end Developer</h3></div>
        <img src={selfphoto} alt='me' className='myphoto'/>
      </section>
      <section className='about-skils'>
        <div className='about'><h2>About</h2>
          <p>I'm a student of social computer science at AGH in Cracow.
             In my studies, we learn some programming languages like python, basic HTML, CSS, but for me, it was not enough. 
             It is the reason why I started learning from the internet.</p>
        </div>
        <div className='skils'><h2>Skils</h2>
          <ul><li>Html</li><li>JavaScript</li><li>CSS</li><li>React</li><li>Git</li><li>Node</li><li>Figma</li></ul>
        </div>
      </section>
      <section className='projects'>
        <h2>Projects</h2>
        <div className='projects-container'>
          <a href='https://mitiolf.github.io/quiz-2.0/' target="_blank" rel="noreferrer"><div className='projectdemo'><img src={quiz} alt='scren from app'/></div></a>
          <a href='https://mitiolf.github.io/tenzies/' target="_blank" rel="noreferrer"><div className='projectdemo'><img src={tenzies} alt='scren from app'/></div></a>
          <a href='https://mitiolf.github.io/crypto-app-react/' target="_blank" rel="noreferrer"><div className='projectdemo'><img src={crypto} alt='scren from app'/></div></a>
        </div>
      </section>
      <Footer />
      </div>
  )
}

export default Programer