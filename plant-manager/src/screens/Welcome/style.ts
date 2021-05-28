import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import colors from './../../styles/colors'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
`

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`

export const Description = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
  padding: 0 20px;
`

export const ButtonNext = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-bottom: 10px;
  background-color: ${colors.green};
  border-radius: 16px;
`

export const ButtonNextText = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${colors.white};
`
