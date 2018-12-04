const student_of_math_department_prototype = require('./student_of_math_department_prototype');

const alex = student_of_math_department_prototype.clone();
alex.name = 'Alex Banks';
alex.addLesson('foreign language');

const eve = student_of_math_department_prototype.clone();
eve.name = 'Eve Porcello';
eve.addLesson('graphics');

console.log( `${alex.name}: ${alex.lessons}` );
console.log( `${eve.name}: ${eve.lessons}` );
