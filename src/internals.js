/**
 * Check if a value is an object
 *
 * @param {*} o The value to check
 *
 * @returns {boolean} Whether or not it is an object
 */
function isObj(o) {
  return o instanceof Object
    && o.constructor === Object;
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
  let targetObject = target;
  let sourceObject = source;

  if (!isObj(target)) {
    targetObject = {};
  }

  if (!isObj(source)) {
    sourceObject = {};
  }

  // get the object keys for the target and source objects
  const targetKeys = Object.keys(targetObject);
  const sourceKeys = Object.keys(sourceObject);

  // create a empty object for the result
  const result = {};

  // go through all the target keys
  targetKeys.forEach((key) => {
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
  });

  // go through all the source keys
  sourceKeys.forEach((key) => {
    // if the target doesn't contain the key
    // then the value is new and should be added
    // to the result object
    if (targetKeys.indexOf(key) === -1) {
      result[key] = sourceObject[key];
    }
  });

  return result;
}

export {
  isObj,
  mergeObject,
};
