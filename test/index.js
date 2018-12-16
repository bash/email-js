'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { isValidEmail, getDomainPart, getLocalPart } = require('../index')

describe('email-js', function () {
  describe('getLocalPart()', function () {
    it('returns the local part', function () {
      assert.strictEqual(getLocalPart('cake@example.org'), 'cake')
      assert.strictEqual(getLocalPart('cake.tower@gmail.com'), 'cake.tower')
    })
  })

  describe('getDomainPart()', function () {
    it('returns the domain', function () {
      assert.strictEqual(getDomainPart('cake@example.org'), 'example.org')
      assert.strictEqual(getDomainPart('cake.tower@gmail.com'), 'gmail.com')
    })
  })

  describe('isValidEmail()', function () {
    it('validates the email', function () {
      assert.strictEqual(isValidEmail('cake@example.org'), true)
      assert.strictEqual(isValidEmail('root@localhost'), true)
      assert.strictEqual(isValidEmail('root'), false)
      assert.strictEqual(isValidEmail('@localhost'), false)
    })
  })
})
