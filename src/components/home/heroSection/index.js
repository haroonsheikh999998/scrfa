import React from 'react'
import HomeSearchBar from '../homeSearchBar'

const HeroSection = () => {
  return (
    <section className="hero-section">
        <div className="overly">
          <div className="hero-text">
            <p>
              Providing independent research, analysis, and resources to
              facilitate informed policy decisions and administration of
              services
            </p>
            <HomeSearchBar />
          </div>
        </div>
      </section>
  )
}

export default HeroSection