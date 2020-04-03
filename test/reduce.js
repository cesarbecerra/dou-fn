const { expect } = require('chai')
const { reduce } = require('../index')

describe('Check Reduce', () => {
  it('should Reduce (v, acc) => v + acc, [6,5,4,4,3,5,7,2,4,5,7,5] === 57 ', () => {
    expect(reduce((v, acc) => v + acc, [6, 5, 4, 4, 3, 5, 7, 2, 4, 5, 7, 5])).to.eql(57)
  })
})
