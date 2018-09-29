import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native'

const UtemplatesLayout = ({ children }) => (
  <SafeAreaView style={{backgroundColor:'#F7F7F7',flex:1}}>
    <View style={styles.childrenContainer}>
      {children}
    </View>
  </SafeAreaView>
)


const styles = StyleSheet.create({
  childrenContainer: {
    flex: 1,
    backgroundColor: '#F5964F'
  }
})

export default UtemplatesLayout