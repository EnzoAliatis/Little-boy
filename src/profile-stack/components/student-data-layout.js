import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import StudentDataHeader from "./student-data-header";
import StudentDataBody from "./student-data-body";

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
          <StudentDataBody />
        </View>
      </View>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9FB459",
    justifyContent: 'center'
  },
  headerContainer: {
    marginVertical: 10
  },
  bodyContainer: {

  },
  infoContainer: {
    backgroundColor: '#E1E1E1',
    borderRadius: 5 ,
    paddingVertical: 20

  }
});

export default StudenDataLayout;
