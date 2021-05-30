import styled from 'styled-components/native'

import fonts from './../../styles/fonts'
import colors from './../../styles/colors'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

export const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

export const Content = styled.View`
  width: 100%;
`

export const Form = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})`
  width: 100%;
  padding: 0 54px;
`

export const Header = styled.View`
  align-items: center;
  justify-content: center;
`

export const Emoji = styled.Text`
  font-size: 44px;
  margin-bottom: 20px;
`

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  text-align: center;
  line-height: 32px;
  color: ${colors.heading};
`

export const Input = styled.TextInput`
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray};
`
