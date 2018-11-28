import { isObj, mergeObject } from '../src/internals';
import merge from '../src/merge';

describe('internals', () => {
  describe('isObj', () => {
    test('isObj should return false for `"string"`', () => {
      expect(isObj('string')).toBe(false);
    });

    test('isObj should return false for `1`', () => {
      expect(isObj(1)).toBe(false);
    });

    test('isObj should return false for `[1, 2, 3]`', () => {
      expect(isObj([1, 2, 3])).toBe(false);
    });

    test('isObj should return false for `() => {}`', () => {
      expect(isObj(() => {})).toBe(false);
    });

    test('isObj should return false for `null`', () => {
      expect(isObj(null)).toBe(false);
    });

    test('isObj should return false for `undefined`', () => {
      expect(isObj(undefined)).toBe(false);
    });

    test('isObj should return false for `NaN`', () => {
      expect(isObj(NaN)).toBe(false);
    });

    test('isObj should return true for `{}`', () => {
      expect(isObj({})).toBe(true);
    });

    test('isObj should return true for `Object.create({})`', () => {
      expect(isObj(Object.create({}))).toBe(true);
    });
  });

  describe('mergeObject', () => {
    test('mergeObject should return an object type', () => {
      expect(typeof mergeObject(undefined, undefined)).toBe('object');
    });

    test('mergeObject should return an empty object when no params are provided', () => {
      expect(typeof mergeObject()).toBe('object');
    });

    test('mergeObject should return an empty object when only a target is provided', () => {
      expect(typeof mergeObject({})).toBe('object');
    });

    test('mergeObject should return an empty object when none object arguments are provided', () => {
      expect(typeof mergeObject(1, 'test')).toBe('object');
    });

    test('mergeObject should return the target object when no source is provided', () => {
      expect(mergeObject({ test: 'test' }).test).toBe('test');
    });

    test('mergeObject should override all values with the ones in the source', () => {
      const a = {
        test: 'test',
        bool: false,
      };

      const b = {
        test: 'testing',
        bool: true,
      };

      const merged = mergeObject(a, b);

      expect(merged.test === 'testing' && merged.bool === true).toBe(true);
    });

    test('mergeObject should add new values from source to the result', () => {
      const a = {
        test: 'test',
      };

      const b = {
        new: true,
      };

      const merged = mergeObject(a, b);

      expect(merged.new).toBe(true);
    });

    test('mergeObject should override values in target with objects from source', () => {
      const a = {
        test: 'test',
      };

      const b = {
        test: {
          override: true,
        },
      };

      const merged = mergeObject(a, b);

      expect(merged.test.override).toBe(true);
    });

    test('mergeObject should override values within objects in the target', () => {
      const a = {
        test: {
          override: false,
        },
      };

      const b = {
        test: {
          override: true,
        },
      };

      const merged = mergeObject(a, b);

      expect(merged.test.override).toBe(true);
    });

    test('mergeObject should override null values with the source value', () => {
      const a = {
        test: null,
      };

      const b = {
        test: true,
      };

      const merged = mergeObject(a, b);

      expect(merged.test).toBe(true);
    });

    test('mergeObject should objects with new values from source', () => {
      const a = {
        test: {
          override: true,
        },
      };

      const b = {
        test: true,
      };

      const merged = mergeObject(a, b);

      expect(merged.test).toBe(true);
    });
  });
});

describe('merge', () => {
  test('merge should return an object type', () => {
    expect(typeof merge(undefined, undefined)).toBe('object');
  });

  test('merge should return an empty object when no params are provided', () => {
    expect(typeof merge()).toBe('object');
  });

  test('merge should return an empty object when only a target is provided', () => {
    expect(typeof merge({})).toBe('object');
  });

  test('merge should return an empty object when none object arguments are provided', () => {
    expect(typeof merge(1, 'test')).toBe('object');
  });

  test('merge should return the target object when no source is provided', () => {
    expect(merge({ test: 'test' }).test).toBe('test');
  });

  test('merge should merge all sources provided', () => {
    const a = {
      test: 1,
    };

    const b = {
      test: 2,
    };

    const c = {
      test: 3,
    };

    expect(merge(a, b, c).test).toBe(3);
  });
});
