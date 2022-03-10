import { applyMiddleware,createStore } from 'redux'
import rootSaga from './redux/saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './redux/reducers/rootReducer';
import createSagaMiddleware from "redux-saga";


// const store = createStore(changeState)
const sagaMiddleware = createSagaMiddleware();


const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
export default store

