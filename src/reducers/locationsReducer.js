import {ADD_LOCATION, EDIT_LOCATION, REMOVE_LOCATION} from '../actions/locationActions.js';
import _ from 'underscore';

const initial = [];

export default function (state = initial, action) {
  let newState = state.slice();

  switch (action.type) {
    case ADD_LOCATION:
      newState.push(action.location);
          break;

    case REMOVE_LOCATION:
      newState = _.filter(newState, (location) => {
        if (location.id !== action.id) {
          return location;
        }
      });
          break;

    case EDIT_LOCATION:
      newState = newState.reduce((newState, location) => {
        if (location.id === action.id) {
          newState.push(action.location);
        } else {
          newState.push(location);
        }
        return newState;
      }, []);
          break;
  }
  return newState;
}
