import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Toggle extends Component {

  onPress = (option) => {
    const {onChange} = this.props

    onChange(option)
  }

  renderOption = (option, i) => {
    const {value} = this.props

    return (
      <TouchableOpacity
        style={[styles.option, option === value && styles.activeOption]}
        onPress={this.onPress.bind(this, option)}
        key={i}
      >
        <Text style={styles.text}>
          {option}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {label, options} = this.props

    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.label]}>
          {label}
        </Text>
        <View style={styles.optionsContainer}>
          {options.map(this.renderOption)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 20,
  },
  text: {
    fontSize: 14,
  },
  label: {
    padding: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  option: {
    padding: 4,
    backgroundColor: 'whitesmoke',
  },
  activeOption: {
    backgroundColor: 'skyblue',
  },
})
