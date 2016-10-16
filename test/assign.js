var assert = require('assert');
var reassign = require('..');

var result = {};
var object = {};

result = reassign(object, {});
assert.equal(result, object);

result = reassign(object, {
  value1: 1,
}, {
  value2: 2,
});

assert.equal(result, object);
assert.deepEqual(object, {
  value1: 1,
  value2: 2,
});

result = reassign(object);

assert.equal(result, object);
assert.deepEqual(object, {});
