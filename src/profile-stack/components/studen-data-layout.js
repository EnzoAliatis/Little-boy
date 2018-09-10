import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native'
import StudentDataHeader from './student-data-header';

const StudenDataLayout = ({ }) => (
  <View style={styles.container}>
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <StudentDataHeader />
      </View>
    </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FB459'
  },
  headerContainer: {
    height: '60%',
    marginVertical: 25
  }
})

export default StudenDataLayout