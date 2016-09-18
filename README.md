# How to deal with asynchronous JavaScript

## ES5 JavaScript

### Using callbacks

```js
function (givenValue) {

  increment(givenValue, function (err, incremented) { // first increment
    if (err) {
      return callback(err, undefined);
    }

    increment(incremented, function (err, incremented) { // second increment
      if (err) {
        return callback(err, undefined);
      }

      increment(incremented, function (err, incremented) { // third increment
        if (err) {
          return callback(err, undefined);
        }

        return callback(null, incremented);
      });
    });
  });
  
}
```

## ES2015 (ES6)

### Using `Promise`

```js
function (givenValue) {

  return increment(givenValue)  // first increment

    .then(function (incremented) {
      return increment(incremented);  // second increment
    })

    .then(function (incremented) {
      return increment(incremented);  // third increment
    })

    .catch((err) => err);
    
}
```

### Using `Promise` with generators and `co`

```js
import co from 'co';

function (givenValue) {

  return co(function * () {
    let incremented = yield increment(givenValue); // first increment
    incremented = yield increment(incremented); // second increment
    return increment(incremented); // third increment

  }).catch((err) => err);
  
}
```

## ES2017 (ES8)
 
### Using `Promise` with `async`/`await` keywords
 
```js
function (givenValue) {

  try {
    let incremented = await increment(givenValue); // first increment
    incremented = await increment(incremented); // second increment
    return increment(incremented); // third increment

  } catch (err) {
    return err;
  }
  
}
```
