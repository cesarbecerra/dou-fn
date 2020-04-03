const { expect } = require('chai')
const { map } = require('../index')

describe('Check Map', () => {
  it('should Map (v => v + 100, [7,4,3]) === [107, 104, 103]', () => {
    expect(map(v => v + 100, [7, 4, 3])).to.eql([107, 104, 103])
  })
})
