var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('html', function () {

	console.log("html e stato modificato!");
});


gulp.task('watch', function() {

	browserSync.init({


		server: {
			baseDir: "app"
		}


	});

	watch('app/index.html', function () {

		browserSync.reload();


	});

	watch('app/assets/styles/**/*.css', function () {

		gulp.start('cssInject');


	});
});

gulp.task('cssInject',['styles'],function(){

	return gulp.src('./app/temp/styles/style.css').
			pipe(browserSync.stream());

});