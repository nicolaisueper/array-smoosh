[![Build Status](https://travis-ci.org/nicolaisueper/array-smoosh.svg?branch=master)](https://travis-ci.org/nicolaisueper/array-smoosh)
[![Coverage](https://codecov.io/gh/nicolaisueper/array-smoosh/branch/master/graph/badge.svg)](https://codecov.io/gh/nicolaisueper/array-smoosh)
![Zero Dependencies](https://img.shields.io/badge/0-Zero%20Dependencies-green.svg)
![smooshGate](https://img.shields.io/badge/%23-smooshGate-green.svg)
![Blazing Fast](https://img.shields.io/badge/🔥-Blazing%20Fast-red.svg)
![For Humans](https://img.shields.io/badge/😿-For%20Humans-blue.svg)
![Enterprise Grade](https://img.shields.io/badge/🏢-Enterprise%20Grade-999999.svg)
![Production Ready](https://img.shields.io/badge/👌-Production%20Ready-00ddcc.svg)
![Future proof](https://img.shields.io/badge/🛸-Future%20Proof-orange.svg)
![Modern](https://img.shields.io/badge/💎-Modern-44aadd.svg)
![Extremely Lightweight](https://img.shields.io/badge/🦋-Extremely%20Lightweight-7799cc.svg)
![Totally Secure](https://img.shields.io/badge/🔐-Totally%20Secure-yellow.svg)
![Bug Free](https://img.shields.io/badge/🐛-Bug%20Free-green.svg)
![Just Works](https://img.shields.io/badge/🦄-Just%20Works-cc00cc.svg)


# array-smoosh

> [Array.prototype.smoosh and smooshMap](https://github.com/tc39/proposal-flatMap/pull/56) polyfill for all!

## Install

```
$ npm install --save array-smoosh
```
Then `import 'array-smoosh'` anywhere and you're good to go.

## Features

- Works on older browsers with no own map implementation
- No conditional monkey patching, so the web will never break your website 😱

## API

### `Array.prototype.smoosh(level?): Array`
Smooshes the Array. If no level is given, the Array gets smooshed recursively.

```javascript
[1, [2, [3]]].smoosh(1); // => [1, 2, [3]]

['I', ['love', ['funny', ['method', ['names']]]]]
  .smoosh()
  .join(' '); // => 'I love funny method names'
```

### `Array.prototype.smooshMap(projectionFunction): Array`
Smooshes the Array recursively and applies the given projection function to each element.

```javascript
[1, [2, [3]]].smooshMap(n => n * 3); // => [3, 6, 9]

['smoosh', ['all', ['the', ['things']]]]
  .smooshMap(s => s.toUpperCase() + '!')
  .join(' ') // => 'SMOOSH! ALL! THE! THINGS!'
```

## Related

[#SmooshGate](https://developers.google.com/web/updates/2018/03/smooshgate) :scream_cat:

## License
MIT © Nicolai Süper (nico@k40s.net)
