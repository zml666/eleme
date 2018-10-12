const colors = require("colors");

const gulp = require("gulp");
const webserver = require("gulp-webserver");
const sass = require("gulp-sass");
const webpack = require("webpack-stream");

const watch = require("gulp-watch");
const del = require("del");

//导入配置化模块
const config = require("./config");

// 输出html页面到指定目录
gulp.task("copy:html",()=>{
    return gulp.src("./src/**/*.html")
               .pipe(gulp.dest("./dev"));
})

// 编译sass并输出到指定目录
gulp.task("compile:sass",()=>{
    return gulp.src("./src/css/**/*.scss")
            .pipe(sass({outputStyle:"compressed"}).on('error',sass.logError))
            .pipe(gulp.dest("./dev/css"));
    /* 
      outputStyle:
        嵌套输出方式 nested
        展开输出方式 expanded 
        紧凑输出方式 compact 
        压缩输出方式 compressed 
    */
})

// 模块化打包js
gulp.task("package:js",()=>{
    return gulp.src("./src/js/**/*.js")
            .pipe(webpack(config.webpack_config))
            .pipe(gulp.dest("./dev/js"))
})

// 输出静态lib文件
gulp.task("copy:lib",()=>{
    return gulp.src("./src/lib/**/*")
            .pipe(gulp.dest("./dev/lib"));
})

// 开启热更新服务器
gulp.task("webserver",()=>{
    return gulp.src("./dev")
            .pipe(webserver(config.server_config));
})

//监听任务
gulp.task("watch",()=>{
    gulp.watch("./src/css/**/*.scss",['compile:sass']);
    // 监听JS   "./src/js/**/*.*"  保证里面html文件改变后也能够打包
    gulp.watch("./src/js/**/*.*",['package:js']);
    gulp.watch("./src/**/*.html",["copy:html"]);

    gulp.watch("./src/lib",["copy:lib"])

    // 处理静态lib目录下文件的变化，包括新增和删除文件
    watch("src/lib",(vinyl)=>{  //路径中不要加./，加上之后经常出错
        if(vinyl.event==='unlink'){  //如果文件被删除了
            let _path = vinyl.history[0].replace("\src","\dev");
            del(_path);  //删除dev中的文件
        }else{
            gulp.start(["copy:lib"]); //执行一次copy:lib任务
        }
    })
})

gulp.task('default',["copy:html","compile:sass","package:js","copy:lib","webserver","watch"],()=>{
    console.log("Everything is done......Begin your work now!".red);
})