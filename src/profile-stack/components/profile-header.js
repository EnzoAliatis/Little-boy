import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native'

const HEADER_MAX_HEIGHT = 120
const PROFILE_IMAGE_MAX_HEIGHT = 120

const ProfileHeader = () => (
  <View style={styles.container}>
    <View style={styles.backHeader}>
      <Image
        style={styles.backImage}
        source={require('../../../assets/images/logo.png')}
      />

    </View>
    <View style={styles.imageContainer}>
      <Image
        style={styles.imagen}
        source={require('../../../assets/images/fotoEnzo.jpeg')}
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.textCedula}>1310729510</Text>
      <Text style={styles.textName}>Enzo Paolo Aliatis Ramírez</Text>
      <Text style={styles.textCarrera}>Ingeniero en Sistemas</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: '40%',
    alignItems: 'center',
    backgroundColor: '#575757'
  },
  backHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#9FB459',
    height: HEADER_MAX_HEIGHT,
    paddingTop: 20

  },
  imageContainer: {
    height: PROFILE_IMAGE_MAX_HEIGHT,
    width: PROFILE_IMAGE_MAX_HEIGHT,
    borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
    borderColor: 'white',
    borderWidth: 3,
    overflow: 'hidden',
    marginTop: HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2)
  },
  imagen: {
    flex: 1,
    width: null,
    height: null
  },
  backImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textContainer: {
    alignItems: 'center'
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  textCedula: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'

  },
  textCarrera: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'

  }
})


export default ProfileHeader