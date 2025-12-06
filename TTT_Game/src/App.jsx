import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './Components/Grid/Grid'

function App() {
  
  return (
    <>
    <div className='bot'>
      <Grid numberOfCards={9}/>
    </div>
    </>
  )
}

export default App
