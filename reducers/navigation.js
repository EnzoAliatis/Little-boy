import { createNavigationReducer } from 'react-navigation-redux-helpers'

import AppNavigator from '../src/app-navigator'

const navigatorReducer = createNavigationReducer(AppNavigator)

export default navigatorReducer
