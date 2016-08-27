var gulp = require('gulp')
var postcss = require('gulp-postcss')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var scss = require('postcss-scss')

gulp.task('css', function () {
	var postcssPlugins = [ autoprefixer, precss ]

  return gulp.src('src/styles/**/*.scss')
    .pipe( sourcemaps.init() )
    .pipe( postcss(postcssPlugins, { syntax: scss }) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('build/') );
});
