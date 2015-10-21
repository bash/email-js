# email-js
[![Build Status](https://travis-ci.org/bash/email-js.svg?branch=master)](https://travis-ci.org/bash/email-js) 
[![npm version](https://badge.fury.io/js/email-js.svg)](https://badge.fury.io/js/email-js)
[![Coverage Status](https://coveralls.io/repos/bash/email-js/badge.svg?branch=master&service=github)](https://coveralls.io/github/bash/email-js?branch=master)
[![Inline docs](http://inch-ci.org/github/bash/email-js.svg?branch=master&style=shields)](http://inch-ci.org/github/bash/email-js)

An immutable value - object for email addresses.   
The email address will be validated on construction.

## Installation

```bash
npm install --save email-js
```

## Usage

```javascript  
EmailAddress('<email>')
```

## Example

```javascript
const EmailAddress = require('email-js');

console.log(EmailAddress('ruby@fog.im')); // => EmailAddress(ruby@fog.im)
EmailAddress('a') // => TypeError
```

## API

### \.isValid()
Returns true if the email is valid.
The email address is validated on construction by Webkit's regex.  

```js
console.log(EmailAddress.isValid('root@localhost')) // => true
```


### \#getDomain()
Returns the domain part of the email.

```js
console.log(EmailAddress('root@localhost').getDomain()) // => 'localhost'
```

### \#getLocal()
Returns the local part of the email.

```js
console.log(EmailAddress('root@localhost').getLocal()) // => 'root'
```

### \#toString()
Converts the email address back to a string.

```js
console.log(EmailAddress('root@localhost').toString()) // => 'root@localhost'
```

### \#length
Returns the email's length.

```js
console.log(EmailAddress('root@localhost').length) // => 14
```
