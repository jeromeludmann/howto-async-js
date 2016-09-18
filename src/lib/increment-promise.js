function incrementPromise (value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (value < 0) {
        reject(new Error(value + ': must be positive'));
      }

      if (value > 10) {
        reject(new Error(value + ': too high'));
      }

      resolve(value + 1);
    }, 0);
  });
}

export default incrementPromise;