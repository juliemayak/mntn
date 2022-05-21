const gulp = require('gulp');

const styles = require('./gulp-tasks/styles');
const tailwind = require('./gulp-tasks/tailwind');
const svg = require('./gulp-tasks/svg');
const zip = require('./gulp-tasks/zip');
const watch = require('./gulp-tasks/watch');
// const w3cValidator = require('./gulp-tasks/w3c-validator');

gulp.task('build', gulp.parallel(styles, tailwind, svg));

gulp.task('production', gulp.series('build'));

gulp.task('zip', gulp.series('production', zip));

// gulp.task('w3c-validator', w3cValidator);

gulp.task('default', gulp.parallel('build', watch));
