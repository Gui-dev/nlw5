import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'

import { Button } from '../../components/Button'
import { Container, Content, Emoji, Title, SubTitle, Footer } from './style'

interface IConfirmationProps {
  title: string
  subtitle: string
  buttonTitle: string
  icon: 'smile' | 'hug'
  nextScreen: string
}

const emojis = {
  smile: '😉',
  hug: '🤗'
}

export const Confirmation: React.FC = () => {
  const { navigate } = useNavigation()
  const routes = useRoute()
  const { title, subtitle, buttonTitle, icon, nextScreen } = routes.params as IConfirmationProps

  const handleNavigationToPlantSelect = () => {
    navigate(nextScreen)
  }

  return (
    <Container>
      <Content>
        <Emoji>{ emojis[icon] }</Emoji>
        <Title>{ title }</Title>
        <SubTitle>{ subtitle }</SubTitle>

        <Footer>
          <Button
            title={buttonTitle}
            onPress={ handleNavigationToPlantSelect }
          />
        </Footer>
      </Content>
    </Container>
  )
}
