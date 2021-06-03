import styled from 'styled-components/native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

interface IContainerProps extends RectButtonProps {
  isActive: boolean
}

interface ITextButtonProps {
  isActive: boolean
}

export const Container = styled(RectButton)<IContainerProps>`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 40px;
  margin-right: 5px;
  background-color: ${({ isActive }) => isActive ? colors.green_light : colors.shape};
  border-radius: 12px;
`

export const TextButton = styled.Text<ITextButtonProps>`
  font-size: 16px;
  font-family: ${({ isActive }) => isActive ? fonts.heading : fonts.text};
  color: ${({ isActive }) => isActive ? colors.green_dark : colors.heading};
`
