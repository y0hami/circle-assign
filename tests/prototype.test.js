const
  circleAssign = require('./../index')
;

Object.prototype.deepAssign = circleAssign;


describe('Object prototype', () => {

  test('`Object.deepAssign` should be a function', () => {

    expect(typeof Object.deepAssign).toBe('function');

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

    expect(Object.deepAssign(source, target)).toEqual({ test: false });

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

    expect(Object.deepAssign(source, target)).toEqual({ test: { change: false } });

  });

});