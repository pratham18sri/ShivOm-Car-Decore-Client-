import React from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import LogoLoop from '../components/LogoLoop'
import carData from '../data/carData'
import TestimonialsLoop from '../components/TestimonialsLoop'
import '../styles/home.css'

const featured = [
  { name: 'Custom Seat Covers', description: 'Tailored seat covers for perfect fit.', image: '/download (16).jfif', waText: 'Hi ShivOm Car Seat Covers, I am interested in Custom Seat Covers.' },
  { name: 'Steering Wheel Covers', description: 'Comfort and style for your steering.', image: '/download (17).jfif', waText: 'Hi ShivOm Car Seat Covers, I am interested in Steering Wheel Covers.' },
  { name: 'Car Matting', description: 'Durable mats for everyday use.', image: '/download (18).jfif', waText: 'Hi ShivOm Car Seat Covers, I am interested in Car Matting.' },
  { name: 'Floor Liners', description: 'Waterproof floor liners for protection.', image: '/images (1).jfif', waText: 'Hi ShivOm Car Seat Covers, I am interested in Floor Liners.' },
]

export default function Home(){
  return (
    <div>
      <Hero />

      <section className="section">
        <h2 className="section-title">Featured Products</h2>
        <div className="featured-grid">
          {featured.map(p=> <ProductCard key={p.name} product={p} />)}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Our Partner Brands</h2>
        <div style={{padding:'12px 0'}}>
          <LogoLoop
            logos={carData.map(b=> ({ src: b.logo, alt: b.brand, title: b.brand }))}
            speed={80}
            logoHeight={48}
            gap={32}
            fadeOut={false}
            scaleOnHover={true}
            ariaLabel="Car brand partners"
          />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div style={{padding:'12px 0'}}>
          <TestimonialsLoop
            reviews={[
              { name: 'Neha K.', text: 'Excellent quality and perfect fit for my Swift. Highly recommended!', rating: 5 },
              { name: 'Raj P.', text: 'Professional installation and great materials. My car looks new again.', rating: 5 },
              { name: 'Suresh M.', text: 'Good prices and fast service. Very satisfied.', rating: 4 },
              { name: 'Anita S.', text: 'Lovely designs and comfortable seats now. Thank you!', rating: 5 },
              { name: 'Vikram T.', text: 'Durable mats and friendly staff. Will visit again.', rating: 4 },
              { name: 'Priya R.', text: 'Amazing workmanship — exactly what I wanted.', rating: 5 },
            ]}
            duration={22}
            cardMinWidth={300}
          />
        </div>
      </section>

      <section className="why-section">
        <div className="section">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="why-grid">
            <div className="why-card">Custom Fit for Every Car</div>
            <div className="why-card">Premium Material</div>
            <div className="why-card">Affordable Pricing</div>
            <div className="why-card">Local Trusted Shop</div>
            <div className="why-card">Professional Installation</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Visit Our Shop</h2>
        <div className="visit-grid">
          <div style={{aspectRatio:'16/9'}}>
            <iframe title="Shop Location" src="https://www.google.com/maps?q=Bhagwaan%20Talkiesh%2C%20Kripal%20Colony%2C%20Sanjay%20Nagar%2C%20Pashupati%20Colony%2C%20Khandari%2C%20Agra%2C%20Uttar%20Pradesh%20282002&output=embed" className="map-embed" loading="lazy" />
          </div>
          <div>
            <p style={{fontWeight:600}}>ShivOm Car Seat Covers</p>
            <p className="muted">Owner: Ram Srivastav, Jagat Srivastav</p>
            <p className="muted">Phone: +91 9897874613</p>
            <p className="muted" style={{marginTop:6}}>Address: Bhagwaan Talkiesh, Kripal Colony, Sanjay Nagar, Pashupati Colony, Khandari, Agra, Uttar Pradesh 282002</p>
          </div>
        </div>
      </section>
    </div>
  )
}
