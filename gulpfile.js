const gulp = require('gulp'),
    del = require('del'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    postCSS = require('gulp-postcss'),
    notify = require('gulp-notify'),
    // plumber = require('gulp-plumber');
    jshint = require('gulp-jshint');
    stylish = require('jshint-stylish');
    // livereload = require('gulp-livereload');
    uglify = require('gulp-uglify');


const src = {
    css: "./assets/styles/",
    sass : "./assets/dev/styles/*",
    compressJS: "./assets/js/",
    js : "./assets/dev/js/*"
};

gulp.src([
    'node_modules/jquery/dist/jquery.min.js'
])
    .pipe(gulp.dest('./assets/vendor/jquery/'));

gulp.src([
    'node_modules/slick-carousel/slick/slick.min.js'
])
    .pipe(gulp.dest('./assets/vendor/slick/'));

gulp.task('clean', function () {
    del([src.css]).then(function (paths){
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});

gulp.task('css_layout', ['clean'], function () {
    return gulp.src(src.sass)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            indentedSyntax: true,
            errLogToConsole: true
        }).on('error', sass.logError))
        .on('error', notify.onError({ message: 'There is a CSS error, please look the console for details'}))
        .pipe(cleanCSS())
        .pipe(postCSS([autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'iOS 7', 'iOS 8', 'ie 11', 'Safari 9'] })]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(src.css));
});

gulp.task('scripts', function() {
    return gulp.src(src.js)
        .pipe(sourcemaps.init())
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(uglify({ mangle: false }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(src.compressJS))
        // .pipe(livereload());
});

gulp.task('watcher', function() {
    gulp.watch([
        "./assets/dev/styles/*.*"
    ], function () {
        gulp.start(['css_layout']);
    });
    gulp.watch([
        './assets/dev/js/*.*'
    ], function () {
        gulp.start(['scripts']);
    });
});

gulp.task('default', ['css_layout', 'scripts']);
gulp.task('build', ['css_layout', 'scripts', 'watcher']);
