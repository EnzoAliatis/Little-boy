import React, { Component } from 'react'
import { Linking } from 'react-native'
import ContactsLayout from '../components/contacts-layout';



class ContactsContainer extends Component {

  state = {
    contacts: {
      email: ''
    }
  }

  onEmailPress = () => {
    Linking.openURL(`mailto:soporte@live.uleam.edu.ec`)
  }

  onPhonePress = () => {
    Linking.openURL(`tel:0980730007`)
  }

  onSocialPress = (uri) => {
    Linking.openURL(uri)
  }

  onMapPress = () => {
    Linking.openURL(`https://www.google.com/maps/place/Universidad+Laica+Eloy+Alfaro+De+Manabi/@-0.9545103,-80.7487158,17z/data=!3m1!4b1!4m5!3m4!1s0x902be16a5ec848cd:0xa60ef7d90e068e64!8m2!3d-0.9545103!4d-80.7465271`)
  }

  onWebPress = () => {
    Linking.openURL(`http://www.uleam.edu.ec/`)
  }

  onTwitterPress = () => {
    Linking.openURL(`https://twitter.com/uleamecuador/`)
  }

  onFacebookPress = () => {
    Linking.openURL(`https://www.facebook.com/UleamEc/`)
  }

  onYoutubePress = () => {
    Linking.openURL(`https://www.youtube.com/channel/UCOferC0PjpEUegrVq8Re-TQ/videos`)
  }

  onGplusPress = () => {
    Linking.openURL(`https://plus.google.com/106975778634192902858`)
  }
 

  render() {
    return(
      <ContactsLayout
        headerTitle='Contactos'
        onEmailPress={this.onEmailPress}
        onPhonePress={this.onPhonePress}
        onMapPress={this.onMapPress}
        onWebPress={this.onWebPress}
        onTwitterPress={this.onTwitterPress}
        onFacebookPress={this.onFacebookPress}
        onYoutubePress={this.onYoutubePress}
        onGplusPress={this.onGplusPress}
      />
    )
  }
}



export default ContactsContainer
