import React from 'react'
import carData from '../data/carData'
import '../styles/brandselector.css'

const CarBrandSelector = ({ setSelectedBrand, onBrandSelect }) => {
  return (
    <div className="brand-grid">
      {carData.map((item) => (
        <div
          key={item.brand}
          onClick={() => {
            if (onBrandSelect) onBrandSelect(item)
            else setSelectedBrand && setSelectedBrand(item)
          }}
          className="brand-card"
        >
          <img src={item.logo} alt={item.brand} className="brand-logo" />
          <p className="brand-name">{item.brand}</p>
        </div>
      ))}
    </div>
  )
}

export default CarBrandSelector
