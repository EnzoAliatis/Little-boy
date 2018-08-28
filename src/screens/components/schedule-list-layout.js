import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import ScheduleHeader from './schedule-header';

const ScheduleListLayout = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <ScheduleHeader />
    {children}
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default ScheduleListLayout