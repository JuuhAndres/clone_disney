const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'})) //Comprensão do sass
    .pipe(gulp.dest('./dist/css'));//Pasta de destino dos arquivos comprimidos
}
//-------------------------------------------

function images(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin()) //Comprensão das imagens
    .pipe(gulp.dest('./dist/images'));//Pasta de destino dos arquivos comprimidos
}

exports.default = gulp.parallel(styles,images,scripts);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js',gulp.parallel(scripts))
    //npm run build watch
}