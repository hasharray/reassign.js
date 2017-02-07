# Reassign.js - reassign an object

Reassign an object, copies all properties from source objects into the target object, removing any properties not present on a source object.

## Example
```js
var assert = require('assert');
var assign = require('reassign');

var target = {
  a: true,
  b: true,
  c: true
};

var source1 = {
  c: false,
  d: false
};

var source2 = {
  e: false
};

var assigned = assign(target, source1, sourceN);
assert.equal(target, assigned);
assert.deepEqual(assigned, {
  c: false,
  d: false,
  e: false
});
```

## Install

```console
npm install reassign
```

## License

MIT
