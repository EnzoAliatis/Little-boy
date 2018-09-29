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
    locals,
    socials,
    onContactPress
  }) => (
    <SafeAreaView style={styles.screen}>
      <HeaderOnlyTitle
        title={headerTitle}
      />
      <View style={styles.container}>
        <View style={styles.infoPanel}>
          <View style={styles.col}>
            {
              locals.map(item => (
                <TouchableOpacity
                  style={styles.socialPanel}
                  key={item.id}
                  onPress={() => onContactPress(item.url)}
                >
                  {item.iconType === 'Entypo' &&
                    <Icon
                      name={item.iconName}
                      size={40}
                      color={'#438519'}
                    />}
                  {item.iconType === 'MaterialCommunityIcons' &&
                    <IconM
                      name={item.iconName}
                      size={40}
                      color={'#438519'}
                    />}
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              ))
            }
          </View>
          <View style={styles.col}>
            {
              socials.map(item => (
                <TouchableOpacity
                  style={styles.socialPanel}
                  key={item.id}
                  onPress={() => onContactPress(item.url)}
                >
                  {item.iconType === 'Entypo' &&
                    <Icon
                      name={item.iconName}
                      size={40}
                      color={item.iconColor}
                    />}
                  {item.iconType === 'FontAwesome' &&
                    <IconF
                      name={item.iconName}
                      size={40}
                      color={item.iconColor}
                    />}
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              ))
            }
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
    height: 100

  },
  col: {
    width: '45%',

  }
})


export default ContactsLayout