var reassign = require('..');

var original = {
  value: true
};

var replacement = reassign(original, {
  value: false,
});

console.assert(original === replacement);
