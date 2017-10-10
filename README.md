icipher
-----------

# [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

🐡cipher🐡

## 使用方法

### 加密

```js
console.log(icipher.cipher('abc', 'zs', 'aes192'))
// > iMKU4mzDdZP62gJuqaABgg
```

### 解密

```js
console.log(icipher.decipher('iMKU4mzDdZP62gJuqaABgg', 'zs', 'aes192'))
// > abc
```

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://npmjs.org/package/icipher
[npm-image]: https://badge.fury.io/js/icipher.svg
[travis-url]: https://travis-ci.org/zswang/icipher
[travis-image]: https://travis-ci.org/zswang/icipher.svg?branch=master
[coverage-url]: https://coveralls.io/github/zswang/icipher?branch=master
[coverage-image]: https://coveralls.io/repos/zswang/icipher/badge.svg?branch=master&service=github