import React from 'react'
import firebase from 'firebase'

export function useTodo() {
  return {
    getAll() {
      firebase
        .database()
        .ref('Todos/')
        .on('value', function (e) {
          console.log(e.val())
        })
    },
    add(obj) {
      firebase
        .database()
        .ref('Todos/')
        .push(obj)
        .then((data) => {
          console.log('data ', data)
        })
        .catch((error) => {
          console.log('error ', error)
        })
    },
    del(id) {
      firebase.database().ref('Todos/').remove()
    },
  }
}
