"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("autoprefixer"); //добавляет автопрефиксы
var server = require("browser-sync"); //обновляет страницу
var plumber = require("gulp-plumber"); //проверяет на ошибки
var postcss = require("gulp-postcss");
var pug = require("gulp-pug");
var cssnano = require("gulp-cssnano"); //минификация CSS
var imagemin = require("gulp-imagemin"); //сжатие картинок
var uglify = require("gulp-uglify");  //сжатие js
var rename = require("gulp-rename");  //переименование файлов
var svgstore = require("gulp-svgstore");  //сборка SVG в спрайт
var svgmin = require("gulp-svgmin");  //сжатие SVG
const webpack = require("webpack-stream");

gulp.task('pug', function buildHTML() {
    return gulp.src('pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
    // Your options in here.
    }))    
    .pipe(gulp.dest("src"))
    //.pipe(gulp.dest("public"))
});

gulp.task("style", function() {
    gulp.src(["src/sass/style.scss"])
    	.pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
	      autoprefixer({
	        browsers: [
	        "last 1 version",
	        "last 2 Chrome versions",
	        "last 2 Firefox versions",
	        "last 2 Opera versions",
	        "last 2 Edge versions"
	      ]})
	    ]))
	    // 
     //    .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("src/css"))
        // 
        // .pipe(server.reload({stream: true}));
});
 
gulp.task("scripts", function() {
    return gulp.src("src/app.js")  
        .pipe(webpack( require('./webpack.config.js')))
        .pipe(gulp.dest("src/js"))
    });

gulp.task("symbols", function() {
    return gulp.src("src/img/svg/sprite/*.svg")
        .pipe(svgmin())
        .pipe(svgstore({
            imlineSvg: true
        }))
        .pipe(rename("symbols.svg"))
        .pipe(gulp.dest("src/img/svg"));
});

/*PUBLIC*/

gulp.task("pugPub", function() {
  return gulp.src(["src/*.html"])
  .pipe(gulp.dest("public"))
}); //перенос HTML в Public

gulp.task("stylePub", function() {
  return gulp.src(["src/style.css"])
  .pipe(cssnano())
  .pipe(gulp.dest("public/css"))
}); //перенос CSS в Public, сжатие


gulp.task("scriptsPub", function() {
  return gulp.src(["src/js/bundle.js"])
  .pipe(cssnano())
  .pipe(gulp.dest("public/js"))
}); //перенос JS в Public

gulp.task("fonts", function() {
  return gulp.src(["src/fonts/*.woff", "src/fonts/*.woff2"])
  .pipe(gulp.dest("public/fonts"))
}); //перенос шрифтов в Public

gulp.task("vect", function() {
  return gulp.src(["src/img/svg/**/*.svg"])
  .pipe(gulp.dest("public/img/svg"))
}); //перенос svg в Public

gulp.task('imgsMin', function() {
    return gulp.src("src/img/*.+(jpg|jpeg|png|gif)")
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 3,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("public/img"))
}); //минимизация картинок и перес в Public

gulp.task("public", function(fn) {
  run(
    "pugPub", 
    "stylePub", 
    "scriptsPub",
    "fonts",
    "vect",
    "imgsMin",
    fn
  );
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "src",
    notify: false,
    open: true,
    ui: false
  });

    gulp.watch("src/**/*.js", ["scripts"]);
    gulp.watch("src/sass/**/*.scss", ["style"]);
    gulp.watch("pug/**/*.pug", ["pug"]);
    gulp.watch("src/img/*.+(jpg|jpeg|png|gif)", ["imgs"]);
    gulp.watch(["src/*.html", "pug/**/*.pug", "src/css/style.css", "src/**/*.js"]).on("change", server.reload);
});