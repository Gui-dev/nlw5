import React from 'react'
import { Platform } from 'react-native'

import { Button } from '../../components/Button'
import { Container, Wrapper, Content, Form, Header, Title, Emoji, Input } from './style'

export const UserIdentification: React.FC = () => {
  return (
    <Container>
      <Wrapper
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 600 })}
      >
        <Content>
          <Form>
            <Header>
              <Emoji>😊️</Emoji>
              <Title>Como podemos{'\n'} chamar você ?</Title>
            </Header>
            <Input placeholder="Digite seu nome"/>
            <Button title="Confirmar"/>
          </Form>
        </Content>
      </Wrapper>
    </Container>
  )
}
