import styled from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native'

import colors from './../../styles/colors'
import fonts from './../../styles/fonts'

interface IContainerProps extends TouchableOpacityProps{}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})<IContainerProps>`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: ${colors.green};
  border-radius: 16px;
`

export const ButtonText = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.white};
`
