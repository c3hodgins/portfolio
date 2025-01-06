import { useState } from 'react'
import './App.css'

function App() {
  const [section, setSection] = useState('About')

  const handleSection = (sect) => {
    setSection(sect);
  }

    
  return (
    <>
      <div className='flex justify-between  top-0'>
        <h1>Charles Hodgins</h1>
        <div className = 'gap-2 flex justify-between'></div>
        <h2 onClick={() => handleSection('About')}>About</h2>
        <h2 onClick={() => handleSection('Projects')}>Projects</h2>
        <h2 onClick={() => handleSection('Contact')}>Contact</h2>
      </div>
    </>
  )
}

export default App
