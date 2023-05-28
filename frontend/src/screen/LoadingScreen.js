import {View, Text} from 'react-native'
import React, {useEffect} from 'react'
import Lottie from 'lottie-react-native'
import {useNavigation} from '@react-navigation/native'

const LoadingScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Order')
    }, 2000)
  }, [])
  return (
    <View>
      <Lottie
        source={require('../../assets/thumbs.json')}
        style={{
          height: 260,
          width: 300,
          alignSelf: 'center',
          marginTop: 40,
          justifyContent: 'center',
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Your Order has been Received.
      </Text>
      <Lottie
        source={require('../../assets/sparkle.json')}
        style={{
          height: 300,
          position: 'absolute',
          top: 100,
          width: 300,
          alignSelf: 'center',
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
    </View>
  )
}

export default LoadingScreen
