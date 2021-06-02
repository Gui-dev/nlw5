import React from 'react'
import { useNavigation } from '@react-navigation/core'

import { Button } from '../../components/Button'
import { Container, Content, Emoji, Title, SubTitle, Footer } from './style'

export const Confirmation: React.FC = () => {
  const { navigate } = useNavigation()

  const handleNavigationToPlantSelect = () => {
    navigate('PlantSelect')
  }

  return (
    <Container>
      <Content>
        <Emoji>😉</Emoji>
        <Title>Prontinho</Title>
        <SubTitle>Agora vamos começar a cuidar das suas plantinhas com muito cuidado</SubTitle>

        <Footer>
          <Button
            title="Começar"
            onPress={ handleNavigationToPlantSelect }
          />
        </Footer>
      </Content>
    </Container>
  )
}
