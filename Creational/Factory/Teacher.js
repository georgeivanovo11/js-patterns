class Teacher {
    constructor(name = 'unnamed', cardId = null, subject = null)  {
        this.name = name;
        this.subject = subject;
        this.cardId = cardId;
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Teacher;