import './App.css'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/contact" element={<div>Contact Us</div>} />
      </Routes>
      
    </>
  )
}

export default App
