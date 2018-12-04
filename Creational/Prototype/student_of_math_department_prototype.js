const Student = require('./Student');

const student = new Student();
student.addLesson('math');
student.addLesson('programming');
student.addLesson('design');

module.exports = student;