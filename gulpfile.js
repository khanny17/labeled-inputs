var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function(){
    return gulp.src(['./src/labeled-inputs.js', './src/**/*.js'])
        .pipe(concat('labeled-inputs.js'))
        .pipe(gulp.dest('./dist'));
});
