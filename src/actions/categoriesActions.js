/**
 * action types
 * @type {string}
 */
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
/**
 * action creators
 */
/**
 * @param {string} name - name of new category
 * @return {{type: string, name: *}}
 */
export function addCategory(name) {
  return {
    type: ADD_CATEGORY,
    name
  };
}
/**
 * @return {{type: string, id}}
 * @param {string} name
 */
export function editCategory(name, prevName) {
  return {
    type: EDIT_CATEGORY,
    name,
    prevName
  };
}
/**
 *
 * @param {string} name
 * @return {{type: string, name: *}}
 */
export function removeCategory (name) {
  return {
    type: REMOVE_CATEGORY,
    name
  };
}
