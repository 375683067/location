import {ADD_CATEGORY, REMOVE_CATEGORY, EDIT_CATEGORY} from '../actions/categoriesActions.js';
import {CATEGORIES_STORAGE} from '../constants/common.js';
import {findIndex} from '../constants/helpers.js';
import _ from 'underscore';
const initialState = [];

export default function categoriesReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case EDIT_CATEGORY:
      newState = state.slice();
      if (_.isObject(_.findWhere(state, {name: action.name}))) {
        alert('you can\'t rename category with this name');
      } else {
        let index = findIndex(newState, action.prevName);
        newState[index] = {
          name: action.name
        };
      }
      return newState;
      break;

    case ADD_CATEGORY:
      newState = state.slice();
      if (_.isObject(_.findWhere(state, {name: action.name}))) {
        alert('this category is exist');
      } else {
        newState.push({
          name: action.name
        });
      }
      return newState;
      break;

    case REMOVE_CATEGORY:
      newState = state.slice();
      let index = findIndex(newState, action.name);
      if (_.isNumber(index)) {
        newState.splice(index, 1);
      } else {
      }
      return newState;
      break;

    default:
      return state;
  }
}
