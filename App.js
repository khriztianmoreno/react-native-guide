import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200,
  },
  image: {
    width: 200,
    height: 200,
  },
})
