
//引用 express模板
let express = require('express');

let app = express();

app.listen(3000);

app.set('view engine', 'xtpl');

app.set('views', './views');

//设置静态资源的目录
app.use(express.static('./public'));

//路由
// 可以通过路由来区分前台网站  和 后台网站
// 但是 前、后台网站有可以分成若干子路由 

//如何才能将主路由 和 子路由联系起来那？



//调用中间件
// 
let admin = require('./routes/admin');
let home = require('./routes/home');
//当访问/admin 的时候 访问后台主路由
app.use('/admin', admin);

//当访问根的时候 访问前台主路由
app.use('/', home);