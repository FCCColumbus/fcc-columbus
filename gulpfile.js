////////////////////
//     Setup      //
////////////////////

var clientName = 'fccc',
	projectName = clientName.toLowerCase(),
	jsfiles = [
				'src/js/libs/jquery-2.1.4.min.js',
				'src/js/libs/*.js',
				'src/js/base/define.js',
				'src/js/modules/*.js',
				'src/js/modules/**/*.js',
				'src/js/templates/**/*.js',
				'src/js/base/router.js'
			];


////////////////////
//    Modules     //
////////////////////

var gulp = require('gulp'),
	jshint = require ('gulp-jshint'),
	concat = require('gulp-concat'),
	stripDebug = require('gulp-strip-debug'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	notify = require('gulp-notify'),
	gutil = require('gulp-util'),
	rename = require('gulp-rename'),
	size = require('gulp-filesize'),
	autoprefixer = require('autoprefixer'),
	postCss = require('gulp-postcss'),
	mqPacker = require('css-mqpacker'),
	pxToRem = require('postcss-pxtorem'),
	sourceMaps = require('gulp-sourcemaps'),
	doiuse = require('doiuse'),
	cssNano = require('gulp-cssnano'),
	browserSync = require('browser-sync').create(),
	shell = require('gulp-shell'),
	filter = require('gulp-filter'),
	watch = require('gulp-watch'),
	cacheBuster = require('postcss-cachebuster'),
	mkdirp = require('mkdirp'),
	gitStatus = require('git-rev-sync'),
	fs = require("fs"),
	git_branch = '';

////////////////////
//     Tasks      //
////////////////////

    var devProcessors = [
	        autoprefixer(),
	        pxToRem({rootValue: 16, replace: true, mediaQuery: true}),
	        cacheBuster({cssPath: '/assets', type:'mtime'})
    	],
    	prodProcessors = [
    		pxToRem({rootValue: 16, replace: true, mediaQuery: true}),
	        cacheBuster({cssPath: '/assets', type:'mtime'})
    	];

////////////////////
//       JS       //
////////////////////

gulp.task('js:hint', function(){
	gutil.log(gutil.colors.blue('--> Validating JS '));
	gulp.src(['src/js/base/*.js', 'src/js/modules/*.js'])
 		.pipe(jshint())
		.pipe(notify(function(file){
			if (file.jshint.success) {
				return false;
			}
			return file.relative + " has errors!";
		}))
		.pipe(jshint.reporter('jshint-stylish', { verbose: true }));
});

gulp.task('js:concat', ['git_check'], function(){
	var environment = 'development';
	console.log("branch: " + git_branch);

	if (git_branch === "master") {
		environment = "production";
	} else if (git_branch === "staging"){
		environment = "staging";
	}
	gutil.log(gutil.colors.blue('--> Concatenating JS '));
	gulp.src(jsfiles)
		.pipe(concat(projectName + '.min.js'))
		.pipe(gulp.dest('assets/'))
		.pipe(size())
	    .pipe(browserSync.stream())
	    .pipe(notify({ title: clientName + ' JS', message: 'Browser Refreshed' }));
});

gulp.task('js:uglify', ['git_check'], function(){
	var environment = 'development';
	console.log("branch: " + git_branch);

	if (git_branch === "master") {
		environment = "production";
	} else if (git_branch === "staging"){
		environment = "staging";
	}

	gutil.log(gutil.colors.blue('--> Uglifying JS '));
	gulp.src(jsfiles)
		.pipe(concat(projectName + '.min.js'))
		.pipe(stripDebug())
		.pipe(uglify())
		.pipe(gulp.dest('assets/'))
		.pipe(size())
	    .pipe(notify({ title: clientName + ' JS', message: 'Uglified' }));
});

////////////////////
//       CSS      //
////////////////////

gulp.task('css:postsass', ['git_check'], function(){
	var environment = 'development';
	console.log("branch: " + git_branch);
	if (git_branch == "master") {
		environment = "production";
	} else if (git_branch == "staging"){
		environment = "staging";
	}

	gutil.log(gutil.colors.blue('--> Compiling CSS Stuffs '));
	gulp.src('src/css/scss/*.scss')
		.pipe(sourceMaps.init())
		.pipe(sass().on('error', function(err){
			gutil.log(gutil.colors.bold.white.bgRed('\n \n [SASS] ERROR \n'));
			console.error('', err.message);
			return notify({
				title: 'Sass Error',
				message: 'Error on line ' + err.line + ' of ' + err.file
			}).write(err);
		}))
		.pipe(postCss(devProcessors))
		.pipe(size())
		.pipe(sourceMaps.write())
		.pipe(rename(projectName + '.min.css'))
		.pipe(gulp.dest('assets/'))
		.pipe(browserSync.stream())
		.pipe(notify({ title: clientName + ' CSS', message: 'CSS Refreshed' }));
});

gulp.task('css:post_build', ['git_check'], function(){
	var environment = 'development';
	console.log("branch: " + git_branch);
	
	if (git_branch == "master") {
		environment = "production";
	} else if (git_branch == "staging"){
		environment = "staging";
	}

	gutil.log(gutil.colors.blue('--> Making CSS Stuffs Smaller '));
	gulp.src('src/css/scss/*.scss')
		.pipe(sass().on('error', function(err){
			gutil.log(gutil.colors.bold.white.bgRed('\n \n [SASS] ERROR \n'));
			console.error('', err.message);
			return notify({
				title: 'Sass Error',
				message: 'Error on line ' + err.line + ' of ' + err.file
			}).write(err);
		}))
		.pipe(postCss(prodProcessors))
		.pipe(cssNano({autoprefixer: { add: true }, zindex: false}))
		.pipe(rename(projectName + '.min.css'))
		.pipe(size())
		.pipe(gulp.dest('assets/'))
		.pipe(notify({ title: clientName + ' CSS', message: 'CSS Refreshed' }));
});

var watchSrc = ['assets/**/*', '!assets/*.js', '!assets/*.css', 'layout/**/*.*', 'snippets/**/*.*', 'sections/**/*.*', 'templates/**/*.*', '/*', 'index.html'];

gulp.task('git_check', function(){
	var current_branch = gitStatus.branch();
	console.log(current_branch);

	git_branch = current_branch;
	return current_branch;
	
});

////////////////////
//      HTML      //
////////////////////

gulp.task('bs:reload', function () {
    browserSync.reload();
    gutil.log(gutil.colors.green('HTML Refreshed'));
});

gulp.task('browser-sync', function(){
	browserSync.init({
		port: 4000,
		injectChanges: true,
		server: {
			baseDir: './'
		},
		// Here you can disable/enable each feature individually
		ghostMode: {
		    clicks: true, //sync all devices under the same network :) @JW
		    forms: true,
		    scroll: true
		},
		// Or switch them all off in one go
		ghostMode: true,
		open: true
	});
});

////////////////////
// Coupled Tasks  //
////////////////////

gulp.task('build', ['git_check', 'js:uglify', 'css:post_build'], function(){

	var environment = 'development';
	console.log("branch: " + git_branch);

	if (git_branch === "master") {
		environment = "production";
	} else if (git_branch === "staging"){
		environment = "staging";
	}

	gulp.src([projectName + '.min.css', projectName + '.min.js']);

	gulp.src('gulpfile.js').pipe(notify({
		title: 'Build Scripts',
		message: 'Finished!'
	}));
});

gulp.task('default', ['git_check','js:hint','js:concat','css:postsass', 'browser-sync'], function() {
	gulp.watch('src/js/**/*.js', ['git_check', 'js:hint', 'js:concat']);
	gulp.watch('src/css/scss/**/*.scss', ['git_check', 'css:postsass']);
	gulp.watch(watchSrc, ['git_check', 'bs:reload']);
});