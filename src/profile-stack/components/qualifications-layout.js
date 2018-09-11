import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native'
import QualificationsHeader from './qualifications-header';
import QualificationsBody from './qualifications-body';


const QualificationsLayouts = () => (
  <View style={styles.container} >
    <SafeAreaView>
      <View>
        <QualificationsHeader />
      </View>
      <View>
        <QualificationsBody />
      </View>
    </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FB459'
  }
})


export default QualificationsLayouts