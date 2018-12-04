class Student {
    constructor(name = 'unnamed', cardId = null)  {
        this.name = name;
        this.cardId = cardId;
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Student;