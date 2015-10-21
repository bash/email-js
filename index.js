/**
 * (c) 2015 Ruben Schmidmeister <ruby@fog.im>
 */

'use strict';

module.exports = EmailAddress;

/**
 *
 * @type {Symbol}
 */
const email = Symbol('email');

/**
 * Source
 * https://github.com/WebKit/webkit/blob/4226b9741095267eccf15899533703c050477190/Source/WebCore/html/EmailInputType.cpp
 *
 * Copyright (C) 2009 Michelangelo De Simone <micdesim@gmail.com>
 * Copyright (C) 2010 Google Inc. All rights reserved.
 *
 * @type {RegExp}
 */
const regex = /^[a-z0-9!#$%&'*+/=?^_`\{|\}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;

/**
 *
 * @param {string} string
 * @throws TypeError
 *
 * @returns {EmailAddress}
 */
function EmailAddress(string) {
  if (!(this instanceof EmailAddress)) {
    return new EmailAddress(string);
  }

  if (!regex.test(string)) {
    throw new TypeError('invalid email format');
  }

  /**
   *
   * @type {string}
   */
  this[email] = string;
}

/**
 *
 * @type {RegExp}
 */
EmailAddress.EMAIL_REGEX = regex;

/**
 *
 * @returns {string}
 */
EmailAddress.prototype.toString = function() {
  return this[email];
};

/**
 *
 * Returns the domain part of the email.
 * @returns {string}
 */
EmailAddress.prototype.getDomain = function() {
  return this[email].split('@')[1];
};

/**
 *
 * Returns the local part of the email.
 * @returns {string}
 */
EmailAddress.prototype.getLocal = function() {
  return this[email].split('@')[0];
};

/**
 *
 * @param {number} _
 * @param {{}} options
 * @returns {string}
 */
EmailAddress.prototype.inspect = function(_, options) {
  let str = `EmailAddress(${this})`;

  if (options && options.colors) {
    return options.stylize(str, 'string');
  }

  return str;
};

Object.defineProperty(EmailAddress.prototype, 'length', {
  get: function() {
    return this[email].length;
  }
});