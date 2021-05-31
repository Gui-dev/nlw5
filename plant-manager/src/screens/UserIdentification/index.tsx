import React, { useState } from 'react'
import { Platform } from 'react-native'

import { Button } from '../../components/Button'
import { Container, Wrapper, Content, Form, Header, Title, Emoji, Input } from './style'

export const UserIdentification: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()

  const handleInputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputChange = (value: string) => {
    setIsFilled(!!value)
    setName(value)
  }

  return (
    <Container>
      <Wrapper
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 600 })}
      >
        <Content>
          <Form>
            <Header>
              <Emoji>{ isFilled ? '😍' : '😃' }</Emoji>
              <Title>Como podemos{'\n'} chamar você ?</Title>
            </Header>
            <Input
              placeholder="Digite seu nome"
              onChangeText={ handleInputChange }
              onBlur={ handleInputBlur }
              onFocus={ handleInputFocus }
              isFocused={ isFocused }
              isFilled={ isFilled }
            />
            <Button title="Confirmar"/>
          </Form>
        </Content>
      </Wrapper>
    </Container>
  )
}
