(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.circleAssign = factory());
}(this, (function () { 'use strict';

  /**
   * Check if a value is an object
   *
   * @param {*} o The value to check
   *
   * @returns {boolean} Whether or not it is an object
   */
  function isObj(o) {
    return o instanceof Object && o.constructor === Object;
  }
  /**
   * Merge the specified source object into the target object
   *
   * @param {Object} target The base target object
   * @param {Object} source The object to merge into the target
   *
   * @returns {Object} The merged object
   */


  function mergeObject(target, source) {
    // create a variable to hold the target object
    // so it can be changed if its not an object
    var targetObject = target;
    var sourceObject = source;

    if (!isObj(target)) {
      targetObject = {};
    }

    if (!isObj(source)) {
      sourceObject = {};
    } // get the object keys for the target and source objects


    var targetKeys = Object.keys(targetObject);
    var sourceKeys = Object.keys(sourceObject); // create a empty object for the result

    var result = {}; // go through all the target keys

    targetKeys.forEach(function (key) {
      // check if the source object contains the key
      if (sourceKeys.indexOf(key) !== -1) {
        // check if the target value is null if it is
        // set the result as the source value, this
        // should be fine because if the source value
        // is null it isn't overriding the target value
        // and if it isn't null it is overriding
        // as expected
        if (targetObject[key] === null) {
          result[key] = sourceObject[key];
        } else if (isObj(targetObject[key])) {
          // check if the source value is an object if
          // it is then we need to merge both objects and
          // set the result value to the merged object
          if (isObj(sourceObject[key])) {
            result[key] = mergeObject(targetObject[key], sourceObject[key]);
          } else {
            // if the source value isn't an object we can
            // simply override the value
            result[key] = sourceObject[key];
          }
        } else {
          // if the target value isn't an object we can
          // simply override the value
          result[key] = sourceObject[key];
        }
      } else {
        // if the source doesn't contain the key set the result
        // as the original from the target
        result[key] = targetObject[key];
      }
    }); // go through all the source keys

    sourceKeys.forEach(function (key) {
      // if the target doesn't contain the key
      // then the value is new and should be added
      // to the result object
      if (targetKeys.indexOf(key) === -1) {
        result[key] = sourceObject[key];
      }
    });
    return result;
  }

  // internals
  /**
   * Merge specified objects into one object with the most right
   * object having the most priority
   *
   * @param {Object} target The base object
   * @param {...Object} sources The object(s) to merge
   *
   * @returns {Object} The merged object(s) result
   */

  function merge(target) {
    var targetObject = target;

    if (!isObj(target)) {
      targetObject = {};
    } // for all the sources provided merge them with
    // the target object


    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    sources.forEach(function (s) {
      // before merging check the source is an object
      if (isObj(s)) {
        targetObject = mergeObject(targetObject, s);
      }
    });
    return targetObject;
  }

  return merge;

})));
