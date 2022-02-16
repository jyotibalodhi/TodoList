import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import List from './styles';

const TodoList = props => {
  const {item, deleteItem, editItem} = props;

  return (
    <View style={List.ComponentContainer}>
      <View style={List.ListContainer}>
        <View style={List.row}>
          <Text style={List.Text}>{item.value}</Text>
          <TouchableOpacity
            style={List.btn}
            onPress={() => deleteItem(item.key)}>
            <Icon name="trash" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={List.btn} onPress={() => editItem()}>
            <Icon name="edit" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TodoList;
