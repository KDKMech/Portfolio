import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import mySkills from './components/skills.jsx'

function App() {
  const skillList = mySkills.map((skill, index) =>  
    <button key={index}>{skill.name}</button>
  )

  return (
    <>
      <h1>Miles Tarricone</h1>
      <p>this is my portfolio</p>
      {skillList}

    </>
  )
}

export default App
