import React from 'react'
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,

} from 'react-native'
import RegisterModuleItem from './register-module-item';
import HeaderWithArrows from '../../utils/components/header-with-arrows';

const RegisterModuleLayout = ({children, headerTitle}) => (
  <SafeAreaView style={styles.container}>
    <HeaderWithArrows
      title={headerTitle}
    />
    <View style={styles.frontContainer}>
      {children}
    </View>
  </SafeAreaView>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
  frontContainer: {
    flex: 1,
    backgroundColor: '#9FB459'
  },
})



export default RegisterModuleLayout