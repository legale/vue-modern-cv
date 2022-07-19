const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is minified js
  gulp
    .src("docs/js/*.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!
=========================================================
* Vue Modern CV
=========================================================
*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is minified html
  gulp
    .src("docs/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--
      =========================================================
      * Vue Modern CV
      =========================================================
      --!>`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is minified css
  gulp
    .src("docs/css/*.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!
      =========================================================
      * Vue Modern CV
      =========================================================
      */`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
