import styled from 'styled-components/native'
import { SvgFromUri } from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const SwipeableContainer = styled(Swipeable)`

`

export const SwipeableButton = styled(RectButton)<RectButtonProps>`
  position: relative;
  right: 1px;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 95px;
  margin-top: 5px;
  background-color: ${colors.red};
  border-radius: 20px;
`

export const Container = styled(RectButton)<RectButtonProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 95px;
  max-height: 100px;
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
