![circle-assign logo](https://www.hamistudios.com/assets/img/circle_assign_icon_transparent.png)

# circle-assign
circle-assign is a simple deep object assign function and can be used in [nodejs](https://nodejs.org/en/) and the browser

[![Build Status](https://travis-ci.org/hammy2899/circle-assign.svg?branch=master)](https://travis-ci.org/hammy2899/circle-assign)
[![Coverage Status](https://coveralls.io/repos/github/hammy2899/circle-assign/badge.svg?branch=master)](https://coveralls.io/github/hammy2899/circle-assign?branch=master)
![npm version](https://img.shields.io/npm/v/circle-assign.svg)
![license](https://img.shields.io/github/license/hammy2899/circle-assign.svg)


### Installation  
```  
$ npm install --save circle-assign  
```  

### Syntax
```javascript
circleAssign(target, ...sources)
```

### Usage

```javascript
const circleAssign = require('circle-assign');

let source = {
  language: 'javascript',
  features: {
    recursive: true,
    size: 'small'
  }
};

let target = {
  language: 'JavaScript',
  opensource: true,
  features: {
    size: '~1.3kb',
    canMergeFunctions: true
  }
};

console.log(circleAssign(source, target));
```

Output
```
{
  language: "JavaScript",
  opensource: true,
  features: {
    recursive: true,
    size: "~1.3kb",
    canMergeFunctions: true
  }
}
```
