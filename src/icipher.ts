/*<jdists encoding="ejs" data="../package.json">*/
/**
 * @file <%- name %>
 <% if (typeof repository != 'undefined') { %>
 * @url <%- repository.url %>
 <% } %>
 * <%- description %>
 * @author
     <% (author instanceof Array ? author : [author]).forEach(function (item) { %>
 *   <%- item.name %> (<%- item.url %>)
     <% }) %>
 * @version <%- version %>
     <% var now = new Date() %>
 * @date <%- [
      now.getFullYear(),
      now.getMonth() + 101,
      now.getDate() + 100
    ].join('-').replace(/-1/g, '-') %>
 * @license <%- license %>
 */
/*</jdists>*/

import * as crypto from 'crypto'

/*<function name="icipher_cipher">*/
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
function icipher_cipher(text: string, key: string, algorithm = 'des-ede3'): string {
  let dict: {
    [key: string]: string
  } = {
      '+': '-',
      '/': '_',
      '=': '',
    }

  let cip = crypto.createCipher(algorithm, key)
  return (cip.update(text, 'utf8', 'base64') + cip.final('base64')).replace(/[+/=]/g, (all) => {
    return dict[all]
  })
} /*</function>*/

/*<function name="icipher_decipher">*/
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
function icipher_decipher(encrypted: string, key: string, algorithm = 'des-ede3'): string {
  let dict: {
    [key: string]: string
  } = {
      '-': '+',
      '_': '/',
    }
  let decipher = crypto.createDecipher(algorithm, key)
  return (decipher.update(encrypted.replace(/[-\/]/g, (all) => {
    return dict[all]
  }), 'base64', 'utf8') + decipher.final('utf8'))
} /*</function>*/

export {
  icipher_cipher as cipher,
  icipher_decipher as decipher,
}
