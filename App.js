import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    const topics = ['Javascript', 'CSS', 'HTLM', 'React']
    return (
      <ScrollView style={{paddingTop: 100}}>
        {
          topics.map((item, idx) => <Text key={idx} style={styles.text} >{item}</Text>)
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
  }
});
