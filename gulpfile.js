var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	stylus = require('gulp-stylus'),
	jshint = require('gulp-jshint');

/////////////////////////////////
//////// javascripts task //////
////////////////////////////////

gulp.task('scripts', function(){
		gulp.src(['public/js/*.js', '!public/js/**/*.min.js'])
		// .pipe(concat('tourist.js'))
		// .pipe(gulp.dest(public/js/bin))
		// .pipe(rename({suffix:'.min'}))
		// .pipe(uglify())
		.pipe(gulp.dest('/public/js/bin'))
		.pipe(reload({stream:true}));
});

/////////////////////////////////
//////// jshint task ///////////
////////////////////////////////

gulp.task('jshint', function(){
   	   gulp.src(['public/js/**/*.js'])
	  .pipe(jshint())
	  .pipe(jshint.reporter('stylish-cool'));
});

/////////////////////////////////	
//////// Stylus task ///////////
////////////////////////////////

gulp.task('stylus', function(){
	gulp.src('public/styles/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('public/styles'))
		.pipe(reload({stream:true}));
});

/////////////////////////////////
//////// HTML task /////////////
////////////////////////////////

gulp.task('html', function(){
	gulp.src('**/*.html')
	.pipe(reload({stream:true}));
});

/////////////////////////////////
//////// BrowserSync task //////
////////////////////////////////

gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir:"."
		}
	});
});

/////////////////////////////////
//////// Watch task ////////////
////////////////////////////////

gulp.task('watch', function(){
		gulp.watch(['public/**/*.styl','**/*.css'], ['stylus']);
		gulp.watch('**/*.html', ['html']);
		gulp.watch('public/**/*.js', ['scripts']);

});

/////////////////////////////////
//////// Default task //////////
////////////////////////////////

gulp.task('default', ['stylus', 'html', 'browser-sync', 'watch']);
HEAD
HEAD

// add scripts back in when done

876e8f902a4b4fc9ab451237286facd90bf11246
915a96fadafe9c1a6d8bca4107bc851613060513
