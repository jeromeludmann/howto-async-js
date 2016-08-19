# How to deal with asynchronous JavaScript

Various implementations of asynchronous chained functions.

The function `increment()` has two implementations: using callback and promise.

## Using callbacks (vanilla ES5 JavaScript)

```js
  // first increment
  increment(givenValue, function (error, incremented) {
    if (error) {
      log(error.message);
      return;
    }

    // second increment
    increment(incremented, function (error, incremented) {
      if (error) {
        log(error.message);
        return;
      }

      // third increment
      increment(incremented, function (error, incremented) {
        if (error) {
          log(error.message);
          return;
        }

        log(incremented);
      });
    });
  });
```

## Using ES6 `Promises`

```js
// first increment
  increment(givenValue)

      .then(function (incremented) {
        // second increment
        return increment(incremented);
      })

      .then(function (incremented) {
        // third increment
        return increment(incremented);
      })

      .then(function (incremented) {
        log(incremented);
      })

      .catch(function (error) {
        log(error.message);
      });
```
 
## Using promises and ES7 `async/await`
 
 ```js
   try {
     // first increment
     let incremented = await increment(givenValue);
 
     // second increment
     incremented = await increment(incremented);
 
     // third increment
     incremented = await increment(incremented);
 
     log(incremented);
 
   } catch (err) {
     log(err.message);
   }
 ```
 
 