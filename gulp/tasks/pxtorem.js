var gulp = require('gulp');
var postcss = require('gulp-postcss');
var pxtorem = require('postcss-pxtorem');

gulp.task('pxtorem', function() {
  var processors = [
    pxtorem({
      replace: true
    })
  ];

  return gulp
    .src(['build/css/**/*.css'])
    .pipe(postcss(processors))
    .pipe(gulp.dest('build/css'));
});
