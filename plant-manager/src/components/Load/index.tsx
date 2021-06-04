import React from 'react'

import load from './../../assets/load.json'
import { Container, Lottie } from './style'

export const Load: React.FC = () => {
  return (
    <Container>
      <Lottie
        source={ load }
        autoPlay
        loop
      />
    </Container>
  )
}
