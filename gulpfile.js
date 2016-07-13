var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var handlebars = require('gulp-handlebars');

// Static Server + watching scss/html files
gulp.task('serve', ['copy', 'templates'], function() {

    browserSync.init({
      server: {
        baseDir: "build"
      },
      open: false
    });

    gulp.watch(["source/templates/*.hbs", "source/*.html"], ['copy', 'templates']);
    gulp.watch(["build/*.html", "build/templates/*.hbs"]).on('change', browserSync.reload);
});

gulp.task('templates', function() {
  // Assume all partials start with an underscore
  // You could also put them in a folder such as source/templates/partials/*.hbs
  var partials = gulp.src(['source/templates/_*.hbs'])
    .pipe(handlebars())
    .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
      imports: {
        processPartialName: function(fileName) {
          // Strip the extension and the underscore
          // Escape the output with JSON.stringify
          return JSON.stringify(path.basename(fileName, '.js').substr(1));
        }
      }
    }));

  var templates = gulp.src('source/templates/**/[^_]*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MySite.templates',
      noRedeclare: true // Avoid duplicate declarations
    }));

  // Output both the partials and the templates as build/js/templates.js
  return merge(partials, templates)
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('copy', function(){
  gulp.src('node_modules/handlebars/dist/handlebars.runtime.js')
    .pipe(gulp.dest('build/js/'));

  gulp.src('source/index.html')
    .pipe(gulp.dest('build/'));
});

// Default task
gulp.task('default', ['serve']);
