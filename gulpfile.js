const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'})) //Comprensão do sass
    .pipe(gulp.dest('./dist/css'));//Pasta de destino dos arquivos comprimidos
}

exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles));
    //npm run build watch
}