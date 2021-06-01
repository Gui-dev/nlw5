import styled from 'styled-components/native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
`

export const Emoji = styled.Text`
  font-size: 78px;
`

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.heading};
  line-height: 38px;
  margin-top: 15px;
`

export const SubTitle = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  text-align: center;
  color: ${colors.heading};
  padding: 10px 0;
`

export const Footer = styled.View`
  align-self: stretch;
  padding: 0 50px;
`
