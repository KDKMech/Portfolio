import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import mySkills from './components/skills.jsx'
// import skillCard from './components/skill.jsx'


function App() {///had to revert a lot of work because I broke everything
  
  
  const skillList = mySkills.map((skill, index) =>  
    <button key={index}>{skill.name}</button>
  )
  return (
    <>
      <h1>Miles Tarricone</h1>
      <p>this is my portfolio so far.</p>
      {skillList}

    </>
  )
}

export default App
