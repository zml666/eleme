const colors = require("colors");

const gulp = require("gulp");
const sass = require("gulp-sass");
const webpack = require("webpack-stream");
const rev = require("gulp-rev");
const revCollector = require("gulp-rev-collector");
const gulpSequence = require("gulp-sequence");

//导入配置化模块
const config = require("./config");

// 输出html页面到指定目录
gulp.task("copy:html",()=>{
    return gulp.src(["./dist/rev/**/*.json","./src/**/*.html"])
               .pipe(revCollector())
               .pipe(gulp.dest("./dist"));
})

// 编译sass并输出到指定目录
gulp.task("compile:sass",()=>{
    return gulp.src("./src/css/**/*.scss")
            .pipe(sass({outputStyle:"compressed"}).on('error',sass.logError))
            .pipe(rev())
            .pipe(gulp.dest("./dist/css"))
            .pipe(rev.manifest())
            .pipe(gulp.dest('./dist/rev/css'));
})

// 模块化打包js
gulp.task("package:js",()=>{
    return gulp.src("./src/js/**/*.js")
            .pipe(webpack(config.webpack_config))
            .pipe(rev())
            .pipe(gulp.dest("./dist/js"))
            .pipe(rev.manifest())
            .pipe(gulp.dest('./dist/rev/js'));
})

// 输出静态lib文件
gulp.task("copy:lib",()=>{
    return gulp.src("./src/lib/**/*")
            .pipe(gulp.dest("./dist/lib"));
})


// gulp.task('default',["compile:sass","package:js","copy:lib","copy:html"],()=>{
//     console.log("Building is done......".red);
// })

gulp.task('default', (cb) => {
    gulpSequence(["compile:sass","package:js","copy:lib"], "copy:html")(cb);
    console.log("Building is done......".red);
})