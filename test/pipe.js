const { expect } = require('chai')
const { pipe } = require('../index')

const reverseWord = w =>
  w
    .split('')
    .reverse()
    .join('')

const addTextPrefix = (str, prefix) => `${prefix}-${str}`

describe('Check Pipe', () => {
  it('Testing Sync => TEST-cnyS gnitseT', () => {
    const transformedText = pipe(reverseWord, identity => addTextPrefix(identity, 'TEST'))('Testing Sync')
    expect(transformedText).to.eql('TEST-cnyS gnitseT')
  })
})
