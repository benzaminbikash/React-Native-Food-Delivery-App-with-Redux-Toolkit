import {View, Text, Pressable, ImageBackground} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Rating from './Rating'
import Bike from 'react-native-vector-icons/MaterialCommunityIcons'
import {useNavigation} from '@react-navigation/native'

const MenuItem = ({item, index}) => {
  const navigation = useNavigation()
  return (
    <View style={{margin: 10}}>
      <Pressable
        key={index}
        style={{flexDirection: 'row'}}
        onPress={() => {
          navigation.navigate('Menu', {
            id: item.id,
            name: item.name,
            time: item.time,
            rating: item.rating,
            adress: item.adress,
            cost_for_two: item.cost_for_two,
            cuisines: item.cuisines,
            menu: item.menu,
          })
        }}>
        <ImageBackground
          imageStyle={{borderRadius: 10}}
          source={{uri: item.image}}
          style={{height: 150, aspectRatio: 4 / 5}}>
          <Icon
            name='hearto'
            size={24}
            color='white'
            style={{position: 'absolute', right: 10, top: 10}}
          />
        </ImageBackground>
        <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: '900', fontSize: 16, color: 'black'}}>
            {item.name}
          </Text>
          <View style={{marginTop: 3}}>
            <Rating rating={item.rating} time={item.time} />
          </View>
          <Text style={{marginTop: 5, fontSize: 16, color: 'grey'}}>
            {item.adress}
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 20,
                backgroundColor: 'pink',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, color: 'black'}}>रु</Text>
            </View>
            <Text style={{marginLeft: 7, fontSize: 15, color: 'black'}}>
              {item.cost_for_two} for two
            </Text>
          </View>
          <View
            style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
            <Bike name='bike-fast' size={24} color='black' />
            <Text style={{marginLeft: 10, fontSize: 16, color: 'black'}}>
              FREE DELIVERY
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default MenuItem
