import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';

import InitialLoadingLayout from '../components/initial-loading-layout'

import { fetchInfoUserIfNeeded } from '../../../actions'

class LoginContainer extends Component {
  handleLogin = async () => {
    // Aqui haces la peticion Al API para ver las validaciones de usuario
    await this.props.fetchInfoUserIfNeeded()
    this.props.navigation.navigate((Object.keys(this.props.infoUser).length !== 0) ? 'Home' : 'Login')
    // En el componenete Loading es que se hacen todas las validaciones de logeo
  }

  componentDidMount() {
    this.props.navigation.navigate((Object.keys(this.props.infoUser).length !== 0) ? 'Home' : 'Login')
  }

  render() {
    return (
      <TouchableWithoutFeedback style={{ flex: 1, backgroundColor: '#ecf0f1' }} onPress={Keyboard.dismiss}>
        {this.props.fetchStatus.isFetching ? <InitialLoadingLayout /> :
          <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'} style={styles.form}>
              <View>
                <Image
                  source={require('../../../assets/images/logo.png')}
                  style={styles.logo}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Nombre de usuario"
                  placeholderTextColor="gray"
                  autoFocus={true}
                  returnKeyType="next"
                  onSubmitEditing={() => this.passwordInput.focus()}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Contraseña"
                  placeholderTextColor="gray"
                  secureTextEntry={true}
                  returnKeyType="go"
                  ref={(input) => { this.passwordInput = input }}
                  onSubmitEditing={this.handleLogin}
                />
              </View>
              <View style={{ marginTop: 30, alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={this.handleLogin}
                  style={styles.button}
                >
                <Text style={styles.buttonLabel}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <Text style={styles.legal}>
                  MANTA - MANABÍ - ECUADOR © Copyright 2018
                </Text>
              </View>
            </KeyboardAvoidingView>
          </SafeAreaView>
        }
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 350,
    height: 100,
    alignItems: 'center',
    resizeMode: 'cover',
    marginBottom: 10,
  },
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  legal: {
    margin: 10,
    color: '#333',
    fontSize: 12,
    textAlign: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
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
    textAlign: 'center',

  },
});

function mapStateToProps(state) {
  return {
    fetchStatus: state.infoUser.status,
    infoUser: state.infoUser.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchInfoUserIfNeeded: () => dispatch(fetchInfoUserIfNeeded())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)