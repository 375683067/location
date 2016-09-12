import _ from 'underscore';
export const findIndex = function (state, name) {
  let i, len;

  for (i = 0, len = state.length; i < len; i++) {
    if (state[i].name === name) {
      return  i;
    }
  }
};
/**
 *
 * @param {Array} entities
 * @param {string} sortBy
 */
export const sort = function (entities, sortBy) {
  return _.sortBy(entities, sortBy);
};
/**
 *
 * @param str
 */
export const  parseCoordinates = function (str) {
  let arr = str.split(',');
  arr[0] = parseFloat(arr[0]);
  arr[1] = parseFloat(arr[1]);
  return arr;
};
/**
 * vibrate on mobile phone
 * @param {number} time - milliseconds
 */
export const vibrate = (time) => {
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
  if (navigator.vibrate) {
    navigator.vibrate(time);
  }
};
