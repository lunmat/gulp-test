var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require('gulp-sass');
var rimraf = require('rimraf');

gulp.task('jshint', function() {
    'use strict';
    gulp.src('./src/**/*.js', '!./bower_components/**/*', '!./tests/**/*')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});


gulp.task('sass', function () {
    gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dest/css'));
});

gulp.task('clean', function (cb) {
    rimraf('./dest', cb);
});

gulp.task('default', function() {

});
