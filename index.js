'use strict'


// { opacity: [0.5, 1] } 
// => [ { offset: 1, keyframes: {opacity: 0.5} , { offset: 1, keyframes: {opacity: 1} ]
// { opacity: [0.5, 0, 1] } 
// => [ { offset: 1, keyframes: {opacity: 0.5} , { offset: 0.5, keyframes: {opacity: 0}, { offset: 1, keyframes: {opacity: 1} ]
const parseValues = (propertyName, keyframeValues) => {
  return keyframeValues.map((value, index, arr) => ({
    offset: ( index / (arr.length - 1) ), // calcurate offset
    keyframe: {
      [propertyName]: value
    }
  }))
}

// Flatten and Convert object
const parseObject = (keyframes) => {
  return Object.keys(keyframes)
    .map( (key) => [key, keyframes[key]]) // Object.entries
    .filter( ([k, v]) => Array.isArray(v)) // filter non array value
    .map( ([key, value]) => parseValues(key, value) )
    .reduce((prev, next) => [...prev, ...next], []) // flatten
}

const uniqueOffset = (values) => {
  return values
    .map(kf => kf.offset)
    .filter( (elm, i, arr) => (arr.indexOf(elm) === i) )
}

const reduceCurrentKeyframe = (values, offset) => {
  return values
    .filter( v => (v.offset == offset))
    .map( v => v.keyframe)
    .reduce( (prev, kf) => Object.assign(prev, kf), {})
}

const groupByOffset = (values) => {
  return uniqueOffset(values).map( (offset) => {
    const keyframes = reduceCurrentKeyframe(values, offset)
    return Object.assign({offset: offset}, keyframes)
  })
}

module.exports = (keyframes) => {
  const values = parseObject(keyframes)
  return groupByOffset(values)
}
