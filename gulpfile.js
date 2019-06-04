var gulp = require('gulp');
var gulpHtmlImport = require('gulp-html-import');
var gulpHtmlMin = require('gulp-htmlmin');
var gulpSass = require('gulp-sass');
var gulpCssNano = require('gulp-cssnano');
var gulpConcat = require('gulp-concat');
var gulpUglify = require('gulp-uglify');

gulp.task('html', function(){
  gulp.src('./src/html/*.html')
    .pipe(gulpHtmlMin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./site/'));
});



gulp.task('default', ['html']);