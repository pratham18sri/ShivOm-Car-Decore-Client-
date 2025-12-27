import React from 'react'

export default function Footer(){
  return (
    <footer style={{borderTop:'1px solid #e6e6e6',marginTop:24,background:'#fff'}}>
      <div style={{maxWidth: '72rem',margin:'0 auto',padding:'1rem'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
          <div>
              <div style={{fontWeight:600,color:'#0b63d6'}}>ShivOm Car Seat Covers</div>
              <div style={{fontSize:'0.9rem',color:'#6b7280'}}>Owner: Ram Srivastav</div>
              <div style={{fontSize:'0.9rem',color:'#6b7280'}}>Phone: +91 9897874613</div>
              <div style={{fontSize:'0.9rem',color:'#6b7280',marginTop:6}}>Serving our local community for 20 years</div>
          </div>
          <div style={{fontSize:'0.9rem',color:'#6b7280'}}>© {new Date().getFullYear()} ShivOm Car Seat Covers. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
