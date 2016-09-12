/**
 * action types
 * @type {string}
 */
export const ADD_LOCATION = 'ADD_LOCATION';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';
export const EDIT_LOCATION = 'EDIT_LOCATION';
/**
 *
 * @param location
 * @return {{type: string, location: *}}
 */
export function addLocation(location) {
  return {
    type: ADD_LOCATION,
    location
  }
}
/**
 *
 * @param id
 * @return {{type: string, id: *}}
 */
export function removeLocation(id) {
  return {
    type: REMOVE_LOCATION,
    id
  }
}
/**
 *
 * @param id
 * @param location
 * @return {{type: string, id: *, location: *}}
 */
export function editLocation(id, location) {

  return {
    type: EDIT_LOCATION,
    id,
    location
  }
}
