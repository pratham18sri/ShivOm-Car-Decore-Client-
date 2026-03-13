import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src="/logo.png" alt="ShivOm Car Seat Covers" className="footer-logo-img" />
              <span className="footer-brand-name">ShivOm Car Seat Covers</span>
            </div>
            <p className="footer-tagline">Premium car interior accessories since 20+ years</p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/accessories">Accessories</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <div>Owner: Ram Srivastav</div>
            <div>Phone: +91 9897874613</div>
            <div className="footer-address">Bhagwaan Talkiesh, Kripal Colony, Sanjay Nagar, Pashupati Colony, Khandari, Agra, UP 282002</div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} ShivOm Car Seat Covers. All rights reserved.</div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: var(--bg-card);
          border-top: 1px solid var(--border-subtle);
          margin-top: 0;
          color: var(--text-secondary);
        }
        .footer-inner {
          max-width: 72rem;
          margin: 0 auto;
          padding: 3rem 1rem 1.5rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media(min-width: 768px) {
          .footer-grid { grid-template-columns: 2fr 1fr 1.5fr; }
        }
        .footer-logo-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }
        .footer-logo-img {
          width: 40px;
          height: 40px;
          object-fit: contain;
          border-radius: 8px;
          border: 1px solid var(--border-subtle);
        }
        .footer-brand-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-primary);
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .footer-tagline {
          color: var(--text-muted);
          font-size: 0.88rem;
          margin: 0;
        }
        .footer-heading {
          font-family: var(--font-display);
          font-size: 0.8rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0 0 0.75rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }
        .footer-links a:hover { color: var(--text-primary); }
        .footer-contact {
          font-size: 0.9rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .footer-address {
          margin-top: 0.35rem;
          color: var(--text-muted);
          font-size: 0.85rem;
          line-height: 1.5;
        }
        .footer-bottom {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
          text-align: center;
          font-size: 0.82rem;
          color: var(--text-muted);
        }
      `}</style>
    </footer>
  )
}
