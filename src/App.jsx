import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center'>
        <h1 className='text-center text-red-500 text-bold text-2xl'>
          Hola mundo desde React + Vite + Tailwind CSS
        </h1>
      </div>
    </>
  )
}

export default App
