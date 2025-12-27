import React from 'react'
import '../styles/whatsapp.css'

export default function WhatsAppFloating(){
  return (
    <a href="https://wa.me/919897874613" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="wa-floating">
      <div className="wa-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.88 11.88 0 0 0 12 0 12 12 0 0 0 0 12c0 2.12.55 4.11 1.6 5.86L0 24l6.35-1.64A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 21.5c-1.15 0-2.27-.22-3.31-.66l-.24-.1-3.77.97 1.01-3.68-.12-.25A9.5 9.5 0 1 1 21.5 12 9.48 9.48 0 0 1 12 21.5z"/></svg>
      </div>
    </a>
  )
}
