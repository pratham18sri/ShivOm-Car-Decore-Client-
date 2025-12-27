import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar.css'

export default function MobileSidebar({ open, onClose }){
  if(!open) return null
  return (
    <div className="sidebar-backdrop" onClick={onClose}>
      <aside className="sidebar" onClick={e=>e.stopPropagation()}>
        <div className="sidebar-header">
          <img src="/logo.png" alt="logo" className="sidebar-logo" />
          <button className="sidebar-close" onClick={onClose}>Close</button>
        </div>
        <nav className="sidebar-nav">
          <Link to="/" onClick={onClose}>Home</Link>
          <Link to="/accessories" onClick={onClose}>Accessories</Link>
          <Link to="/contact" onClick={onClose}>Contact Us</Link>
        </nav>
        <div className="sidebar-wa">
          <a href="https://wa.me/919897874613" target="_blank" rel="noreferrer" className="btn-wa">WhatsApp</a>
        </div>
      </aside>
    </div>
  )
}
