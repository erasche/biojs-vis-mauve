/*
 * biojs-viz-mauve
 * https://github.com/erasche/biojs-viz-mauve
 *
 * Copyright (c) 2015 Helena Rasche
 * Licensed under the Apache 2 license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var mauve = require('../..');


describe('biojs-viz-mauve module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(mauve.hello('biojs'), ("hello biojs"));

      // alternative styles
      mauve.hello('biojs').should.equal("hello biojs");
    });
  });
});
