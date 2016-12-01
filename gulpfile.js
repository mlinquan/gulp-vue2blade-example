var gulp = require('gulp');
var vue2blade = require('gulp-vue2blade');

gulp.task('vue', function() {
    return gulp.src(['./dist/**/index.html', './src/**/*.vue'])
    .pipe(vue2blade({
        routerView: 'contents',
        basedir: '',
        layout: './src/App.vue',
        nolayout: ['./src/include'],
        bladeLayoutName: 'layouts.balde.php',
        index: './dist/index.html',
        appID: 'app'
    }))
    .pipe(gulp.dest('blade'))
});

/* watch */
gulp.task('watch', function() {
    gulp.watch(['./dist/index.html'], gulp.series('vue'));
});

gulp.task('default', gulp.series('vue', 'watch'));