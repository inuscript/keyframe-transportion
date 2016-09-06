# keyframe-transpose
Convert object keyframe input to array

[![npm](https://img.shields.io/npm/v/keyframe-transpose.svg)](https://www.npmjs.com/package/keyframe-transpose)
[![Build Status](https://travis-ci.org/inuscript/keyframe-transpose.svg?branch=master)](https://travis-ci.org/inuscript/keyframe-transpose)

# Usage

```js
const keyframeTranspose = require('keyframe-transpose')

keyframeTranspose({
  opacity: [0.5, 2, 1],
  transform: ['scale(0.5)', 'scale(1)']
})
```

[Live Example](https://tonicdev.com/inuscript/57cecc40b532091400d4c4e1) (tonicdev)

Output:

```js
[
  { offset: 0, opacity: 0.5, transform: 'scale(0.5)' },
  { offset: 0.5, opacity: 2 },
  { offset: 1, opacity: 1 , transform: 'scale(1)' },
]
```
