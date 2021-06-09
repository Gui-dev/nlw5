import styled from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  background-color: ${colors.shape};
`
export const PlantInfo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 50px 30px;
  background-color: ${colors.shape};
`

export const PlantName = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin-top: 10px;
`

export const PlantAbout = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  text-align: center;
  color: ${colors.heading};
  margin-top: 10px;
`

export const Controller = styled.View`
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: ${getBottomSpace() + 10}px;
  padding-left: 20px;
`

export const TipContainer = styled.View`
  position: relative;
  bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 25px;
  background-color: ${colors.blue_light};
  border-radius: 20px;
`

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`

export const TipText = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  text-align: justify;
  color: ${colors.blue};
  margin-left: 35px;
`

export const AlertLabel = styled.Text`
  font-size: 12px;
  font-family: ${fonts.text};
  text-align: center;
  color: ${colors.heading};
  margin-top: 5px;
  margin-bottom: 5px;
`

export const TimePickerButton = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  padding: 20px 0;
`

export const TimePickerText = styled.Text`
  font-size: 24px;
  font-family: ${fonts.text};
  color: ${colors.heading};
`
