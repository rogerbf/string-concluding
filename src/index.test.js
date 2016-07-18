const concluding = require('./index.js')
const test = require('tape')

test('Returns the expected substring', assert => {
  const str = 'robots are dangerous, but what is considered to be robots?'
  const expected = 'robots are dangerous'
  const actual = concluding('dangerous', str)
  assert.equal(actual, expected)
  assert.end()
})

test('Returns the expected substring', assert => {
  const str = '/Applications/Google Chrome.app/Resources/Chrome Helper.app/Chrome Helper'
  const expected = '/Applications/Google Chrome.app/Resources/Chrome Helper.app'
  const actual = concluding('.app', str)
  assert.equal(actual, expected)
  assert.end()
})

test('Returns the expected substring', assert => {
  const str = '/Applications/Terminal.app/Resources/com.apple.terminal/bin'
  const expected = '/Applications/Terminal.app'
  const actual = concluding('.app/', str).slice(0, -1)
  assert.equal(actual, expected)
  assert.end()
})

test('Returns the same string', assert => {
  const str = 'robots are dangerous, but what is considered to be robots?'
  const expected = 'robots are dangerous, but what is considered to be robots?'
  const actual = concluding('humans', str)
  assert.equal(actual, expected)
  assert.end()
})
