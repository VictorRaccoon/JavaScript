var gulp = require("gulp");
var plumber = require("gulp-plumber");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var rename = require("gulp-rename");

//Source Path
var jsSrc = "./src/js/*.js";

//Dist path
var jsDist = "./js/";
var jsDistName = "scripts.js";

//Minify e Concat Scripts
gulp.task("scripts", () => {
    return gulp.src(jsSrc).pipe(plumber()
                        ).pipe(uglify()
                        ).pipe(concat(jsDistName)
                        ).pipe(gulp.dest(jsDist));
});

gulp.task("watch", () => {
    gulp.watch([jsSrc], ["scripts"]);
});