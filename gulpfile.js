var gulp = require('gulp');
var to5 = require('gulp-6to5');

gulp.task('6to5', function() {
	return gulp.src(['app.js', 'maths.js'])
		.pipe(to5())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch(['app.js', 'maths.js'], ['6to5']);
});

gulp.task('default', ['6to5', 'watch']);
