import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';




import HeaderOnlyTitle from '../../utils/components/header-only-title';


const SuggestionsLayout = ({ categories }) => (
  <SafeAreaView style={styles.container}>
    <View style={{ flex: 1, backgroundColor: "#BE5150" }}>
      <HeaderOnlyTitle
        title="Sugerencias"
      />
      <View style={styles.infoPanel}>
        <Text style={styles.infoText}>
          {'\u2022'} Este espacio esta dedicado para el desarrollo de la App, envianos tus Sugerencias, Reporte de errores,
          Errores otrográficos, entre otros impedimentos que se deben mejorar.
          {'\n\u2022'} Si tienes una idea para mejorar el UX y el UI no dudes en contactarte con nosotro (contactos).
        </Text>
      </View>
      <View style={styles.infoPanel}>
        <Dropdown
          label='Categorias'
          data={categories}
          baseColor='rgba(29, 29, 29, 1)'
        />
      </View>
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
  infoPanel: {
    backgroundColor: '#F7F7F7',
    borderWidth: 2,
    borderColor: '#E1E1E1',
    borderRadius: 5,
    margin: 1,
    padding: 2
  },
  infoText: {
    textAlign: 'justify'
  },
})



export default SuggestionsLayout