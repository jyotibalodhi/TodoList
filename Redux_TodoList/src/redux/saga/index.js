import {takeLatest, takeEvery} from 'redux-saga/effects';
import {startFetchSaga} from './fetchSaga';
function* rootSaga() {
  try {
    yield takeEvery('START_FETCH', startFetchSaga);
  } catch (error) {
    console.log('error', error);
  }
}

export default rootSaga;
