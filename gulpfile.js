import {src, dest, watch, series} from 'gulp';

import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export function css(done) {
    src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css'))
    done();
}

export function js(done) {
    src('src/js/index.js')
        .pipe(dest('build/js'))
    done();
}

export function svg(done) {
    src('src/images/**/*.svg')
        .pipe(dest('build/images'))
    done();
}

export function dev(done) {
    watch('src/sass/**/*.scss', css)
    watch('src/images/**/*.svg', svg)
    watch('src/js/**/*.js', js)
    done();
}

// export default series(css, svg, js, dev);
export default series(css, svg, js);