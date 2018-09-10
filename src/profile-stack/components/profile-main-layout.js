import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import ProfileHeader from './profile-header';

const ProfileMainLayout = ({ children }) => (
  <View style={styles.contianer}>
    <ProfileHeader />
    <View style={styles.serviceContainer}>
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
  contianer: {
    flex: 1
  },
  serviceContainer:{
    flex: 1
  }
})

export default ProfileMainLayout