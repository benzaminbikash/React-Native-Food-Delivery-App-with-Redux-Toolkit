import {View, Text, Pressable, Image} from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import {useDispatch} from 'react-redux'
import {
  addToCart,
  decreaseQuantity,
  incrementQuanity,
  removeToCart,
} from '../redux/Slice/CartSlice'
const MenuComponent = ({food, i}) => {
  const dispatch = useDispatch()
  const [addItem, setAdditems] = useState(0)
  const [selected, setSelected] = useState(false)
  return (
    <View style={{marginHorizontal: 10, marginVertical: 5}}>
      <Pressable
        style={{flexDirection: 'row', justifyContent: 'space-between'}}
        key={i}>
        <View>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '700'}}>
            {food.name}
          </Text>
          <Text style={{marginTop: 4, fontSize: 15}}>{food.price}</Text>
          <Text style={{marginTop: 5}}>
            {[0, 0, 0, 0, 0].map((en, i) => {
              return (
                <Icon
                  name={i < Math.floor(food.rating) ? 'star' : 'star-outlined'}
                  color='orange'
                  size={17}
                />
              )
            })}
          </Text>
          <Text style={{width: 180, marginTop: 7, fontSize: 15}}>
            {food.description.length > 30
              ? food.description.substring(0, 35) + '...'
              : food.desccription}
          </Text>
        </View>
        <Pressable>
          <Image
            source={{uri: food.image}}
            style={{width: 120, height: 120, borderRadius: 10}}
          />
          {selected ? (
            <Pressable
              style={{
                backgroundColor: 'white',
                position: 'absolute',
                padding: 5,
                bottom: 0,
                alignSelf: 'center',
                width: 90,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 5,
              }}>
              <Pressable
                onPress={() => {
                  if (addItem === 1) {
                    setSelected(false)
                    setAdditems(0)
                    dispatch(removeToCart(food))
                  } else {
                    setAdditems(c => c - 1)
                    dispatch(decreaseQuantity(food))
                  }
                }}>
                <Text
                  style={{fontSize: 18, color: 'green', fontWeight: 'bold'}}>
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={{fontSize: 18, color: 'green', fontWeight: 'bold'}}>
                  {addItem}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setAdditems(c => c + 1)
                  dispatch(incrementQuanity(food))
                }}>
                <Text
                  style={{fontSize: 18, color: 'green', fontWeight: 'bold'}}>
                  +
                </Text>
              </Pressable>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                setSelected(true)
                if (addItem == 0) {
                  setAdditems(c => c + 1)
                }
                dispatch(addToCart(food))
              }}
              style={{
                backgroundColor: 'white',
                position: 'absolute',
                padding: 5,
                bottom: 0,
                alignSelf: 'center',
                width: 70,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'green', fontWeight: 'bold', fontSize: 15}}>
                ADD
              </Text>
            </Pressable>
          )}
        </Pressable>
      </Pressable>
      <View></View>
    </View>
  )
}

export default MenuComponent
