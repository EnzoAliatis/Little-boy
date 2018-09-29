import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Entypo'
import IconF from 'react-native-vector-icons/FontAwesome'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'



import HeaderOnlyTitle from '../../utils/components/header-only-title';


const ContactsLayout = (
  {
    headerTitle,
    onEmailPress,
    onPhonePress,
    onMapPress,
    onWebPress,
    onTwitterPress,
    onFacebookPress,
    onYoutubePress,
    onGplusPress
  }) => (
    <SafeAreaView style={styles.screen}>
      <HeaderOnlyTitle
        title={headerTitle}
      />
      <View style={styles.container}>
        <View style={styles.infoPanel}>
          <View style={styles.col}>
            <TouchableOpacity
              style={styles.socialPanel}
              onPress={onEmailPress}
            >
              <Icon
                name={'mail'}
                size={40}
                color={'#438519'}
              />
              <Text>Email Soporte</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialPanel}
              onPress={onPhonePress}
            >
              <Icon
                name={'phone'}
                size={40}
                color={'#438519'}
              />
              <Text>Telefono Soporte</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onMapPress}
              style={styles.socialPanel}
            >
              <Icon
                name={'location-pin'}
                size={40}
                color={'#438519'}
              />
              <Text>Direccíon ULEAM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialPanel}
              onPress={onWebPress}
            >
              <IconM
                name={'web'}
                size={40}
                color={'#438519'}
              />
              <Text>Página Web ULEAM</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.col}>
            <TouchableOpacity
              style={styles.socialPanel}
              onPress={onTwitterPress}
            >
              <Icon
                name={'twitter'}
                size={40}
                color={'#1da1f2'}
              />
              <Text>Twitter ULEAM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialPanel}
              onPress={onFacebookPress}
            >
              <Icon
                name={'facebook'}
                size={40}
                color={'#3b5998'}
              />
              <Text>Facebook ULEAM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onYoutubePress}
              style={styles.socialPanel}
            >
              <Icon
                name={'youtube'}
                size={40}
                color={'#ff0000'}
              />
              <Text>Youtube ULEAM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialPanel}
              onPress={onGplusPress}
            >
              <IconF
                name={'google-plus-official'}
                size={40}
                color={'#dd4b39'}
              />
              <Text>GooglePlus ULEAM</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  container: {
    backgroundColor: '#BE5150',
    flex: 1,
    justifyContent: 'center'

  },
  infoPanel: {
    backgroundColor: '#F7F7F7',
    borderWidth: 3,
    borderColor: '#444444',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 15
  },
  socialPanel: {
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#E1E1E1',
    backgroundColor: '#FAFAFA',

  },
  col: {
    width: '45%',

  }
})


export default ContactsLayout