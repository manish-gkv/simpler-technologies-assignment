import './App.css'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import UserCard from './components/UserCard'
import { Route, Routes } from 'react-router-dom'
function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><UserCard name="Manish" email="manishkumarslmp@gmail.com" /></div>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/contact" element={<div>Contact Us</div>} />
      </Routes>
      
    </>
  )
}

export default App
