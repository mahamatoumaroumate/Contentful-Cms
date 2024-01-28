import React from 'react'
import imgHero from './images/hero.svg'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-center'>
        <div className='contentful-text'>
          <h1>Contentful CMS</h1>
          <p>
            Pitchfork schlitz tonx, coloring book celiac tousled succulents
            ascot affogato cardigan jianbing crucifix seitan. Synth man braid
            everyday carry try-hard pour-over keffiyeh slow-carb sriracha
            chillwave banjo gochujang kinfolk small batch mustache.
          </p>
        </div>
        <div className='contentful-image'>
          <img src={imgHero} alt='hero' />
        </div>
      </div>
    </div>
  )
}

export default Hero
