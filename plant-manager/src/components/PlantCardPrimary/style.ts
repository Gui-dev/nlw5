import styled from 'styled-components/native'
import { SvgFromUri } from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled(RectButton)<RectButtonProps>`
  flex: 1;
  align-items: center;
  max-width: 45%;
  margin-top: 10px;
  margin-right: 20px;
  padding: 10px;
  background-color: ${colors.shape};
  border-radius: 20px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.green_dark};
  margin: 16px 0;
`

export const Image = styled(SvgFromUri)``
