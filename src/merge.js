// internals
import { isObj, mergeObject } from './internals';

/**
 * Merge specified objects into one object with the most right
 * object having the most priority
 *
 * @param {Object} target The base object
 * @param {...Object} sources The object(s) to merge
 *
 * @returns {Object} The merged object(s) result
 */
function merge(target, ...sources) {
  let targetObject = target;

  if (!isObj(target)) {
    targetObject = {};
  }

  // for all the sources provided merge them with
  // the target object
  sources.forEach((s) => {
    // before merging check the source is an object
    if (isObj(s)) {
      targetObject = mergeObject(targetObject, s);
    }
  });

  return targetObject;
}

export default merge;
