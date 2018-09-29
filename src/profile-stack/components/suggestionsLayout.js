import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity
} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';




import HeaderOnlyTitle from '../../utils/components/header-only-title';


const SuggestionsLayout = ({ categories, screens, onReportSubmit }) => (
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
          baseColor='rgba(190, 81, 80, 1)'
        />
      </View>
      <View style={styles.infoPanel}>
        <Dropdown
          label='Pantalla'
          data={screens}
          baseColor='rgba(190, 81, 80, 1)'
        />
      </View>
      <TextInput
        style={[styles.infoPanel, { height: 120, textAlignVertical: "top" }]}
        multiline={true}
        numberOfLines={2}
        maxLength={200}
        placeholder='Escribenos tu sugerencia'
        returnKeyType='done'
        onSubmitEditing={Keyboard.dismiss}
      />
      <TouchableOpacity
        onPress={onReportSubmit}
        style={styles.botonContainer}
      >
        <Text style={styles.textBottom}>Enviar reporte</Text>
      </TouchableOpacity>

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
  botonContainer: {
    backgroundColor: '#F7F7F7',
    width: 200,
    marginVertical: 20,
    padding: 8,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E1E1E1',
  },
  textBottom: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})



export default SuggestionsLayout