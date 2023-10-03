import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import OurVision from './Containers/OurVision/OurVision';
import WhoWeAre from './Containers/WhoWeAre/WhoWeAre';


function App() {
  
  return (
    <>
      <div className='first_section'>
        <Navbar />
        <OurVision />
        <WhoWeAre />
      </div>
    </>
  )
}

export default App
