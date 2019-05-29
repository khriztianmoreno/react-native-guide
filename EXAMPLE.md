# Example AsyncStorage

Let's look at an example of getting and setting a key-value pair in `AsyncStorage`.

- Files
  - `index.js`
The `App` component loads the value at `STORAGE_KEY` into `this.state` when it mounts. Every time you type your name in the input field and hit enter, we save `name` to `STORAGE_KEY`, as well as updating the value in `this.state`. Note that we also catch errors thrown when loading/saving, which is simple thanks to `async/await`.
  - `Input.js`
Presentational component

These three APIs are frequently all you'll need. There are a few more APIs worth being aware of, in case you end up using AsyncStorage for more complex things:

- `removeItem(key)`
- `mergeItem(key, value)`
- `getAllKeys() => ?Array&lt;string&gt;`
- `flushGetRequests()`
- `multiGet(keys) => ?Array&lt;Array&lt;string&gt;&gt;`
- `multiSet(keyValuePairs)`
- `multiRemove(keys)`
- `multiMerge(keyValuePairs)`
