'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var image = require('gulp-image');
var util = require('gulp-util');

console.log(util.env.production);

var config = {
    production: !!util.env.production
};

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

// Clean output directory
gulp.task('clean', function () { del(['dist'])});

// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src('./public/styles/*.css')
    // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        // Minify the file
        .pipe(config.production ? csso() : util.noop())
        // Output
        .pipe(gulp.dest('./dist/css'))
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
    return gulp.src('./public/scripts/**/*.js')
    // Minify the file
        .pipe(config.production ? uglify() : util.noop())
        // Output
        .pipe(gulp.dest('./dist/js'))
});

// Gulp task to minify images
gulp.task('images', function () {
    return gulp.src(['./public/**/*.png'])
        .pipe(image())
        .pipe(gulp.dest('./dist'));
});

// Gulp task to minify pdf
gulp.task('pdf', function () {
    return gulp.src(['./public/**/*.pdf'])
        .pipe(gulp.dest('./dist'));
});

// Gulp task to copy ICO images
gulp.task('imageICO', function () {
    return gulp.src(['./public/**/*.ico'])
        .pipe(gulp.dest('./dist'));
});


// Gulp task to minify HTML files
gulp.task('pages', function() {
    return gulp.src(['./public/**/*.html'])
        .pipe(config.production ? htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }) : util.noop())
        .pipe(gulp.dest('./dist'));
});

// Gulp task to minify lib files
gulp.task('lib', function() {

    return gulp.src(['./node_modules/angular/angular.js',
        './node_modules/angular-animate/angular-animate.js',
        './node_modules/angular-route/angular-route.js',
        './node_modules/angular-resource/angular-resource.js',
        './node_modules/angular-cookies/angular-cookies.js',
        './node_modules/angular-sanitize/angular-sanitize.js',
        './node_modules/angular-touch/angular-touch.js',
        './node_modules/jquery/dist/jquery.js',
        './node_modules/restangular/dist/restangular.js',
        './node_modules/lodash/lodash.js',
        './node_modules/bootstrap/dist/js/bootstrap.js'])
        .pipe(config.production ? uglify() : util.noop())
        .pipe(gulp.dest('./dist/lib'));
});

// Gulp task to minify libCSS files
gulp.task('libCSS', function() {

    return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css'])
        .pipe(config.production ? csso() : util.noop())
        .pipe(gulp.dest('./dist/lib'));
});

//Gulp watch for JS files
gulp.task('watchJS', function(){
    gulp.watch('./public/scripts/**/*.js',['scripts']);
});

//Gulp watch for HTML files
gulp.task('watchHTML', function(){
    gulp.watch('./public/**/*.html',['pages']);
});

//Gulp watch for CSS files
gulp.task('watchCSS', function(){
    gulp.watch('./public/styles/*.css',['styles']);
});

//Gulp watch for Image files
gulp.task('watchImage', function(){
    gulp.watch(['./public/**/*.png'],['images']);
});

// Gulp task to minify all files
gulp.task('default',['clean','watchJS','watchHTML','watchCSS','watchImage'],function () {
    runSequence(
        'images',
        'imageICO',
        'styles',
        'scripts',
        'pages',
        'lib',
        'libCSS',
        'pdf'
    );
});