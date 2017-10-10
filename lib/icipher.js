(function (root, factory) {
    /* istanbul ignore next */
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "crypto"], factory);
    }
})(this, function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @file icipher
     * @url https://github.com/zswang/icipher.git
     * 🐡cipher🐡
     * @author
     *   zswang (http://weibo.com/zswang)
     * @version 0.0.12
     * @date 2017-10-10
     * @license MIT
     */
    var crypto = require("crypto");
    /**
     * 加密
     *
     * @param text 原文
     * @param key 密钥
     * @param algorithm 采用的算法，默认为：des-ede3
     * @example cipher():base
      ```js
      console.log(icipher.cipher('abc', 'zs'))
      // > x_-tYz4knDo
      ```
     * @example cipher():aes192
      ```js
      console.log(icipher.cipher('abc', 'zs', 'aes192'))
      // > iMKU4mzDdZP62gJuqaABgg
      ```
     */
    function cipher(text, key, algorithm) {
        if (algorithm === void 0) { algorithm = 'des-ede3'; }
        var dict = {
            '+': '-',
            '/': '_',
            '=': ''
        };
        var cip = crypto.createCipher(algorithm, key);
        return (cip.update(text, 'utf8', 'base64') + cip.final('base64')).replace(/[+/=]/g, function (all) {
            return dict[all];
        });
    }
    exports.cipher = cipher;
    /**
     * 解密
     *
     * @param encrypted 密文
     * @param key 密钥
     * @param algorithm 采用的算法，默认为：des-ede3
     * @example decipher():base
      ```js
      console.log(icipher.decipher('x_-tYz4knDo', 'zs'))
      // > abc
      ```
     * @example decipher():aes192
      ```js
      console.log(icipher.decipher('iMKU4mzDdZP62gJuqaABgg', 'zs', 'aes192'))
      // > abc
      ```
     */
    function decipher(encrypted, key, algorithm) {
        if (algorithm === void 0) { algorithm = 'des-ede3'; }
        var decipher = crypto.createDecipher(algorithm, key);
        return (decipher.update(encrypted, 'base64', 'utf8') + decipher.final('utf8'))
            .replace('-', '+').replace('_', '/');
    }
    exports.decipher = decipher;
});
