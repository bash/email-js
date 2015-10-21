/**
 * (c) 2015 Ruben Schmidmeister <ruby@fog.im>
 */

var assert = require('assert'),
    util   = require('util'),
    EmailAddress  = require('../index');

describe('Email', function() {

  it('throws a typerror on invalid emails', function() {
    assert.throws(function() {
      EmailAddress('some_asdflkj@')
    }, TypeError);
  });

  it('returns an instance of Email', function() {
    assert(EmailAddress('webmaster@example.com') instanceof EmailAddress);
  });

  describe('.toString()', function() {
    it('emails can be converted to a string', function() {
      assert.equal(EmailAddress('cake@example.org') + '', 'cake@example.org');
    });
  });

  describe('.inspect()', function() {
    it('is inspectable', function() {
      assert.equal('EmailAddress(ruby@fog.im)', EmailAddress('ruby@fog.im').inspect());
    });

    it('has a colored inspect', function() {
      assert.equal(util.inspect(EmailAddress('ruby@fog.im'), { colors: true }), '\u001b[32mEmailAddress(ruby@fog.im)\u001b[39m');
    });
  });

  describe('.length', function() {
    it('returns the length', function() {
      assert.equal(EmailAddress('cake@example.org').length, 16);
    });
  });

  describe('.getLocal()', function(){
    it('returns the local part', function(){
      assert.equal(EmailAddress('cake@example.org').getLocal(), 'cake');
      assert.equal(EmailAddress('cake.lover@gmail.com').getLocal(), 'cake.lover');
    });
  });

  describe('.getDomain()', function(){
    it('returns the domain', function(){
      assert.equal(EmailAddress('cake@example.org').getDomain(), 'example.org');
      assert.equal(EmailAddress('cake.lover@gmail.com').getDomain(), 'gmail.com');
    });
  });
});