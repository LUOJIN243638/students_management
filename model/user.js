const mongoose = require('mongoose');
// 创建学生集合规则
const studentsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2, 
		maxlength: 10
	},
	age: {
		type: Number,
		min: 10,
		max: 25
	},
	sex: {
		type: String
	},
	email: String,
	hobbies: [ String ], // 爱好
	collage: String, //所属学院
	enterDate: { //入学日期
		type: Date,
		default: Date.now //如果没有写，这是默认值
	}
});
// 创建学生信息集合：希望在其他模块进行导入，能拿到集合的构造函数
const Student = mongoose.model('Student', studentsSchema);
// 将学生信息集合进行导出：
module.exports = Student;