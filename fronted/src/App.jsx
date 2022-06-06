import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Cardata from "./Component/Cardata"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Cardata/>
    </div>
  )
}

export default App
