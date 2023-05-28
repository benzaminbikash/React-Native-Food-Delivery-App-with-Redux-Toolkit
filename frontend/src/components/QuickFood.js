import {View, Text, ScrollView, ImageBackground, Pressable} from 'react-native'
import React from 'react'
import quickfood from '../data/quickfood'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Rating from './Rating'

const QuickFood = () => {
  return (
    <View style={{margin: 10}}>
      <Text style={{fontSize: 16, fontWeight: '800', color: 'black'}}>
        Get it Quickly
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {quickfood.map((item, index) => {
          return (
            <Pressable key={index} style={{marginRight: 10, marginTop: 7}}>
              <ImageBackground
                imageStyle={{borderRadius: 10}}
                source={{uri: item.image}}
                style={{
                  aspectRatio: 5 / 6,
                  height: 170,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    position: 'absolute',
                    fontSize: 30,
                    bottom: 10,
                    left: 10,
                  }}>
                  {item.offer} OFF
                </Text>
              </ImageBackground>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: '500',
                  marginTop: 5,
                }}>
                {item.name}
              </Text>
              <Rating rating={item.rating} time={item.time} />
            </Pressable>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default QuickFood
