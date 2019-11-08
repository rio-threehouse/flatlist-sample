import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Item from './components/Item';

export default class App extends React.Component {
  state = {
    itemData: [{
    id: '1',
    title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item'
      },]
  }
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.itemData}
          renderItem={({ item }) => <Item title={item.title + item.id} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
