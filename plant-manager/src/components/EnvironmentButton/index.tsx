import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, TextButton } from './style'

interface IEnvironmentButtonProps extends RectButtonProps {
  active?: boolean
  title: string
}

export const EnvironmentButton = ({ title, active = false, ...rest }: IEnvironmentButtonProps) => {
  return (
    <Container isActive={ active } {...rest}>
      <TextButton isActive={ active }>{ title }</TextButton>
    </Container>
  )
}
