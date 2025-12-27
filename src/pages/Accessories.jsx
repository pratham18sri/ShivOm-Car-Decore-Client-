import React, { useState, useEffect } from 'react'
import CarBrandSelector from '../components/CarBrandSelector'
import carData from '../data/carData'
import ProductCard from '../components/ProductCard'
import '../styles/productcard.css'
import '../styles/brandselector.css'

function useIsMobile(){
  const [isMobile,setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false)
  useEffect(()=>{
    function onResize(){ setIsMobile(window.innerWidth < 768) }
    window.addEventListener('resize', onResize)
    return ()=> window.removeEventListener('resize', onResize)
  },[])
  return isMobile
}

const accessoryList = [
  { name: 'Seat Covers', description: 'Available for many models', image: '/download (16).jfif' },
  { name: 'Steering Covers', description: 'Comfort and grip', image: '/download (17).jfif' },
  { name: 'Matting', description: 'Durable mats', image: '/download (18).jfif' },
  { name: 'Flooring', description: 'Complete floor liners', image: '/images (1).jfif' },
]

export default function Accessories(){
  const defaultBrand = carData[0]
  const [selectedBrand, setSelectedBrand] = useState(defaultBrand)
  const [model, setModel] = useState(defaultBrand.models[0])
  const isMobile = useIsMobile()
  const [showDrawer, setShowDrawer] = useState(false)

  const availableImages = [
    '/images (1).jfif',
    '/images (2).jfif',
    '/images (3).jfif',
    '/images (4).jfif',
    '/images (5).jfif',
    '/images (6).jfif',
    '/images (7).jfif'
  ]

  const steeringImages = [
    '/download (20).jfif',
    '/download (21).jfif',
    '/download (22).jfif',
    '/download (23).jfif',
    '/download (24).jfif'
  ]

  const flooringImages = [
    '/download (25).jfif',
    '/download (26).jfif',
    '/download (27).jfif',
    '/download (28).jfif',
    '/download (29).jfif',
    '/download (30).jfif',
    '/download (31).jfif'
  ]

  const products = accessoryList.map(p=> ({
    ...p,
    name: p.name,
    waText: `Hi ShivOm Car Seat Covers, I am interested in ${p.name} for my ${selectedBrand.brand} ${model}. Please share price and availability.`
  }))

  const [displayedProducts, setDisplayedProducts] = useState([])

  const [submitted, setSubmitted] = useState(false)

  function handleSubmitShow(e){
    e && e.preventDefault && e.preventDefault()
    // pick random images for each product when showing
    const withImages = products.map(p=> ({
      ...p,
      image: p.name === 'Steering Covers'
        ? steeringImages[Math.floor(Math.random()*steeringImages.length)]
        : (p.name === 'Matting' || p.name === 'Flooring')
          ? flooringImages[Math.floor(Math.random()*flooringImages.length)]
          : availableImages[Math.floor(Math.random()*availableImages.length)]
    }))
    setDisplayedProducts(withImages)
    setSubmitted(true)
  }

  function handleBrandSelect(b){
    setSelectedBrand(b)
    setModel(b.models[0])
    if(isMobile){
      setShowDrawer(true)
    }
  }

  function handleModelChoose(m){
    setModel(m)
    setShowDrawer(false)
  }

  return (
    <div style={{maxWidth:'72rem',margin:'0 auto',padding:'2.5rem 1rem'}}>
      <h1 style={{fontSize:'1.5rem',color:'#0b63d6',margin:0}}>Accessories</h1>

      <div style={{marginTop:'1rem'}}>
        <CarBrandSelector onBrandSelect={handleBrandSelect} setSelectedBrand={(b)=>{ setSelectedBrand(b); setModel(b.models[0]) }} />
      </div>

      <div style={{marginTop:'.75rem'}}>
        <label style={{display:'block',color:'#374151',marginBottom:6}}>Select Model</label>
        <select value={model} onChange={e=>setModel(e.target.value)} style={{width:'100%',padding:8,borderRadius:6,border:'1px solid #e5e7eb'}}>
          {selectedBrand.models.map(m=> <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      <div style={{marginTop:'.75rem',color:'#6b7280'}}>Selected: <strong>{selectedBrand.brand} {model}</strong></div>

      <div style={{marginTop:12}}>
        <button onClick={handleSubmitShow} style={{padding:'0.6rem 1rem',borderRadius:8,background:'#2563eb',color:'#fff',border:'none'}}>Show Accessories</button>
      </div>

      {submitted && (
        <div style={{marginTop:'1.5rem',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'1rem'}}>
          {(displayedProducts.length? displayedProducts : products).map(p=> <ProductCard key={p.name} product={p} />)}
        </div>
      )}

      {/* Mobile drawer for models */}
      {showDrawer && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.4)',zIndex:60}} onClick={()=>setShowDrawer(false)}>
          <div style={{position:'absolute',right:0,top:0,height:'100%',width:'80%',maxWidth:360,background:'#fff',padding:16,overflowY:'auto'}} onClick={e=>e.stopPropagation()}>
            <h3 style={{marginTop:0}}>Select model for {selectedBrand.brand}</h3>
            <div style={{display:'grid',gap:8,marginTop:8}}>
              {selectedBrand.models.map(m=> (
                <button key={m} onClick={()=>handleModelChoose(m)} style={{padding:10,borderRadius:8,border:'1px solid #e5e7eb',textAlign:'left',background: m===model? '#eef2ff':'#fff'}}>{m}</button>
              ))}
            </div>
            <div style={{marginTop:12}}>
              <button onClick={()=>setShowDrawer(false)} style={{padding:8,borderRadius:8}}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
