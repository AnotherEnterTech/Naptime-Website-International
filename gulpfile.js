const gulp = require('gulp');
const livereload = require('gulp-livereload');
const notify = require("gulp-notify");
const vueify = require('vueify');
const babelify = require('babelify');
const browserify = require('browserify');
var source = require('vinyl-source-stream');

const http = require('http');
const st = require('st');

const resources = {
    less: '',
    js: './src/**/*.js',
    vue: './src/**/*.vue'
}
const entryJS = './src/main.js';

const server = function() {
    http.createServer(
        st({
            path: __dirname,
            index: 'index.html',
            cache: false
        })
    ).listen(8080);
}

// compile js.
gulp.task('compile', function() {
    return browserify(entryJS)
        .transform('babelify')
        .transform('vueify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('static/js'))
        .pipe(livereload())
        .pipe(notify('js compiled.'));
});

// refresh html.
gulp.task('refresh', function() {
    gulp.src('*.html')
        .pipe(livereload())
        .pipe(notify('refreshed.'));
});

// watch.
gulp.task('watch', function() {
    livereload.listen();

    gulp.watch([resources.js, resources.vue], ['compile']);
    gulp.watch('**/*.html', ['refresh']);

    server();
});

// default task.
gulp.task('default', ['compile']);