import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (

    
    <div className="hero-banner-container">
      <div>
        <h1>{heroBanner.largeText1}</h1>
        <p>A destination for your elegent, comfortable and designer clothing choices</p>
        <img
          src={urlFor(heroBanner.image)} className="hero-banner-image"
        />
      </div>
    </div>
  )
}

export default HeroBanner