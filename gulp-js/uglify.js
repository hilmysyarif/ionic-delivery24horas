/**
 * Created by luciano on 03/04/16.
 */

var gulp = require('gulp');
var gutil = require('gulp-util');

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var argv = require('yargs').argv;

var paths = {
    jsBundle: 'app.bundle.js',
    jsBundleDest: './www/js/bundles/'
};

/* **********************************************************************************
 * Uglify already bundled file
 * **********************************************************************************/
gulp.task('uglify',['build-js','core'], function() {
    var cordova = process.env.CORDOVA_CMDLINE || argv.cordova;
    gutil.log('uglify STARTED CORDOVA_CMDLINE:'+(cordova!=undefined)+'  Production:'+ argv.production);
    if (argv.production) {
        return gulp.src(paths.jsBundleDest+paths.jsBundle)
            .pipe(uglify())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest(paths.jsBundleDest))
            .on('end', function() {
                return gutil.log('uglify DONE');
            });
    }
});