const { expect } = require('chai')
const { select } = require('../index')

describe('Check Select', () => {
  it('should Take (4, [3,4,5,6,7,5,4,3,6,5,7]) === [3,4,5,6]', () => {
    expect(select(4, [3, 4, 5, 6, 7, 5, 4, 3, 6, 5, 7])).to.eql([3, 4, 5, 6])
  })
})
