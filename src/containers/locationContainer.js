import {connect} from 'react-redux';
import  locationEditor from '../components/locationEditor.js';
import  locationList from '../components/locationList.js';
import locationViewer from '../components/locationViewer.js';
import {addLocation, editLocation, removeLocation} from '../actions/locationActions.js';
import _ from 'underscore';
import {sort} from '../constants/helpers.js';

/**
 * here will be necessary data for locations
 * @param state
 * @return {{categories}}
 */
function mapStateToProps (state) {
  return {
    locations: sort(state.locations, 'name'),
    categories: sort(state.categories, 'name')
  };
}
/**
 * here is available actions for location
 * @param dispatch
 * @return {{addNewCategory: (function(*=)), editCategory: (function(*=)), removeCategory: (function(*=))}}
 */
function mapDispatchToProps (dispatch) {
  return {
    addLocation(location) {
      dispatch(addLocation(location))
    },
    removeLocation(id) {
      dispatch(removeLocation(id));
    },
    editLocation(id, location) {
      dispatch(editLocation(id, location))
    }
  }
}
/**
 *
 */
export const LocationEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(locationEditor);
/**
 *
 */
export const LocationList = connect(
  mapStateToProps,
  mapDispatchToProps
)(locationList);
/**
 *
 */
export const LocationViewer = connect(
  mapStateToProps,
  mapDispatchToProps
)(locationViewer);

