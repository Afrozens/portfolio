import { motion } from 'framer-motion'
import LandingImage from "../assets/landing-image.png"
import { useState } from 'react'

const ImageLanding = () => {
  const [imageLoading, setImageLoading] = useState(true)
  const [pulsing, setPulsing] = useState(true)

  const imageLoaded = () => {
    setImageLoading(false)
    setTimeout(() => setPulsing(false), 600)
  }

  return (
    <motion.img
      src={LandingImage}
      alt="laptop with flowers ilustration"
      className="lg:w-[900px] object-cover "
      initial={{ height: '100px', opacity: 0 }}
      animate={{
        height: imageLoading ? '100px' : 'auto',
        opacity: imageLoading ? 0 : 1,
      }}
      transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
      onLoad={imageLoaded}
    />
  )
}

export default ImageLanding