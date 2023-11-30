import { testFunc } from './index';

test('testFunc', () => {
  expect(testFunc('foo')).toEqual('Called testFunc() by foo');
});
