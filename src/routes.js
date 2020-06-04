import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './views/home'
import Login from './views/login'
import { AsyncStorage } from 'react-native-web'

export default function Routes() {
  async function usuario() {
    const user = await AsyncStorage.getItem('@user')
    return user
  }

  const Nav = createStackNavigator()
  if (usuario)
    return (
      <NavigationContainer>
        <Nav.Navigator>
          <Nav.Screen name='home' component={Home} />
        </Nav.Navigator>
      </NavigationContainer>
    )
  return (
    <NavigationContainer>
      <Nav.Navigator>
        <Nav.Screen name='Login' component={Login} />
      </Nav.Navigator>
    </NavigationContainer>
  )
}
