import React from 'react'
import {github, facebook, linked} from '../img'


const Footer = () => {
  return (
    <footer>
        <div className='contact-container'>
          <h2>Contact</h2>
          <p>Wojciech Sordyl</p>
          <p>tel. 730 554 345</p>
          <p>e-mail: sordyl@student.agh.edu.pl</p>
        </div>
        <div className='icons-container'>
          <a href='https://github.com/Mitiolf' target="_blank" rel="noreferrer"><img src={github} alt='github'/></a>
          <a href='https://www.linkedin.com/in/wojciech-sordyl-949b6a233/' target="_blank" rel="noreferrer"><img src={linked} alt='linkedin'/></a>
          <a href='https://www.facebook.com/wojtek.sordyl.98/' target="_blank" rel="noreferrer"><img src={facebook} alt='facebook'/></a>
        </div>
      </footer>
  )
}

export default Footer