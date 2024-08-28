import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Adicao from './components/Adicao'
import PrecisoEstudar from './components/PrecisoEstudar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Adicao num1={1} num2={2}/>
      <PrecisoEstudar nomeDaTecnologia="React"/>
    </>
  )
}

export default App
