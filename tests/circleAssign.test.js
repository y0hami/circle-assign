const
  circleAssign = require('./../index')
;


describe('circleAssign', () => {

  test('`circleAssign` should be a function', () => {

    expect(typeof circleAssign).toBe('function');

  });

  test('`{ "test": "Text" }` should become `{ "test": false }`', () => {

    let
      source  = {
        test    : 'Text'
      },
      target  = {
        test    : false
      }
    ;

    expect(circleAssign(source, target)).toEqual({ test: false });

  });

  test('`{ "test": { "change": true } }` should become `{ "test": { "change": false } }`', () => {

    let
      source  = {
        test    : {
          change  : true
        }
      },
      target  = {
        test    : {
          change  : false
        }
      }
    ;

    expect(circleAssign(source, target)).toEqual({ test: { change: false } });

  });

  test('`{ "test": { "change": true } }` should become `{ "test": { "change": "CHANGE" } }`', () => {

    let
      source  = {
        test    : {
          change  : true
        }
      },
      target  = {
        test    : {
          change  : false
        }
      },
      target2 = {
        test    : {
          change  : 'CHANGE'
        }
      }
    ;

    expect(circleAssign(source, target, target2)).toEqual({ test: { change: 'CHANGE' } });

  });

  test('`{ "test": "Text" }` should become `{ "test": "Text", "new": true }`', () => {

    let
      source  = {
        test    : 'Text'
      },
      target  = {
        new     : true
      }
    ;

    expect(circleAssign(source, target)).toEqual({ test: 'Text', new: true });

  });

  test('`{ "test": { "text": "something" } }` should become `{ "test": "something" }`', () => {

    let
      source  = {
        test    : {
          text    : 'something'
        }
      },
      target  = {
        test    : 'something'
      }
    ;

    expect(circleAssign(source, target)).toEqual({ test: 'something' });

  });

});