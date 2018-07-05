import React from 'react'
import { Text, Image } from 'react-native' 

const Icon = ({source}) => (
  <Image 
    source={requiere(`${source}`)}
  />
)

export default Icon