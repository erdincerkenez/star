const gulp = require('gulp');
const scss = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function style(){
    return gulp.src('./src/scss/**/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./public/**/*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change',browserSync.reload);
}

exports.style = style;
exports.watch = watch;
