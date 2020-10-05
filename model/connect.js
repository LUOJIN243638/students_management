const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
	.then(() => console.log('database connection sucessful'))
	.catch(() => console.log('database connection failed'))