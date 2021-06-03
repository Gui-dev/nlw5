import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: ${getStatusBarHeight()}px;
`

export const Info = styled.View``

export const Hello = styled.Text`
  font-size: 32px;
  font-family: ${fonts.text};
  color: ${colors.heading};
`

export const Name = styled.Text`
  font-size: 32px;
  font-family: ${fonts.heading};
  line-height: 40px;
  color: ${colors.heading};
`

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`
