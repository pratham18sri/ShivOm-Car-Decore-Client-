import React from 'react'
import '../styles/contact.css'

export default function Contact(){
  return (
    <div className="contact-wrap">
      <h1 style={{fontSize:'1.5rem',color:'#0b63d6',margin:0}}>Contact Us</h1>
      <div className="contact-grid" style={{marginTop:'1rem'}}>
        <div>
          <form>
            <div className="form-group">
              <label className="label">Name</label>
              <input className="input" />
            </div>
            <div className="form-group">
              <label className="label">Phone</label>
              <input className="input" />
            </div>
            <div className="form-group">
              <label className="label">Car Model</label>
              <input className="input" />
            </div>
            <div className="form-group">
              <label className="label">Message</label>
              <textarea className="textarea" rows={4} />
            </div>
            <div>
              <button className="btn-primary">Send</button>
            </div>
          </form>
        </div>
        <div>
          <div style={{fontWeight:600}}>Owner: Ram Srivastav</div>
          <div style={{color:'#6b7280'}}>Phone: +91 9897874613</div>
          <div style={{marginTop:12}}>
            <a href="https://wa.me/919897874613" target="_blank" rel="noreferrer" className="btn-wa">WhatsApp</a>
          </div>
          <div style={{marginTop:12}} className="map-aspect">
            <iframe title="Shop Location" src="https://www.google.com/maps?q=Bhagwaan%20Talkiesh%2C%20Kripal%20Colony%2C%20Sanjay%20Nagar%2C%20Pashupati%20Colony%2C%20Khandari%2C%20Agra%2C%20Uttar%20Pradesh%20282002&output=embed" className="map-embed" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  )
}
