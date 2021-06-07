import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Container, Info, Hello, Name, Image } from './style'

export const Header: React.FC = () => {
  const { navigate } = useNavigation()
  const [username, setUsername] = useState<string | null>()

  useEffect(() => {
    const loadUser = async () => {
      const name = await AsyncStorage.getItem('@plantmanager:user')

      if (!name) {
        navigate('UserIdentification')
      }

      setUsername(name)
    }
    loadUser()
  }, [username])

  return (
    <Container>
      <Info>
        <Hello>Olá,</Hello>
        <Name>{ username }</Name>
      </Info>
      <Image source={{ uri: 'https://github.com/Gui-dev.png' }} />
    </Container>
  )
}
