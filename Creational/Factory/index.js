var userFactory = require('./userFactory');

var alex = userFactory('student', 'Alex Banks', 101);
var eve = userFactory('teacher', 'Eve Porcello', 323, 'math');

console.log( alex.toString() );
console.log( eve.toString() );