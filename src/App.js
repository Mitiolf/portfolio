import React from 'react'
import { Routes, Route, Link} from 'react-router-dom';

import Programer from './components/Programer';
import Homepage from './components/Homepage';
import Artist from './components/Artist';

const App = () => {
  return (
    <div className='app'>
        <main className='main'>
                <Routes>
                    <Route exact path={"/"} element={<Homepage />} />
                    <Route exact path={"/portfolio"} element={<Homepage />} />
                    <Route exact path={"/programer"} element={<Programer />} />
                    <Route exact path="/artist" element={<Artist />} />
                </Routes> 
        </main>
    </div>
  )
}

export default App