import { createStore, combineReducers} from 'redux';
import Reducer from './reducers/Reducer';

const rootReducer = combineReducers({
  auth: Reducer,
});

const store = createStore(rootReducer);

export default store;
