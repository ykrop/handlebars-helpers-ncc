'use strict';

// Array utils
const sortBy = require('array-sort');
const flatten = require('arr-flatten');

// Html utils
const block = require('to-gfm-code-block');
const tag = require('html-tag');

// JavaScript language utils
const typeOf = require('kind-of');

// matching utils
const isGlob = require('is-glob');
const mm = require('micromatch');
const falsey = require('falsey');

// Number utils
const isEven = require('is-even');
const isNumber = require('is-number');

// Object utils
const getObject = require('get-object');
const getValue = require('get-value');
const forOwn = require('for-own');

// Path utils
const relative = require('relative');

// Create frame
const define = require('define-property');
const extend = require('extend-shallow');
const isObject = require('isobject');
const createFrame = function createFrame(data) {
    if (!isObject(data)) {
        throw new TypeError('createFrame expects data to be an object');
    }

    var frame = extend({}, data);
    frame._parent = data;

    define(frame, 'extend', function(data) {
        extend(this, data);
    });

    if (arguments.length > 1) {
        var args = [].slice.call(arguments, 1);
        var len = args.length,
            i = -1;
        while (++i < len) {
            frame.extend(args[i] || {});
        }
    }
    return frame;
};

/**
 * Expose `utils`
 */
const utils = {
    sortBy,
    flatten,
    block,
    tag,
    typeOf,
    isGlob,
    mm,
    falsey,
    isEven,
    isNumber,
    createFrame,
    getObject,
    getValue,
    forOwn,
    relative
};

module.exports = utils;
