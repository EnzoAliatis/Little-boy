import React, { Component } from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from 'react-native'


import Pdf from 'react-native-pdf';

class PdfContainer extends Component {


  render() {
    const uri = this.props.navigation.getParam('pdfUrl')
    const source ={uri:`${uri}`,cache:true}

    

    // const url = `${this.props.navigation.getParam('pdfUrl')}`

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Pdf
            source={source}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`current page: ${page}`);
            }}
            onError={(error) => {
              this.props.navigation.replace('PdfError');
            }}
            style={styles.pdf} />
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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  }
})



export default PdfContainer