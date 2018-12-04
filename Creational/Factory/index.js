const userFactory = require('./userFactory');

const alex = userFactory('student', 'Alex Banks', 101);
const eve = userFactory('teacher', 'Eve Porcello', 323, 'math');

console.log( alex.toString() );
console.log( eve.toString() );