const { expect } = require('chai')
const { filter } = require('../index')

describe('Check Filter', () => {
  it('should Filter (v => v < 5, [4, 3, 2, 1, 5, 6]) === [4, 3, 2, 1]', () => {
    expect(filter(v => v < 5, [4, 3, 2, 1, 5, 6])).to.eql([4, 3, 2, 1])
  })
})
