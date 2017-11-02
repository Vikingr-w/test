//将express 引进来
let express = require('express');

//创建前台主路由
let home = express.Router();

home.get('/', (req, res) => {
	//参数不能加./ 因为home 是名字 
	res.render('home/index', {});
}); 

home.get('/article', (req, res) => {
	res.render('home/article'); 
});
//注册
home.get('/register', (req, res) => {
	res.render('home/register', {});
});
//登录
home.get('/login', (req, res) => {
	res.render('home/login', {});
});
//使用 exports 将主路由暴露出去
module.exports = home; 