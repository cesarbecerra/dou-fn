const { expect } = require('chai')
const { partial, partialRight, add, divide, push } = require('../index')

describe('Check Partial & PartialRight fns', () => {
  it('should Partial Add (a + b) = 9', () => {
    expect(partial(add, 4)(5)).to.eql(9)
  })
  it('should Partial Divide (a / b) = 333', () => {
    expect(partial(divide, 999)(3)).to.eql(333)
  })
  it('should Partial Push into Arrays', () => {
    expect(partial(push, [], 6, 5, 4, 3, 2, 6)(6, 45)).to.eql([6, 5, 4, 3, 2, 6, 6, 45])
  })
  it('should Partial Right Divide (b / a) = 2', () => {
    expect(partialRight(divide, 5)(10)).to.eql(2)
  })
  it('should Partial Right Push into Arrays', () => {
    expect(partialRight(partial(push, []), 6, 5, 4, 3, 2, 6)(6, 45)).to.eql([6, 45, 6, 5, 4, 3, 2, 6])
  })
})
