import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { save, load } from "redux-localstorage-simple";
export default function configureStore() {
  const middewares = [
    // Add other middleware on this line...
    save(),
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunkMiddleware,
  ];

  return createStore(rootReducer, load(), compose(
    applyMiddleware(...middewares),
    persistState()
    )
  );
}
