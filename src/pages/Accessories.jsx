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
    <div className="accessories-page">
      <div className="accessories-header">
        <h1 className="accessories-title">Accessories</h1>
        <p className="accessories-subtitle">Select your car brand and model to explore accessories</p>
      </div>

      <div style={{marginTop:'1.5rem'}}>
        <CarBrandSelector onBrandSelect={handleBrandSelect} setSelectedBrand={(b)=>{ setSelectedBrand(b); setModel(b.models[0]) }} />
      </div>

      <div className="model-select-wrap">
        <label className="model-label">Select Model</label>
        <select
          value={model}
          onChange={e=>setModel(e.target.value)}
          className="model-select"
        >
          {selectedBrand.models.map(m=> <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      <div className="selected-info">
        Selected: <strong style={{color:'var(--text-primary)'}}>{selectedBrand.brand} {model}</strong>
      </div>

      <div style={{marginTop:16}}>
        <button onClick={handleSubmitShow} className="btn btn-primary">Show Accessories</button>
      </div>

      {submitted && (
        <div className="accessories-grid">
          {(displayedProducts.length? displayedProducts : products).map(p=> <ProductCard key={p.name} product={p} />)}
        </div>
      )}

      {/* Mobile drawer for models */}
      {showDrawer && (
        <div className="drawer-backdrop" onClick={()=>setShowDrawer(false)}>
          <div className="drawer-panel" onClick={e=>e.stopPropagation()}>
            <h3 className="drawer-title">Select model for {selectedBrand.brand}</h3>
            <div className="drawer-models">
              {selectedBrand.models.map(m=> (
                <button
                  key={m}
                  onClick={()=>handleModelChoose(m)}
                  className={`drawer-model-btn ${m===model ? 'active' : ''}`}
                >{m}</button>
              ))}
            </div>
            <div style={{marginTop:16}}>
              <button onClick={()=>setShowDrawer(false)} className="drawer-close-btn">Close</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .accessories-page {
          max-width: 72rem;
          margin: 0 auto;
          padding: 2.5rem 1rem;
        }
        .accessories-header { margin-bottom: 0.5rem; }
        .accessories-title {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          color: var(--text-primary);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .accessories-subtitle {
          color: var(--text-muted);
          font-size: 0.92rem;
          margin: 0.35rem 0 0;
        }
        .model-select-wrap { margin-top: 1rem; }
        .model-label {
          display: block;
          color: var(--text-secondary);
          margin-bottom: 6px;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .model-select {
          width: 100%;
          padding: 10px 12px;
          border-radius: var(--radius);
          border: 1px solid var(--border-subtle);
          background: var(--bg-card);
          color: var(--text-primary);
          font-size: 0.95rem;
          font-family: var(--font-body);
          transition: border-color var(--transition-fast);
          outline: none;
        }
        .model-select:focus { border-color: var(--primary); }
        .selected-info {
          margin-top: 0.75rem;
          color: var(--text-muted);
          font-size: 0.92rem;
        }
        .accessories-grid {
          margin-top: 1.5rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.25rem;
        }

        /* Drawer */
        .drawer-backdrop {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 60;
          display: flex;
          justify-content: flex-end;
        }
        .drawer-panel {
          position: absolute; right: 0; top: 0; height: 100%;
          width: 80%; max-width: 360px;
          background: var(--bg-card);
          padding: 1.5rem;
          overflow-y: auto;
          border-left: 1px solid var(--glass-border);
          animation: slideIn 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes slideIn { from { transform: translateX(100%) } to { transform: translateX(0) } }
        .drawer-title {
          margin: 0 0 1rem;
          color: var(--text-primary);
          font-size: 1.1rem;
        }
        .drawer-models { display: grid; gap: 8px; }
        .drawer-model-btn {
          padding: 12px;
          border-radius: var(--radius);
          border: 1px solid var(--border-subtle);
          text-align: left;
          background: var(--bg-dark);
          color: var(--text-primary);
          cursor: pointer;
          transition: all var(--transition-fast);
          font-size: 0.95rem;
          font-family: var(--font-body);
        }
        .drawer-model-btn:hover { border-color: var(--primary); background: rgba(230,57,70,0.08); }
        .drawer-model-btn.active { background: rgba(230,57,70,0.15); border-color: var(--primary); }
        .drawer-close-btn {
          padding: 8px 16px;
          border-radius: var(--radius);
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          cursor: pointer;
          font-family: var(--font-body);
          transition: all var(--transition-fast);
        }
        .drawer-close-btn:hover { border-color: var(--primary); color: var(--primary); }
      `}</style>
    </div>
  )
}
