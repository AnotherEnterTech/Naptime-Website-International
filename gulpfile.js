const gulp = require('gulp');
const livereload = require('gulp-livereload');
const notify = require("gulp-notify");
const vueify = require('vueify');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const server = require('./gulp/server.js');
const copy = require('copy');

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

gulp.task('index', (end) => {
    copy('index.html', 'Home', () => {});
    copy('index.html', 'Product', () => {});
    copy('index.html', 'App', () => {});
    copy('index.html', 'About', () => {});
    copy('index.html', 'Tip', end);
});

// watch.
gulp.task('watch', () => {
    livereload.listen();

    gulp.watch([resources.js, resources.vue], ['compile']);
    gulp.watch([resources.asset], ['refresh']);
    gulp.watch('index.html', ['index']);

    server(__dirname);
});

gulp.task('server', () => {
    server(__dirname);
});

// default task.
gulp.task('default', ['compile']);
