import {View, Text, ScrollView, Pressable} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useRoute, useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import Rating from '../components/Rating'
import FoodItem from '../components/FoodItem'
import MenuBook from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal'
import {useSelector} from 'react-redux'

const MenuScreen = () => {
  const cart = useSelector(state => state.cart.cart)
  console.log(cart)
  const total = cart
    .map(item => item.price * item.quantity)
    .reduce((pre, cur) => pre + cur, 0)
  const navigation = useNavigation()
  const route = useRoute()
  const [menu, setMenu] = useState([])
  useEffect(() => {
    setMenu(route.params.menu)
  }, [])
  const [isvisble, setIsVisible] = useState(false)
  const handleModal = () => {
    setIsVisible(!isvisble)
  }

  return (
    <>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#74afdd',
            height: 300,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            elevation: 5,
          }}>
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Icon
              name='md-arrow-back'
              size={24}
              onPress={() => navigation.goBack()}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name='search' size={22} />
              <Text
                style={{
                  marginLeft: 6,
                  fontSize: 15,
                  color: 'black',
                  fontWeight: '700',
                }}>
                Search
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              height: 210,
              marginHorizontal: 10,
              padding: 10,
              marginVertical: 5,
              borderRadius: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, color: 'black', fontWeight: '800'}}>
                {route.params.name}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name='share-social' size={24} color='black' />
                <Icon
                  name='heart-outline'
                  size={24}
                  color='black'
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
            <View style={{marginTop: 4}}>
              <Rating rating={route.params.rating} time={route.params.time} />
            </View>
            <Text style={{marginTop: 3, fontSize: 17, color: 'grey'}}>
              {route.params.cuisines}
            </Text>
            <View style={{marginTop: 5, flexDirection: 'row'}}>
              <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
                Outlet
              </Text>
              <Text style={{color: 'grey', fontSize: 16, marginLeft: 10}}>
                {route.params.adress}
              </Text>
            </View>
            <View style={{marginTop: 5, flexDirection: 'row'}}>
              <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>
                22mins
              </Text>
              <Text style={{color: 'grey', fontSize: 16, marginLeft: 10}}>
                Home
              </Text>
            </View>
            <Text
              style={{
                marginTop: 10,
                height: 1,
                backgroundColor: 'grey',
                borderWidth: 0.6,
              }}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name='bicycle-sharp' size={30} color='orange' />
              <Text style={{marginLeft: 4, fontSize: 15, color: 'grey'}}>
                0-3 kms |
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  color: 'black',
                  fontWeight: '500',
                }}>
                35 Delivery Fee will apply
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          MENU
        </Text>
        <Text
          style={{
            marginTop: 10,
            height: 1,
            backgroundColor: 'grey',
            borderWidth: 0.6,
          }}
        />
        {route.params.menu.map((item, index) => {
          return <FoodItem data={item} key={index} />
        })}
      </ScrollView>
      <Pressable
        onPress={handleModal}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 10,
          right: 20,
        }}>
        <MenuBook name='menu-book' size={20} color='white' />
        <Text style={{color: 'white', fontSize: 12}}>MENU</Text>
      </Pressable>
      <Modal isVisible={isvisble} onBackdropPress={handleModal}>
        <View
          style={{
            width: 270,
            height: 180,
            backgroundColor: 'black',
            borderRadius: 10,
            position: 'absolute',
            bottom: 50,
            right: 30,
          }}>
          {menu.map((item, index) => (
            <View
              key={index}
              style={{
                marginHorizontal: 10,
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                {item.name}
              </Text>
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                {item.items.length}
              </Text>
            </View>
          ))}
        </View>
      </Modal>
      {total === 0 ? null : (
        <Pressable
          style={{
            width: '90%',
            backgroundColor: '#127e2a',
            // height: 90,
            padding: 8,
            position: 'absolute',
            bottom: 20,
            alignSelf: 'center',
            // marginBottom: 30,
            borderRadius: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                {cart.length} items | {total}
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: 4,
                }}>
                Extra Charges may Apply
              </Text>
            </View>
            <View>
              <Pressable
                onPress={() =>
                  navigation.navigate('Cart', {name: route.params.name})
                }>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginTop: 4,
                  }}>
                  View Cart
                </Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      )}
    </>
  )
}
//51

export default MenuScreen
