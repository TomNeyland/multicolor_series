'use strict';

var gulp = require('gulp');
var wrap = require('gulp-wrap-umd');


gulp.task('js', function() {
    return gulp.src('js/multicolor_series.js')
        .pipe(wrap({
            deps: [{
                name: 'highcharts',
                paramName: 'Highcharts',
                globalName: 'Highcharts'
            }]
        }))
        .pipe(gulp.dest('dist/'));
});
