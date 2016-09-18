function incrementCallback (value, callback) {
  setTimeout(function () {
    if (value < 0) {
      return callback(new Error(value + ': must be positive'), null);
    }

    if (value > 10) {
      return callback(new Error(value + ': too high'), null);
    }

    return callback(null, value + 1);
  }, 0);
}

module.exports = incrementCallback;
