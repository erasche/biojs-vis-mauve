/*
 * biojs-viz-mauve
 * https://github.com/erasche/biojs-viz-mauve
 *
 * Copyright (c) 2015-8 Helena Rasche
 * Licensed under the Apache 2 license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// this is your global div instance (see index.html)
var yourDiv = document.getElementById('mocha');

// requires your main app (specified in index.js)
var mauve = require('../..');

describe('biojs-viz-mauve module', function(){
  describe('#init()', function(){
    it('should fill the textBox', function(){
      var opts = {el: yourDiv, text: 'biojs'};
      var instance = new mauve(opts);
      assert.equal(yourDiv.textContent,"hello biojs");
    });
  });
});
