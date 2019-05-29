import React from 'react'
import { View, WebView, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const WebViewExample = () => {
   return (
    <View style = {styles.container}>
      <WebView
        source = {{ uri: 'https://khriztianmoreno.com' }}
      />
    </View>
   )
}

export default WebViewExample;
