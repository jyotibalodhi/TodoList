import {call, put} from 'redux-saga/effects';
import {storeData} from '../../localstorage';
import {addTodo} from '../actions/actions';
import {startFetchFun} from '../apicalls.js/fetch';

function* startFetchSaga(action) {
  try {
    const resTodo = yield call(startFetchFun);
    yield put(addTodo(resTodo));
  } catch (error) {
    console.log('error in login saga catch', error);
  }
}

export {startFetchSaga};
