'use strict';

/**
 * A set of smart defaults for JSHint configuration, with globals for
 * Jasmine and RequireJS predefined.
 *
 * @module
 */
module.exports = {
  /** require vars to be camelCase or UPPER_CASE */
  camelcase: true,
  /** require curly braces around loops and conditionals */
  curly: true,
  /** prohibit `==` and `!=`, require `===` and `!==` */
  eqeqeq: true,
  /** require `for...in` loops to wrap in hasOwnProperty */
  forin: true,
  /** require parentheses around immediate function invocations */
  immed: true,
  /** prohibit variables from being used before they are defined */
  latedef: true,
  /** prohibit `arguments.caller` and `arguments.callee` */
  noarg: true,
  /** require `'use strict;'` */
  strict: true,
  /** prohibit use of undeclared variables (use `global` directive instead */
  undef: true,
  /** prohibit defining variables and not using them */
  unused: 'vars',

  /** preset globals for RequireJS and Jasmine */
  globals: {
    define: false,
    require: false,

    afterEach: false,
    beforeEach: false,
    describe: false,
    expect: false,
    it: false,
    jasmine: false,
    runs: false,
    spyOn: false,
    waits: false,
    waitsFor: false,
    xdescribe: false,
    xit: false
  }
};