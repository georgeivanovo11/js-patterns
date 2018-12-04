const Student = require('./Student');
const Teacher = require('./Teacher');

const userFactory = (role, name, cardId, subject) => {
    if (role === 'student') {
        return new Student(name, cardId);
    } else {
        return new Teacher(name, cardId,subject);
    }
}

module.exports = userFactory;
