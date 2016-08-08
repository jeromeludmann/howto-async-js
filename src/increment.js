const callback = function (value, callback) {
  setTimeout(function () {
    if (value < 0) {
      return callback(new Error(value + ': must be positive'), null);
    }

    if (value > 10) {
      return callback(new Error(value + ': too high'), null);
    }

    return callback(null, value + 1);
  }, 0);
};

const promise = function (value) {
  return new Promise(function (resolve, reject) {
    if (value < 0) {
      reject(new Error(value + ': must be positive'));
    }

    if (value > 10) {
      reject(new Error(value + ': too high'));
    }

    resolve(value + 1);
  });
};

module.exports = {callback, promise};
