import increment from './lib/increment-promise';

export default function (givenValue) {

  return increment(givenValue)  // first increment

    .then(function (incremented) {
      return increment(incremented);  // second increment
    })

    .then(function (incremented) {
      return increment(incremented);  // third increment
    })

    .catch((err) => err);

}
