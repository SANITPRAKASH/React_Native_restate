import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const PropertyPage = () => {
    const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>This is Property{id} page.</Text>
    </View>
  )
}

export default PropertyPage;