import React from 'react'
import '../styles/productcard.css'

export default function ProductCard({ product }){
  const wa = `https://wa.me/919897874613?text=${encodeURIComponent(product.waText)}`
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} loading="lazy" />
      <div className="body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <a href={wa} target="_blank" rel="noreferrer" className="wa">WhatsApp</a>
      </div>
    </div>
  )
}
