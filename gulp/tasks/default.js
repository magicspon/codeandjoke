/*
 * Default - just run gulp
 * Runs watch, for browsersync, sass, js, images, haml, sprites
 */

var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config');

gulp.task('default', ['watch' , 'sass', 'scripts', 'browserSync'], function () {
   // gulp.watch(config.sass.src, ['sass']);
});