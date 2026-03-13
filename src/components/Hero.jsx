import React from 'react'
import { Link } from 'react-router-dom'
import RotatingText from './RotatingText'
import '../styles/hero.css'

export default function Hero(){
  return (
    <section className="hero">
      <video src="/Video_Generation_in_K.mp4" poster="/thumbnail-364x204.jpg" autoPlay muted loop playsInline preload="metadata" />
      <div className="overlay" />
      <div className="content">
        <h1>Premium Car <span className="accent-text">Interior Accessories</span></h1>
          <div style={{marginTop:12}}>
            <RotatingText phrases={["Seat Covers","Steering Covers","Car Matting","Floor Liners"]} interval={2400} />
          </div>
        <p className="subtitle">Crafted for Style. Built for Durability.</p>
        <p className="muted">By Ram Srivastav, Jagat Srivastav &bull; +91 9897874613</p>

        <div className="actions">
          <Link to="/accessories" className="btn btn-primary">Explore Accessories</Link>
          <a href="https://wa.me/919897874613" target="_blank" rel="noreferrer" className="btn btn-wa">WhatsApp Now</a>
        </div>
      </div>
    </section>
  )
}
