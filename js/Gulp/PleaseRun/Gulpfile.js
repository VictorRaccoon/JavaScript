var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('build', function() {
    return gulp
            .src(['src/**/*.js'])
            .pipe(uglify())
            .pipe(gulp.dest('build/js'));      
});

gulp.task('watch', function () {
    gulp.watch(["src/**/*.js"], ['build']).on('change', function (e) {
        console.log('Javascrip file ' + e.path + ' has been changed. Compiling.');
    });
});