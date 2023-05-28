import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreen'
import MenuScreen from '../screen/MenuScreen'
import Cart from '../screen/CartScreen'
import LoadingScreen from '../screen/LoadingScreen'
import OrderScreen from '../screen/OrderScreen'

const Stack = createNativeStackNavigator()
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'none',
          headerShown: false,
        }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Menu' component={MenuScreen} />
        <Stack.Screen name='Cart' component={Cart} />
        <Stack.Screen name='Load' component={LoadingScreen} />
        <Stack.Screen name='Order' component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
