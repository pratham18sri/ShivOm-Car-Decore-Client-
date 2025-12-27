import React, { useState, useMemo } from 'react'
import carData from '../data/carData'
import '../styles/carselector.css'

export default function CarSelector({ onSelection }){
  const brands = Object.keys(carData)
  const [brand, setBrand] = useState(brands[0])
  const [model, setModel] = useState(carData[brands[0]][0])

  const models = useMemo(()=> carData[brand] || [], [brand])

  function handleSubmit(e){
    e.preventDefault()
    onSelection({ brand, model })
  }

  return (
    <form onSubmit={handleSubmit} className="car-selector">
      <div>
        <label className="label">Select Brand</label>
        <select value={brand} onChange={e=>{setBrand(e.target.value); setModel(carData[e.target.value][0])}} className="select">
          {brands.map(b=> <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
      <div>
        <label className="label">Select Model</label>
        <select value={model} onChange={e=>setModel(e.target.value)} className="select">
          {models.map(m=> <option key={m} value={m}>{m}</option>)}
        </select>
      </div>
      <div>
        <button type="submit" className="btn">Show Accessories</button>
      </div>
    </form>
  )
}
