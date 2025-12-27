import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloating from './WhatsAppButton'
import '../styles/layout.css'

export default function LayoutWrapper({ children }){
  return (
    <div className="layout-root">
      <Navbar />
      <main className="layout-main">{children}</main>
      <Footer />
      <WhatsAppFloating />
    </div>
  )
}
