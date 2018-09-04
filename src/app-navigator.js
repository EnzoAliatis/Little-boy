import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import MaterialComunitiIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Home from './screens/containers/home'

import Header from './utils/header';
import SubjectDescription from './screens/containers/subject-description'
import HomeworkList from './screens/containers/homework-list'
import EvaluationList from './screens/containers/evaluation-list'
import MaterialList from './screens/containers/material-list'
import PdfContainer from './screens/containers/pdf-container';
import PdfErrorComponent from './utils/pdf-error-component';
import AdsList from './screens/containers/ads-list';
import ScheduleList from './screens/containers/schedule-list';

import CommingSoonComponent from './utils/comming-soon-component'



// AQUI TUS COMPOMENTES SCREENS

const Main = createStackNavigator({
  InitialLoadingLayout: {
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


const tabStack = createBottomTabNavigator({
  Home: {
    screen: Main,
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
    screen: CommingSoonComponent,
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


export default modalStack