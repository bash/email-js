/**
 * (c) 2015 Ruben Schmidmeister <ruby@fog.im>
 */

var assert = require('assert'),
    Email  = require('../index');

describe('Email', function() {
  it('emails can be converted to a string', function() {
    assert.equal(Email('cake@example.org') + '', 'cake@example.org');
  });

  it('throws a typerror on invalid emails', function() {
    assert.throws(function() {
      Email('some_asdflkj@')
    }, TypeError);
  });

  it('returns an instance of Email', function() {
    assert(Email('webmaster@example.com') instanceof Email);
  });

  it('is inspectable', function() {
    assert.equal('Email(ruby@fog.im)', Email('ruby@fog.im').inspect());
  });
});