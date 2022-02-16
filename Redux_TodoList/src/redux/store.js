import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
// Mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Then run the saga
sagaMiddleware.run(rootSaga);

export default store;
