import React, { Component } from 'react'
import { Linking } from 'react-native'
import ContactsLayout from '../components/contacts-layout';



class ContactsContainer extends Component {


  state = {
    contacts: {
      locals: [
        {id:'14',label: 'Email Soporte', url:'mailto:soporte@live.uleam.edu.ec', iconType:'Entypo' , iconName:'mail'},
        {id:'421',label: 'Telefono Soporte', url:'tel:0980730007', iconType: 'Entypo', iconName:'phone'},
        {id:'23',label: 'Dirección ULEAM', url:'https://www.google.com/maps/place/Universidad+Laica+Eloy+Alfaro+De+Manabi/@-0.9545103,-80.7487158,17z/data=!3m1!4b1!4m5!3m4!1s0x902be16a5ec848cd:0xa60ef7d90e068e64!8m2!3d-0.9545103!4d-80.7465271/', iconType: 'Entypo' , iconName: 'location-pin'},
        {id:'45',label: 'Página Web Uleam', url:'http://www.uleam.edu.ec/', iconType: 'MaterialCommunityIcons' , iconName:'web'}
      ],
      socials: [
        {id:'46',label: 'Twitter ULEAM', url:'https://twitter.com/uleamecuador/', iconType:'Entypo' , iconName:'twitter', iconColor:'#1da1f2' },
        {id:'82',label: 'Facebook ULEAM', url:'https://www.facebook.com/UleamEc/', iconType: 'Entypo', iconName:'facebook', iconColor:'#3b5998' },
        {id:'14',label: 'Youtube ULEAM', url:'https://www.youtube.com/channel/UCOferC0PjpEUegrVq8Re-TQ/videos', iconType: 'Entypo' , iconName: 'youtube', iconColor:'#ff0000' },
        {id:'53',label: 'GooglePlus ULEAM', url:'https://plus.google.com/106975778634192902858', iconType: 'FontAwesome' , iconName:'google-plus-official', iconColor:'#db4437' }
      ]
    }
  }


 

  onContactPress = (uri) => {
    Linking.openURL(uri)
  }

 
  render() {
    return(
      <ContactsLayout
        headerTitle='Contactos'
        locals={this.state.contacts.locals}
        socials={this.state.contacts.socials}
        onContactPress={this.onContactPress}
      />
    )
  }
}



export default ContactsContainer
