import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation'

import MaterialComunitiIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Home from './main-stack/containers/home'

import Header from './utils/components/header';
import SubjectDescription from './main-stack/containers/subject-description'
import HomeworkList from './main-stack/containers/homework-list'
import EvaluationList from './main-stack/containers/evaluation-list'
import MaterialList from './main-stack/containers/material-list'
import PdfContainer from './utils/containers/pdf-container';
import PdfErrorComponent from './utils/components/pdf-error-component';
import AdsList from './main-stack/containers/ads-list';
import ScheduleList from './main-stack/containers/schedule-list';

import ProfileMain from './profile-stack/containers/profile-main'

import CommingSoonComponent from './utils/components/comming-soon-component'
import StudenData from './profile-stack/containers/student-data';
import Qualifications from './profile-stack/containers/qualifications';
import RegisterContainer from './profile-stack/containers/register-container';
import RegisterModule from './profile-stack/containers/register-module'
import UtemplatesContainer from './profile-stack/containers/Utemplates-container';
import SuggestionsContainer from './profile-stack/containers/suggestions-container';
import ContactsContainer from './profile-stack/containers/contacts-container';

import LoginContainer from './utils/containers/login-container';
import LoadingContainer from './utils/containers/loading-container';



// AQUI TUS COMPOMENTES SCREENS

const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: <Header onPress={() => navigation.navigate('Schedule')} />
    })
  },
  SubjectDescription: {
    screen: SubjectDescription,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title'),
      headerTruncatedBackTitle: navigation.getParam('title').substr(0, navigation.getParam('title').indexOf(' '))
    })
  },
  EvaluationList: {
    screen: EvaluationList,
    navigationOptions: {
      title: 'Evaluaciones'
    }
  },
  MaterialList: {
    screen: MaterialList,
    navigationOptions: {
      title: 'Materiales'
    }
  },
  HomeworkList: {
    screen: HomeworkList,
    navigationOptions: {
      title: 'Tareas'
    }
  },
  AdsList: {
    screen: AdsList,
    navigationOptions: {
      title: 'Anuncios'
    }
  }
},
  {
    navigationOptions: {
      headerStyle: { height: 50 }
    },
    headerTransitionPreset: 'uikit',
    headerMode: 'screen'
  })


const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileMain
  },
  StudenData: {
    screen: StudenData
  },
  Qualifications: {
    screen: Qualifications
  },
  Register: {
    screen: RegisterContainer
  },
  RegisterModule: {
    screen: RegisterModule
  },
  Utemplates: {
    screen: UtemplatesContainer
  },
  Suggestions: {
    screen: SuggestionsContainer
  },
  Contacts: {
    screen: ContactsContainer
  }
}, {
    headerMode: 'none'
  })


const tabStack = createBottomTabNavigator({
  Home: {
    screen: MainStack,
    navigationOptions: {
      title: 'Inicio'
    }
  },
  Notifications: {
    screen: CommingSoonComponent,
    navigationOptions: {
      title: 'Notifi'
    }
  },
  Homework: {
    screen: CommingSoonComponent,
    navigationOptions: {
      title: 'Tareas'
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      title: 'Perfil'
    }
  }
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const routesName = ['Home', 'Notifications', 'Homework', 'Profile']
        const sizeIcon = 34
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === routesName[0]) {
          iconName = `home${focused ? '' : '-outline'}`
          return <MaterialComunitiIcons name={iconName} size={sizeIcon} color={tintColor} />
        } else if (routeName === routesName[1]) {
          iconName = `notifications${focused ? '' : '-none'}`
          return <MaterialIcons name={iconName} size={sizeIcon} color={tintColor} />
        } else if (routeName === routesName[2]) {
          iconName = `format-list-checkbox`
          return <MaterialComunitiIcons name={iconName} size={sizeIcon} color={tintColor} />
        } else if (routeName === routesName[3]) {
          iconName = `user${focused ? '' : '-o'}`
          return <FontAwesome name={iconName} size={sizeIcon} color={tintColor} />
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#C20E1A',
      inactiveTintColor: 'gray',
      showLabel: false
    },
    // headerMode: 'screen'
  })

const modalStack = createStackNavigator({
  Home: {
    screen: tabStack
  },
  PdfContainer: {
    screen: PdfContainer
  },
  PdfError: {
    screen: PdfErrorComponent
  },
  Schedule: {
    screen: ScheduleList
  }
}, {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: true,
      header: null
    }
  }, {
    headerMode: 'none'
  })

const SwitchNavigator = createSwitchNavigator(
  {
    App: {
      screen: modalStack
    },
    Loading: {
      screen: LoadingContainer
      // En el componenete Loading es que se hacen todas las validaciones de logeo
    },
    Login: {
      screen: LoginContainer
    }

  },{
    initialRouteName: 'Loading'
  }
)

export default SwitchNavigator