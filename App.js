import React from 'react';
import { SafeAreaView, FlatList, StyleSheet,TouchableOpacity, Text } from 'react-native';
import Constants from 'expo-constants';

import Item from './components/Item';

export default class App extends React.Component {
  state = {
    itemData: [],
    listUpdate: '1',
  }

  addItem = () => {
    this.state.itemData.push({
      id: this.state.listUpdate,
      title: 'Item',
    });

    this.setState({
      itemData: this.state.itemData,
      listUpdate: String( Number( this.state.listUpdate ) + 1 )
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.itemData}
          renderItem={({ item }) => <Item title={item.title + '-' + item.id} />}
          keyExtractor={item => item.id}
          extraData={this.state.listUpdate}
        />
        <TouchableOpacity
        onPress={this.addItem}>
          <Text style={styles.addButton}>Add</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  addButton: {
    textAlign: 'center',
    backgroundColor: 'skyblue',
    margin: 10,
    padding: 10,
  }
});
