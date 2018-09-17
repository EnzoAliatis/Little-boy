import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native'
import QualificationsBody from './qualifications-body';
import HeaderWithArrows from '../../utils/components/header-with-arrows'



const QualificationsLayouts = ({headetTitle, onPressLeft, onPressRight}) => (
  <SafeAreaView style={styles.container} >
    <View style={styles.headerContainer}>
      <HeaderWithArrows
        title={headetTitle}
        onPressLeft={onPressLeft}
        onPressRight={onPressRight}
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