import React, { Component } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet
} from 'react-native'

class PdfContainer extends Component {

  render () {
    return (
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.texto}>{this.props.navigation.getParam('pdfUrl')} Pdf</Text>
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 50,
    fontWeight: 'bold'
  }
})



export default PdfContainer