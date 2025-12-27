
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutWrapper from './components/LayoutWrapper'
import Home from './pages/Home'
import Accessories from './pages/Accessories'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/accessories/:brand" element={<Accessories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  )
}

export default App
