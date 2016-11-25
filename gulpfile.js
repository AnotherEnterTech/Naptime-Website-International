const gulp = require('gulp');
const livereload = require('gulp-livereload');
const notify = require("gulp-notify");
const vueify = require('vueify');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const server = require('./gulp/server.js');

const entryJS = './src/main.js';
const resources = {
    html: '**/*.html',
    asset: './src/assets/*',
    less: '',
    js: './src/**/*.js',
    vue: './src/**/*.vue'
};

// compile js.
gulp.task('compile', () => {
    return browserify(entryJS)
        .transform('babelify')
        .transform('vueify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('static/js'))
        .pipe(livereload())
        .pipe(notify('JS compiled.'));
});

// refresh html.
gulp.task('refresh', () => {
    gulp.src('')
        .pipe(livereload())
        .pipe(notify('Refreshed.'));
});

// watch.
gulp.task('watch', () => {
    livereload.listen();

    gulp.watch([resources.js, resources.vue], ['compile']);
    gulp.watch([resources.html, resources.asset], ['refresh']);

    server(__dirname);
});

// default task.
gulp.task('default', ['compile']);