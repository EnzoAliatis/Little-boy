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



// AQUI TUS COMPOMENTES SCREENS

const Main = createStackNavigator({
  InitialLoadingLayout: {
    screen: Home,
    navigationOptions: {
      header: Header
    }
  },
  SubjectDescription: {
    screen: SubjectDescription,
  },
  HomeworkList: {
    screen: HomeworkList
  },
  EvaluationList: {
    screen: EvaluationList,
  },
  MaterialList: {
    screen: MaterialList
  }
},
  {
    navigationOptions: {
      headerStyle: { height: 50 }
    },
    headerTransitionPreset: 'uikit'
  })


const tabStack = createBottomTabNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      title: 'Inicio'
    }
  },
  Notifications: {
    screen: HomeworkList,
    navigationOptions: {
      title: 'Notifi'
    }
  },
  Homework: {
    screen: HomeworkList,
    navigationOptions: {
      title: 'Tareas'
    }
  },
  Profile: {
    screen: HomeworkList,
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
      activeTintColor: '#249447',
      inactiveTintColor: 'gray',
      showLabel: false
    }
  })

const modalStack = createStackNavigator({
  Home: {
    screen: tabStack
  },
  PdfContainer: {
    screen: PdfContainer
  }
}, {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: true
    }
  })


export default modalStack