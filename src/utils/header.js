import React from 'react'
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet
} from 'react-native'

const Header = ({ children }) => (
  <View>
    <SafeAreaView style={styles.statusBar}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        <View style={styles.right}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 70,
    resizeMode: 'contain'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  statusBar: {
    backgroundColor: 'white'
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})

export default Header