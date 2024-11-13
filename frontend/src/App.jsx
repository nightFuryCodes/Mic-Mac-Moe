import { useState } from 'react'
import './App.css'
import Signin from './Components/Signin/Signin'
import TicTacToe from './Components/TicTacToe'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path = "/" element = {<Signin/>}/>
        <Route path = "/game" element = {<TicTacToe size = {3} />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
