//请求模块
var gulp = require('gulp');
var sass = require('gulp-sass-china');
var browserSync = require('browser-sync');

//创建任务  编译sass文件
gulp.task('YJsass',function () {

   //查找需要编译的文件
    gulp.src('./src/sass/*.scss')

        //文档流.  参数设置编译后css的格式
        //异步编译,sass编译错误停止编译,跳过下一个操作,直接reload
        .pipe(sass({outputStyle:'compact'}).on('error',sass.logError))

        //文档流.  输出文档的路径
        .pipe(gulp.dest('./src/css/'))

        //监听成功后,利用browser-sync 自动刷新页面
        .pipe(browserSync.reload({stream:true}))
});

//监听文件
// gulp.task('watchSass',function () {
//     gulp.watch('src/sass/test.scss',['testSass'])
// });

//创建任务. 监听文件, 各平台自动同步刷新
gulp.task('server',function () {
    browserSync.init({
        // open:true,
        // server:{
        //     baseDir:'./src'
        // },

        //修改端口
        port:4000,

        //代理 proxy:'http://localhost/E/Web/Test/GitGulpSassTest/src/html/tb.html',
        proxy:'http://localhost/E/Web/Write/YJproject/src/html/login.html',
        // proxy:'http://localhost/E/Web/Write/YJproject/src/php.php',

        //监听文件,
        files:['./src/html/*.html','./src/js/*.js','./src/php/*.php']

    });

    //监听sass文件,有修改时执行编译任务
    gulp.watch('./src/sass/*.scss',['YJsass']);
});