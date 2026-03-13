import React from 'react'
import '../styles/contact.css'

export default function Contact(){
  return (
    <div className="contact-wrap">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">Get in touch for custom orders, pricing, or any questions</p>

      <div className="contact-grid">
        <div className="contact-form-card">
          <form>
            <div className="form-group">
              <label className="label">Name</label>
              <input className="input" placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label className="label">Phone</label>
              <input className="input" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div className="form-group">
              <label className="label">Car Model</label>
              <input className="input" placeholder="e.g. Maruti Swift, Hyundai Creta" />
            </div>
            <div className="form-group">
              <label className="label">Message</label>
              <textarea className="textarea" rows={4} placeholder="Tell us what you need..." />
            </div>
            <div>
              <button className="btn btn-primary" type="submit">Send Message</button>
            </div>
          </form>
        </div>
        <div className="contact-info-card">
          <h3 className="info-heading">Get In Touch</h3>
          <div className="info-item">
            <span className="info-label">Owner</span>
            <span className="info-value">Ram Srivastav</span>
          </div>
          <div className="info-item">
            <span className="info-label">Phone</span>
            <span className="info-value">+91 9897874613</span>
          </div>
          <div style={{marginTop:16}}>
            <a href="https://wa.me/919897874613" target="_blank" rel="noreferrer" className="btn btn-wa" style={{width:'100%',justifyContent:'center'}}>WhatsApp Us</a>
          </div>
          <div style={{marginTop:16}} className="map-aspect">
            <iframe title="Shop Location" src="https://www.google.com/maps?q=Bhagwaan%20Talkiesh%2C%20Kripal%20Colony%2C%20Sanjay%20Nagar%2C%20Pashupati%20Colony%2C%20Khandari%2C%20Agra%2C%20Uttar%20Pradesh%20282002&output=embed" className="map-embed" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  )
}
