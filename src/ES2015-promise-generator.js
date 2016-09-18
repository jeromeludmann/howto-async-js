import co from 'co';
import increment from './lib/increment-promise';

export default function (givenValue) {

  return co(function * () {
    let incremented = yield increment(givenValue); // first increment
    incremented = yield increment(incremented); // second increment
    return increment(incremented); // third increment

  }).catch((err) => err);

}
