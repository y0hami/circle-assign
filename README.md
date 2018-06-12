# circle-assign
circle-assign is a simple deep object assign function and can be used in [nodejs](https://nodejs.org/en/) and the browser

[![CircleCI](https://circleci.com/gh/hammy2899/circle-assign.svg?style=shield&circle-token=b15430a3ebb06a2493db7fe0b9a1dfc8b9ce72ee)](https://circleci.com/gh/hammy2899/circle-assign)
![test coverage](./coverage.svg)
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