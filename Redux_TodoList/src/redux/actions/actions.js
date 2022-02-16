export const addTodo = data => {
  return {
    type: 'ADD_TODO',
    payload: data,
  };
};

export const deleteTodo = key => {
  return {
    type: 'DELETE_TODO',
    key,
  };
};

export const editTodo = data => {
  return {
    type: 'EDIT_TODO',
    payload: data,
  };
};

export const startFetchAction = data => {
  return {
    type: 'START_FETCH',
    payload: data,
  };
};
