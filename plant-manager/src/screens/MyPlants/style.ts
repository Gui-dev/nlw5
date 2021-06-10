import styled from 'styled-components/native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  padding-top: 50px;
  background-color: ${colors.background};
`

export const Spotlight = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  padding: 0 20px;
  margin-top: 20px;
  background-color: ${colors.blue_light};
  border-radius: 20px;
`

export const Image = styled.Image`
  width: 60px;
  height: 60px;
`

export const SpotlightText = styled.Text`
  flex: 1;
  text-align: justify;
  color: ${colors.blue};
  padding: 0 20px;
`

export const Plants = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 20px;
`

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin: 20px 0;
`

export const PlantList = styled.FlatList.attrs({
  vertical: true,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
  }
})`

`
