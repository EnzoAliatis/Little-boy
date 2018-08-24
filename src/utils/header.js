import React from 'react'
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const Header = () => (
  <View>
    <SafeAreaView style={styles.statusBar}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <TouchableOpacity style={styles.right}>
          <Icon name={'calendar'} size={25} color={'#C20E1A'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusBar: {
    backgroundColor: 'white'
  },
  right: {
    paddingRight: 15
  },
})

export default Header