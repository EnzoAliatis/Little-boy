import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView
} from 'react-native'
import QualificationsHeader from './qualifications-header';
import QualificationsBody from './qualifications-body';



const QualificationsLayouts = () => (
  <View style={styles.container} >
      <View>
        <QualificationsHeader />
      </View>
      <ScrollView>
        <QualificationsBody />
      </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FB459'
  }
})


export default QualificationsLayouts