import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet
} from 'react-native'
import StudentDataHeader from './student-data-header';
import StudentDataBody from './student-data-body';

const StudenDataLayout = ({ infoStudent }) => (
  <View style={styles.container}>
    <SafeAreaView>
      <View style={styles.infoContainer}>
        <View style={styles.headerContainer}>
          <StudentDataHeader
            cedula={infoStudent.cedula}
            fullName={infoStudent.fullName}
            faculty={infoStudent.faculty}
            career={infoStudent.career}
          />
        </View>
        <View style={styles.bodyContainer}>
          <StudentDataBody
            email={infoStudent.email}
            phone={infoStudent.phone}
            level={infoStudent.level}
            itinerary={infoStudent.itinerary}
            registrationNumber={infoStudent.registrationNumber}
            typeStudent={infoStudent.typeStudent}
            Vgenerated={infoStudent.Vgenerated}
            Vpaid={infoStudent.Vpaid}
          />
        </View>
      </View>
      {console.log(infoStudent)}
    </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9FB459'
  },
  headerContainer: {
    marginTop: 10
  },
  infoContainer: {
    backgroundColor: '#E1E1E1',
    margin: 2
  }
})

export default StudenDataLayout