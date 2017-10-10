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
import * as crypto from 'crypto'
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
function cipher(text: string, key: string, algorithm = 'des-ede3'): string {
  let dict: {
    [key: string]: string
  } = {
      '+': '-',
      '/': '_',
      '=': ''
    }
  let cip = crypto.createCipher(algorithm, key)
  return (cip.update(text, 'utf8', 'base64') + cip.final('base64')).replace(/[+/=]/g, (all) => {
    return dict[all]
  })
}
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
function decipher(encrypted: string, key: string, algorithm = 'des-ede3'): string {
  let decipher = crypto.createDecipher(algorithm, key)
  return (decipher.update(encrypted, 'base64', 'utf8') + decipher.final('utf8'))
    .replace('-', '+').replace('_', '/')
}
export {
  cipher,
  decipher,
}
