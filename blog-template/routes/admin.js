
//将express 引进来
let express = require('express');

// 使用 express.Router() 来创建主路由，主路由可以认为是一个中间件
// 主路由下 再创建子路由

// 创建后台主路由 
let admin = express.Router();
//当访问/的时候 执行 后台的/
admin.get('/', (req, res) => {
	res.render('admin/index', {});
});

admin.get('/add', (req, res) => {
	res.render('admin/add', {});
});

//将module 开放出去
module.exports = admin;