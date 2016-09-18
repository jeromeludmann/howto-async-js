import increment from './lib/increment-promise';

export default async function (givenValue) {

  try {
    let incremented = await increment(givenValue); // first increment
    incremented = await increment(incremented); // second increment
    return increment(incremented); // third increment

  } catch (err) {
    return err;
  }

}