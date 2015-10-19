# email-js
[![Build Status](https://travis-ci.org/bash/email-js.svg?branch=master)](https://travis-ci.org/bash/email-js) 
[![npm version](https://badge.fury.io/js/email-js.svg)](https://badge.fury.io/js/email-js)
[![Coverage Status](https://coveralls.io/repos/bash/email-js/badge.svg?branch=master&service=github)](https://coveralls.io/github/bash/email-js?branch=master)
[![Inline docs](http://inch-ci.org/github/bash/email-js.svg?branch=master&style=shields)](http://inch-ci.org/github/bash/email-js)

An immutable value - object for emails"

## Installation

```bash
npm install --save email-js
```

## Usage

```javascript  
Email('<email>')
```

## Example

```javascript
const Email = require('email-js');

console.log(Email('ruby@fog.im')); // => Email(ruby@fog.im)
Email('a') // => TypeError
```
