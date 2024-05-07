import { useState } from 'react'
import './App.css'
import About from './component/About'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <About/>
    </>
  )
}

export default App
