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
declare function cipher(text: string, key: string, algorithm?: string): string;
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
 * @example decipher():_
  ```js
  var fog = icipher.cipher('a_b_c', 'zs')
  console.log(icipher.decipher(fog, 'zs'))
  // > a_b_c
  ```
 * @example decipher():aes192
  ```js
  console.log(icipher.decipher('iMKU4mzDdZP62gJuqaABgg', 'zs', 'aes192'))
  // > abc
  ```
 */
declare function decipher(encrypted: string, key: string, algorithm?: string): string;
export { cipher, decipher };
