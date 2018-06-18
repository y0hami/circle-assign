/**
 * Deep object assign
 *
 * @param {Object} target The target object object
 * @param {...Object} sources The source object(s)
 */
function circleAssign(target, ...sources) {

  if(typeof target !== 'object' ||
    target === undefined ||
    target === null) {

    target = {};

  }

  let
    assign  = function (target, source) {

      let
        // get an array of keys from both target and source
        targetKeys  = Object.keys(target),
        sourceKeys  = Object.keys(source),

        // create an empty object for the result
        result      = {}
      ;

      // go through all the target keys
      for (let i = 0; i < targetKeys.length; i++) {

        let
          // get the current key
          key = targetKeys[i]
        ;

        // if the source keys contains the current key from target
        if (sourceKeys.indexOf(key) !== -1) {

          // check if the target is null if it is
          // set the result as the source, this
          // should be fine since if the source is
          // null it isn't overriding and if it
          // isn't null it is overriding
          if(target[key] === null) {

            result[key] = source[key];

          } else if (typeof target[key] === 'object' &&
            !(target[key] instanceof Array)) { // check if the current target object value is an object

            // check if the corresponding source value is also an object
            if (typeof source[key] === 'object' &&
              !(source[key] instanceof Array)) {

              // if both target and source values are objects rerun
              // the assign function with the target and source being
              // the current values
              result[key] = assign(target[key], source[key]);

            } else {

              // if the source value isn't an object assign the result key
              // as the source value directly (this will override target objects
              // with the new value from source)
              result[key] = source[key];

            }

          } else {

            // if the current target value isn't an object assign the result
            // key as the source key (this will set strings, numbers, booleans etc.)
            result[key] = source[key];

          }

        } else {

          // if the source doesn't have the target key set the result to the
          // old value (this will happen for keys which aren't defined in the source)
          result[key] = target[key];

        }

      }

      // go through the source keys
      for (let i = 0; i < sourceKeys.length; i++) {

        let
          // get the current key
          key = sourceKeys[i]
        ;

        // if the target keys doesn't contain the key
        if (targetKeys.indexOf(key) === -1) {

          // set the result value to the target value (this will
          // add new values to the object which are defined in the target)
          result[key] = source[key];

        }

      }


      // return the new object result
      return result;

    }
  ;

  // go through the targets
  for(let i = 0; i < sources.length; i++) {

    let
      // get the current target
      source	= sources[i]
    ;

    if(source !== undefined &&
      source !== null &&
      typeof source === 'object') {

      // run assign with the source and current target
      // this will return the deep assigned version of
      // source with target merged into it
      // it will then set source to that and if any more
      // targets are specified it will loop over and repeat
      // leading to each target overriding the previous
      // source resulting in the original source overridden
      // by the array of targets specified
      target = assign(target, source);

    }

  }


  // return the source (the true result)
  return target;

}


// export the module
module.exports = circleAssign;
