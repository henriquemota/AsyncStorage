import React from 'react'
import firebase from 'firebase'
import Routes from './src/routes'
import { FIREBASE } from './src/config'

export default function App() {
  if (!firebase.apps.length) firebase.initializeApp(FIREBASE)

  return <Routes />
}
