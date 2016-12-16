var gulp = require('gulp');
var ejs = require("gulp-ejs");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var data = require('./src/data/data.json');
var headers = require('./src/data/headers.json');
var foot = require('./src/data/footer.json');
gulp.task('html', function() {
    gulp.src("./src/tpl/index.ejs")
        .pipe(ejs({
            headers : headers,
            footer: foot,
            data: data
        }, {
            ext: ".html"
        }))
        .pipe(gulp.dest("./index"));
});

gulp.task('img', function() {
   gulp.src('./src/img/*')
       .pipe(gulp.dest('./index/img'))
});

gulp.task('sass', function () {
    gulp.src('./src/css/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('./index/css'));
});

gulp.task('javascript', function() {
   gulp.src("./src/js/*.js")
       .pipe(uglify())
       .pipe(concat("index.js"))
       .pipe(gulp.dest("./index/js"))
});

gulp.task('default', function() {
    gulp.run('javascript');
    gulp.run('img');
    gulp.run('sass');
    gulp.run('html');

});