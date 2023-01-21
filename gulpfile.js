const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src(['colors.scss', 'transitions.scss'])
        .pipe(sass())
        .pipe(dest('css'))
}

function update() {
    watch(['colors.scss', 'transitions.scss'], buildStyles)
}

exports.default = series(buildStyles, update);