var gulp = require("gulp");
var less = require("gulp-less");

gulp.task('myFirstTask', function() {
	console.log('Привет, я твой первый таск!');
});

gulp.task("default", ["myFirstTask"]);