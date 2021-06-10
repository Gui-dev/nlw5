import styled from 'styled-components/native'
import { SvgFromUri } from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled(RectButton)<RectButtonProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 25px 10px;
  margin: 5px 0;
  background-color: ${colors.shape};
  border-radius: 20px;
`

export const Title = styled.Text`
  flex: 1;
  font-size: 17px;
  font-family: ${fonts.heading};
  color: ${colors.green_dark};
  margin-left: 10px;
`

export const Image = styled(SvgFromUri)``

export const Info = styled.View`
  align-items: flex-end;
`

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_light};
`

export const Time = styled.Text`
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
  margin-top: 5px;
`
