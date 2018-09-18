import React from 'react'
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button
} from 'react-native'
import RegisterInfoPanel from './register-info-panel';

const RegisterLayout = () => (
  <SafeAreaView style={styles.container}>
    <RegisterInfoPanel />
    <View style={styles.buttonContainer}>
      <Button
        title="Empezar proceso de matriculación"
        accessibilityLabel="Empezar"
      />
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FB459',
    justifyContent: 'center'
  },
  buttonContainer: {
    backgroundColor: '#F7F7F7',
    padding: 5
  }
})

export default RegisterLayout