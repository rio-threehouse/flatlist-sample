import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Item extends Component {
  render() {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
