import {View, Text, TextInput, ScrollView, Pressable} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Caurosel from '../components/Caurosel'
import FoodTypes from '../components/FoodTypes'
import QuickFood from '../components/QuickFood'
import Filter from 'react-native-vector-icons/Ionicons'
import hotels from '../data/hotels'
import MenuItem from '../components/MenuItem'

const HomeScreen = () => {
  return (
    <ScrollView>
      {/* search data */}
      <View
        style={{
          margin: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 10,
          borderColor: 'grey',
        }}>
        <TextInput placeholder='Search for Restaurant items or more' />
        <Icon name='search1' size={24} color='red' />
      </View>
      {/* causausel */}
      <Caurosel />
      {/* Food Type */}
      <FoodTypes />
      {/* Quick food */}
      <QuickFood />
      {/* filtering data */}
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 5,
        }}>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: 'grey',
            padding: 10,
            width: 120,
            borderRadius: 20,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: '400',
                marginRight: 10,
              }}>
              Filter
            </Text>
            <Filter name='filter' color='black' size={20} />
          </View>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: 'grey',
            padding: 10,
            borderRadius: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '400'}}>
            Sort by Rating
          </Text>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: 'grey',
            padding: 10,
            borderRadius: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '400'}}>
            Sort by Price
          </Text>
        </Pressable>
      </View>
      {hotels.map((item, index) => {
        return <MenuItem item={item} index={index} />
      })}
    </ScrollView>
  )
}

export default HomeScreen
