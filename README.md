# How to deal with asynchronous JavaScript

Various implementations of asynchronous chained functions.

The function `increment()` has two implementations: using callback and promise.

## ES5 JavaScript

### Using callbacks

```js
var log = require('debug')('callback');
var increment = require('./increment').callback;

module.exports = function (givenValue) {
  increment(givenValue, function (error, incremented) { // first increment
    if (error) {
      log(error.message);
      return;
    }

    increment(incremented, function (error, incremented) { // second increment
      if (error) {
        log(error.message);
        return;
      }

      increment(incremented, function (error, incremented) { // third increment
        if (error) {
          log(error.message);
          return;
        }

        log(incremented);
      });
    });
  });
};

```

## ES2015 (ES6)

### Using `Promise`

```js
import debug from 'debug';
import {promise as increment} from './increment';

const log = debug('promise');

export default function (givenValue) {
  increment(givenValue).then(function (incremented) { // first increment
    return increment(incremented); // second increment

  }).then(function (incremented) {
    return increment(incremented); // third increment

  }).then(function (incremented) {
    log(incremented);

  }).catch(function (error) {
    log(error.message);
  });
};
```

### Using `Promise` and `co`

    TODO
 
## ES2017 (ES8?)
 
### Using `Promise` and `async`/`await` keywords
 
 ```js
import debug from 'debug';
import {promise as increment} from './increment';

const log = debug('async/await');

export default async function (givenValue) {
  try {
    let incremented = await increment(givenValue); // first increment
    incremented = await increment(incremented); // second increment
    incremented = await increment(incremented); // third increment
    
    log(incremented);

  } catch (err) {
    log(err.message);
  }
};
```
