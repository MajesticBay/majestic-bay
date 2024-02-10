import React, { useRef } from 'react'
import bg from '../assets/hero_bg.png'

const Hero: React.FC = () => {
  const windowWidth = useRef(window.innerWidth)
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='bg-center  bg-no-repeat m-0 min-h-[1016px]'>
      <p className='text-sd font-bold'>
        === {windowWidth.current}
      </p>
    </div>
  )
}

export default Hero
