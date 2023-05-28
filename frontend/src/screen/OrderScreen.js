import {View, Text} from 'react-native'
import React from 'react'
import moment from 'moment'
import MapView from 'react-native-maps'

const OrderScreen = () => {
  const time = moment().format('LT')
  return (
    <View>
      <View
        style={{
          backgroundColor: '#ff8800',
          padding: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{fontSize: 15, color: 'white', fontWeight: '800'}}>
            Delivery in 20 mins
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              fontWeight: '800',
              marginTop: 3,
            }}>
            Order placed at {time}
          </Text>
        </View>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
          HELP
        </Text>
      </View>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
    </View>
  )
}

export default OrderScreen
