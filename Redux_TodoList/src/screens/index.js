import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import InputField from '../components/inputFiled/InputField';
import Empty from '../components/emptyComponent/Empty';
import TodoList from '../components/todoList/TodoList';
import StyleView from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTodo,
  deleteTodo,
  editTodo,
  startFetchAction,
} from '../redux/actions/actions';
import {getData, storeData} from '../localstorage';
const Main = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.todoReducers.list);
  const [inputValue, setInputValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    getData('list').then(res => {
      if (!res.length) dispatch(startFetchAction());
      else dispatch(addTodo(res));
      console.log(res, 'Res list');
      storeData('list', res);
    });

    return () => {
      null;
    };
  }, []);

  const deleteItem = id => {
    try {
      dispatch(deleteTodo({key: id}));
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
      dispatch(
        addTodo({
          value: value,
          key: Math.random().toString(),
        }),
      );
      setInputValue('');
    } catch (error) {
      console.log('Error in submitHandler ===>>>', error);
    }
  };

  const editHandler = value => {
    try {
      dispatch(
        editTodo({
          value: value,
          index: selectedIndex,
        }),
      );
      setInputValue('');
    } catch (error) {
      console.log('Error in editHandler ===>>>', error);
    }
  };

  return (
    <View style={StyleView.main}>
      <View>
        <FlatList
          data={list}
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
