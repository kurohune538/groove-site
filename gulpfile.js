var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('sass', function(){
  gulp.src('scss/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['sass'], function() {
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve', 'watch']);
