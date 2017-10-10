
global.icipher = require('../')
      

describe("src/icipher.ts", function () {
  var assert = require('should');
  var util = require('util');
  var examplejs_printLines;
  function examplejs_print() {
    examplejs_printLines.push(util.format.apply(util, arguments));
  }
  
  

  it("cipher():base", function () {
    examplejs_printLines = [];
  examplejs_print(icipher.cipher('abc', 'zs'))
  assert.equal(examplejs_printLines.join("\n"), "x_-tYz4knDo"); examplejs_printLines = [];
  });
          
  it("cipher():aes192", function () {
    examplejs_printLines = [];
  examplejs_print(icipher.cipher('abc', 'zs', 'aes192'))
  assert.equal(examplejs_printLines.join("\n"), "iMKU4mzDdZP62gJuqaABgg"); examplejs_printLines = [];
  });
          
  it("decipher():base", function () {
    examplejs_printLines = [];
  examplejs_print(icipher.decipher('x_-tYz4knDo', 'zs'))
  assert.equal(examplejs_printLines.join("\n"), "abc"); examplejs_printLines = [];
  });
          
  it("decipher():aes192", function () {
    examplejs_printLines = [];
  examplejs_print(icipher.decipher('iMKU4mzDdZP62gJuqaABgg', 'zs', 'aes192'))
  assert.equal(examplejs_printLines.join("\n"), "abc"); examplejs_printLines = [];
  });
          
});
         