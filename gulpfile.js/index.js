/**
 *  The gulp tasks are split into several files in the gulp directory
 */
'use strict';
var gulp = require('gulp');
var clean = require('./gulp/clean').default;
let createJson = require('./gulp/create_json').default;
let images = require('./gulp/images').default;
let scripts = require('./gulp/scripts').default;
let styles = require('./gulp/styles').default;
let node_modules = require('./gulp/node_modules').default;
let runStatic = require('./gulp/static').default;
let connect = require('./gulp/connect').default;
let watch = require('./gulp/watch').default;
let test = require('./gulp/test').default;

exports.default = gulp.series(createJson, clean, images, scripts, styles, node_modules, runStatic, connect, watch);
exports.build = gulp.series(createJson, clean, images, scripts, styles, node_modules, runStatic);

exports.test = gulp.series(test);
