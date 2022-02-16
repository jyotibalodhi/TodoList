import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import InputField from '../components/inputFiled/InputField';
import Empty from '../components/emptyComponent/Empty';
import TodoList from '../components/todoList/TodoList';
import StyleView from './styles';

const Main = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const deleteItem = key => {
    try {
      setData(prevTodo => {
        return prevTodo.filter(todo => todo.key != key);
      });
    } catch (error) {
      console.log('Error in deleteItem ===>>>', error);
    }
  };

  const editItem = (item, index) => {
    try {
      setInputValue(item.value);
      setSelectedIndex(index);
    } catch (error) {
      console.log('Error in editItem ===>>>', error);
    }
  };

  const submitHandler = value => {
    try {
      setData(prevTodo => {
        return [
          ...prevTodo,
          {
            value: value,
            key: Math.random().toString(),
          },
        ];
      });
      setInputValue('');
    } catch (error) {
      console.log('Error in submitHandler ===>>>', error);
    }
  };

  const editHandler = value => {
    try {
      data[selectedIndex].value = value;
      setData(data);
      setInputValue('');
    } catch (error) {
      console.log('Error in editHandler ===>>>', error);
    }
  };

  return (
    <View style={StyleView.main}>
      <View>
        <FlatList
          data={data}
          ListEmptyComponent={() => <Empty />}
          keyExtractor={item => item.key}
          renderItem={({item, index}) => (
            <TodoList
              item={item}
              deleteItem={deleteItem}
              editItem={() => editItem(item, index)}
            />
          )}
        />
        <InputField
          inputValue={inputValue}
          submitHandler={submitHandler}
          editHandler={editHandler}
        />
      </View>
    </View>
  );
};

export default Main;
