const gulp = require('gulp');
const livereload = require('gulp-livereload');
const notify = require("gulp-notify");
const vueify = require('vueify');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const copy = require('copy');
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
        .transform({
            global: true
        }, 'uglifyify')
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
    copy('index.html', 'home', () => {});
    copy('index.html', 'product', () => {});
    copy('index.html', 'app', () => {});
    copy('index.html', 'about', () => {});
    copy('index.html', 'tip', end);
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
