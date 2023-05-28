import {View, Text, Pressable, ScrollView} from 'react-native'
import React from 'react'
import {useNavigation, useRoute} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import {useSelector, useDispatch} from 'react-redux'

import {
  clearCart,
  decreaseQuantity,
  incrementQuanity,
} from '../redux/Slice/CartSlice'
import instructions from '../data/instructions'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const Cart = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)
  const total = cart
    .map(item => item.price * item.quantity)
    .reduce((pre, cur) => pre + cur, 0)

  return (
    <>
      <ScrollView>
        {total > 0 ? (
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: 10,
              }}>
              <Icon
                name='arrow-back'
                size={24}
                color='black'
                onPress={() => navigation.goBack()}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  fontWeight: '700',
                  marginLeft: 8,
                }}>
                {route.params.name}
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 10,
                backgroundColor: '#fff',
                padding: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
                Ordering for Someone else?
              </Text>
              <Text style={{fontSize: 16, fontWeight: '700', color: 'red'}}>
                Add Details
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 15,
                marginHorizontal: 10,
              }}>
              {cart.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 8,
                    alignItems: 'center',
                  }}>
                  <View style={{width: 120}}>
                    <Text
                      style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
                      {item.name}
                    </Text>
                  </View>
                  <View>
                    <Pressable
                      style={{
                        backgroundColor: 'white',

                        alignSelf: 'center',
                        width: 120,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 5,
                        elevation: 5,
                      }}>
                      <Pressable
                        onPress={() => {
                          dispatch(decreaseQuantity(item))
                        }}>
                        <Text
                          style={{
                            fontSize: 18,
                            color: 'green',
                            fontWeight: 'bold',
                          }}>
                          -
                        </Text>
                      </Pressable>
                      <Pressable>
                        <Text
                          style={{
                            fontSize: 18,
                            color: 'green',
                            fontWeight: 'bold',
                          }}>
                          {item.quantity}
                        </Text>
                      </Pressable>
                      <Pressable
                        onPress={() => {
                          dispatch(incrementQuanity(item))
                        }}>
                        <Text
                          style={{
                            fontSize: 18,
                            color: 'green',
                            fontWeight: 'bold',
                          }}>
                          +
                        </Text>
                      </Pressable>
                    </Pressable>
                  </View>
                  <View>
                    <Text
                      style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
                      रु {item.quantity * item.price}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
            <View style={{padding: 10}}>
              <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
                Delivery Instructions
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {instructions.map(item => (
                  <Pressable
                    style={{
                      margin: 10,
                      padding: 10,
                      backgroundColor: '#fff',
                      borderRadius: 5,
                    }}>
                    <View>
                      <Icons name={item.iconName} size={25} color='black' />
                      <Text
                        style={{width: 75, color: 'black', fontWeight: '600'}}>
                        {item.name}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
            <View style={{marginHorizontal: 10, marginBottom: 100}}>
              <Text style={{fontSize: 16, color: 'black', fontWeight: '800'}}>
                Billing Details
              </Text>
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  marginTop: 15,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{color: 'grey', fontSize: 15, fontWeight: '600'}}>
                    Item Total
                  </Text>
                  <Text
                    style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
                    रू {total}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 15,
                      fontWeight: '600',
                      marginVertical: 5,
                    }}>
                    Delivery Fee | 1.2kms
                  </Text>
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 15,
                      fontWeight: '600',
                      marginVertical: 5,
                    }}>
                    FREE
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{color: 'grey', fontSize: 15, fontWeight: '600'}}>
                    Free Delivery on your Order!
                  </Text>
                </View>
                <View
                  style={{
                    borderWidth: 0.5,
                    marginVertical: 5,
                    borderColor: 'grey',
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{color: 'grey', fontSize: 15, fontWeight: '600'}}>
                    Delivery Tip
                  </Text>
                  <Text style={{color: 'red', fontSize: 15, fontWeight: '800'}}>
                    Add Tip
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{color: 'grey', fontSize: 15, fontWeight: '600'}}>
                    Taxes and Charges
                  </Text>
                  <Text
                    style={{color: 'grey', fontSize: 15, fontWeight: '600'}}>
                    95
                  </Text>
                </View>
                <View
                  style={{
                    borderWidth: 0.5,
                    marginVertical: 5,
                    borderColor: 'grey',
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{color: 'black', fontSize: 15, fontWeight: '900'}}>
                    To Pay
                  </Text>
                  <Text
                    style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
                    रू {total + 95}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: '900'}}>
              You Cart is Empty!
            </Text>
          </View>
        )}
      </ScrollView>
      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: '#fff',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            bottom: 10,
            width: '100%',
          }}>
          <View>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
              {total + 95}
            </Text>
            <Text style={{fontSize: 15, color: '#4daf4d', fontWeight: '600'}}>
              View Detailed Bill
            </Text>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate('Load')
              dispatch(clearCart())
            }}
            style={{
              backgroundColor: '#4daf4d',
              padding: 10,
              width: 200,
              alignItems: 'center',
              borderRadius: 7,
              elevation: 2,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '900',
              }}>
              Proceed to Pay
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  )
}

export default Cart
