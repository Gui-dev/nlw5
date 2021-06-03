import React from 'react'

import { Container, Info, Hello, Name, Image } from './style'

export const Header: React.FC = () => {
  return (
    <Container>
      <Info>
        <Hello>Olá,</Hello>
        <Name>Gui Silva</Name>
      </Info>
      <Image source={{ uri: 'https://github.com/Gui-dev.png' }} />
    </Container>
  )
}
