import React from 'react'
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,

} from 'react-native'
import HeaderWithArrows from '../../utils/components/header-with-arrows';

const RegisterModuleLayout = (
  { children,
    headerTitle,
    subjectName,
    subjectLevel,
    subjectCredits,
    avaliableParallel,
    onPressRight,
    onPressLeft }) => (
    <SafeAreaView style={styles.container}>
      <HeaderWithArrows
        title={headerTitle}
        onPressRight={onPressRight}
        onPressLeft={onPressLeft}
      />
      <View style={styles.frontContainer}>
        <View style={styles.panelContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.textTitle}>Materia: </Text>
            <Text style={styles.textInfo}>{subjectName}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textTitle}>Nivel: </Text>
            <Text style={styles.textInfo}>{subjectLevel}</Text>
          </View>
          <View style={[styles.infoContainer, { justifyContent: 'space-between' }]}>
            <View style={styles.infoContainer}>
              <Text style={styles.textTitle}>Paralelos: </Text>
              <Text style={styles.textInfo}>{avaliableParallel}</Text>
            </View>
            <View style={[styles.infoContainer, { paddingRight: 10 }]}>
              <Text style={styles.textTitle}>Créditos: </Text>
              <Text style={styles.textInfo}>{subjectCredits}</Text>
            </View>
          </View>
        </View>
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
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textInfo: {
    fontSize: 18,
    fontWeight: 'normal'
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})



export default RegisterModuleLayout