var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('jshint', function() {
    'use strict';
    gulp.src(config.jsPath)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('default', function() {

});
