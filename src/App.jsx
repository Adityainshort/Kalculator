import { useState } from 'react'
import './App.css'
import Page from './calculator/page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline">
       Aditya Ka KalCulator !
    </h1>
    <div className='h-[1px] bg-black w-full mt-5 mb-4'></div>
      <Page/>
    </>
  )
}

export default App
