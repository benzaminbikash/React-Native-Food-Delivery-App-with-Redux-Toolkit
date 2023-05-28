import {View, Text, ScrollView, Image} from 'react-native'
import React from 'react'
import foodtypes from '../data/foodtypes'

const FoodTypes = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {foodtypes.map((item, index) => {
          return (
            <View key={index} style={{margin: 10}}>
              <Image
                source={{uri: item.image}}
                style={{width: 60, height: 60, borderRadius: 30}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  marginTop: 6,
                }}>
                {item.name}
              </Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default FoodTypes
