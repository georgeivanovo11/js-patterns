class Student {

    constructor(name='unnamed') {
        this.name = name;
        this.lessons = [];
    }

    name(value) {
        this.name = value;
    }

    addLesson(item) {
        this.lessons.push(item);
    }

    clone() {
        const proto = Object.getPrototypeOf(this);
        const cloned = Object.create(proto);

        cloned.name = this.name;
        cloned.lessons = [...this.lessons];

        return cloned;
    }

}

module.exports = Student;
