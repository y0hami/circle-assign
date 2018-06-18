const
  circleAssign = require('./../index')
;


test('requiring the module should return be a function', () => {

  expect(typeof circleAssign).toBe('function');

});

test('values should get overridden if the same key is specified in the target', () => {

  let
    target  = {
      test    : 'Text'
    },
    source  = {
      test    : false
    }
  ;

  expect(circleAssign(target, source)).toEqual({ test: false });

});

test('values should get overridden recursively if the same key is specified in the target', () => {

  let
    target  = {
      test    : {
        change  : true
      }
    },
    source  = {
      test    : {
        change  : false
      }
    }
  ;

  expect(circleAssign(target, source)).toEqual({ test: { change: false } });

});

test('multiple targets should override with the last target taking highest priority', () => {

  let
    target  = {
      test    : {
        change  : true
      }
    },
    source  = {
      test    : {
        change  : false
      }
    },
    source2 = {
      test    : {
        change  : 'CHANGE'
      }
    }
  ;

  expect(circleAssign(target, source, source2)).toEqual({ test: { change: 'CHANGE' } });

});

test('specifying a new key should add it to the target', () => {

  let
    target  = {
      test    : 'Text'
    },
    source  = {
      new     : true
    }
  ;

  expect(circleAssign(target, source)).toEqual({ test: 'Text', new: true });

});

test('specifying a none object type on an object key should override it with the new value', () => {
  
  let
    target  = {
      test    : {
        text    : 'something'
      }
    },
    source  = {
      test    : 'something'
    }
  ;
  
  expect(circleAssign(target, source)).toEqual({ test: 'something' });
  
});

test('a none object target should become an empty object', () => {
  
  let
    target  = 'not an object',
    source  = {
      test    : 'something'
    }
  ;
  
  expect(circleAssign(target, source)).toEqual({ test: 'something' });
  
});

test('a null target should become an empty object', () => {
  
  let
    target  = null,
    source  = {
      test    : 'something'
    }
  ;
  
  expect(circleAssign(target, source)).toEqual({ test: 'something' });
  
});

test('a undefined target should become an empty object', () => {
  
  let
    target  = null,
    source  = {
      test    : 'something'
    }
  ;
  
  expect(circleAssign(target, source)).toEqual({ test: 'something' });
  
});

test('a none object source should become an empty object', () => {
  
  let
    target  = {
      test: 'something'
    },
    source  = 'not an object'
  ;
  
  expect(circleAssign(target, source)).toEqual({ test: 'something' });
  
});

test('a null source should become an empty object', () => {
  
  let
    target  = {
      test: 'something'
    },
    source  = null
  ;
  
  expect(circleAssign(target, source)).toEqual({ test: 'something' });
  
});

test('a undefined source should become an empty object', () => {

  let
    target  = {
      test: 'something'
    },
    source  = undefined
  ;

  expect(circleAssign(target, source)).toEqual({ test: 'something' });

});

test('target should be updated accordingly even when target is null', () => {

  let
    target  = {
      test: null
    },
    source  = {
      test: 'something'
    }
  ;

  expect(circleAssign(target, source)).toEqual({ test: 'something' });

});
