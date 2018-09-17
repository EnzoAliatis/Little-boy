import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native'
import QualificationsBody from './qualifications-body';
import HeaderWithArrows from '../../utils/components/header-with-arrows'



const QualificationsLayouts = () => (
  <SafeAreaView style={styles.container} >
    <View style={styles.headerContainer}>
      <HeaderWithArrows
        title="General"
      />
    </View>
    <ScrollView style={styles.scroll}>
      <QualificationsBody />
    </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
  scroll: {
    backgroundColor: '#9FB459'
  }
})


export default QualificationsLayouts