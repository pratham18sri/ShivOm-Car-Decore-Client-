import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/navbar.css'
import MobileSidebar from './MobileSidebar'

const WA_URL = 'https://wa.me/919897874613'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <img src="/logo.png" alt="ShivOm Car Seat Covers logo" />
          <Link to="/" className="brand-name">ShivOm Car Seat Covers</Link>
        </div>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/accessories">Accessories</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>

        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="wa-btn">WhatsApp</a>
          <button className="mobile-hamburger" onClick={()=>setOpen(true)} aria-label="Open menu">☰</button>
        </div>
      </div>
      <MobileSidebar open={open} onClose={()=>setOpen(false)} />
    </header>
  )
}
