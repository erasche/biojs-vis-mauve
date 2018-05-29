/*
 * biojs-viz-mauve
 * https://github.com/erasche/biojs-viz-mauve
 *
 * Copyright (c) 2014 Helena Rasche
 * Licensed under the Apache 2 license.
 */

/**
@class biojsvizmauve
 */


var  biojsvizmauve;
module.exports = biojsvizmauve = function(opts){
  this.el = opts.el;
  this.el.textContent = biojsvizmauve.hello(opts.text);
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     biojsvizmauve.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


biojsvizmauve.hello = function (name) {

  return 'hello ' + name;
};

