const keyframeTranspose = require('../index')
const assert = require('assert')

describe('keyframeTranspose', function () {
  it('default pattern', function () {
    const result = keyframeTranspose({
      opacity: [0.5, 1],
      transform: ['scale(0.5)', 'scale(1)']
    })
    const expect = [
      { offset: 0, opacity: 0.5, transform: 'scale(0.5)' },
      { offset: 1, opacity: 1, transform: 'scale(1)' }
    ]
    assert.deepEqual(result, expect)
  })
  it('calcurate offset', function () {
    const result = keyframeTranspose({
      opacity: [0.5, 2, 1],
      transform: ['scale(0.5)', 'scale(1)']
    })
    const expect = [
      { offset: 0, opacity: 0.5, transform: 'scale(0.5)' },
      { offset: 0.5, opacity: 2 },
      { offset: 1, opacity: 1 , transform: 'scale(1)' },
    ]
    assert.deepEqual(result, expect)
  })
})