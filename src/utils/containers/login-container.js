import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class LoginContainer extends Component {
  handleLogin = () => {
    // Aqui haces la peticion Al API para ver las validaciones de usuario
    const token = 'ABCDEFGHIJK';
    this.props.dispatch({
      type: 'SET_USER',
      payload: {
        token,
        username: 'EnzoAliatis'
      }
    })
    this.props.navigation.navigate('Loading');
    // En el componenete Loading es que se hacen todas las validaciones de logeo
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{alignItems:'center'}}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="white"
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={this.handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 350,
    height: 100,
    alignItems:'center',
    resizeMode: 'cover',
    marginBottom: 10,

  },
  input: {
    marginBottom: 10,
    width: 250,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#838383',
    color: 'white',
  },
  button: {
    backgroundColor: '#249447',
    borderRadius: 5,
    width: 250
  },
  buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default connect(null)(LoginContainer)