import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from 'react-native'

const PdfErrorComponent = () => (
  <SafeAreaView style={styles.safe}>
    <View style={styles.container}>
      <Text style={styles.texto}>Error al cargar el PDF</Text>
    </View>
  </SafeAreaView>
)


const styles = StyleSheet.create({
  safe: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(230,230,237)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    fontSize: 40
  }
})


export default PdfErrorComponent