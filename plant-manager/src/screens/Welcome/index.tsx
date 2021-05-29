import React from 'react'
import { Feather } from '@expo/vector-icons'

import logo from './../../assets/watering.png'
import { Container, Title, Image, Description, ButtonNext } from './style'

export const Welcome: React.FC = () => {
  return (
    <Container>
      <Title>Gerencie{'\n'} suas plantas de{'\n'} forma fácil</Title>
      <Image
        source={ logo }
        resizeMode="contain"
      />

      <Description>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar
      </Description>

      <ButtonNext>
        <Feather name="chevron-right" size={ 32 } color="#FFF"/>
      </ButtonNext>
    </Container>
  )
}
