module.exports = function reassign(target) {
  var sources = Array.prototype.slice.call(arguments, 1);

  for (var name in target) {
    delete target[name];
  }

  for (var i = 0; i < sources.length; i++) {
    var source = sources[i];
    for (var name in source) {
      target[name] = source[name];
    }
  }

  return target;
};
