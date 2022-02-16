import {call, put} from 'redux-saga/effects';

function* addTodoSaga(action) {
  try {
    const resTodo = yield call(startFetchFun());
    console.log(resTodo, 'API CALL....');

    yield put(
      addTodo({
        value: resTodo,
        key: Math.random().toString(),
      }),
    );
  } catch (error) {
    console.log('error in login saga catch', error);
  }
}

export {addTodoSaga};
