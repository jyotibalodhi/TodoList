import {storeData} from '../../localstorage';

const initialData = {
  list: [],
  loading: false,
};

const todoReducers = (state = initialData, action) => {
  console.log('type', action.type);

  switch (action.type) {
    case 'START_FETCH':
      return {...state, loading: true};

    case 'ADD_TODO':
      const data = action.payload;
      // console.log('data', data);
      let newList;
      if (Array.isArray(data)) {
        newList = [...state.list, ...data];
      } else {
        newList = [...state.list, data];
      }
      storeData('list', newList);

      return {...state, list: newList};

    case 'DELETE_TODO':
      const {key} = action.key;
      const updList = state.list.filter(todo => todo.key != key);
      storeData('list', updList);
      // console.log(updList, 'Upd List');
      return {
        ...state,
        list: updList,
      };

    case 'EDIT_TODO':
      const {value, index} = action.payload;
      const tempList = state.list;
      tempList[index].value = value;
      storeData('list', tempList);
      // console.log(tempList, 'TempList....');
      return {
        ...state,
        list: tempList,
      };

    default:
      return state;
  }
};

export default todoReducers;
