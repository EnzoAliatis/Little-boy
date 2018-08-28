import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import ScheduleHeader from './schedule-header';
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