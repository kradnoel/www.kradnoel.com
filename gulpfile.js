
var gulp = require('gulp'),
	path = require('path'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect');

gulp.task('sass', function() {
    return gulp.src('src/styles/styles.scss')
        .pipe(sass({outputStyle: 'compressed', allowEmpty: 'true'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('owlCarousel', function() {
	var files = ['src/styles/owl.carousel.css', 'src/styles/owl.theme.green.css'];
    return gulp.src(files)
        		.pipe(gulp.dest('dist/'))
        		.pipe(connect.reload());

});

gulp.task('views', function () {
	return gulp.src('src/index.pug')
		.pipe(pug())
		.pipe(gulp.dest('dist/'))
		.pipe(connect.reload());
});

gulp.task('scripts', function() {
	var scriptsSources = ['src/scripts/jquery.js','src/scripts/owl.carousel.js','src/scripts/custom.js'];
	return gulp.src(scriptsSources)
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('dist/'))
		.pipe(connect.reload());
});

gulp.task('fullpage', function() {
	var files = ['node_modules/fullpage.js/dist/fullpage.js', 'node_modules/fullpage.js/dist/fullpage.css'];
    return gulp.src(files)
        		.pipe(gulp.dest('dist/'))
        		.pipe(connect.reload());
});

gulp.task('images', function() {
	var files = ['src/images/icons/*', 'src/images/kradnoel.svg','src/images/portfolio/*'];
	return gulp.src(files)
		.pipe(gulp.dest('dist/'))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['src/styles/*.scss'], gulp.series('sass'));
	gulp.watch(['src/views/*.pug', 'src/index.pug'], gulp.series('views'));
	gulp.watch(['src/scripts/*.js'], gulp.series(['scripts','fullpage']));
});

gulp.task('connect', function() {
  connect.server({
  	root: 'dist',
  	livereload: true
  });
});

gulp.task('build', gulp.series('fullpage', 'owlCarousel', 'sass', 'views', 'scripts','images'))

gulp.task('default', gulp.parallel('build','connect','watch'))
