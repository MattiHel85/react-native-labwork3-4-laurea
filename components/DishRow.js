import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Currency from 'react-currency-formatter';
import {urlFor} from '../sanity'

const DishRow = ({id, name, description, price, image}) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
      <TouchableOpacity className="bg-white border p-4 border-gray-200">
          <View className="flex-row">
              <View className="flex-1 pr-2">
                  <View className="flex-1 pr-2">
                      <Text>{name}</Text>
                      <Text>{description}</Text>
                      <Text>
                          <Currency quantity={price} currency="GBP" />
                      </Text>
                  </View>
              </View>
              <View>
                  <Image   
                      style={{
                          borderWidth: 1,
                          borderColor: "#F3F3F4"
                      }}          
                      source={{uri: urlFor(image).url()}}
                      className="h-20 w-20 bg-gray-300 p-4"
                  />
              </View>
          </View>
                    
      </TouchableOpacity>
    )
}

export default DishRow