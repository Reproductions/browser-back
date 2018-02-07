import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
// import rootSaga from './sagas/root';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// then run the saga
// sagaMiddleware.run(rootSaga);

export default store;
