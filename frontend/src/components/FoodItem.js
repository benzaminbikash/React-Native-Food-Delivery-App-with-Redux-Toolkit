import {View, Text, Pressable} from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import MenuComponent from './MenuComponent'

const FoodItem = ({data}) => {
  // if (!data || !Array.isArray(data)) {
  //   // Handle the case when data is undefined or not an array
  //   return null // or render an appropriate fallback component
  // }
  value = [data]
  const [selected, setSelected] = useState(['Recommended'])
  const handleMenu = data => {
    const findData = selected.find(e => e === data)
    if (findData) {
      setSelected(selected.filter(e => e !== data))
    } else {
      setSelected([...selected, data])
    }
  }
  return (
    <View>
      {value.map((item, index) => {
        return (
          <>
            <Pressable
              onPress={() => {
                handleMenu(item.name)
              }}
              key={index}
              style={{
                margin: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                {item.name} ({item.items.length})
              </Text>
              <Icon name='down' size={20} color='black' />
            </Pressable>
            {selected.includes(item.name)
              ? item.items.map((item, i) => {
                  return <MenuComponent food={item} i={i} />
                })
              : null}
          </>
        )
      })}
    </View>
  )
}

export default FoodItem
