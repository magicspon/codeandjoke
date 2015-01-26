var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../config').jade;
var browserSync   = require('browser-sync');
var handleErrors  = require('../util/handleErrors');


gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src(config.src)
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});