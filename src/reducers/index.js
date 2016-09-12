//import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import categoriesReducer from './categoriesReducer.js';
import locationReducer from './locationsReducer.js';


//const rootReducer = combineReducers({
//  routing: routerReducer,
//  categories: categoriesReducer
//});

const rootReducer = function (state, action) {
  return {
    routing: routerReducer(state.routing, action),
    categories: categoriesReducer(state.categories, action),
    locations: locationReducer(state.locations, action)
  };
};
export default rootReducer;
