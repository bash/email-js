'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { isValidEmail, getDomainPart, getLocalPart } = require('../index')

describe('email-js', function () {
  describe('getLocalPart()', function () {
    it('returns the local part', function () {
      assert.equal(getLocalPart('cake@example.org'), 'cake')
      assert.equal(getLocalPart('cake.tower@gmail.com'), 'cake.tower')
    })
  })

  describe('getDomainPart()', function () {
    it('returns the domain', function () {
      assert.equal(getDomainPart('cake@example.org'), 'example.org')
      assert.equal(getDomainPart('cake.tower@gmail.com'), 'gmail.com')
    })
  })

  describe('isValidEmail()', function () {
    it('validates the email', function () {
      assert.equal(isValidEmail('cake@example.org'), true)
      assert.equal(isValidEmail('root@localhost'), true)
      assert.equal(isValidEmail('root'), false)
      assert.equal(isValidEmail('@localhost'), false)
    })
  })
})
