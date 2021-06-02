import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, ButtonText } from './style'

interface IButtonProps extends TouchableOpacityProps {
  title?: string
}

export const Button = ({ title, ...rest }: IButtonProps) => {
  return (
    // @ts-ignore
    <Container {...rest}>
      <ButtonText>
        { title }
      </ButtonText>
    </Container>
  )
}
