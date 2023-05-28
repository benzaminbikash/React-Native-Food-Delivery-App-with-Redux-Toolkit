import {View, Text} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Rating = ({rating, time}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon name='star-circle' size={24} color='green' />
      <Text
        style={{
          marginLeft: 4,
          fontSize: 16,
          color: 'black',
          fontWeight: '600',
        }}>
        {rating}
      </Text>
      <Text
        style={{
          marginLeft: 8,
          fontSize: 16,
          color: 'black',
          fontWeight: '600',
        }}>
        {time} mins
      </Text>
    </View>
  )
}

export default Rating
