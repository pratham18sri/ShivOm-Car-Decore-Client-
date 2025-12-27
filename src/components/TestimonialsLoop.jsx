import React from 'react'
import '../styles/TestimonialsLoop.css'

export default function TestimonialsLoop({ reviews = [], duration = 24, cardMinWidth = 300 }){
  if (!reviews || reviews.length === 0) return null
  const items = [...reviews, ...reviews]
  return (
    <div className="testimonials-loop" style={{ ['--duration']: `${duration}s` }} aria-label="Customer reviews">
      <div className="track">
        <div className="sequence">
          {items.map((r, i) => (
            <div className="review-card" key={i} style={{ minWidth: cardMinWidth }}>
              <div className="review-text">{r.text}</div>
              <div className="review-stars" aria-hidden>
                {Array.from({length:5}).map((_, idx)=> (
                  <span key={idx} className={idx < r.rating ? 'star filled' : 'star'}>★</span>
                ))}
              </div>
              <div className="review-author">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
