var gulp = require('gulp');
var less = require('gulp-less');


//定义一个testless任务，自定义任务名
gulp.task('testless',function(){
	gulp.src('src/less/index.less') //该任务针对的文件
		.pipe(less()) //该任务调用的模块
		.pipe(gulp.dest('src/css')) //将会在src/css下生成css
});

gulp.task('default',['testless']);