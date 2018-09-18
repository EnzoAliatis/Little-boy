import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native'
import HeaderWithArrows from '../../utils/components/header-with-arrows'



const QualificationsLayouts = ({ headetTitle, onPressLeft, onPressRight, children }) => (
  <SafeAreaView style={styles.container} >
    <HeaderWithArrows
      title={headetTitle}
      onPressLeft={onPressLeft}
      onPressRight={onPressRight}
    />
    <ScrollView style={styles.scroll}>
      {children}
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