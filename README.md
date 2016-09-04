# keyframe-transpotion
Convert object keyframe input to array

# Usage

```js
const keyframeTranspotion = require('keyframe-transpotion')

keyframeTranspotion({
  opacity: [0.5, 2, 1],
  transform: ['scale(0.5)', 'scale(1)']
})
```

Output:

```js
[
  { offset: 0, opacity: 0.5, transform: 'scale(0.5)' },
  { offset: 0.5, opacity: 2 },
  { offset: 1, opacity: 1 , transform: 'scale(1)' },
]
```