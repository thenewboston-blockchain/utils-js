import { bemify } from './index';

describe('bemify to return the following:', () => {
  test('empty object when classNames is undefined', () => {
    expect(bemify(undefined, '--error')).toEqual({});
  });

  test('correct custom class name when classNames is one class', () => {
    expect(bemify('test', '--error')).toEqual({ 'test--error': true });
  });

  test('correct custom class name when classNames has multiple classes', () => {
    expect(bemify('class-a class-b', '--error')).toEqual({
      'class-a--error': true,
      'class-b--error': true,
    });
  });

  test('correct result when boolean is false', () => {
    expect(bemify('class-a class-b', '--error', false)).toEqual({
      'class-a--error': false,
      'class-b--error': false,
    });
  });
});
