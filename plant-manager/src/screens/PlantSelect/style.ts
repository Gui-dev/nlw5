import styled from 'styled-components/native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background};
`

export const Head = styled.View`
  padding: 30px;
`

export const Title = styled.Text`
  font-size: 17px;
  font-family: ${fonts.heading};
  line-height: 20px;
  color: ${colors.heading};
  margin-top: 15px;
`

export const SubTitle = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  line-height: 20px;
  color: ${colors.heading};
`

export const ButtonContainer = styled.View``

export const ButtonList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    justifyContent: 'center',
    height: 40,
    marginLeft: 32,
    marginVertical: 10,
    paddingBottom: 5,
    paddingRight: 50
  }
})``

export const PlantsContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px 32px 20px 32px;
`

export const PlantsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2
  // contentContainerStyle: {
  //   justifyContent: 'center'
  // }
})`

`
