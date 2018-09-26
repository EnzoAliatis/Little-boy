import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,

} from 'react-native'
import HeaderWithArrows from '../../utils/components/header-with-arrows';
import RegisterModuleHeader from './register-module-header';

const RegisterModuleLayout = (
  { children,
    headerTitle,
    subjectName,
    subjectLevel,
    subjectCredits,
    avaliableParallel,
    onPressRight,
    onPressLeft,
    stepEnd }) => (
    <SafeAreaView style={styles.container}>
      <HeaderWithArrows
        title={headerTitle}
        onPressRight={onPressRight}
        onPressLeft={onPressLeft}
      />
      <View style={styles.frontContainer}>
        {!stepEnd &&
          <View style={styles.panelContainer}>

            <RegisterModuleHeader
              subjectName={subjectName}
              subjectLevel={subjectLevel}
              subjectCredits={subjectCredits}
              avaliableParallel={avaliableParallel}
            />

          </View>
        }
        {children}
      </View>
    </SafeAreaView>
  )


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
  frontContainer: {
    flex: 1,
    backgroundColor: '#9FB459'
  },
  panelContainer: {
    backgroundColor: '#F7F7F7',
    borderWidth: 3,
    borderColor: '#E1E1E1',
    margin: 2,
    padding: 2,
    borderRadius: 5
  },


})



export default RegisterModuleLayout