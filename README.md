```bash
npm i
npm run build
npm run build
```

You can see a warning `"export 'default' (imported as 'esm') was not found in './test.esm.js'`.

Comment out ES Module in `index.js` like this:

```js
// import esm from './test.esm.js'
import common from './test.common.js'
// console.log(esm)
console.log(common)
```

Save, run `npm run build` twice, no warning anymore.
