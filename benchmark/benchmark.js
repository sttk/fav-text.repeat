'use strict';

const BenchmarkTester = require('benchmark-tester');

new BenchmarkTester()
  .addPackage('String API', String.prototype)

  .addTest('@fav/text.repeat', (repeat, data) => {
    return repeat(data[0], data[1]);
  })
  .addTest('String API', (proto, data) => {
    return data[0].repeat(data[1]);
  })
  .addTest('repeating', (repeating, data) => {
    return repeating(data[1], data[0]);
  })
  .addTest('repeat-string', (repeat, data) => {
    return repeat(data[0], data[1]);
  })
  .addTest('string-tools', (s, data) => {
    return s.repeat(data[0], data[1]);
  })

  .verifyTest('@fav/text.repeat', ['abc', 4], 'abcabcabcabc')
  .verifyTest('String API', ['abc', 4], 'abcabcabcabc')
  .verifyTest('repeating', ['abc', 4], 'abcabcabcabc')
  .verifyTest('repeat-string', ['abc', 4], 'abcabcabcabc')
  .verifyTest('string-tools', ['abc', 4], 'abcabcabcabc')

  .runTest('"ABC" x 0', ['ABC', 0])
  .runTest('"abc" x 1', ['ABC', 1])
  .runTest('"ABC" x 16', ['ABC', 16])
  .runTest('"abc" x 17', ['ABC', 17])

  .runTest('"A-Z" x 0', ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 0])
  .runTest('"a-z" x 1', ['abcdefghijklmnopqrstuvwxyz', 1])
  .runTest('"A-Z" x 16', ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 16])
  .runTest('"a-z" x 17', ['abcdefghijklmnopqrstuvwxyz', 17])

  .print();
