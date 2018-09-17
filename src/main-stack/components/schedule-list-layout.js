import React from 'react'
import {
  StyleSheet,
  SafeAreaView
} from 'react-native'
import ScheduleHeaderContainer from '../containers/schedule-header-container';

const ScheduleListLayout = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <ScheduleHeaderContainer />
    {children}
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default ScheduleListLayout