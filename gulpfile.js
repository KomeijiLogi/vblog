//引入gulp
const gulp=require('gulp');
const autoprefixer=require('gulp-autoprefixer');
gulp.task('default',['autoprefixer']);
gulp.task('autoprefixer',()=>{               //使用autoprefixer工具对浏览器less自动添加头部
    return gulp.src('./src/assets/*.less')
      .pipe([autoprefixer({ browers:['last 2 versions']})])
      .pipe(gulp.dest('./desc'));
});

