import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Button } from '../../components/Button'
import { Container, Wrapper, Content, Form, Header, Title, Emoji, Input } from './style'

export const UserIdentification: React.FC = () => {
  const { navigate } = useNavigation()
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

  const handleNavigationToConfirmation = async () => {
    if (!name) {
      return Alert.alert('Oooops, desculpe', 'Me diz como chamar você 😥')
    }
    await AsyncStorage.setItem('@plantmanager:user', name)
    navigate('Confirmation')
  }

  return (
    <Container>
      <Wrapper
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
      >
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
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
              <Button
                title="Confirmar"
                onPress={ handleNavigationToConfirmation }
              />
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </Wrapper>
    </Container>
  )
}
