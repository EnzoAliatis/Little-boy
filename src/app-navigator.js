import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import Home from './screens/containers/home'
import InitialLoadingLayout from './screens/components/initial-loading-layout';
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
  Notification: {
    screen: HomeworkList,
    navigationOptions:{
      title: 'Notifi'
    }
  },
  Homework: {
    screen: HomeworkList,
    navigationOptions:{
      title: 'Tareas'
    }
  },
  Profile: {
    screen: HomeworkList,
    navigationOptions:{
      title: 'Perfil'
    }
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
    headerMode: 'none'
  })


export default modalStack