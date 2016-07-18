# string-concluding

Extract part of a string including last occurrence of substring.

``` javascript
npm i --save string-concluding
```

## Usage
``` javascript
const concluding = require('string-concluding')

const a = '/Applications/Terminal.app/Resources/com.apple.terminal/bin'
const path = concluding('.app/', a).slice(0, -1)
console.log(path)
// '/Applications/Terminal.app'

const b = 'poof'
const poof = concluding('boom', b)
console.log(poof)
// 'poof'
```
