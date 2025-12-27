import React, { useEffect, useState } from 'react'
import '../styles/rotatingtext.css'

export default function RotatingText({ phrases = ['Seat Covers','Steering Covers','Car Matting','Floor Liners'], interval = 2400 }){
  const [idx, setIdx] = useState(0)
  useEffect(()=>{
    if(!phrases || phrases.length === 0) return
    const t = setInterval(()=> setIdx(i => (i+1) % phrases.length), interval)
    return ()=> clearInterval(t)
  },[phrases, interval])

  return (
    <div className="rotating-wrap" aria-live="polite">
      <span className="rotating-text">{phrases[idx]}</span>
    </div>
  )
}
