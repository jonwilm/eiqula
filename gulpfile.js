var gulp = require('gulp')
var gulpHtmlImport = require('gulp-html-import')
var gulpHtmlMin = require('gulp-htmlmin')
var gulpSass = require('gulp-sass')
var gulpCssNano = require('gulp-cssnano')
var gulpConcat = require('gulp-concat')
var gulpUglify = require('gulp-uglify')

gulp.task('html', function(){
  gulp.src('./src/html/*.html')
    .pipe(gulpHtmlImport('./src/html/partials/'))
    .pipe(gulpHtmlMin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./site/'))
})

gulp.task('styles', function(){
  gulp.src('./src/public/scss/styles.scss')
    .pipe(gulpSass(''))
    .pipe(gulpCssNano(''))
    .pipe(gulp.dest('./site/public/css/'))
})

gulp.task('scripts', function(){
  gulp.src('./src/public/js/*.js')
    .pipe(gulpConcat('scripts.js'))
    .pipe(gulpUglify(''))
    .pipe(gulp.dest('./site/public/js/'))
})

gulp.task('images', function() {
  gulp.src('./src/public/img/*')
    .pipe(gulp.dest('./site/public/img/'))
})

gulp.task('default', ['html', 'styles', 'scripts', 'images'])

gulp.task('watch', function(){
  gulp.watch(['./src/html/**/*'], ['html'])
  gulp.watch(['./src/public/scss/**/*.scss'], ['styles'])
  gulp.watch(['./src/public/js/*'], ['scripts'])
})