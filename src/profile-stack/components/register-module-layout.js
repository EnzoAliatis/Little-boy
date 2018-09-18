import React from 'react'
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,

} from 'react-native'
import RegisterModuleItem from './register-module-item';

const RegisterModuleLayout = () => (
  <SafeAreaView style={styles.container}>
    <RegisterModuleItem />
  </SafeAreaView>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FB459'
  }
})



export default RegisterModuleLayout