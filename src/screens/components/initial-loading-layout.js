import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

const InitialLoadingLayout = () => (
  <View style={styles.container}>
    <Image
      source={require('../../../assets/images/logo.png')}
      style={styles.logo}
    />
    <ActivityIndicator />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  }
})

export default InitialLoadingLayout

