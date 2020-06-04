import React from 'react'
import { View, Modal, AsyncStorage } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'
import firebase from 'firebase'

export default function Login(props) {
  const [show, setShow] = React.useState(true)
  const [form, setForm] = React.useState({ email: 'mota.henrique@gmail.com', senha: 'senha' })
  const { navigation } = props

  async function login() {
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(form.email, form.senha)
      await AsyncStorage.setItem('@user', JSON.stringify(user))
    } catch (error) {
      alert(error)
    }
  }

  async function closeboarding() {
    let data = await AsyncStorage.getItem('@boarding')
    if (!data) data = { total: 1 }
    else {
      data = JSON.parse(data)
      data.total = data.total + 1
    }
    await AsyncStorage.setItem('@boarding', JSON.stringify(data))
    setShow(false)
  }

  async function getboardingpermission() {
    let data = await AsyncStorage.getItem('@boarding')
    if (!data) data = { total: 1 }
    else data = JSON.parse(data)

    if (data.total > 3) setShow(false)
  }

  getboardingpermission()

  return (
    <React.Fragment>
      <Modal visible={show} transparent>
        <View style={{ backgroundColor: '#ff0000', flex: 1, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center' }}>Boas vindas... bla bla bla bla bla bla</Text>
          <Button onPress={closeboarding}>Fechar onboarding</Button>
        </View>
      </Modal>
      <View style={{ flex: 1, justifyContent: 'center', margin: 10 }}>
        <Text>Login</Text>
        <TextInput
          label='Email'
          value={form.email}
          autoCapitalize='none'
          onChangeText={text => setForm({ ...form, email: text })}
        />
        <TextInput label='Senha' value={form.senha} onChangeText={text => setForm({ ...form, senha: text })} />
        <Button mode='contained' onPress={login}>
          Login
        </Button>
      </View>
    </React.Fragment>
  )
}
