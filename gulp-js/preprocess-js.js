/**
 * Created by luciano on 03/04/16.
 */

var gulp = require('gulp');
var gutil = require('gulp-util');

var preprocess = require('gulp-preprocess');
var argv = require('yargs').argv;
var rename = require('gulp-rename');

var paths = {
    preprocessJs: ['./resources/js/config.js'],
    preprocessJsDest: './resources/js/'
};


gulp.task('preprocess-js', function() {
    gutil.log('preprocess-js STARTED STARTED CORDOVA_CMDLINE:'+(process.env.CORDOVA_CMDLINE!=undefined)+'  Production:'+ argv.production);
    return gulp.src(paths.preprocessJs)
        .pipe(preprocess({context: {ENVIRONMENT: argv.production ? 'production' : 'development', CORDOVA:(process.env.CORDOVA_CMDLINE!=undefined)}}))
        .pipe(rename({suffix: '-build'}))
        .pipe(gulp.dest(paths.preprocessJsDest))
        .on('end', function() {
            return gutil.log('preprocess-js DONE');
        });
});